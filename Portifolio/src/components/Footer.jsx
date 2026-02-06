import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-col brand-col">
                    <div className="logo-section dark-mode">
                        <div className="logo-icon">CN</div>
                        <span className="logo-text">Chanuboyina Nagendra</span>
                    </div>
                    <p className="footer-role">Full Stack Developer</p>
                    <p className="footer-desc">
                        Passionate about building innovative solutions and solving complex problems. Currently pursuing B.Tech in Computer Science at Aditya Engineering College.
                    </p>
                    <div className="footer-socials">
                        <a href="#" className="footer-icon"><Github size={20} /></a>
                        <a href="#" className="footer-icon"><Linkedin size={20} /></a>
                        <a href="#" className="footer-icon"><Code size={20} /></a>
                        <a href="#" className="footer-icon"><Mail size={20} /></a>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col profiles-col">
                    <h3 className="footer-title">Coding Profiles</h3>
                    <ul className="profile-list">
                        <li>
                            <span>CodeChef</span>
                            <span className="badge badge-star">3★</span>
                        </li>
                        <li>
                            <span>Codeforces</span>
                            <span className="badge badge-pupil">Pupil</span>
                        </li>
                        <li>
                            <span>LeetCode</span>
                            {/* Badge implied or just link */}
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container bottom-content">
                    <p>&copy; 2025 Nagendra. Built with <Heart size={14} fill="#ef4444" color="#ef4444" /> using React</p>
                    <p className="qualifier-text">ICPC 2025 Amritapuri Regional Qualifier</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
