import React, { useState } from 'react';
import './section.css';
import './contact.css';
import { contact, sections } from '../data/siteData';

// Web3Forms access key. It is safe to be public: it can only send messages
// to the inbox it was created for. Swap it for a key tied to info@biaf.co.za
// when the demo is over.
const WEB3FORMS_KEY = '499d5a40-0da9-4913-96b1-99859f7d919d';

const icon = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const MapPin = () => (
  <svg {...icon}>
    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const Phone = () => (
  <svg {...icon}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const Mail = () => (
  <svg {...icon}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const Arrow = () => (
  <svg {...icon} width="16" height="16">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const empty = { name: '', email: '', message: '', website: '' }; // `website` is a honeypot

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    // Honeypot filled in: it's a bot. Pretend it worked and send nothing.
    if (form.website) {
      setStatus('success');
      setForm(empty);
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New website enquiry from ${form.name}`,
          from_name: 'BIAF Website',
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      setForm(empty);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  };

  return (
    <section id="contact" className="section section-tint">
      <div className="biaf-container contact-grid">
        <div className="contact-info">
          <span className="section-eyebrow">{sections.contact.eyebrow}</span>
          <h2 className="section-title">{sections.contact.title}</h2>

          <ul className="contact-list">
            <li>
              <span className="contact-icon"><MapPin /></span>
              <div>
                <strong>Address</strong>
                <span>{contact.address}</span>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Phone /></span>
              <div>
                <strong>Telephone</strong>
                <a href={contact.phoneHref}>{contact.phone}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon"><Mail /></span>
              <div>
                <strong>Email</strong>
                <a href={contact.emailHref}>{contact.email}</a>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-card" onSubmit={onSubmit} noValidate={false}>
          <h3>Drop us a message</h3>

          <div className="form-row">
            <label>
              <span>Name and surname</span>
              <input type="text" name="name" value={form.name} onChange={onChange} required maxLength={100} autoComplete="name" />
            </label>
            <label>
              <span>Email address</span>
              <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.co.za" required autoComplete="email" />
            </label>
          </div>

          <label>
            <span>Message</span>
            <textarea name="message" rows="5" value={form.message} onChange={onChange} required minLength={5} maxLength={5000} />
          </label>

          {/* Honeypot: hidden from people, bots fill it in */}
          <input type="text" name="website" value={form.website} onChange={onChange} className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <button type="submit" className="btn-send" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
            {status !== 'sending' && <Arrow />}
          </button>

          <p className={`form-status ${status}`} role="status" aria-live="polite">
            {status === 'success' && 'Thank you — your message has been sent. We’ll be in touch shortly.'}
            {status === 'error' && error}
          </p>
        </form>
      </div>
    </section>
  );
}