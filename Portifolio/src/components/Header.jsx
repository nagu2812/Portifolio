import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code, Moon, Sun, Download } from 'lucide-react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="header">
            <div className="container header-content">
                <div className="logo-section">
                    <div className="logo-icon">CN</div>
                    <span className="logo-text">Nagendra</span>
                </div>

                <nav className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/skills" className="nav-link">Skills</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/experience" className="nav-link">Experience</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                <div className="header-actions">
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-link"><Github size={20} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link"><Linkedin size={20} /></a>
                    <a href="#" className="icon-link"><Code size={20} /></a>
                    <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button className="btn btn-primary resume-btn">
                        <Download size={16} />
                        Resume
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
