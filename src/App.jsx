import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('portfolio-theme', next);
      return next;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`app ${theme === 'light' ? 'light' : ''}`}>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="section-separator" />
        <About />
        <div className="section-separator" />
        <Experience />
        <div className="section-separator" />
        <Education />
        <div className="section-separator" />
        <Certificates />
        <div className="section-separator" />
        <Projects />
        <div className="section-separator" />
        <Tools />
        <div className="section-separator" />
        <Skills />
        <div className="section-separator" />
        <Testimonials />
        <div className="section-separator" />
        <Blog />
        <div className="section-separator" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
