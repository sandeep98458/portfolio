import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import './Blog.css';

const Blog = () => {
    const articles = [
        {
            emoji: '🧪',
            tag: 'Test Strategy',
            title: 'How I Structure Mobile QA Test Plans for Agile Teams',
            excerpt: 'A walkthrough of the test planning process I follow at the start of each sprint — from risk assessment and coverage mapping to execution tracking in TestRail.',
            readTime: '6 min read',
            date: 'Coming Soon',
            color: '#00d9ff',
            comingSoon: true
        },
        {
            emoji: '📮',
            tag: 'API Testing',
            title: 'Postman Beyond the Basics: Chaining Requests & Environment Management',
            excerpt: 'Most QA engineers know how to send a request in Postman. But are you using pre-request scripts, dynamic variables, and Newman for CI integration? This article covers it all.',
            readTime: '8 min read',
            date: 'Coming Soon',
            color: '#8b5cf6',
            comingSoon: true
        },
        {
            emoji: '🔍',
            tag: 'Exploratory Testing',
            title: 'The Bug Hunter\'s Mindset: Thinking Beyond the Happy Path',
            excerpt: 'Exploratory testing is more than ad-hoc clicking. Learn the heuristics, session-based techniques, and mental models I use to find bugs that test cases miss.',
            readTime: '5 min read',
            date: 'Coming Soon',
            color: '#f59e0b',
            comingSoon: true
        }
    ];

    return (
        <section id="blog" className="section blog-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Blog & Articles
                </motion.h2>
                <motion.p
                    className="blog-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Thoughts on testing, quality, and engineering from the trenches
                </motion.p>

                <div className="blog-grid">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            className="blog-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ '--blog-color': article.color }}
                        >
                            {article.comingSoon && (
                                <span className="coming-soon-badge">Coming Soon</span>
                            )}

                            <div className="blog-emoji">{article.emoji}</div>

                            <div className="blog-meta">
                                <span className="blog-tag">
                                    <Tag size={11} /> {article.tag}
                                </span>
                                <span className="blog-read-time">
                                    <Clock size={11} /> {article.readTime}
                                </span>
                            </div>

                            <h3 className="blog-title">{article.title}</h3>
                            <p className="blog-excerpt">{article.excerpt}</p>

                            <div className="blog-footer">
                                <span className="blog-date">{article.date}</span>
                                <button className="blog-read-btn" disabled={article.comingSoon}>
                                    {article.comingSoon ? 'Stay tuned' : 'Read More'}
                                    <ArrowRight size={14} />
                                </button>
                            </div>

                            <div className="blog-accent" style={{ background: article.color }}></div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
