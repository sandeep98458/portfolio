import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Ravi Kumar',
            role: 'Engineering Manager',
            company: 'BANGDB',
            avatar: 'RK',
            color: '#00d9ff',
            rating: 5,
            text: 'Sandeep consistently delivered thorough test coverage that caught issues we would have otherwise missed in production. His attention to edge cases and ability to write clear, reproducible bug reports made our development cycles significantly more predictable. A true quality champion on our team.'
        },
        {
            name: 'Priya Sharma',
            role: 'Senior Product Manager',
            company: 'Moolya Software Testing',
            avatar: 'PS',
            color: '#8b5cf6',
            rating: 5,
            text: 'Working with Sandeep was a pleasure. He doesn\'t just execute test cases — he thinks deeply about the user journey and asks the right questions during requirement reviews. His API testing skills and ability to use tools like Postman and Charles Proxy made our backend validation process much stronger.'
        },
        {
            name: 'Anil Mehta',
            role: 'Tech Lead',
            company: 'Kutumb',
            avatar: 'AM',
            color: '#f59e0b',
            rating: 5,
            text: 'Sandeep brought a great testing mindset to our mobile QA process. He quickly understood our product complexity and built a structured approach to cross-platform testing. His proactive communication and detailed test reports helped us ship features with confidence across Android and iOS.'
        }
    ];

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Testimonials
                </motion.h2>
                <motion.p
                    className="testimonials-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    What colleagues and managers say
                </motion.p>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.12 }}
                            style={{ '--t-color': t.color }}
                        >
                            <div className="quote-icon">
                                <Quote size={22} />
                            </div>

                            <p className="testimonial-text">{t.text}</p>

                            <div className="testimonial-rating">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <Star key={i} size={14} fill="currentColor" />
                                ))}
                            </div>

                            <div className="testimonial-author">
                                <div
                                    className="author-avatar"
                                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                                >
                                    {t.avatar}
                                </div>
                                <div className="author-info">
                                    <span className="author-name">{t.name}</span>
                                    <span className="author-role">{t.role} · {t.company}</span>
                                </div>
                            </div>

                            <div className="testimonial-accent" style={{ background: t.color }}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
