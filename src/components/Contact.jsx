import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Phone } from 'lucide-react';
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
            <div className="container contact-container">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="contact-text">
                        I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a href={`mailto:${email}`} className="btn btn-primary contact-btn" target="_blank" rel="noopener noreferrer">
                        Say Hello <Mail size={18} />
                    </a>

                    <div className="contact-info-container">
                        <div className="info-display">
                            <a href={`mailto:${email}`} className="info-link" target="_blank" rel="noopener noreferrer">
                                {email}
                            </a>
                            <button
                                className={`copy-btn ${copiedEmail ? 'copied' : ''}`}
                                onClick={copyEmail}
                                aria-label="Copy email"
                            >
                                {copiedEmail ? <span className="copy-feedback">Copied!</span> : <Mail size={16} />}
                            </button>
                        </div>

                        <div className="info-display">
                            <a href={`tel:${phone}`} className="info-link" target="_blank" rel="noopener noreferrer">
                                {phone}
                            </a>
                            <button
                                className={`copy-btn ${copiedPhone ? 'copied' : ''}`}
                                onClick={copyPhone}
                                aria-label="Copy phone"
                            >
                                {copiedPhone ? <span className="copy-feedback">Copied!</span> : <Phone size={16} />}
                            </button>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/sandeep-b-belaki" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github /></a>
                        <a href="https://www.linkedin.com/in/sandeep-belaki-490219187/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><Linkedin /></a>
                        <a href={`mailto:${email}`} aria-label="Email" target="_blank" rel="noopener noreferrer"><Mail /></a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
