import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag } from 'lucide-react';
import './Blog.css';

const Blog = () => {
    const articles = [
        {
            emoji: '\u{1F9EA}',
            tag: 'Test Strategy',
            title: 'How I Structure Mobile QA Test Plans for Agile Teams',
            excerpt: 'A walkthrough of the test planning process I follow at the start of each sprint \u2014 from risk assessment and coverage mapping to execution tracking in TestRail.',
            readTime: '6 min read',
            date: 'Recent',
            color: '#3B82F6',
            comingSoon: false,
            url: 'https://sandeepblog-teal.vercel.app/'
        },
        {
            emoji: '\u{1F4EE}',
            tag: 'API Testing',
            title: 'Postman Beyond the Basics: Chaining Requests & Environment Management',
            excerpt: "Most QA engineers know how to send a request in Postman. But are you using pre-request scripts, dynamic variables, and Newman for CI integration? This article covers it all.",
            readTime: '8 min read',
            date: 'Featured',
            color: '#06B6D4',
            comingSoon: false,
            url: 'https://postman-blog.vercel.app/blog/postman-beyond-basics'
        },
        {
            emoji: '\u{1F50D}',
            tag: 'Exploratory Testing',
            title: "The Bug Hunter's Mindset: Thinking Beyond the Happy Path",
            excerpt: 'Exploratory testing is more than ad-hoc clicking. Learn the heuristics, session-based techniques, and mental models I use to find bugs that test cases miss.',
            readTime: '5 min read',
            date: 'Featured',
            color: '#f59e0b',
            comingSoon: false,
            url: 'https://bug-hunt-sandeep.vercel.app/blog/bug-hunters-mindset'
        }
    ];

    return (
        <section id="blog" className="section blog-section">
            <div className="container">
                <motion.div
                    className="blog-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Writing</span>
                    <h2 className="section-title">Blog & Articles</h2>
                    <p className="section-desc">Thoughts on testing, quality, and engineering from the trenches</p>
                </motion.div>

                <div className="blog-grid">
                    {articles.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.comingSoon ? undefined : article.url}
                            target={article.comingSoon ? undefined : '_blank'}
                            rel={article.comingSoon ? undefined : 'noopener noreferrer'}
                            className={`blog-card ${index === 0 ? 'blog-featured' : ''}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            style={{ '--blog-color': article.color, textDecoration: 'none' }}
                        >
                            <div className="blog-card-inner">
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
                                    <span className="blog-read-link">
                                        {article.comingSoon ? 'Stay tuned' : 'Read More'}
                                        <ArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
