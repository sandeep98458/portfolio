import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, FolderOpen, CheckCircle2, Terminal, Shield, Smartphone } from 'lucide-react';
import resumeFile from '../assets/Sandeep_B_Belaki_QA.pdf';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const AnimatedCounter = ({ target, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const num = parseInt(target);
                    const duration = 2000;
                    const steps = 60;
                    const increment = num / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= num) {
                            setCount(num);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const TerminalCard = () => {
    const [lines, setLines] = useState([]);
    const hasAnimated = useRef(false);
    const ref = useRef(null);

    const terminalLines = [
        { text: '$ npm run test:suite', type: 'command' },
        { text: '', type: 'blank' },
        { text: 'Running test suites...', type: 'info' },
        { text: '', type: 'blank' },
        { text: 'PASS  e2e/checkout.spec.ts', type: 'pass' },
        { text: 'PASS  api/endpoints.spec.ts', type: 'pass' },
        { text: 'PASS  mobile/compatibility.spec.ts', type: 'pass' },
        { text: '', type: 'blank' },
        { text: 'Tests:  247 passed, 0 failed', type: 'result' },
        { text: 'Coverage: 98.2%', type: 'coverage' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    terminalLines.forEach((line, i) => {
                        setTimeout(() => {
                            setLines(prev => [...prev, line]);
                        }, i * 280);
                    });
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="terminal-card" ref={ref}>
            <div className="terminal-header">
                <div className="terminal-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                </div>
                <span className="terminal-title">test-runner</span>
            </div>
            <div className="terminal-body">
                {lines.map((line, i) => (
                    <div key={i} className={`terminal-line terminal-${line.type}`}>
                        {line.text}
                    </div>
                ))}
                <span className="terminal-cursor">_</span>
            </div>
        </div>
    );
};

const Hero = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 25, filter: 'blur(8px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-bg-grid"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-top"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="hero-profile-badge" variants={itemVariants}>
                        <img src={profileImg} alt="Sandeep B Belaki" className="profile-thumb" />
                        <div className="profile-badge-info">
                            <span className="profile-badge-name">Sandeep B Belaki</span>
                            <span className="profile-badge-role">Software QA Engineer</span>
                        </div>
                        <span className="status-indicator">
                            <span className="status-dot"></span>
                            Open to Work
                        </span>
                    </motion.div>

                    <motion.h1 className="hero-headline" variants={itemVariants}>
                        <span className="hero-line-1">Shipping Quality,</span>
                        <span className="hero-line-2">Not Just Code.</span>
                    </motion.h1>

                    <motion.p className="hero-desc" variants={itemVariants}>
                        I don't just find bugs — I prevent them. From mobile apps to REST APIs,
                        I build testing strategies that turn unpredictable releases into confident deployments.
                    </motion.p>

                    <motion.div className="hero-ctas" variants={itemVariants}>
                        <a href="#projects" className="btn btn-primary hero-btn">
                            <FolderOpen size={17} /> View Case Studies
                        </a>
                        <a href="#contact" className="btn btn-outline hero-btn">
                            Get in Touch <ArrowRight size={17} />
                        </a>
                        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn btn-ghost hero-btn">
                            <Eye size={17} /> Resume
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-bento"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                >
                    <motion.div className="bento-card bento-stat" variants={cardVariants}>
                        <div className="bento-icon bento-icon-blue">
                            <Shield size={20} />
                        </div>
                        <span className="bento-number"><AnimatedCounter target="3" suffix="+" /></span>
                        <span className="bento-label">Years in QA</span>
                    </motion.div>

                    <motion.div className="bento-card bento-stat" variants={cardVariants}>
                        <div className="bento-icon bento-icon-cyan">
                            <CheckCircle2 size={20} />
                        </div>
                        <span className="bento-number"><AnimatedCounter target="500" suffix="+" /></span>
                        <span className="bento-label">Bugs Caught</span>
                    </motion.div>

                    <motion.div className="bento-card bento-stat" variants={cardVariants}>
                        <div className="bento-icon bento-icon-emerald">
                            <Smartphone size={20} />
                        </div>
                        <span className="bento-number"><AnimatedCounter target="10" suffix="+" /></span>
                        <span className="bento-label">Products Shipped</span>
                    </motion.div>

                    <motion.div className="bento-card bento-terminal" variants={cardVariants}>
                        <TerminalCard />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
