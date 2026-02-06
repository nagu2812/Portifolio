import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Layers, Cpu, Wrench, GitBranch, Globe, Terminal, Box } from 'lucide-react';
import './SkillsPage.css';

const SkillsPage = () => {
    return (
        <div className="skills-page">
            <div className="container">
                <header className="skills-hero">
                    <span className="skills-subtitle">Technical Skills</span>
                    <h1 className="skills-title">My Tech Stack</h1>
                    <p className="skills-desc">
                        A comprehensive overview of the technologies, tools, and frameworks I work with to build innovative solutions.
                    </p>
                </header>

                <div className="skills-container">
                    {/* Programming Languages */}
                    <SkillCategory
                        icon={<Code size={24} />}
                        title="Programming Languages"
                        theme="blue"
                        skills={[
                            { name: 'C++', level: 5 },
                            { name: 'Java', level: 4 },
                            { name: 'Python', level: 5 },
                            { name: 'JavaScript', level: 4 },
                            { name: 'HTML/CSS', level: 5 }
                        ]}
                    />

                    {/* Frameworks & Libraries */}
                    <SkillCategory
                        icon={<Layers size={24} />}
                        title="Frameworks & Libraries"
                        theme="teal"
                        skills={[
                            { name: 'React.js', level: 5 },
                            { name: 'Node.js', level: 4 },
                            { name: 'Express.js', level: 4 },
                            { name: 'Flask', level: 3 },
                            { name: 'React Native', level: 3 }
                        ]}
                    />

                    {/* Databases */}
                    <SkillCategory
                        icon={<Database size={24} />}
                        title="Databases"
                        theme="green"
                        skills={[
                            { name: 'MongoDB', level: 4 },
                            { name: 'SQL', level: 4 }
                        ]}
                    />

                    {/* Technologies */}
                    <SkillCategory
                        icon={<Cpu size={24} />}
                        title="Technologies"
                        theme="purple"
                        skills={[
                            { name: 'Machine Learning', level: 4 },
                            { name: 'Deep Learning', level: 3 },
                            { name: 'MERN Stack', level: 5 }
                        ]}
                    />

                    {/* CS Fundamentals */}
                    <SkillCategory
                        icon={<Terminal size={24} />}
                        title="CS Fundamentals"
                        theme="orange"
                        skills={[
                            { name: 'Data Structures & Algorithms', level: 5 },
                            { name: 'Object Oriented Programming', level: 4 },
                            { name: 'Operating Systems', level: 4 },
                            { name: 'Database Management Systems', level: 4 }
                        ]}
                    />

                    {/* Developer Tools */}
                    <SkillCategory
                        icon={<Wrench size={24} />}
                        title="Developer Tools"
                        theme="pink"
                        skills={[
                            { name: 'VS Code', level: 5 },
                            { name: 'Jupyter', level: 4 },
                            { name: 'Sublime Text', level: 4 }
                        ]}
                    />

                    {/* Version Control */}
                    <SkillCategory
                        icon={<GitBranch size={24} />}
                        title="Version Control"
                        theme="dark"
                        skills={[
                            { name: 'Git', level: 4 },
                            { name: 'GitHub', level: 4 }
                        ]}
                    />
                </div>

                {/* CP Section */}
                <section className="cp-section">
                    <header className="section-center-header">
                        <span className="skills-subtitle">COMPETITIVE PROGRAMMING</span>
                        <h2 className="skills-title">Coding Profiles</h2>
                        <p className="skills-desc">
                            Active competitive programmer with consistent practice on multiple platforms.
                        </p>
                    </header>

                    <div className="cp-grid">
                        <CPCard
                            platform="CodeChef"
                            rating="3★"
                            badgeColor="orange"
                            icon={<Code size={32} />}
                            color="#f59e0b"
                        />
                        <CPCard
                            platform="Codeforces"
                            rating="Pupil"
                            badgeColor="blue"
                            icon={<Terminal size={32} />}
                            color="#2563eb"
                        />
                        <CPCard
                            platform="LeetCode"
                            rating="Active"
                            badgeColor="orange"
                            icon={<Code size={32} />}
                            color="#ea580c"
                        />
                        <CPCard
                            platform="HackerRank"
                            rating="Active"
                            badgeColor="green"
                            icon={<Code size={32} />}
                            color="#16a34a"
                        />
                    </div>

                    <div className="achievement-banner">
                        <div className="achievement-icon">
                            <Globe size={40} color="white" />
                        </div>
                        <h3 className="achievement-title">ICPC 2025 Amritapuri Regional Qualifier</h3>
                        <p className="achievement-desc">
                            Qualified with team "Codeblooded" and promoted to the on-site regional round.
                            <br />
                            One of the most prestigious competitive programming achievements.
                        </p>
                    </div>
                </section>

                {/* Certifications */}
                <section className="certs-section">
                    <header className="section-center-header">
                        <span className="skills-subtitle">CERTIFICATIONS</span>
                        <h2 className="skills-title">Professional Credentials</h2>
                    </header>

                    <div className="certs-grid">
                        <CertCard
                            name="RHCSA"
                            issuer="Red Hat"
                            icon={<Server size={20} />}
                            color="#dc2626"
                            bgColor="#fee2e2"
                        />
                        <CertCard
                            name="C"
                            issuer="Cisco"
                            icon={<Box size={20} />}
                            color="#2563eb"
                            bgColor="#dbeafe"
                        />
                        <CertCard
                            name="C++"
                            issuer="Cisco"
                            icon={<Box size={20} />}
                            color="#9333ea"
                            bgColor="#f3e8ff"
                        />
                        <CertCard
                            name="Python"
                            issuer="Cisco"
                            icon={<Box size={20} />}
                            color="#16a34a"
                            bgColor="#dcfce7"
                        />
                        <CertCard
                            name="Java"
                            issuer="Oracle"
                            icon={<Box size={20} />}
                            color="#ea580c"
                            bgColor="#ffedd5"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

// Helper Components
const SkillCategory = ({ icon, title, skills, theme }) => (
    <motion.div
        className={`skill-category-container cat-${theme}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
    >
        <div className="category-header">
            <div className="category-icon">{icon}</div>
            <h3 className="category-title">{title}</h3>
        </div>
        <div className="skills-list">
            {skills.map((skill, index) => (
                <div key={index} className="skill-pill">
                    <span>{skill.name}</span>
                    <div className="proficiency-dots">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`dot ${i < skill.level ? 'filled' : ''}`} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

const CPCard = ({ platform, rating, icon, color, badgeColor }) => (
    <div className="cp-card" style={{ '--hover-color': color }}>
        <div className="cp-icon" style={{ backgroundColor: color }}>
            {icon}
        </div>
        <h3 className="cp-platform">{platform}</h3>
        <span className={`cp-rating ${badgeColor}`}>{rating}</span>
    </div>
);

const CertCard = ({ name, issuer, icon, color, bgColor }) => (
    <div className="cert-card">
        <div className="cert-icon" style={{ color: color, backgroundColor: bgColor }}>
            {icon}
        </div>
        <div className="cert-info">
            <h4>{name}</h4>
            <span>{issuer}</span>
        </div>
    </div>
);

export default SkillsPage;
