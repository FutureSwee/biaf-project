import React from 'react';
import './section.css';
import './about.css';
import aboutImg from '../assets/about.jpeg';
import { about, sections } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="section section-light">
      <div className="biaf-container about-grid">
        <div className="about-media">
          <img src={aboutImg} alt="Black Intellect advisors reviewing financial data" />
          <div className="about-badge">
            <strong>{about.badge.title}</strong>
            <span>{about.badge.text}</span>
          </div>
        </div>

        <div className="about-copy">
          <span className="section-eyebrow">{sections.about.eyebrow}</span>
          <h2 className="section-title">{sections.about.title}</h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <blockquote className="about-quote">“{about.quote}”</blockquote>
        </div>
      </div>
    </section>
  );
}