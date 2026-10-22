import React, { useEffect, useState } from 'react';
import './navbar.css';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Associates', href: '#associates' },
  { label: 'Contact', href: '#contact' },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="8 7 17 7 17 16" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Transparent over the hero, solid once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`biaf-header ${scrolled || open ? 'solid' : ''}`}>
      <nav className="biaf-navbar">
        <div className="biaf-container nav-content">
          <a href="#top" className="brand-logo" onClick={close}>
            <span className="brand-badge">BI</span>
            <span className="brand-text">
              <span className="brand-title">BLACK INTELLECT</span>
              <span className="brand-subtitle">Audit · Finance · Fraud Risk</span>
            </span>
          </a>

          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="btn-consultation">
              Book a consultation
              <ArrowIcon />
            </a>
            <button
              type="button"
              className={`mobile-toggle-btn ${open ? 'active' : ''}`}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-drawer ${open ? 'open' : ''}`}>
        <ul className="mobile-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={close}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-cta-box">
          <a href="#contact" className="btn-consultation block" onClick={close}>
            Book a consultation
            <ArrowIcon />
          </a>
          <a href="tel:0120230382" className="mobile-phone-link">
            Call us: 012 023 0382
          </a>
        </div>
      </div>
    </header>
  );
}