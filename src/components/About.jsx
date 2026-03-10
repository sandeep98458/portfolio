import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, TestTube } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const slideRight = {
        hidden: { opacity: 0, x: -40, filter: 'blur(6px)' },
        visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const slideLeft = {
        hidden: { opacity: 0, x: 40, filter: 'blur(6px)' },
        visible: {
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const coreTools = ['Java', 'SQL', 'Selenium', 'JIRA', 'Postman', 'Charles Proxy', 'BrowserStack', 'TestRail'];
    const aiTools = ['Cursor AI', 'Claude', 'DeepSeek', 'OpenAI', 'Antigravity'];

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    className="about-layout"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <motion.div className="about-photo-col" variants={slideRight}>
                        <div className="about-photo-wrapper">
                            <img src={profileImg} alt="Sandeep B Belaki" className="about-photo" />
                            <div className="about-photo-border"></div>
                        </div>
                        <div className="about-quick-facts">
                            <div className="quick-fact">
                                <TestTube size={16} />
                                <span>QA Engineer</span>
                            </div>
                            <div className="quick-fact">
                                <Bot size={16} />
                                <span>AI Enthusiast</span>
                            </div>
                            <div className="quick-fact">
                                <Sparkles size={16} />
                                <span>3+ Years Exp</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="about-text-col" variants={slideLeft}>
                        <span className="about-eyebrow">About Me</span>
                        <h2 className="about-heading">Passionate about quality & reliability</h2>

                        <div className="about-paragraphs">
                            <p>
                                Hello! I'm Sandeep B Belaki, a Quality Assurance Engineer passionate about building reliable web and mobile experiences.
                            </p>
                            <p>
                                My journey in technology began in 2019, when I started experimenting with web development by customizing Tumblr themes. Working with HTML and CSS sparked my interest and gave me a strong understanding of how web applications are built.
                            </p>
                            <p>
                                Today, I specialize in manual testing for mobile and web applications, with hands-on experience in functional, regression, and API testing. I focus on identifying issues early and collaborating closely with teams to ensure stable, high-quality releases.
                            </p>
                            <p>
                                I actively use AI-powered tools such as Cursor, Antigravity, Claude, DeepSeek, and OpenAI to improve testing efficiency and analysis. Alongside QA, I also enjoy exploring AI-assisted web design to create clean, user-friendly interfaces.
                            </p>
                        </div>

                        <div className="about-tools-section">
                            <h4 className="tools-label">Core QA Tools</h4>
                            <div className="about-tools-list">
                                {coreTools.map((tool, i) => (
                                    <motion.span
                                        key={tool}
                                        className="about-tool-tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + i * 0.05, duration: 0.35 }}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div className="about-tools-section">
                            <h4 className="tools-label">AI-Powered Tools</h4>
                            <div className="about-tools-list">
                                {aiTools.map((tool, i) => (
                                    <motion.span
                                        key={tool}
                                        className="about-tool-tag ai-tag"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.6 + i * 0.05, duration: 0.35 }}
                                        whileHover={{ scale: 1.08, y: -2 }}
                                    >
                                        {tool}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
