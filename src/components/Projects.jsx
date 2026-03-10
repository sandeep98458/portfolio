import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, ShieldCheck, Zap, Globe, Database, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ project, index, isExpanded, onToggle, isFeatured }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        cardRef.current.style.setProperty('--mouse-x', `${x}%`);
        cardRef.current.style.setProperty('--mouse-y', `${y}%`);
    };

    return (
        <motion.div
            className={`project-card ${isFeatured ? 'project-featured' : ''}`}
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ '--project-color': project.color }}
            onMouseMove={handleMouseMove}
        >
            <div className="project-spotlight"></div>
            <div className="project-content">
                <div className="project-header">
                    <div className="project-icon" style={{ color: project.color, background: `${project.color}18` }}>
                        {project.icon}
                    </div>
                    <span className="project-company-tag">{project.company}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-strategy">
                    {project.strategy.map((s, i) => (
                        <span key={i} className="strategy-tag">{s}</span>
                    ))}
                </div>

                <div className="project-tools">
                    {project.tools.map((tool, i) => (
                        <span key={i} className="tool-tag">{tool}</span>
                    ))}
                </div>

                <button
                    className="expand-btn"
                    onClick={() => onToggle()}
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? (
                        <><ChevronUp size={16} /> Hide Details</>
                    ) : (
                        <><ChevronDown size={16} /> View Details</>
                    )}
                </button>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            className="project-details"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="detail-block">
                                <h4>Challenge</h4>
                                <p>{project.challenges}</p>
                            </div>
                            <div className="detail-block">
                                <h4>My Approach</h4>
                                <p>{project.solution}</p>
                            </div>
                            <div className="detail-block">
                                <h4>Results</h4>
                                <p>{project.results}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const projects = [
        {
            icon: <ShieldCheck size={28} />,
            title: 'Dealsho \u2013 E-Commerce App QA',
            company: 'Kutumb',
            description: 'End-to-end QA for a deals and shopping e-commerce app across Android and iOS \u2014 covering product listing, cart, checkout, payments, and push notifications.',
            strategy: ['Functional Testing', 'Regression Testing', 'Payment Flow Testing', 'UAT'],
            tools: ['JIRA', 'Postman', 'BrowserStack', 'Charles Proxy', 'ADB'],
            challenges: 'Complex payment gateway integrations with multiple providers; cart sync issues between app sessions; deep link failures from push notifications to deal pages.',
            solution: 'Built payment flow test matrix covering all gateway combinations; used Charles Proxy to simulate network failures during checkout; created regression suite for cart persistence across app kills and restarts.',
            results: 'Caught critical payment double-charge bug before launch; zero checkout-related complaints post-release; stable cart sync across 30+ device configurations.',
            color: '#E07A5F'
        },
        {
            icon: <Sparkles size={28} />,
            title: 'Astro 99 & Tarot 99 \u2013 Astrology Apps QA',
            company: 'Kutumb',
            description: 'Quality assurance for two astrology and tarot reading apps \u2014 testing real-time chat with astrologers, in-app purchases, horoscope generation, and tarot card flows.',
            strategy: ['Functional Testing', 'Exploratory Testing', 'Smoke Testing', 'Compatibility Testing'],
            tools: ['BrowserStack', 'ADB', 'logcat', 'Firebase', 'JIRA'],
            challenges: 'Real-time chat had latency spikes on low-bandwidth connections; in-app purchase flows behaved differently across Android versions; tarot card animations caused frame drops on budget devices.',
            solution: 'Tested real-time chat under throttled network conditions using Charles Proxy; validated IAP flows on 20+ device/OS combinations; profiled animation performance using Android Studio and flagged GPU-heavy renders.',
            results: 'Improved chat reliability to 99.5% message delivery rate; prevented IAP failures on Android 11/12 budget phones; smooth 60fps tarot animations after optimization.',
            color: '#B8A9C9'
        },
        {
            icon: <Globe size={28} />,
            title: 'Frammer AI \u2013 Web Platform QA',
            company: 'Moolya',
            description: 'Tested a web-based AI product for content generation and design workflows \u2014 covering editor functionality, AI output quality validation, user permissions, and cross-browser compatibility.',
            strategy: ['Functional Testing', 'Cross-browser Testing', 'Regression Testing', 'Usability Testing'],
            tools: ['JIRA', 'BrowserStack', 'Postman', 'TestRail', 'Charles Proxy'],
            challenges: 'AI-generated outputs were non-deterministic making validation tricky; editor had complex state management with undo/redo across collaborative sessions; cross-browser rendering inconsistencies in CSS grid layouts.',
            solution: 'Defined output validation criteria with PM team for AI features; built structured test suites in TestRail for editor state management; tested across Chrome, Safari, Firefox, and Edge using BrowserStack.',
            results: 'Identified 8 critical editor state bugs that would have caused data loss; achieved consistent rendering across all major browsers; reduced regression cycle from 3 days to 1 day with structured test suites.',
            color: '#81B29A'
        },
        {
            icon: <Database size={28} />,
            title: 'NoSQL Database & Schema Validation \u2013 BANGDB',
            company: 'BANGDB',
            description: 'Tested a NoSQL database product \u2014 validating JSON data storage, schema enforcement, CRUD operations via REST APIs, and data integrity across concurrent operations.',
            strategy: ['API Testing', 'Data Integrity Testing', 'Schema Validation', 'Performance Testing'],
            tools: ['Postman', 'Newman', 'MySQL', 'JIRA', 'Git'],
            challenges: 'JSON schema validation had edge cases with nested objects and arrays; concurrent write operations caused data inconsistency; API responses varied based on data types stored in NoSQL vs relational mode.',
            solution: 'Created comprehensive Postman collections with chained requests for CRUD lifecycle testing; wrote schema validation tests for 50+ JSON structures; used Newman for automated regression runs in CI pipeline.',
            results: 'Caught a critical race condition in concurrent writes that would have corrupted production data; validated 40+ API endpoints with zero regressions in final 6 sprints.',
            color: '#F2CC8F'
        },
        {
            icon: <Zap size={28} />,
            title: 'CRM, Leads & Bug Tracker \u2013 Web Apps QA',
            company: 'BANGDB',
            description: 'End-to-end QA for three interconnected web applications \u2014 a CRM system, leads management platform with lead selling workflows, and an internal bug tracking tool.',
            strategy: ['Functional Testing', 'Integration Testing', 'E2E Testing', 'Regression Testing'],
            tools: ['Selenium', 'Java', 'JIRA', 'Postman', 'BrowserStack', 'Git'],
            challenges: 'Three apps shared common APIs and data models \u2014 a bug in one app could break data flow in another; lead selling workflow had complex state transitions with approval chains; CRM had role-based access that needed testing across 5 user roles.',
            solution: 'Built Selenium automation suite using Page Object Model for critical CRM flows; created API-level integration tests to validate data consistency across all three apps; tested role-based permissions matrix covering all user role combinations.',
            results: '35 automated test cases cut regression time from 2 hours to 12 minutes; caught 15+ cross-app data flow bugs; zero permission escalation issues shipped to production.',
            color: '#C49A6C'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Portfolio</span>
                    <h2 className="section-title">Products I've Tested</h2>
                    <p className="section-desc">Real products, real challenges, and the quality impact I delivered</p>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            isFeatured={index === 0}
                            isExpanded={expandedIndex === index}
                            onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
