import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, ArrowRight, Copy, Check } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = React.useState(false);
    const [copiedPhone, setCopiedPhone] = React.useState(false);
    const email = 'sandeepbelaki@gmail.com';
    const phone = '+91 9380419838';

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const copyPhone = () => {
        navigator.clipboard.writeText(phone);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    className="contact-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="contact-left">
                        <span className="section-eyebrow">Contact</span>
                        <h2 className="contact-heading">Let's work together</h2>
                        <p className="contact-text">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                        <motion.a
                            href={`mailto:${email}`}
                            className="btn btn-primary contact-cta"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Say Hello <ArrowRight size={17} />
                        </motion.a>
                    </div>

                    <div className="contact-right">
                        <div className="contact-card">
                            <div className="contact-row">
                                <Mail size={18} className="contact-row-icon" />
                                <a href={`mailto:${email}`} className="contact-link">{email}</a>
                                <button
                                    className={`copy-btn ${copiedEmail ? 'copied' : ''}`}
                                    onClick={copyEmail}
                                    aria-label="Copy email"
                                >
                                    {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                                </button>
                            </div>

                            <div className="contact-row">
                                <Phone size={18} className="contact-row-icon" />
                                <a href={`tel:${phone}`} className="contact-link">{phone}</a>
                                <button
                                    className={`copy-btn ${copiedPhone ? 'copied' : ''}`}
                                    onClick={copyPhone}
                                    aria-label="Copy phone"
                                >
                                    {copiedPhone ? <Check size={14} /> : <Copy size={14} />}
                                </button>
                            </div>
                        </div>

                        <div className="social-links">
                            {[
                                { href: 'https://github.com/sandeep-b-belaki', icon: <Github size={20} />, label: 'Github' },
                                { href: 'https://www.linkedin.com/in/sandeep-belaki-490219187/', icon: <Linkedin size={20} />, label: 'Linkedin' },
                                { href: `mailto:${email}`, icon: <Mail size={20} />, label: 'Email' }
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="social-link"
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                >
                                    {social.icon}
                                    <span>{social.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
