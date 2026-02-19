import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Certifications', href: '#certificates' },
        { name: 'Projects', href: '#projects' },
        { name: 'Tools', href: '#tools' },
        { name: 'Skills', href: '#skills' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

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

                    <nav className="footer-nav">
                        <h4 className="footer-nav-title">Quick Navigation</h4>
                        <ul>
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <a href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="footer-contact-info">
                        <h4 className="footer-nav-title">Get In Touch</h4>
                        <div className="footer-contact-items">
                            <a href="mailto:sandeepbelaki@gmail.com" className="footer-contact-item">
                                <Mail size={15} />
                                sandeepbelaki@gmail.com
                            </a>
                            <a href="https://github.com/sandeep-b-belaki" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                                <Github size={15} />
                                github.com/sandeep-b-belaki
                            </a>
                            <a href="https://www.linkedin.com/in/sandeep-belaki-490219187/" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                                <Linkedin size={15} />
                                linkedin.com/in/sandeep-belaki
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Sandeep B Belaki. All rights reserved.
                    </p>
                    <p className="footer-built">
                        Designed &amp; Built with <Heart size={13} fill="currentColor" className="heart-icon" /> using React &amp; Vite
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
