import React, { useEffect, useRef, useState } from 'react';
import './section.css';
import './associates.css';
import thabiLogo from '../assets/Thabis-image.png';
import makaliLogo from '../assets/makali-group.png';
import saibaLogo from '../assets/Saiba.png';
import saitLogo from '../assets/Sait.png';
import acfeLogo from '../assets/ACFE.jpeg';
import saicaLogo from '../assets/SAICA.png';
import { associates, associations, sections } from '../data/siteData';

// Same order as `associates` in siteData.js
const logos = [thabiLogo, makaliLogo];

// Keyed by `short` in `associations` in siteData.js
const badgeLogos = {
  SAIBA: saibaLogo,
  SAIT: saitLogo,
  ACFE: acfeLogo,
  SAICA: saicaLogo,
};

// Adds `is-visible` once the element scrolls into view
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Associates() {
  const [badgesRef, badgesVisible] = useReveal();

  return (
    <>
      <section id="associates" className="section section-light">
        <div className="biaf-container">
          <span className="section-eyebrow">{sections.associates.eyebrow}</span>
          <h2 className="section-title associates-title">{sections.associates.title}</h2>

          <div className="associates-grid">
            {associates.map((a, i) => (
              <article className="associate-card" key={a.name}>
                <div className="associate-logo">
                  <img src={logos[i]} alt={`${a.name} logo`} />
                </div>
                <h3>{a.name}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="associations" className="section associations">
        <div className="associations-glow" aria-hidden="true" />
        <div className="biaf-container">
          <div className="associations-head">
            <span className="section-eyebrow">Professional bodies</span>
            <h2 className="section-title">Associations</h2>
            <p className="associations-sub">
              Member-aligned with the leading institutes of the accounting, tax and
              forensic professions.
            </p>
          </div>

          <div
            ref={badgesRef}
            className={`associations-grid${badgesVisible ? ' is-visible' : ''}`}
          >
            {associations.map((a, i) => (
              <article
                className="association"
                key={a.short}
                style={{ '--delay': `${i * 120}ms` }}
              >
                <div className="association-badge">
                  <div className="association-badge-inner">
                    <img
                      src={badgeLogos[a.short]}
                      alt={`${a.short} logo`}
                      className={`association-logo association-logo-${a.short.toLowerCase()}`}
                    />
                  </div>
                </div>
                <h3>{a.short}</h3>
                <p>{a.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}