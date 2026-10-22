// All website copy lives here, taken from BLACK_INTELLECT_WEBSITE_DATA.pptx.
// Components only render this data, so text edits happen in one place.

export const hero = {
  badge: 'Est. 2018 · 100% Black-owned · Centurion, Gauteng',
  titleLine1: 'Financial clarity.',
  titleLine2: 'Forensic precision.',
  text:
    'Audit, tax and finance services for private entities and SMEs — alongside forensic, risk and claims administration tailored for medical practices.',
  primaryCta: { label: 'Explore our services', href: '#services' },
  secondaryCta: { label: 'Talk to an advisor', href: '#contact' },
};

export const stats = [
  { label: 'Established', value: '2018' },
  { label: 'Black-owned', value: '100%' },
  { label: 'Service pillars', value: '3' },
  { label: 'HQ — National footprint', value: 'Gauteng', accent: true },
];

export const sections = {
  about: { eyebrow: 'About us', title: 'Intelligence, systems and support — with integrity.' },
  services: { eyebrow: 'Our services', title: 'Three pillars, one trusted partner.' },
  breakdown: { eyebrow: 'Breakdown of services', title: 'Exactly how we protect and grow your business.' },
  associates: { eyebrow: 'Our associates', title: 'A network of specialist expertise.' },
  contact: { eyebrow: 'Contact us', title: "Let's talk about your business." },
};

export const about = {
  badge: { title: 'Since 2018', text: 'A long-term, trusted partner' },
  paragraphs: [
    'Black Intellect Audit, Finance and Fraud Risk Management Inc. (BIAF) is a 100% black-owned professional consulting firm headquartered in Gauteng, South Africa. Since 2018 we have delivered audit, tax and finance services to private entities and SMEs, alongside forensic, risk and claims administration for private and public medical practices.',
    'With a growing national footprint and a recognised commitment to innovation — including proprietary claims and risk analysis systems — we position ourselves as a long-term, trusted and reliable partner.',
  ],
  quote:
    'Empowering businesses with the confidence to operate with integrity and financial clarity.',
};

// Order matches the mockup (differs from the deck)
export const pillars = [
  {
    icon: 'stethoscope',
    title: 'Medical Aid Claims',
    desc: 'End-to-end claims administration for private and public medical practices, built on proprietary risk analysis.',
    items: [
      'Comprehensive claims submission & processing',
      'Medical aid billing compliance',
      'Real-time risk analysis of claims to prevent disputes',
    ],
  },
  {
    icon: 'shield',
    title: 'Risk Management',
    desc: 'Fraud risk and compliance protection for GPs, pharmacies, psychologists and specialists.',
    items: [
      'Fraud risk assessment for healthcare providers',
      'Compliance advisory for claims & billing systems',
      'Dispute resolution & negotiations with medical aids',
      'Reinstatement & recovery of frozen or suspended accounts',
    ],
  },
  {
    icon: 'calculator',
    title: 'Financial & Bookkeeping',
    desc: 'Precise, compliant financial management that keeps your business positioned for growth.',
    items: [
      'Monthly & annual bookkeeping',
      'Company asset evaluation',
      'SME bookkeeping & payroll',
      'SARS tax / VAT compliance',
      'Financial reporting',
      'Risk assessment & planning',
    ],
  },
];

