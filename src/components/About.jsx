import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            Hello! My name is Sandeep B Belaki and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS was quite fun!
                        </p>
                        <p>
                            Fast-forward to today, and I've built a strong career in Quality Assurance. I specialize in Mobile and Web application testing, with extensive experience in functional, regression, and API testing. I'm passionate about ensuring software quality through rigorous testing methodologies and using modern tools like Cursor AI to enhance efficiency.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="skills-list">
                            <li>Java</li>
                            <li>SQL</li>
                            <li>Selenium</li>
                            <li>JIRA</li>
                            <li>Postman</li>
                            <li>Charles Proxy</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="about-image-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="about-profile-wrapper">
                            <div className="about-profile-frame">
                                <img src={profileImg} alt="Sandeep B Belaki" className="about-profile-img" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
