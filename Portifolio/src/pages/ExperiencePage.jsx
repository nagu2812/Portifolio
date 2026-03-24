import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ExperiencePage.css';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' }
    })
};

const ExperiencePage = () => {
    const experiences = [
        {
            period: 'May 2025 - June 2025',
            role: 'Full Stack Development Intern',
            company: 'Technical Hub Pvt. Ltd',
            location: 'Surampalem',
            bullets: [
                'Developed an Email Spam Detection System using Scikit-learn and the Naive Bayes algorithm to classify emails as spam or non-spam',
                'Applied NLP techniques such as text preprocessing, tokenization, and feature extraction to improve model performance',
                'Designed and integrated the solution within a full-stack application, enabling automated, scalable, and real-time email filtering',
                'Gained hands-on experience with ML model deployment and end-to-end pipeline integration'
            ]
        }
    ];

    const education = [
        {
            period: '2023 - 2027',
            role: 'B.Tech in Computer Science Engineering',
            company: 'Aditya Engineering College',
            location: 'Surampalem',
            bullets: [
                'Pursuing Bachelor of Technology in Computer Science Engineering',
                'Active member of coding clubs and competitive programming teams',
                'Achieved Rank 132 at ICPC Amritapuri Onsite 2025 with team CodeBlooded',
                'Won 1st place in Competitive Coding Competition at Aditya University'
            ],
            score: 'CGPA: 8.8/10'
        },
        {
            period: '2021 - 2023',
            role: 'Intermediate',
            company: 'Pragathi Junior College',
            location: 'Prathipadu',
            bullets: [
                'Completed intermediate education with exceptional academic performance',
                'Scored 969 out of 1000 marks',
                'Developed strong foundation in Mathematics and Science'
            ],
            score: '969/1000'
        },
        {
            period: '2021',
            role: 'Secondary Education',
            company: 'Z P P High School',
            location: 'Geddanapalli',
            bullets: [
                'Completed secondary education with outstanding results',
                'Scored 592 out of 600 marks',
                'Early interest in computer science and problem-solving'
            ],
            score: '592/600'
        }
    ];

    const stats = [
        { value: '2+', label: 'Years of Study' },
        { value: '1',  label: 'Internship' },
        { value: '8.8', label: 'CGPA' },
        { value: '#132', label: 'ICPC Onsite 2025' }
    ];

    return (
        <div className="experience-page">
            <div className="container">

                {/* ─── Hero ─── */}
                <motion.header
                    className="experience-hero"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                >
                    <motion.span className="experience-subtitle" variants={fadeUp} custom={0}>
                        MY JOURNEY
                    </motion.span>
                    <motion.h1 className="experience-title" variants={fadeUp} custom={1}>
                        Experience & Education
                    </motion.h1>
                    <motion.p className="experience-desc" variants={fadeUp} custom={2}>
                        A timeline of my professional experience and academic journey in computer science and software development.
                    </motion.p>
                </motion.header>

                {/* ─── Stats ─── */}
                <div className="exp-stats-grid">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            className="exp-stat-card"
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            custom={i + 3}
                        >
                            <div className="exp-stat-number">{s.value}</div>
                            <div className="exp-stat-label">{s.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* ─── Professional Experience ─── */}
                <section className="exp-section">
                    <motion.div
                        className="section-header-inline"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="section-icon-badge blue"><Briefcase size={22} /></div>
                        <h2 className="section-inline-title">Professional Experience</h2>
                    </motion.div>

                    <div className="exp-timeline">
                        {experiences.map((exp, i) => (
                            <TimelineEntry
                                key={i}
                                data={exp}
                                index={i}
                                iconColor="blue"
                                icon={<Briefcase size={22} />}
                            />
                        ))}
                    </div>
                </section>

                {/* ─── Education ─── */}
                <section className="exp-section">
                    <motion.div
                        className="section-header-inline"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="section-icon-badge purple"><GraduationCap size={22} /></div>
                        <h2 className="section-inline-title">Education</h2>
                    </motion.div>

                    <div className="exp-timeline">
                        {education.map((edu, i) => (
                            <TimelineEntry
                                key={i}
                                data={edu}
                                index={i}
                                iconColor="purple"
                                icon={<GraduationCap size={22} />}
                            />
                        ))}
                    </div>
                </section>

                {/* ─── CTA ─── */}
                <motion.section
                    className="skills-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                >
                    <h2 className="cta-title">Want to know more about my skills?</h2>
                    <p className="cta-desc">
                        Check out my technical skills and the technologies I work with to build amazing solutions.
                    </p>
                    <Link to="/skills" className="btn btn-primary cta-btn">
                        View My Skills <ArrowRight size={18} />
                    </Link>
                </motion.section>

            </div>
        </div>
    );
};

/* ─── Timeline Entry ─── */
const TimelineEntry = ({ data, index, iconColor, icon }) => {
    const isLeft = index % 2 === 0;
    return (
        <motion.div
            className={`timeline-entry ${isLeft ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {isLeft ? (
                <>
                    <div className="tl-card-col"><ExpCard data={data} /></div>
                    <div className="tl-node-col">
                        <div className={`tl-node-icon ${iconColor}`}>{icon}</div>
                    </div>
                    <div className="tl-empty-col" />
                </>
            ) : (
                <>
                    <div className="tl-empty-col" />
                    <div className="tl-node-col">
                        <div className={`tl-node-icon ${iconColor}`}>{icon}</div>
                    </div>
                    <div className="tl-card-col"><ExpCard data={data} /></div>
                </>
            )}
        </motion.div>
    );
};

/* ─── Card ─── */
const ExpCard = ({ data }) => (
    <div className="exp-card">
        <div className="exp-card-period">
            <Calendar size={14} /> {data.period}
        </div>
        <h3 className="exp-card-role">{data.role}</h3>
        <p className="exp-card-company">
            {data.company}
            <span className="company-dot">•</span>
            <MapPin size={13} /> {data.location}
        </p>
        <ul className="exp-card-bullets">
            {data.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        {data.score && (
            <div className="score-badge">Score: <strong>{data.score}</strong></div>
        )}
    </div>
);

export default ExperiencePage;
