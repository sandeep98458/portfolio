import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
    const educationData = [
        {
            id: 1,
            icon: <GraduationCap size={22} />,
            name: 'Bachelor of Engineering',
            stream: 'Civil Engineering',
            institution: 'SJM Institute of Technology, Chitradurga',
            yop: '2022',
            board: 'VTU'
        },
        {
            id: 2,
            icon: <BookOpen size={22} />,
            name: 'Higher Secondary',
            stream: 'PCMB',
            institution: 'Alvas PU College, Moodbidri',
            yop: '2018',
            board: 'Karnataka PUC Board'
        },
        {
            id: 3,
            icon: <School size={22} />,
            name: 'Secondary',
            stream: '-',
            institution: 'ACO School, Ilkal',
            yop: '2016',
            board: 'KSEEB'
        }
    ];

    return (
        <section id="education" className="section education">
            <div className="container">
                <motion.div
                    className="edu-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="section-eyebrow">Academics</span>
                    <h2 className="section-title">Education</h2>
                    <p className="section-desc">My academic journey that built the foundation for my career.</p>
                </motion.div>

                <div className="edu-steps">
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className="edu-step"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                        >
                            <div className="edu-step-number">{String(index + 1).padStart(2, '0')}</div>
                            <div className="edu-step-card">
                                <div className="edu-step-icon">
                                    {edu.icon}
                                </div>
                                <div className="edu-step-body">
                                    <h3 className="edu-degree">{edu.name}</h3>
                                    {edu.stream !== '-' && (
                                        <span className="edu-stream">{edu.stream}</span>
                                    )}
                                    <div className="edu-detail-item">
                                        <MapPin size={13} />
                                        <span>{edu.institution}</span>
                                    </div>
                                    <div className="edu-badges">
                                        <span className="edu-year-badge">
                                            <Calendar size={11} />
                                            {edu.yop}
                                        </span>
                                        <span className="edu-board-badge">{edu.board}</span>
                                    </div>
                                </div>
                            </div>
                            {index < educationData.length - 1 && <div className="edu-connector"></div>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
