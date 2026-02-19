import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, FolderOpen } from 'lucide-react';
import resumeFile from '../assets/Sandeep_B_Belaki_QA.pdf';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">

                {/* LEFT: Text Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Status Badge */}
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <span className="hero-badge-dot"></span>
                        Available for new opportunities
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        I break software<br />
                        <span className="hero-name-gradient">so users don't.</span>
                    </motion.h1>

                    {/* Job Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        Sandeep B Belaki · Software QA Engineer
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="hero-desc"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        Detail-oriented QA Engineer specializing in manual and automation testing
                        across Android, iOS, and web platforms. I find bugs before your users do.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Bugs Reported</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Products Shipped</span>
                        </div>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        className="hero-ctas"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            <FolderOpen size={17} /> View Projects
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me <ArrowRight size={17} />
                        </a>
                        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                            <Eye size={17} /> Resume
                        </a>
                    </motion.div>
                </motion.div>

                {/* RIGHT: Aurora Orb Visual */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="hero-orb">
                        <div className="orb-ring"></div>
                        <div className="orb-ring-2"></div>
                        <div className="orb-ring-3"></div>
                        <div className="orb-core"></div>

                        {/* Floating stat cards */}
                        <div className="hero-float-card card-1">
                            <div className="float-card-icon" style={{ background: 'rgba(99,102,241,0.15)' }}>🛡️</div>
                            <span>ISTQB Certified</span>
                        </div>
                        <div className="hero-float-card card-2">
                            <div className="float-card-icon" style={{ background: 'rgba(168,85,247,0.15)' }}>🤖</div>
                            <span>Selenium + Java</span>
                        </div>
                        <div className="hero-float-card card-3">
                            <div className="float-card-icon" style={{ background: 'rgba(236,72,153,0.15)' }}>📱</div>
                            <span>Android &amp; iOS</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
