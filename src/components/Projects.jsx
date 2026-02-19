import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bug, ShieldCheck, Zap, Code2, ChevronDown, ChevronUp } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const projects = [
        {
            icon: <ShieldCheck size={28} />,
            title: 'E-Commerce Mobile App – End-to-End QA',
            description: 'Comprehensive quality assurance for a high-traffic e-commerce mobile application serving 500K+ users across Android and iOS platforms.',
            strategy: ['Functional Testing', 'Regression Testing', 'Smoke Testing', 'UAT'],
            tools: ['JIRA', 'Postman', 'BrowserStack', 'Charles Proxy', 'TestRail'],
            challenges: 'Flaky network conditions causing intermittent failures in checkout flow; device fragmentation across 50+ device/OS combinations.',
            solution: 'Built a comprehensive device matrix using BrowserStack; created network condition test scenarios using Charles Proxy throttling; developed reproducible regression suite in TestRail.',
            results: '95% bug detection rate before production; 40% reduction in post-release critical bugs; improved release confidence with structured sign-off process.',
            github: '#',
            docs: '#',
            color: '#00d9ff'
        },
        {
            icon: <Bug size={28} />,
            title: 'REST API Testing Framework – BANGDB',
            description: 'Built a structured API testing suite for a NoSQL database product\'s REST API layer, covering 40+ endpoints with functional and integration coverage.',
            strategy: ['API Testing', 'Integration Testing', 'Boundary Value Analysis', 'Error Handling'],
            tools: ['Postman', 'Newman', 'JIRA', 'Git', 'MySQL'],
            challenges: 'Complex interdependent API flows where auth tokens, pagination states, and database states needed to be orchestrated for valid test scenarios.',
            solution: 'Created chained Postman collections with environment variables and pre-request scripts to dynamically manage auth, set up test data, and clean up after test runs.',
            results: 'Discovered 15 critical API edge-case bugs; automated regression collection runs in 8 minutes; zero API regressions shipped in final 6 sprints.',
            github: '#',
            docs: '#',
            color: '#8b5cf6'
        },
        {
            icon: <Zap size={28} />,
            title: 'Performance & Load Testing – News Feed Platform',
            description: 'Designed and executed performance and load testing strategy for a content-heavy news feed platform, identifying bottlenecks before a major feature launch.',
            strategy: ['Performance Testing', 'Load Testing', 'Stress Testing', 'API Testing'],
            tools: ['Apache JMeter', 'Charles Proxy', 'Postman', 'Mixpanel', 'Firebase'],
            challenges: 'The application showed no issues under normal load but exhibited severe slowdowns at peak concurrent users, which was hard to reproduce locally.',
            solution: 'Simulated 200–1000 concurrent users with JMeter scripts targeting news feed API endpoints; correlated performance metrics with Firebase Analytics data to identify heaviest API calls.',
            results: 'Identified feed API becoming 4x slower beyond 500 concurrent users; provided data-driven recommendations that led to backend caching optimization; improved P95 latency by 60%.',
            github: '#',
            docs: '#',
            color: '#f59e0b'
        },
        {
            icon: <Code2 size={28} />,
            title: 'Selenium Automation Suite – Web Dashboard',
            description: 'Developed a Selenium + Java automation framework for a B2B SaaS dashboard, focusing on critical user flows and high-regression-risk areas.',
            strategy: ['Test Automation', 'Regression Testing', 'Smoke Testing', 'Page Object Model'],
            tools: ['Selenium', 'Java', 'JIRA', 'Git', 'BrowserStack'],
            challenges: 'Dynamic elements with unpredictable IDs and timing-sensitive UI interactions caused brittle test scripts with high false-positive failure rates.',
            solution: 'Implemented Page Object Model pattern with custom wait utilities and XPath fallback strategies; used BrowserStack for cross-browser execution to eliminate local environment bias.',
            results: '35 automated test cases covering login, dashboard, user management, and reporting flows; regression suite runs in 12 minutes vs 2 hours of manual testing; 0 false positives after framework stabilization.',
            github: '#',
            docs: '#',
            color: '#10b981'
        },
        {
            icon: <ShieldCheck size={28} />,
            title: 'Mobile OS Compatibility Testing – Kutumb App',
            description: 'Led systematic compatibility and exploratory testing across 30+ device/OS combinations for a community social platform with diverse user demographics.',
            strategy: ['Compatibility Testing', 'Exploratory Testing', 'Usability Testing', 'Regression Testing'],
            tools: ['BrowserStack', 'Android Studio', 'Xcode', 'ADB', 'logcat', 'Firebase'],
            challenges: 'App rendered incorrectly on Android 11 budget devices and faced deep-link failures on specific iOS 16 builds affecting 18% of the user base.',
            solution: 'Mapped out critical OS + device matrix using Firebase Crashlytics data to prioritize high-impact combinations; used ADB + logcat for detailed Android crash analysis; reported and tracked 12 OS-specific bugs.',
            results: 'Prevented OS-specific crashes from reaching 200K+ affected users; improved crash-free session rate from 97.2% to 99.1%; established reusable compatibility checklist adopted by the team.',
            github: '#',
            docs: '#',
            color: '#ec4899'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    QA Case Studies
                </motion.h2>
                <motion.p
                    className="projects-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Real-world testing scenarios, challenges solved, and measurable quality improvements
                </motion.p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            style={{ '--project-color': project.color }}
                        >
                            <div className="project-header">
                                <div className="project-icon" style={{ color: project.color }}>
                                    {project.icon}
                                </div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                                        <Github size={18} />
                                    </a>
                                    <a href={project.docs} target="_blank" rel="noopener noreferrer" aria-label="Documentation" title="Docs">
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
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
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                aria-expanded={expandedIndex === index}
                            >
                                {expandedIndex === index ? (
                                    <><ChevronUp size={16} /> Hide Details</>
                                ) : (
                                    <><ChevronDown size={16} /> View Details</>
                                )}
                            </button>

                            {expandedIndex === index && (
                                <motion.div
                                    className="project-details"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="detail-block">
                                        <h4>🔍 Challenge</h4>
                                        <p>{project.challenges}</p>
                                    </div>
                                    <div className="detail-block">
                                        <h4>💡 Solution</h4>
                                        <p>{project.solution}</p>
                                    </div>
                                    <div className="detail-block">
                                        <h4>📈 Results</h4>
                                        <p>{project.results}</p>
                                    </div>
                                </motion.div>
                            )}

                            <div className="project-glow" style={{ background: project.color }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
