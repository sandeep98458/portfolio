import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Sachin Sinha',
            role: 'Co-Founder',
            company: 'BANGDB',
            avatar: 'SS',
            color: '#3B82F6',
            rating: 5,
            url: 'https://www.linkedin.com/in/sachinsi/',
            image: 'https://media.licdn.com/dms/image/v2/C4D03AQEWGNO1X3Extg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1598781796474?e=2147483647&v=beta&t=wPXQLqpcRK9JtytuanpXI8ZchqQkwjxmp4skzNrSdXE',
            text: 'Sandeep consistently delivered thorough test coverage that caught issues we would have otherwise missed in production. His attention to edge cases and ability to write clear, reproducible bug reports made our development cycles significantly more predictable. A true quality champion on our team.'
        },
        {
            name: 'Swathi Bharadwaj',
            role: 'Test Manager',
            company: 'Moolya',
            avatar: 'S',
            color: '#06B6D4',
            rating: 5,
            url: 'https://www.linkedin.com/in/swathibharadwaj/',
            image: 'https://media.licdn.com/dms/image/v2/C5603AQG3ignPDvpFcA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1617950163312?e=2147483647&v=beta&t=P3i7RZEsUV9CLV9KUTvO6GSaudqjdYDgDZDK3UroQmg',
            text: "Working with Sandeep was a pleasure. He doesn't just execute test cases \u2014 he thinks deeply about the user journey and asks the right questions during requirement reviews. His API testing skills and ability to use tools like Postman and Charles Proxy made our backend validation process much stronger."
        }
    ];

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Reviews</span>
                    <h2 className="section-title">Testimonials</h2>
                    <p className="testimonials-subtitle">What colleagues and managers say</p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="testimonial-top">
                                <div className="testimonial-author">
                                    {t.image ? (
                                        <img
                                            src={t.image}
                                            alt={t.name}
                                            className="author-avatar"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div
                                            className="author-avatar"
                                            style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                                        >
                                            {t.avatar}
                                        </div>
                                    )}
                                    <div className="author-info">
                                        <a href={t.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                            <span className="author-name">{t.name}</span>
                                        </a>
                                        <span className="author-role">{t.role} · {t.company}</span>
                                    </div>
                                </div>
                                <div className="testimonial-rating">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.08 }}
                                        >
                                            <Star size={14} fill="currentColor" />
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            <div className="quote-mark">
                                <Quote size={28} />
                            </div>

                            <p className="testimonial-text">{t.text}</p>

                            <div className="testimonial-accent" style={{ background: t.color }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
