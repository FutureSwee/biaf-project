import React, { useEffect } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import Associates from './components/associates';
import Contact from './components/contact';
import Footer from './components/footer';

const pageTitles = {
  top: 'Home',
  about: 'About',
  services: 'Services',
  associates: 'Associates',
  contact: 'Contact us',
};

export default function App() {
  useEffect(() => {
    const updateTitle = () => {
      const section = window.location.hash.slice(1);
      document.title = `BIAF | ${pageTitles[section] || 'Home'}`;
    };

    updateTitle();
    window.addEventListener('hashchange', updateTitle);
    return () => window.removeEventListener('hashchange', updateTitle);
  }, []);

  return (
    <div className="app-wrapper" id="top">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Associates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}