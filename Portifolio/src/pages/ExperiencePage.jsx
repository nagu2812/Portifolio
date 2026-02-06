import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import './ExperiencePage.css';

const ExperiencePage = () => {
    const experiences = [
        {
            id: 1,
            role: "Software Engineer Intern",
            company: "Tech Solutions Inc.",
            location: "Remote",
            period: "June 2024 - Present",
            description: "Developing robust web applications using the MERN stack. Collaborating with cross-functional teams to design and implement scalable solutions.",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
        },
        {
            id: 2,
            role: "Frontend Developer",
            company: "Freelance",
            location: "Remote",
            period: "Jan 2023 - May 2024",
            description: "Built responsive websites and user interfaces for various clients. Focused on creating intuitive user experiences and optimizing performance.",
            technologies: ["React", "JavaScript", "HTML/CSS", "Framer Motion"]
        },
        {
            id: 3,
            role: "Competitive Programmer",
            company: "Self-Employed",
            location: "College",
            period: "2022 - Present",
            description: "Actively participating in coding contests on platforms like CodeChef, Codeforces, and LeetCode. Solving algorithmic challenges to sharpen problem-solving skills.",
            technologies: ["C++", "Python", "Algorithms", "Data Structures"]
        }
    ];

    return (
        <div className="experience-page">
            <div className="container">
                <header className="experience-hero">
                    <span className="experience-subtitle">MY JOURNEY</span>
                    <h1 className="experience-title">Work Experience</h1>
                    <p className="experience-desc">
                        A timeline of my professional career and key milestones in the tech industry.
                    </p>
                </header>

                <div className="timeline-container">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.id} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TimelineItem = ({ data, index }) => (
    <motion.div
        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
    >
        <div className="timeline-dot"></div>
        <div className="timeline-content">
            <div className="exp-header">
                <div className="exp-role-company">
                    <h3>{data.role}</h3>
                    <span className="company-name">{data.company}</span>
                </div>
                <div className="exp-icon">
                    <Briefcase size={20} />
                </div>
            </div>

            <div className="exp-meta">
                <span className="exp-period">
                    <Calendar size={14} /> {data.period}
                </span>
                <span className="exp-location">
                    <MapPin size={14} /> {data.location}
                </span>
            </div>

            <p className="exp-description">{data.description}</p>

            <div className="exp-tech">
                {data.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default ExperiencePage;
