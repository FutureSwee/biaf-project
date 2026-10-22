<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json; charset=utf-8');

// --- CORS: only needed when React runs on a different origin (dev without the Vite proxy).
$allowedOrigins = ['http://localhost:5173', 'https://biaf.co.za', 'https://www.biaf.co.za'];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: $origin");
    header('Vary: Origin');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
}

$method = $_SERVER['REQUEST_METHOD'] ?? '';
if ($method === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($method !== 'POST') {
    respond(405, ['success' => false, 'error' => 'Method not allowed.']);
}

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

// --- Tiny .env loader (backend/.env). Keep that file out of Git and out of the web root.
function loadEnv(string $path): array
{
    $vars = [];
    if (!is_readable($path)) {
        return $vars;
    }
    foreach (file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $line) {
        $line = trim($line);
        if ($line === '' || $line[0] === '#' || !str_contains($line, '=')) {
            continue;
        }
        [$key, $value] = explode('=', $line, 2);
        $vars[trim($key)] = trim($value, " \t\"'");
    }
    return $vars;
}

$env = loadEnv(__DIR__ . '/../.env');

// --- Read input (JSON from fetch, or normal form post)
$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    $input = $_POST;
}

// Honeypot: real visitors never see this field. Pretend success so bots move on.
if (!empty($input['website'] ?? '')) {
    respond(200, ['success' => true]);
}

// --- Validate + clean
$name    = trim((string)($input['name'] ?? ''));
$email   = trim((string)($input['email'] ?? ''));
$message = trim((string)($input['message'] ?? ''));

$name = preg_replace('/[\r\n\t]+/', ' ', $name);   // no header injection via the name

if ($name === '' || mb_strlen($name) > 100) {
    respond(422, ['success' => false, 'error' => 'Please enter your name.']);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 254) {
    respond(422, ['success' => false, 'error' => 'Please enter a valid email address.']);
}
if (mb_strlen($message) < 5 || mb_strlen($message) > 5000) {
    respond(422, ['success' => false, 'error' => 'Please enter a message (5–5000 characters).']);
}

// --- Send
require __DIR__ . '/../vendor/autoload.php';

$mail = new PHPMailer(true);
try {
    $port = (int)($env['SMTP_PORT'] ?? 587);

    $mail->isSMTP();
    $mail->Host       = $env['SMTP_HOST'] ?? '';
    $mail->SMTPAuth   = true;
    $mail->Username   = $env['SMTP_USER'] ?? '';
    $mail->Password   = $env['SMTP_PASS'] ?? '';
    $mail->Port       = $port;
    $mail->SMTPSecure = $port === 465 ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($env['SMTP_USER'] ?? '', 'BIAF Website');
    $mail->addAddress($env['MAIL_TO'] ?? ($env['SMTP_USER'] ?? ''));
    $mail->addReplyTo($email, $name);

    $mail->isHTML(false);
    $mail->Subject = 'New website enquiry from ' . $name;
    $mail->Body    = "Name: {$name}\nEmail: {$email}\n\nMessage:\n{$message}\n";

    $mail->send();
    respond(200, ['success' => true]);
} catch (Exception $e) {
    error_log('BIAF contact form mail error: ' . $mail->ErrorInfo);
    respond(500, ['success' => false, 'error' => 'We could not send your message right now. Please email us directly.']);
}
