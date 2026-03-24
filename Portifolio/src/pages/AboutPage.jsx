import React from 'react';
import { MapPin, Mail, Phone, Calendar, Download, ArrowRight, GraduationCap, Trophy, Award, BookOpen, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <div className="container">
                {/* Intro Section */}
                <section className="about-hero">
                    <motion.div
                        className="about-image-col"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="profile-card-display">
                            <div className="profile-card-content">
                                <span className="cn-text">CN</span>
                            </div>

                            {/* Floating Badges */}
                            <div className="floating-badge badge-codechef">
                                <div className="badge-icon"><CodeIcon /></div>
                                <div>
                                    <div className="badge-title">CodeChef</div>
                                    <div className="badge-sub">3★ Coder</div>
                                </div>
                            </div>

                            <div className="floating-badge badge-icpc">
                                <div className="badge-icon"><TrophyIcon /></div>
                                <div>
                                    <div className="badge-title">ICPC Rank 132</div>
                                    <div className="badge-sub">Amritapuri Onsite 2025</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-info-col"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="section-label">ABOUT ME</span>
                        <h1 className="profile-name">Chanuboyina Nagendra</h1>
                        <h2 className="profile-role">Full Stack Developer & Competitive Programmer</h2>

                        <div className="profile-bio">
                            <p>
                                I'm a passionate Computer Science student at Aditya Engineering College, driven by the challenge of solving complex problems through elegant code. My journey spans from building intelligent web applications to competing at prestigious programming contests like ICPC.
                            </p>
                            <p>
                                With hands-on experience in the MERN stack, Python, and Machine Learning, I specialize in creating full-stack solutions that make a real impact. Whether it's developing an email classification system with ML or competing at the ICPC regional rounds, I'm constantly pushing the boundaries of what's possible with code.
                            </p>
                        </div>

                        <div className="contact-grid">
                            <div className="contact-item">
                                <MapPin size={20} className="c-icon" />
                                <span>Surampalem, India</span>
                            </div>
                            <div className="contact-item">
                                <Mail size={20} className="c-icon" />
                                <span>chanuboyinanagendra@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={20} className="c-icon" />
                                <span>+91 9346853554</span>
                            </div>
                            <div className="contact-item">
                                <Calendar size={20} className="c-icon" />
                                <span>B.Tech 2023-2027</span>
                            </div>
                        </div>

                        <div className="profile-actions">
                            <a href="/contact" className="btn btn-primary">
                                Get In Touch <ArrowRight size={18} />
                            </a>
                            <a href="/nagendra_ml.pdf" download="Nagendra_Resume.pdf" className="btn btn-outline">
                                <Download size={18} /> Download Resume
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Education Section */}
                <section className="education-section">
                    <div className="section-center-header">
                        <span className="section-subtitle">EDUCATION</span>
                        <h2 className="section-title">Academic Journey</h2>
                    </div>

                    <div className="education-grid">
                        <div className="edu-card">
                            <div className="edu-icon bg-blue"><GraduationCap size={28} /></div>
                            <h3 className="edu-school">Aditya Engineering College</h3>
                            <p className="edu-loc"><MapPin size={14} /> Surampalem</p>
                            <p className="edu-degree">Bachelor of Technology - Computer Science Engineering</p>
                            <div className="edu-footer">
                                <span className="edu-grade">CGPA: 8.8/10</span>
                                <span className="edu-year">2023 - 2027</span>
                            </div>
                        </div>

                        <div className="edu-card">
                            <div className="edu-icon bg-purple"><GraduationCap size={28} /></div>
                            <h3 className="edu-school">Pragathi Junior College</h3>
                            <p className="edu-loc"><MapPin size={14} /> Prathipadu</p>
                            <p className="edu-degree">Intermediate</p>
                            <div className="edu-footer">
                                <span className="edu-grade">969/1000</span>
                                <span className="edu-year">2021 - 2023</span>
                            </div>
                        </div>

                        <div className="edu-card">
                            <div className="edu-icon bg-teal"><GraduationCap size={28} /></div>
                            <h3 className="edu-school">Z P P High School</h3>
                            <p className="edu-loc"><MapPin size={14} /> Geddanapalli</p>
                            <p className="edu-degree">Secondary Education</p>
                            <div className="edu-footer">
                                <span className="edu-grade">592/600</span>
                                <span className="edu-year">2021</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Milestones Section */}
                <section className="milestones-section">
                    <div className="section-center-header">
                        <h2 className="section-title">Milestones & Recognition</h2>
                    </div>

                    <div className="milestones-grid">
                        <MilestoneCard
                            icon={<Trophy size={28} />}
                            color="yellow"
                            title="ICPC Amritapuri Onsite 2025 — Rank 132"
                            desc="Achieved Rank 132 at ICPC Amritapuri Onsite 2025 as a member of team CodeBlooded, competing among top collegiate programming teams nationwide."
                            badge="Rank 132"
                        />
                        <MilestoneCard
                            icon={<Award size={28} />}
                            color="gold"
                            title="1st Place - Competitive Coding Competition"
                            desc="Won first place in a competitive coding competition conducted by Aditya University, showcasing strong algorithmic skills."
                            badge="1st Place"
                        />
                        <MilestoneCard
                            icon={<Award size={28} />}
                            color="red"
                            title="Red Hat Certified System Administrator"
                            desc="Earned the RHCSA certification from Red Hat Academy, demonstrating proficiency in Linux system administration."
                        />
                        <MilestoneCard
                            icon={<BookOpen size={28} />}
                            color="blue"
                            title="Multi-Language Certifications"
                            desc="Earned certifications in C, C++, and Python from Cisco Networking Academy, and Java from Oracle."
                        />
                        <MilestoneCard
                            icon={<Star size={28} />}
                            color="purple"
                            title="3★ CodeChef & Pupil on Codeforces"
                            desc="Achieved 3-star rating on CodeChef and Pupil status on Codeforces through consistent competitive programming practice."
                        />
                        <MilestoneCard
                            icon={<Zap size={28} />}
                            color="green"
                            title="Academic Excellence"
                            desc="Maintaining 8.8/10 CGPA at Aditya Engineering College while actively participating in coding competitions and internships."
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

// Helper Components
const CodeIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
const TrophyIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>;

const MilestoneCard = ({ icon, color, title, desc, badge }) => (
    <div className={`milestone-card color-${color}`}>
        <div className="milestone-header">
            <div className={`milestone-icon bg-${color}`}>{icon}</div>
            {badge && <span className={`milestone-badge bg-${color}`}>{badge}</span>}
        </div>
        <h3 className="milestone-title">{title}</h3>
        <p className="milestone-desc">{desc}</p>
    </div>
);

export default AboutPage;
