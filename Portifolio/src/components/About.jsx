import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about" id="about">
            <motion.div
                className="container about-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h4 className="section-label">ABOUT ME</h4>
                <h2 className="about-title">Turning Ideas into Reality</h2>

                <div className="about-content">
                    <p>
                        I'm a Computer Science student at Aditya Engineering College with a passion for solving complex problems through code. From building full-stack web applications to competing at ICPC regional rounds, I'm constantly pushing my boundaries in software development.
                    </p>
                    <p>
                        My expertise spans the MERN stack, Python, and Machine Learning. I've developed projects that combine intelligent systems with practical applications, like an email classification system with automated deadline reminders.
                    </p>
                </div>

                <button className="btn btn-outline about-btn">
                    Learn More About Me <ArrowRight size={18} />
                </button>
            </motion.div>
        </section>
    );
};

export default About;
