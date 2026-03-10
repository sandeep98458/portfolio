import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { scrollToSection } from '../utils/scrollNav';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Skills', id: 'skills' },
        { name: 'Blog', id: 'blog' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="/" className="footer-logo" onClick={(e) => scrollToSection('home', e)}>
                            <span className="footer-logo-qa">QA</span><span className="footer-logo-dot">.</span>Portfolio
                        </a>
                        <p className="footer-tagline">
                            Ensuring quality, reliability, and user satisfaction — one release at a time.
                        </p>
                    </div>

                    <div className="footer-links-row">
                        {links.map((link) => (
                            <a
                                key={link.id}
                                href={`/${link.id}`}
                                onClick={(e) => scrollToSection(link.id, e)}
                            >
                                {link.name}
                            </a>
                        ))}
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
