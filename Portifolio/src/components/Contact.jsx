import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    const navigate = useNavigate();

    return (
        <section className="contact" id="contact">
            <div className="container">
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="contact-title">Interested in collaborating?</h2>
                    <p className="contact-desc">
                        I'm always excited to work on innovative projects. Let's build something amazing together!
                    </p>
                    <button className="contact-btn" onClick={() => navigate('/contact')}>
                        <Mail size={20} /> Get In Touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
