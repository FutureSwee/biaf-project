import React from 'react';
import './hero.css';
import heroImg from '../assets/hero.jpeg';
import { hero, stats } from '../data/siteData';

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay" />
      <div className="biaf-container hero-inner">
        <span className="hero-badge">{hero.badge}</span>

        <h1 className="hero-title">
          {hero.titleLine1}
          <span className="hero-title-accent">{hero.titleLine2}</span>
        </h1>

        <p className="hero-text">{hero.text}</p>

        <div className="hero-actions">
          <a href={hero.primaryCta.href} className="btn-primary">
            {hero.primaryCta.label}
            <span aria-hidden="true"> →</span>
          </a>
          <a href={hero.secondaryCta.href} className="btn-ghost">
            {hero.secondaryCta.label}
          </a>
        </div>

        <dl className="hero-stats">
          {stats.map((s) => (
            <div className="hero-stat" key={s.label}>
              <dt>{s.label}</dt>
              <dd className={s.accent ? 'accent' : ''}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}