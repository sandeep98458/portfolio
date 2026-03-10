import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Smartphone, Globe, ClipboardList, Wrench } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Testing Methodologies',
            icon: <FlaskConical size={22} />,
            color: '#E07A5F',
            skills: ['STLC', 'Test Case Design', 'Functional Testing', 'Regression Testing', 'Smoke & Sanity Testing', 'Exploratory Testing', 'Integration Testing', 'E2E Testing', 'UAT', 'Risk-based Testing']
        },
        {
            title: 'Mobile QA',
            icon: <Smartphone size={22} />,
            color: '#81B29A',
            skills: ['Android Testing', 'iOS Testing', 'ADB & logcat', 'Charles Proxy', 'Device Compatibility', 'Responsive Testing', 'App Performance', 'BrowserStack', 'Android Studio', 'Xcode']
        },
        {
            title: 'API & Performance',
            icon: <Globe size={22} />,
            color: '#F2CC8F',
            skills: ['Postman', 'REST API Testing', 'API Validation', 'Newman (CI)', 'Apache JMeter', 'Performance Testing', 'Load Testing', 'Charles Proxy']
        },
        {
            title: 'Test Management',
            icon: <ClipboardList size={22} />,
            color: '#C49A6C',
            skills: ['JIRA', 'TestRail', 'Bug Reporting', 'Defect Lifecycle', 'Agile / Scrum', 'Sprint Ceremonies', 'Test Planning', 'Mind Maps', 'Test Coverage Analysis']
        },
        {
            title: 'Automation & Data',
            icon: <Wrench size={22} />,
            color: '#B8A9C9',
            skills: ['Selenium', 'Java', 'SQL / MySQL', 'Git', 'Firebase', 'Amplitude', 'Mixpanel', 'CI/CD Basics']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Expertise</span>
                    <h2 className="section-title">QA Skills & Tools</h2>
                    <p className="section-desc">The methodologies, tools, and platforms I use to deliver quality</p>
                </motion.div>

                <div className="skills-masonry">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            className="skill-block"
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            style={{ '--skill-color': category.color }}
                        >
                            <div className="skill-block-header">
                                <div className="skill-block-icon" style={{ color: category.color, background: `${category.color}18` }}>
                                    {category.icon}
                                </div>
                                <h3 className="skill-block-title">{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.span
                                        key={skillIdx}
                                        className="skill-tag"
                                        whileHover={{ scale: 1.06, y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