export const breakdown = [
  {
    tab: 'Financial & Bookkeeping',
    heading: 'Strengthen your financial foundation with precision and clarity.',
    intro:
      'Our bookkeeping and financial management solutions are designed to keep your business compliant, transparent, and strategically positioned for growth. Whether you’re a corporation, government institution, or private practice, we ensure your numbers tell a story of stability and success.',
    items: [
      { name: 'Monthly & Annual Bookkeeping', desc: 'Accurate, timely bookkeeping that keeps your operations smooth and compliant' },
      { name: 'Preparation of Financial Statements', desc: 'Clear, detailed reporting to provide actionable insights into performance' },
      { name: 'General Ledger & Journal Management', desc: 'Streamlined processes that ensure transparency and accountability' },
      { name: 'Company Asset Evaluation', desc: 'Professional assessments to support strategic decisions and safeguard value' },
    ],
  },
  {
    tab: 'Medical Aid Advisory',
    heading: 'Navigate complex medical aid systems with confidence.',
    intro:
      'We provide specialized advisory services that empower healthcare providers, practices, and institutions to stay compliant, financially stable, and operationally efficient. Our solutions protect against risks, disputes, and inefficiencies — ensuring your practice thrives in a challenging environment.',
    items: [
      { name: 'Negotiation of AOD / Payment Terms', desc: 'Securing fair, sustainable agreements with medical aids' },
      { name: 'Risk Assessments for Healthcare Practices', desc: 'Identifying vulnerabilities and strengthening compliance' },
      { name: 'Analysis of Healthcare Claims', desc: 'Optimizing reimbursements and ensuring submission accuracy' },
      { name: 'Representation in Scheme Investigations', desc: 'Protecting provider interests with professional advocacy' },
      { name: 'Rehabilitation of Providers (Pre/Post Investigations)', desc: 'Restoring credibility and compliance after disputes' },
      { name: 'Medicine Audits', desc: 'Ensuring regulatory compliance and preventing fraud or misuse' },
      { name: 'Restructuring of Healthcare Practices', desc: 'Streamlining claims and administration for efficiency' },
      { name: 'Claims Administration Services', desc: 'End-to-end management that enhances speed, accuracy, and compliance' },
    ],
  },
  {
    tab: 'Fraud Risk & Forensics',
    heading: 'Safeguard your organization against misconduct and fraud.',
    intro:
      'Our proactive risk management and forensic solutions are designed to protect assets, strengthen compliance, and preserve reputations. With tailored frameworks and investigative expertise, we help organizations prevent, detect, and respond to fraud with confidence.',
    items: [
      { name: 'Fraud Risk Management Frameworks', desc: 'Tailored systems to prevent and detect fraud' },
      { name: 'Internal Controls & Policy Development', desc: 'Robust policies that safeguard operations' },
      { name: 'Forensic Investigations', desc: 'Uncovering facts, quantifying losses, and supporting legal processes' },
      { name: 'Ongoing Monitoring & Compliance Support', desc: 'Continuous oversight to preserve assets and reputation' },
    ],
  },
];

export const associates = [
  {
    name: 'Thabi Consulting',
    text:
      'A firm of Registered Auditors, Internal and IT Auditors, formally registered with SAICA, the Institute of Internal Auditors (IIA), the Association of Certified Fraud Examiners (ACFE) and ISACA. 100% black-owned, specialising in statutory, internal and IT audits.',
  },
  {
    name: 'ZA Makali Group (Pty) Ltd',
    text:
      'Specialists in fraud risk management services, with formal relationships with other forensic experts who assist — and remain part of the team — on a project basis.',
  },
];

export const associations = [
  { short: 'SAIBA', name: 'Southern African Institute for Business Accountants' },
  { short: 'SAIT', name: 'South African Institute of Taxation' },
  { short: 'ACFE', name: 'Association of Certified Fraud Examiners' },
  { short: 'SAICA', name: 'South African Institute of Chartered Accountants' },
];

export const contact = {
  address: '80 Lyttelton Street, Clubview, Centurion',
  addressLines: ['80 Lyttelton Street', 'Clubview, Centurion'],
  phone: '012 023 0382',
  phoneHref: 'tel:0120230382',
  email: 'Info@biaf.co.za',
  emailHref: 'mailto:Info@biaf.co.za',
};

export const footer = {
  blurb:
    'Black Intellect Audit, Finance and Fraud Risk Management Inc. — a 100% black-owned professional consulting firm serving South African businesses and medical practices since 2018.',
  explore: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Associates', href: '#associates' },
    { label: 'Contact', href: '#contact' },
  ],
  services: ['Medical Aid Claims', 'Risk Management', 'Financial & Bookkeeping'],
  copyright: '© 2026 Black Intellect (BIAF). All rights reserved.',
  membership: 'Member-aligned with SAIBA & SAIT',
};