import React from 'react';
import { motion } from 'framer-motion';
import './Tools.css';

const Tools = () => {
    const toolCategories = [
        {
            category: 'Testing & QA',
            items: [
                { name: 'Selenium', emoji: '\u{1F916}', desc: 'Automation' },
                { name: 'Postman', emoji: '\u{1F4EE}', desc: 'API Testing' },
                { name: 'JMeter', emoji: '\u26A1', desc: 'Performance' },
                { name: 'BrowserStack', emoji: '\u{1F310}', desc: 'Cross-browser' },
                { name: 'Charles Proxy', emoji: '\u{1F50D}', desc: 'Network' },
                { name: 'TestRail', emoji: '\u{1F4CB}', desc: 'Test Mgmt' },
            ]
        },
        {
            category: 'Dev & DevOps',
            items: [
                { name: 'JIRA', emoji: '\u{1F4CC}', desc: 'Bug Tracking' },
                { name: 'Git', emoji: '\u{1F33F}', desc: 'Version Control' },
                { name: 'Jenkins', emoji: '\u{1F3D7}\uFE0F', desc: 'CI/CD' },
                { name: 'Android Studio', emoji: '\u{1F916}', desc: 'Android Debug' },
                { name: 'Xcode', emoji: '\u{1F6E0}\uFE0F', desc: 'iOS Debug' },
                { name: 'ADB', emoji: '\u{1F4E1}', desc: 'Android Bridge' },
            ]
        },
        {
            category: 'Analytics & Data',
            items: [
                { name: 'Firebase', emoji: '\u{1F525}', desc: 'Analytics' },
                { name: 'Mixpanel', emoji: '\u{1F4CA}', desc: 'Events' },
                { name: 'Amplitude', emoji: '\u{1F4C8}', desc: 'Insights' },
                { name: 'MySQL', emoji: '\u{1F5C4}\uFE0F', desc: 'Database' },
                { name: 'logcat', emoji: '\u{1F4DD}', desc: 'Android Logs' },
                { name: 'Cursor AI', emoji: '\u2728', desc: 'AI Coding' },
            ]
        }
    ];

    // Create a flat list for the marquee
    const allTools = toolCategories.flatMap(cat => cat.items);

    return (
        <section id="tools" className="section tools-section">
            <div className="container">
                <motion.div
                    className="tools-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Stack</span>
                    <h2 className="section-title">Tools & Technologies</h2>
                    <p className="section-desc">The tech stack I use daily to deliver quality software</p>
                </motion.div>

                {/* Marquee Row */}
                <div className="tools-marquee-wrapper">
                    <div className="tools-marquee">
                        <div className="marquee-track">
                            {[...allTools, ...allTools].map((tool, i) => (
                                <div key={i} className="marquee-item">
                                    <span className="marquee-emoji">{tool.emoji}</span>
                                    <span className="marquee-name">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Category Grids */}
                <div className="tools-categories">
                    {toolCategories.map((cat, catIdx) => (
                        <motion.div
                            key={catIdx}
                            className="tool-category"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: catIdx * 0.12 }}
                        >
                            <h3 className="tool-category-title">{cat.category}</h3>
                            <div className="tools-grid">
                                {cat.items.map((tool, toolIdx) => (
                                    <motion.div
                                        key={toolIdx}
                                        className="tool-item"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -4,
                                            transition: { type: 'spring', stiffness: 400, damping: 17 }
                                        }}
                                    >
                                        <span className="tool-emoji">{tool.emoji}</span>
                                        <span className="tool-name">{tool.name}</span>
                                        <span className="tool-desc">{tool.desc}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
