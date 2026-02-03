import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import resumeFile from '../assets/Sandeep_B_Belaki_QA.pdf';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        className="greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        I break software so users don’t have to.
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Sandeep B Belaki
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Software QA Engineer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Detail-oriented Software QA Engineer with experience in manual testing for Android, iOS, and web applications. Strong in test planning, execution, and defect tracking, with a growing focus on automation.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a href="#contact" className="btn btn-primary">
                            Contact Me <ArrowRight size={18} />
                        </a>
                        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            Resume <Download size={18} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    {/* Hexagonal Certification Badge (Stands Alone) */}
                    <motion.div
                        className="certification-badge"
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.8, duration: 0.8, type: "spring", stiffness: 100 }}
                    >
                        <div className="badge-hexagon-wrapper">
                            <div className="badge-hexagon-outer"></div>
                            <div className="badge-hexagon-inner">
                                <div className="badge-content">
                                    <span className="badge-icon-wrapper">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="badge-icon">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                    <span className="badge-certified">CERTIFIED</span>
                                    <span className="badge-title">QA Engineer</span>
                                    <span className="badge-level">PROFESSIONAL</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
