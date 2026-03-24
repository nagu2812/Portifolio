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
                        <a href="https://github.com/nagu2812" target="_blank" rel="noreferrer" className="footer-icon"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/nagendra-chanuboyina-8b52b32b4/" target="_blank" rel="noreferrer" className="footer-icon"><Linkedin size={20} /></a>
                        <a href="https://leetcode.com/u/nrokzzz_/" target="_blank" rel="noreferrer" className="footer-icon"><Code size={20} /></a>
                        <a href="mailto:chanuboyinanagendra@gmail.com" className="footer-icon"><Mail size={20} /></a>
                    </div>
                </div>

                <div className="footer-col links-col">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/experience">Experience</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
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
                    <p className="qualifier-text">ICPC Amritapuri Onsite 2025 — Rank 132 | Team CodeBlooded</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
