import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

const Contact = () => {
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

                    <a href="mailto:sandeepbelaki@gmail.com" className="btn btn-primary contact-btn">
                        Say Hello <Mail size={18} />
                    </a>

                    <div className="social-links">
                        <a href="https://github.com/Belakisandeep" target="_blank" aria-label="Github"><Github /></a>
                        <a href="mailto:sandeepbelaki@gmail.com" aria-label="Email"><Mail /></a>
                    </div>
                </motion.div>

                <footer className="footer">
                    <p>
                        Designed & Built by <span className="highlight">Sandeep B Belaki</span>
                    </p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
