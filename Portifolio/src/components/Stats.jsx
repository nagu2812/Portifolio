import React from 'react';
import { GraduationCap, Trophy, Briefcase, Star, Code } from 'lucide-react';
import './Stats.css';

const statsData = [
    {
        icon: <GraduationCap size={24} />,
        value: '8.98/10',
        label: 'CGPA',
        color: 'bg-blue-100 text-blue-600'
    },
    {
        icon: <Trophy size={24} />,
        value: '2025',
        label: 'ICPC Qualifier',
        color: 'bg-cyan-100 text-cyan-600'
    },
    {
        icon: <Briefcase size={24} />,
        value: '2+',
        label: 'Internships',
        color: 'bg-indigo-100 text-indigo-600'
    },
    {
        icon: <Code size={24} />, // Using Code as Star replacement contextually or maybe Star
        value: '3★', // Literal star char
        label: 'CodeChef',
        color: 'bg-sky-100 text-sky-600',
        isStar: true
    }
];

const Stats = () => {
    return (
        <div className="stats-grid">
            {statsData.map((stat, index) => (
                <div className="stat-card" key={index}>
                    <div className={`stat-icon ${stat.color}`}>
                        {stat.isStar ? <Star size={24} fill="currentColor" /> : stat.icon}
                    </div>
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Stats;
