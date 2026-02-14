import React, { useState } from 'react';
import { Award, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

// TODO: Add your certificate images here
// import qspiderCert from '../assets/certificates/qspider.jpg';
// import jspiderCert from '../assets/certificates/jspider.jpg';

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
            // image: qspiderCert  // Uncomment when image is added
        },
        {
            id: 2,
            title: 'Java Full Stack Development',
            institution: 'JSpiders Training and Development Center',
            description: 'Completed Development Course',
            topics: ['Java', 'Web Development', 'SQL'],
            date: 'April 2023',
            // image: jspiderCert  // Uncomment when image is added
        }
    ];

    const openCertificate = (cert) => {
        if (cert.image) {
            setSelectedCert(cert);
        } else {
            alert('Please add the certificate image to:\n/Users/primetrace/portfolio/src/assets/certificates/\n\nThen uncomment the image imports in Certificates.jsx');
        }
    };

    const closeCertificate = () => {
        setSelectedCert(null);
    };

    return (
        <section id="certificates" className="certificates">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="section-header">
                        <Award size={32} className="section-icon" />
                        <h2>Certifications</h2>
                    </div>

                    <div className="certificates-grid">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className="certificate-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="cert-icon">
                                    <Award size={40} />
                                </div>
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-institution">{cert.institution}</p>
                                <p className="cert-description">{cert.description}</p>
                                <ul className="cert-topics">
                                    {cert.topics.map((topic, i) => (
                                        <li key={i}>{topic}</li>
                                    ))}
                                </ul>
                                <p className="cert-date">{cert.date}</p>
                                <button
                                    className="view-cert-btn"
                                    onClick={() => openCertificate(cert)}
                                >
                                    <Eye size={18} />
                                    View Certificate
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        className="cert-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCertificate}
                    >
                        <motion.div
                            className="cert-modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-modal" onClick={closeCertificate}>
                                <X size={24} />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="cert-image"
                            />
                            <div className="cert-modal-info">
                                <h3>{selectedCert.title}</h3>
                                <p>{selectedCert.institution}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
