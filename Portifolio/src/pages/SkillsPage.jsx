import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layers, Cpu, Wrench, GitBranch, Globe, Terminal, Box } from 'lucide-react';
import './SkillsPage.css';

/* ─── Animation Variants ─── */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' }
    })
};

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' }
    })
};

const SkillsPage = () => {
    const categories = [
        {
            icon: <Code size={24} />,
            title: 'Programming Languages',
            theme: 'blue',
            skills: [
                { name: 'C++', level: 5 },
                { name: 'Java', level: 4 },
                { name: 'Python', level: 5 },
                { name: 'JavaScript', level: 4 },
                { name: 'HTML/CSS', level: 5 }
            ]
        },
        {
            icon: <Layers size={24} />,
            title: 'Frameworks & Libraries',
            theme: 'teal',
            skills: [
                { name: 'React.js', level: 5 },
                { name: 'Node.js', level: 4 },
                { name: 'Express.js', level: 4 },
                { name: 'Flask', level: 3 },
                { name: 'Scikit-learn', level: 4 },
                { name: 'React Native', level: 3 }
            ]
        },
        {
            icon: <Database size={24} />,
            title: 'Databases',
            theme: 'green',
            skills: [
                { name: 'MongoDB', level: 4 },
                { name: 'SQL', level: 4 }
            ]
        },
        {
            icon: <Cpu size={24} />,
            title: 'ML & AI',
            theme: 'purple',
            skills: [
                { name: 'Machine Learning', level: 4 },
                { name: 'Deep Learning', level: 3 },
                { name: 'NLP', level: 4 },
                { name: 'Naive Bayes', level: 4 },
                { name: 'Feature Engineering', level: 3 },
                { name: 'MERN Stack', level: 5 }
            ]
        },
        {
            icon: <Terminal size={24} />,
            title: 'CS Fundamentals',
            theme: 'orange',
            skills: [
                { name: 'Data Structures & Algorithms', level: 5 },
                { name: 'Object Oriented Programming', level: 4 },
                { name: 'Operating Systems', level: 4 },
                { name: 'Database Management Systems', level: 4 }
            ]
        },
        {
            icon: <Wrench size={24} />,
            title: 'Developer Tools',
            theme: 'pink',
            skills: [
                { name: 'VS Code', level: 5 },
                { name: 'Jupyter', level: 4 },
                { name: 'Docker (Basics)', level: 2 },
                { name: 'Sublime Text', level: 4 }
            ]
        },
        {
            icon: <GitBranch size={24} />,
            title: 'Version Control',
            theme: 'dark',
            skills: [
                { name: 'Git', level: 4 },
                { name: 'GitHub', level: 4 }
            ]
        }
    ];

    const cpPlatforms = [
        { platform: 'CodeChef', rating: '3★', badgeColor: 'orange', icon: <Code size={32} />, color: '#f59e0b' },
        { platform: 'Codeforces', rating: 'Pupil', badgeColor: 'blue', icon: <Terminal size={32} />, color: '#2563eb' },
        { platform: 'LeetCode', rating: 'Active', badgeColor: 'orange2', icon: <Code size={32} />, color: '#ea580c' },
        { platform: 'HackerRank', rating: 'Active', badgeColor: 'green', icon: <Code size={32} />, color: '#16a34a' }
    ];

    const certifications = [
        { name: 'RHCSA', issuer: 'Red Hat', icon: <Server size={20} />, color: '#dc2626', bgColor: '#fee2e2' },
        { name: 'C', issuer: 'Cisco', icon: <Box size={20} />, color: '#2563eb', bgColor: '#dbeafe' },
        { name: 'C++', issuer: 'Cisco', icon: <Box size={20} />, color: '#9333ea', bgColor: '#f3e8ff' },
        { name: 'Python', issuer: 'Cisco', icon: <Box size={20} />, color: '#16a34a', bgColor: '#dcfce7' },
        { name: 'Java', issuer: 'Oracle', icon: <Box size={20} />, color: '#ea580c', bgColor: '#ffedd5' }
    ];

    return (
        <div className="skills-page">
            <div className="container">

                {/* ─── Hero Header ─── */}
                <motion.header
                    className="skills-hero"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <motion.span className="skills-subtitle" variants={fadeUp} custom={0}>
                        TECHNICAL SKILLS
                    </motion.span>
                    <motion.h1 className="skills-title" variants={fadeUp} custom={1}>
                        My Tech Stack
                    </motion.h1>
                    <motion.p className="skills-desc" variants={fadeUp} custom={2}>
                        A comprehensive overview of the technologies, tools, and frameworks I work with to build innovative solutions.
                    </motion.p>
                </motion.header>

                {/* ─── Skill Categories ─── */}
                <div className="skills-container">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            className={`skill-category-container cat-${cat.theme}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            variants={fadeUp}
                            custom={i % 2 === 0 ? 0 : 0.1}
                        >
                            <div className="category-header">
                                <div className="category-icon">{cat.icon}</div>
                                <h3 className="category-title">{cat.title}</h3>
                            </div>
                            <div className="skills-list">
                                {cat.skills.map((skill, j) => (
                                    <motion.div
                                        key={skill.name}
                                        className="skill-pill"
                                        initial={{ opacity: 0, scale: 0.85 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.35, delay: j * 0.07 }}
                                    >
                                        <span>{skill.name}</span>
                                        <div className="proficiency-dots">
                                            {[...Array(5)].map((_, k) => (
                                                <div key={k} className={`dot ${k < skill.level ? 'filled' : ''}`} />
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ─── Competitive Programming ─── */}
                <section className="cp-section">
                    <motion.header
                        className="section-center-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <span className="skills-subtitle">COMPETITIVE PROGRAMMING</span>
                        <h2 className="skills-title">Coding Profiles</h2>
                        <p className="skills-desc">
                            Active competitive programmer with consistent practice on multiple platforms
                        </p>
                    </motion.header>

                    <div className="cp-grid">
                        {cpPlatforms.map((cp, i) => (
                            <motion.div
                                key={cp.platform}
                                className="cp-card"
                                style={{ '--hover-color': cp.color }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeIn}
                                custom={i}
                            >
                                <div className="cp-icon" style={{ backgroundColor: cp.color }}>
                                    {cp.icon}
                                </div>
                                <h3 className="cp-platform">{cp.platform}</h3>
                                <span className={`cp-rating ${cp.badgeColor}`}>{cp.rating}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="achievement-banner"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <div className="achievement-icon">
                            <Globe size={40} color="white" />
                        </div>
                        <h3 className="achievement-title">ICPC Amritapuri Onsite 2025 — Rank 132</h3>
                        <p className="achievement-desc">
                            Achieved Rank 132 at ICPC Amritapuri Onsite 2025 as a member of team CodeBlooded,
                            <br />
                            competing among top collegiate programming teams across the country.
                        </p>
                    </motion.div>
                </section>

                {/* ─── Certifications ─── */}
                <section className="certs-section">
                    <motion.header
                        className="section-center-header"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeUp}
                    >
                        <span className="skills-subtitle">CERTIFICATIONS</span>
                        <h2 className="skills-title">Professional Credentials</h2>
                    </motion.header>

                    <div className="certs-grid">
                        {certifications.map((cert, i) => (
                            <motion.div
                                key={cert.name}
                                className="cert-card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeIn}
                                custom={i}
                            >
                                <div className="cert-icon" style={{ color: cert.color, backgroundColor: cert.bgColor }}>
                                    {cert.icon}
                                </div>
                                <div className="cert-info">
                                    <h4>{cert.name}</h4>
                                    <span>{cert.issuer}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default SkillsPage;
