import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code, Moon, Sun, Download } from 'lucide-react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo-section">
                    <div className="logo-icon">CN</div>
                    <span className="logo-text">Nagendra</span>
                </Link>

                <nav className="nav-menu">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/skills" className="nav-link">Skills</Link>
                    <Link to="/projects" className="nav-link">Projects</Link>
                    <Link to="/experience" className="nav-link">Experience</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                <div className="header-actions">
                    <a href="https://github.com/nagu2812" target="_blank" rel="noreferrer" className="icon-link"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/nagendra-chanuboyina-8b52b32b4/" target="_blank" rel="noreferrer" className="icon-link"><Linkedin size={20} /></a>
                    <a href="https://leetcode.com/u/nrokzzz_/" target="_blank" rel="noreferrer" className="icon-link"><Code size={20} /></a>
                    <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <a
                        href="/nagendra_ml.pdf"
                        download="Nagendra_Resume.pdf"
                        className="btn btn-primary resume-btn"
                    >
                        <Download size={16} />
                        Resume
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
