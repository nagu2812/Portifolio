import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Code, CheckCircle, XCircle, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const templateParams = {
            from_name:  formData.name,
            from_email: formData.email,
            subject:    formData.subject,
            message:    formData.message,
            to_name:    'Nagendra'
        };

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 6000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="container">
                <header className="contact-hero">
                    <span className="contact-subtitle">GET IN TOUCH</span>
                    <h1 className="contact-title">Let's Connect</h1>
                    <p className="contact-desc">
                        I'm always open to discussing new opportunities, innovative projects, or just having
                        a chat about technology and competitive programming.
                    </p>
                </header>

                <div className="contact-content">
                    {/* Contact Form */}
                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="form-header">
                            <div className="form-icon">
                                <Send size={24} color="white" />
                            </div>
                            <h3>Send a Message</h3>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What's this about?"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or opportunity..."
                                    rows="5"
                                    required
                                />
                            </div>

                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader size={18} className="spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </button>

                            <AnimatePresence>
                                {submitStatus === 'success' && (
                                    <motion.div
                                        className="status-msg success"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <CheckCircle size={20} />
                                        <span>Message sent! I'll get back to you within 24 hours.</span>
                                    </motion.div>
                                )}
                                {submitStatus === 'error' && (
                                    <motion.div
                                        className="status-msg error"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <XCircle size={20} />
                                        <span>Failed to send. Please email me directly at <a href="mailto:chanuboyinanagendra@gmail.com">chanuboyinanagendra@gmail.com</a></span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="contact-info-wrapper">
                        <div className="info-grid">
                            <InfoCard
                                icon={<Mail size={24} />}
                                label="Email"
                                value="chanuboyinanagendra@gmail.com"
                                color="blue"
                            />
                            <InfoCard
                                icon={<Phone size={24} />}
                                label="Phone"
                                value="+91 9346853554"
                                color="green"
                            />
                            <InfoCard
                                icon={<MapPin size={24} />}
                                label="Location"
                                value="Surampalem, India"
                                subValue="Aditya Engineering College"
                                color="purple"
                            />
                            <InfoCard
                                icon={<Clock size={24} />}
                                label="Response Time"
                                value="Within 24 hours"
                                color="orange"
                            />
                        </div>

                        <div className="social-connect-card">
                            <h3>Connect on Social</h3>
                            <div className="social-links-list">
                                <SocialLink
                                    icon={<Github size={24} />}
                                    name="GitHub"
                                    username="@nagu2812"
                                    url="https://github.com/nagu2812"
                                />
                                <SocialLink
                                    icon={<Linkedin size={24} />}
                                    name="LinkedIn"
                                    username="Chanuboyina Nagendra"
                                    url="https://www.linkedin.com/in/nagendra-chanuboyina-8b52b32b4/"
                                />
                                <SocialLink
                                    icon={<Code size={24} />}
                                    name="LeetCode"
                                    username="@nrokzzz_"
                                    url="https://leetcode.com/u/nrokzzz_/"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoCard = ({ icon, label, value, subValue, color }) => (
    <motion.div
        className="info-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <div className={`info-icon bg-${color}`}>
            {icon}
        </div>
        <div className="info-details">
            <span className="info-label">{label}</span>
            <p className="info-value">{value}</p>
            {subValue && <span className="info-sub">{subValue}</span>}
        </div>
    </motion.div>
);

const SocialLink = ({ icon, name, username, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social-row-link">
        <div className="social-icon">
            {icon}
        </div>
        <div className="social-details">
            <span className="social-name">{name}</span>
            <span className="social-user">{username}</span>
        </div>
        <div className="social-arrow">↗</div>
    </a>
);

export default ContactPage;
