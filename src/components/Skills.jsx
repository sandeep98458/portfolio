import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, PenTool, Database } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Testing Expertise',
            icon: <Code size={30} />,
            skills: ['STLC', 'Test Case Design', 'Functional Testing', 'Regression Testing', 'Mobile Testing', 'API Testing', 'UAT', 'E2E Testing']
        },
        {
            title: 'Mobile QA Skills',
            icon: <Server size={30} />,
            skills: ['Android Testing', 'iOS Testing', 'ADB', 'logcat', 'Charles Proxy', 'Firebase', 'Device Compatibility']
        },
        {
            title: 'Technical Skills',
            icon: <Database size={30} />,
            skills: ['Java', 'SQL', 'HTML', 'CSS', 'API Testing', 'Postman']
        },
        {
            title: 'Tools',
            icon: <PenTool size={30} />,
            skills: ['JIRA', 'TestRail', 'BrowserStack', 'Mixpanel', 'Amplitude', 'Android Studio', 'Xcode', 'MySQL', 'Cursor AI']
        }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Skills
                </motion.h2>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            className="skill-card"
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="skill-icon">
                                {category.icon}
                            </div>
                            <h3 className="skill-title">{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <li key={i}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
