import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { scrollToSection } from '../utils/scrollNav';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section[id]');
            let current = 'home';
            sections.forEach(section => {
                const top = section.offsetTop - 120;
                if (window.scrollY >= top) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);

            // Update URL based on current section
            const path = current === 'home' ? '/' : `/${current}`;
            if (window.location.pathname !== path) {
                window.history.replaceState(null, '', path);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle initial page load — scroll to section based on URL path
    useEffect(() => {
        const path = window.location.pathname.replace('/', '');
        if (path) {
            setTimeout(() => {
                const el = document.getElementById(path);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 300);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest) return;
            if (
                isMenuOpen &&
                !e.target.closest('.mobile-nav') &&
                !e.target.closest('.mobile-toggle') &&
                !e.target.closest('.theme-toggle')
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Projects', id: 'projects' },
        { name: 'Bug Stories', id: 'bug-stories' },
        { name: 'Skills', id: 'skills' },
        { name: 'Blog', id: 'blog' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <a
                    href="/"
                    className="logo"
                    onClick={(e) => scrollToSection('home', e)}
                >
                    <span className="logo-qa">QA</span><span className="logo-dot">.</span>Portfolio
                </a>

                <nav className="desktop-nav">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={`/${link.id}`}
                                    className={activeSection === link.id ? 'nav-active' : ''}
                                    onClick={(e) => scrollToSection(link.id, e)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={`/${link.id}`}
                                    onClick={(e) => { scrollToSection(link.id, e); setIsMenuOpen(false); }}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
