import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Code } from 'lucide-react';
import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser'; // Uncomment when ready to integrate
import './ContactPage.css';

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

        // Simulating email sending for now
        // To use EmailJS:
        // 1. npm install @emailjs/browser
        // 2. emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error('Error sending email:', error);
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
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="status-msg success">Message sent successfully!</p>
                            )}
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="contact-info-wrapper">
                        <div className="info-grid">
                            <InfoCard
                                icon={<Mail size={24} />}
                                label="Email"
                                value="23a91a0581@aec.edu.in"
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
                                    username="@nagendra"
                                    url="https://github.com"
                                />
                                <SocialLink
                                    icon={<Linkedin size={24} />}
                                    name="LinkedIn"
                                    username="Chanuboyina Nagendra"
                                    url="https://linkedin.com"
                                />
                                <SocialLink
                                    icon={<Code size={24} />}
                                    name="LeetCode"
                                    username="@nagendra"
                                    url="https://leetcode.com"
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
