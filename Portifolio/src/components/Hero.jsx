
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, ArrowRight, Github, Linkedin, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import Stats from './Stats';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="hero-badge">
                        <span className="sparkle">✨</span> ICPC 2025 Amritapuri Regional Qualifier
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <br />
                        <span className="text-gradient">Nagendra</span>
                    </h1>

                    <p className="hero-description">
                        A passionate Full Stack Developer & Competitive Programmer building impactful solutions with modern web technologies and machine learning.
                    </p>

                    <div className="tech-stack">
                        {['React', 'Node.js', 'Python', 'Java', 'MongoDB', 'Machine Learning'].map((tech) => (
                            <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                    </div>


                    <div className="hero-buttons">
                        <Link to="/projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} />
                        </Link>
                        <button className="btn btn-outline">
                            <Download size={18} /> Download Resume
                        </button>
                    </div>

                    <div className="hero-social">
                        <span>Find me on</span>
                        <div className="social-links">
                            <a href="#" className="social-icon"><Github size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Code size={20} /></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-stats"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Stats />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

