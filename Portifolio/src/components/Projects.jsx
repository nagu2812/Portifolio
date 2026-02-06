import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mail, Bell, Shield, ExternalLink, Code as CodeIcon } from 'lucide-react';
import './Projects.css';

const features = [
    {
        icon: <Brain size={32} />,
        title: 'Machine Learning',
        desc: 'Implemented ML algorithms for intelligent email categorization',
        color: 'bg-purple-100 text-purple-600'
    },
    {
        icon: <Mail size={32} />,
        title: 'Email Processing',
        desc: 'Built systems to parse and analyze email content at scale',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: <Bell size={32} />,
        title: 'Smart Notifications',
        desc: 'WhatsApp integration for automated deadline reminders',
        color: 'bg-green-100 text-green-600'
    },
    {
        icon: <Shield size={32} />,
        title: 'Security First',
        desc: 'Authentication, spam filtering, and secure data handling',
        color: 'bg-orange-100 text-orange-600'
    }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">

                {/* Header */}
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle">PORTFOLIO</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-desc">
                        A showcase of my work in full-stack development, machine learning, and building solutions that solve real-world problems.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className={`feature-icon ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Project Spotlight: Last Line */}
                <motion.div
                    className="project-showcase"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="showcase-media">
                        {/* Placeholder for project image/video */}
                        <div className="media-placeholder">
                            <div className="app-icon-large">
                                {/* Abstract icon representation */}
                                <span className="sparkle-large">✨</span>
                            </div>
                        </div>
                        <div className="media-actions">
                            <button className="media-btn"><CodeIcon size={18} /> Code</button>
                            <button className="media-btn primary"><ExternalLink size={18} /> Live Demo</button>
                        </div>
                    </div>

                    <div className="showcase-content">
                        <h3 className="project-title">Last Line - Smart Email Classifier</h3>
                        <p className="project-overview">
                            An intelligent email classification system that automatically categorizes emails into Jobs, Internships, Hackathons, and Others using Machine Learning algorithms. Features deadline extraction and automated WhatsApp reminders.
                        </p>

                        <ul className="project-highlights">
                            <li>ML-powered email classification with 95%+ accuracy</li>
                            <li>Automatic deadline extraction and prediction from email content</li>
                            <li>WhatsApp Cloud API integration for automated deadline reminders</li>
                        </ul>

                        <div className="tech-pills">
                            {['Python', 'Flask', 'React.js', 'Node.js', 'MongoDB', 'Machine Learning'].map(t => (
                                <span key={t} className="tech-pill">{t}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Deep Dive Section */}
                <div className="deep-dive-section">
                    <div className="section-center-header">
                        <span className="section-subtitle">DEEP DIVE</span>
                        <h2 className="section-title">Last Line - In Detail</h2>
                    </div>

                    <div className="deep-dive-content">
                        <div className="detail-media">
                            <div className="blue-card-display">
                                <div className="center-icon">
                                    <span className="sparkle-white">✨</span>
                                    <span className="app-name">Last Line</span>
                                </div>
                                <div className="floating-pills">
                                    <span>Python</span><span>React</span><span>MongoDB</span><span>ML</span>
                                </div>
                            </div>
                        </div>

                        <div className="detail-info">
                            <h3 className="detail-heading">Smart Email Classification System</h3>
                            <p className="detail-text">
                                Last Line is a comprehensive email management solution that leverages machine learning to automatically categorize incoming emails, extract important deadlines, and send timely reminders via WhatsApp.
                            </p>

                            <div className="feature-list">
                                <div className="feature-item">
                                    <div className="f-icon bg-purple-100 text-purple-600"><Brain size={20} /></div>
                                    <div>
                                        <h4>ML Classification</h4>
                                        <p>Trained models to categorize emails into Jobs, Internships, Hackathons, and Others with high accuracy.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="f-icon bg-blue-100 text-blue-600"><Mail size={20} /></div>
                                    <div>
                                        <h4>Deadline Extraction</h4>
                                        <p>NLP-based system to automatically extract and predict application deadlines from email content.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="f-icon bg-green-100 text-green-600"><Bell size={20} /></div>
                                    <div>
                                        <h4>WhatsApp Integration</h4>
                                        <p>Integrated WhatsApp Cloud API for automated deadline reminders, ensuring you never miss an opportunity.</p>
                                    </div>
                                </div>

                                <div className="feature-item">
                                    <div className="f-icon bg-orange-100 text-orange-600"><Shield size={20} /></div>
                                    <div>
                                        <h4>Full-Stack Architecture</h4>
                                        <p>Complete web application with authentication, spam filtering, and real-time notifications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
