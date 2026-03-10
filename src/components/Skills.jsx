import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Smartphone, Code2, Wrench, Bot } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Testing Expertise',
            icon: <FlaskConical size={22} />,
            color: '#3B82F6',
            skills: ['STLC', 'Test Case Design', 'Functional Testing', 'Regression Testing', 'Mobile Testing', 'API Testing', 'Performance Testing (Basics)', 'UAT', 'E2E Testing']
        },
        {
            title: 'Mobile QA Skills',
            icon: <Smartphone size={22} />,
            color: '#06B6D4',
            skills: ['Android Testing', 'iOS Testing', 'ADB', 'logcat', 'Charles Proxy', 'Firebase', 'Device Compatibility']
        },
        {
            title: 'Programming & APIs',
            icon: <Code2 size={22} />,
            color: '#10B981',
            skills: ['Java', 'SQL', 'MySQL', 'HTML', 'CSS', 'Postman', 'Test Automation (Basics)']
        },
        {
            title: 'Tools',
            icon: <Wrench size={22} />,
            color: '#f59e0b',
            skills: ['JIRA', 'TestRail', 'BrowserStack', 'Mixpanel', 'Amplitude', 'Android Studio', 'Xcode', 'Apache JMeter (Basics)']
        },
        {
            title: 'AI-Assisted Tools',
            icon: <Bot size={22} />,
            color: '#8B5CF6',
            skills: ['Cursor AI', 'Claude', 'DeepSeek', 'OpenAI', 'Antigravity']
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
                    <h2 className="section-title">Technical Skills</h2>
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
