import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Mail, Bell, Users, ExternalLink, Code as CodeIcon, Layers, Database } from 'lucide-react';
import './Projects.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' }
    })
};

const projects = [
    {
        name: 'Work-Ping',
        tagline: 'MERN Stack • Machine Learning • Flask • React Native',
        overview: 'A full-stack application using the MERN stack with integrated Machine Learning features. Implements a Face Recognition model using Python with data preprocessing and model optimization techniques.',
        highlights: [
            'Face Recognition model with Python — data preprocessing & model optimization',
            'Scalable RESTful APIs built with Node.js and Express.js',
            'MongoDB for data management with real-time processing',
            'End-to-end deployment pipeline ensuring scalability and performance'
        ],
        pills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask', 'Machine Learning', 'React Native'],
        icon: <Users size={40} color="white" />,
        gradient: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
        label: 'Live Demo',
        accentColor: '#2563eb'
    },
    {
        name: 'Mail-or-a',
        tagline: 'Python • Flask • React.js • Node.js • MongoDB • ML',
        overview: 'An Email Processing and Classification System using Machine Learning with Python — implements Naive Bayes for spam detection and category prediction with WhatsApp Cloud API for automated notifications.',
        highlights: [
            'Naive Bayes classifier for spam detection and email category prediction',
            'NLP techniques for text preprocessing and feature extraction',
            'Deadline extraction from emails with WhatsApp Cloud API notifications',
            'Full-stack web app with authentication and real-time updates'
        ],
        pills: ['Python', 'Flask', 'React.js', 'Node.js', 'MongoDB', 'Naive Bayes', 'NLP', 'WhatsApp API'],
        icon: <Mail size={40} color="white" />,
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
        label: 'View Project',
        accentColor: '#7c3aed'
    }
];

const features = [
    { icon: <Brain size={32} />, title: 'Machine Learning', desc: 'Naive Bayes, Face Recognition, NLP — integrating ML into production apps', color: 'bg-purple-100 text-purple-600' },
    { icon: <Layers size={32} />, title: 'Full Stack', desc: 'MERN stack with Flask microservices and React Native mobile support', color: 'bg-blue-100 text-blue-600' },
    { icon: <Bell size={32} />, title: 'Smart Automation', desc: 'WhatsApp Cloud API integration for real-time automated notifications', color: 'bg-green-100 text-green-600' },
    { icon: <Database size={32} />, title: 'Scalable APIs', desc: 'RESTful APIs with Node.js/Express.js and MongoDB for production-grade data handling', color: 'bg-orange-100 text-orange-600' }
];

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="container">

                {/* Header */}
                <motion.div
                    className="projects-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <span className="section-subtitle">PORTFOLIO</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-desc">
                        A showcase of my work in full-stack development, machine learning, and building solutions that solve real-world problems.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="features-grid">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            className="feature-card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            custom={i}
                        >
                            <div className={`feature-icon ${feature.color}`}>{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-desc">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Project Showcases */}
                {projects.map((project, i) => (
                    <motion.div
                        key={project.name}
                        className="project-showcase"
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.55, delay: i * 0.1 }}
                        style={{ marginBottom: i < projects.length - 1 ? '4rem' : '6rem' }}
                    >
                        <div className="showcase-media" style={{ background: project.gradient }}>
                            <div className="media-placeholder">
                                <div className="app-icon-large">{project.icon}</div>
                            </div>
                            <div className="media-actions">
                                <a href={`https://github.com/nagu2812`} target="_blank" rel="noreferrer" className="media-btn">
                                    <CodeIcon size={16} /> Code
                                </a>
                                <a href={`https://github.com/nagu2812`} target="_blank" rel="noreferrer" className="media-btn primary">
                                    <ExternalLink size={16} /> {project.label}
                                </a>
                            </div>
                        </div>

                        <div className="showcase-content">
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-tagline">{project.tagline}</p>
                            <p className="project-overview">{project.overview}</p>
                            <ul className="project-highlights">
                                {project.highlights.map((h, j) => <li key={j}>{h}</li>)}
                            </ul>
                            <div className="tech-pills">
                                {project.pills.map(t => (
                                    <span key={t} className="tech-pill">{t}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default Projects;
