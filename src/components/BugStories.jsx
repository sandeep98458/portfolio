import React from 'react';
import { motion } from 'framer-motion';
import { Bug, AlertTriangle, Smartphone, Globe, Zap, Database } from 'lucide-react';
import './BugStories.css';

const BugStories = () => {
    const bugs = [
        {
            icon: <Smartphone size={20} />,
            severity: 'Critical',
            title: 'Silent Checkout Failures on Android 11 Budget Devices',
            app: 'Kutumb',
            what: 'Payment flow silently failed on Android 11 devices with <4GB RAM — no error shown to the user, but money was deducted without order confirmation.',
            how: 'Tested on a low-RAM device matrix using BrowserStack. Noticed the WebView crashed silently during payment redirect. Used logcat to capture the OOM crash trace.',
            impact: 'Prevented financial loss for 200K+ users on budget Android devices. Dev team added a WebView memory check + fallback to in-app browser.',
        },
        {
            icon: <Globe size={20} />,
            severity: 'Critical',
            title: 'API Auth Token Leak in Error Responses',
            app: 'BANGDB',
            what: 'REST API was returning full authentication tokens in 500 error response bodies — visible to anyone intercepting network traffic.',
            how: 'While testing error handling scenarios with Postman, intentionally triggered server errors and inspected response payloads. Found raw JWT tokens in the error stack trace.',
            impact: 'Security vulnerability fixed before public release. Backend team sanitized all error responses and added a response middleware filter.',
        },
        {
            icon: <Zap size={20} />,
            severity: 'High',
            title: 'Infinite Scroll Memory Leak Crashing iOS App',
            app: 'Kutumb',
            what: 'App crashed after scrolling through ~200 feed posts on iOS. Memory usage kept climbing without release, eventually killed by the OS.',
            how: 'Used Xcode Instruments to profile memory during extended scrolling sessions. Found images were being cached in memory without eviction policy.',
            impact: 'Crash-free session rate improved from 97.2% to 99.1% after the fix. Affected ~18% of iOS users who were heavy scrollers.',
        },
        {
            icon: <Database size={20} />,
            severity: 'High',
            title: 'Race Condition in Concurrent API Writes',
            app: 'BANGDB',
            what: 'Two simultaneous PUT requests to the same resource would overwrite each other silently — no conflict detection, last write always won.',
            how: 'Created a Postman collection that fired parallel requests using Newman. Compared database state after concurrent writes and found data inconsistency.',
            impact: 'Led to implementation of optimistic locking with version numbers. Prevented data corruption for multi-user dashboard workflows.',
        },
        {
            icon: <AlertTriangle size={20} />,
            severity: 'Medium',
            title: 'Deep Links Breaking After iOS 16.4 Update',
            app: 'Kutumb',
            what: 'Universal links stopped working on iOS 16.4+ — tapping shared links opened Safari instead of the app, breaking the entire referral flow.',
            how: 'Tested across iOS versions after OS update. Found Apple changed the AASA file validation rules. Verified using Charles Proxy that the file was being fetched but rejected.',
            impact: 'Fixed within hours of discovery. Referral flow was the primary growth channel — delay could have impacted 50K+ monthly invite-driven installs.',
        },
    ];

    const severityConfig = {
        Critical: { color: '#E07A5F', bg: 'rgba(224, 122, 95, 0.1)', border: 'rgba(224, 122, 95, 0.25)' },
        High: { color: '#F2CC8F', bg: 'rgba(242, 204, 143, 0.1)', border: 'rgba(242, 204, 143, 0.25)' },
        Medium: { color: '#81B29A', bg: 'rgba(129, 178, 154, 0.1)', border: 'rgba(129, 178, 154, 0.25)' },
    };

    return (
        <section id="bug-stories" className="section bug-stories">
            <div className="container">
                <motion.div
                    className="bugs-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="section-eyebrow">Impact</span>
                    <h2 className="section-title">Biggest Bugs I've Found</h2>
                    <p className="section-desc">Real bugs caught in production-bound code — the kind that save users, money, and trust</p>
                </motion.div>

                <div className="bugs-grid">
                    {bugs.map((bug, index) => {
                        const sev = severityConfig[bug.severity];
                        return (
                            <motion.div
                                className="bug-card"
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="bug-card-top">
                                    <div className="bug-icon" style={{ color: sev.color, background: sev.bg }}>
                                        {bug.icon}
                                    </div>
                                    <span
                                        className="bug-severity"
                                        style={{ color: sev.color, background: sev.bg, borderColor: sev.border }}
                                    >
                                        <Bug size={11} />
                                        {bug.severity}
                                    </span>
                                </div>

                                <h3 className="bug-title">{bug.title}</h3>
                                <span className="bug-app">{bug.app}</span>

                                <div className="bug-details">
                                    <div className="bug-detail">
                                        <span className="bug-detail-label">What happened</span>
                                        <p>{bug.what}</p>
                                    </div>
                                    <div className="bug-detail">
                                        <span className="bug-detail-label">How I found it</span>
                                        <p>{bug.how}</p>
                                    </div>
                                    <div className="bug-detail bug-detail-impact">
                                        <span className="bug-detail-label">Impact</span>
                                        <p>{bug.impact}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default BugStories;
