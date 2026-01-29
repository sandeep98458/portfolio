import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Company One',
            role: 'Senior Developer',
            period: '2023 - Present',
            description: [
                'Lead development of web applications using React and Node.js.',
                'Mentored junior developers and conducted code reviews.',
                'Improved site performance by 20% through optimization.'
            ]
        },
        {
            company: 'Company Two',
            role: 'Full Stack Developer',
            period: '2021 - 2023',
            description: [
                'Built full-stack solutions using MERN stack.',
                'Collaborated with designers to implement new features.',
                'Maintained legacy codebases and migrated to modern tech stacks.'
            ]
        },
        {
            company: 'Company Three',
            role: 'Junior Developer',
            period: '2019 - 2021',
            description: [
                'Assisted in frontend development of client websites.',
                'Wrote unit tests and fixed bugs.',
                'Participated in agile development processes.'
            ]
        }
    ];

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="timeline-item"
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="timeline-icon">
                                <Briefcase size={20} />
                            </div>
                            <div className="timeline-content">
                                <span className="period">{exp.period}</span>
                                <h3 className="role">{exp.role} <span className="company">@ {exp.company}</span></h3>
                                <ul className="description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
