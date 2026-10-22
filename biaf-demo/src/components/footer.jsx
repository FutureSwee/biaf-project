import React from 'react';
import './footer.css';
import { contact, footer } from '../data/siteData';

function BadgeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="biaf-footer">
      <div className="biaf-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              <span className="brand-badge">BI</span>
              <span className="brand-text">
                <span className="brand-title">BLACK INTELLECT</span>
                <span className="brand-subtitle">Audit · Finance · Fraud Risk</span>
              </span>
            </a>
            <p>{footer.blurb}</p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              {footer.explore.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {footer.services.map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              {contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li><a href={contact.phoneHref}>{contact.phone}</a></li>
              <li><a href={contact.emailHref}>{contact.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{footer.copyright}</span>
          <span className="footer-member">
            <BadgeIcon />
            {footer.membership}
          </span>
        </div>
      </div>
    </footer>
  );
}