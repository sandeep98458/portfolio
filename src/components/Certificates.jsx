import React, { useState } from 'react';
import { Award, Eye, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

import qspiderCert from '../assets/certificates/qspider.jpg';
import jspiderCert from '../assets/certificates/jspider.png';

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            title: 'QA Testing Certification',
            institution: 'QSpiders Software Testing Training Institute',
            description: 'Certified in Manual and Automation Testing',
            topics: ['Manual Testing', 'Selenium Tool', 'Core Java', 'SQL', 'Agile Methodology / Web Security Testing'],
            date: 'February 2023',
            image: qspiderCert
        },
        {
            id: 2,
            title: 'Java Full Stack Development',
            institution: 'JSpiders Training and Development Center',
            description: 'Completed Development Course',
            topics: ['Java', 'Web Development', 'SQL'],
            date: 'April 2023',
            image: jspiderCert
        }
    ];

    return (
        <section id="certificates" className="section certificates">
            <div className="container">
                <motion.div
                    className="certs-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="section-eyebrow">Credentials</span>
                    <h2 className="section-title">Certifications</h2>
                    <p className="section-desc">Professional certifications that validate my expertise.</p>
                </motion.div>

                <div className="certs-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            className="cert-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="cert-card-header">
                                <div className="cert-icon-wrap">
                                    <Award size={24} />
                                </div>
                                <span className="cert-issuer-tag">{cert.date}</span>
                            </div>
                            <h3 className="cert-name">{cert.title}</h3>
                            <p className="cert-institution">{cert.institution}</p>
                            <p className="cert-desc">{cert.description}</p>
                            <div className="cert-topics">
                                {cert.topics.map((topic, i) => (
                                    <span key={i} className="cert-topic-tag">{topic}</span>
                                ))}
                            </div>
                            <button
                                className="cert-view-btn"
                                onClick={(e) => { e.stopPropagation(); setSelectedCert(cert); }}
                            >
                                <Eye size={15} />
                                View Certificate
                                <ArrowRight size={14} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            className="cert-modal"
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedCert(null)}>
                                <X size={20} />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
