import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Kutumb',
            role: 'QA Engineer',
            period: 'Sep 2025 - Present',
            type: 'current',
            description: [
                'Performed mobile application testing on Android and iOS platforms to ensure high-quality releases.',
                'Executed functional, regression, smoke, sanity, and exploratory testing for mobile features and updates.',
                'Validated API integrations using Postman and ensured seamless communication between mobile apps and backend services.',
                'Tested app performance, usability, and compatibility across multiple devices, OS versions, and screen sizes.',
                'Used tools such as ADB, logcat, Charles Proxy, Firebase, BrowserStack, Postman, and JIRA for debugging and issue tracking.',
                'Collaborated with developers and product teams to improve app stability and user experience.'
            ]
        },
        {
            company: 'Moolya Software Testing Pvt Ltd',
            role: 'QA Engineer',
            period: 'Mar 2025 - Sep 2025',
            type: 'past',
            description: [
                'Tested Android, iOS, and Web applications, ensuring quality across multiple platforms.',
                'Performed functional, regression, exploratory, and usability testing.',
                'Maintained and updated test suites using TestRail.',
                'Created mind maps to visualize test coverage and improve test planning.',
                'Collaborated with cross-functional teams to streamline testing processes.'
            ]
        },
        {
            company: 'BANGDB',
            role: 'QA Engineer',
            period: 'Apr 2023 - Feb 2025',
            type: 'past',
            description: [
                'Designed and executed manual test cases for web applications, APIs, system testing, and performance testing.',
                'Implemented end-to-end testing following the STLC process.',
                'Performed functional, regression, integration, and smoke testing across Web, Android, and iOS.',
                'Utilized tools such as Charles Proxy, Android Studio, BrowserStack, Xcode, MySQL, Amplitude, Mixpanel, and Firebase.',
                'Identified, documented, and tracked defects using JIRA.',
                'Contributed to automation testing using Java and Selenium.',
                'Worked in Agile/Scrum environments and participated in sprint ceremonies.',
                'Used Cursor AI tool to assist in test analysis and debugging.'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.div
                    className="exp-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Career</span>
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Work Experience</h2>
                </motion.div>

                <div className="exp-cards">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className={`exp-card ${exp.type === 'current' ? 'exp-current' : ''}`}
                            key={index}
                            initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="exp-card-top">
                                <div className="exp-company-badge">
                                    <div className="exp-company-icon">
                                        <Briefcase size={18} />
                                    </div>
                                    <div className="exp-company-info">
                                        <h3 className="exp-role">{exp.role}</h3>
                                        <span className="exp-company-name">{exp.company}</span>
                                    </div>
                                </div>
                                <span className={`exp-period ${exp.type === 'current' ? 'exp-period-active' : ''}`}>
                                    {exp.type === 'current' && <span className="exp-live-dot"></span>}
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="exp-duties">
                                {exp.description.map((item, i) => (
                                    <li key={i}>
                                        <ChevronRight size={14} className="duty-arrow" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
