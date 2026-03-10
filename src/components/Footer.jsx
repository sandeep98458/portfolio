import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="footer-logo">
                            <span className="footer-logo-qa">QA</span><span className="footer-logo-dot">.</span>Portfolio
                        </a>
                        <p className="footer-tagline">
                            Ensuring quality, reliability, and user satisfaction — one release at a time.
                        </p>
                    </div>

                    <div className="footer-links-row">
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#skills">Skills</a>
                        <a href="#blog">Blog</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-social">
                        <a href="https://github.com/sandeep-b-belaki" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/sandeep-belaki-490219187/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={18} />
                        </a>
                        <a href="mailto:sandeepbelaki@gmail.com" aria-label="Email">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {currentYear} Sandeep B Belaki. All rights reserved.
                    </p>
                    <p className="footer-built">
                        Designed & built by Sandeep B Belaki
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
