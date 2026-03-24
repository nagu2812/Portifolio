import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code, Moon, Sun, Download, Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ theme, toggleTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <header className="header">
            <div className="container header-content">
                <Link to="/" className="logo-section" onClick={closeMenu}>
                    <div className="logo-icon">CN</div>
                    <span className="logo-text">Nagendra</span>
                </Link>

                {/* Desktop nav */}
                <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                    <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
                    <Link to="/skills" className="nav-link" onClick={closeMenu}>Skills</Link>
                    <Link to="/projects" className="nav-link" onClick={closeMenu}>Projects</Link>
                    <Link to="/experience" className="nav-link" onClick={closeMenu}>Experience</Link>
                    <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>

                    {/* Mobile-only socials inside menu */}
                    <div className="nav-mobile-footer">
                        <a href="https://github.com/nagu2812" target="_blank" rel="noreferrer" className="icon-link" onClick={closeMenu}><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/nagendra-chanuboyina-8b52b32b4/" target="_blank" rel="noreferrer" className="icon-link" onClick={closeMenu}><Linkedin size={20} /></a>
                        <a href="https://leetcode.com/u/nrokzzz_/" target="_blank" rel="noreferrer" className="icon-link" onClick={closeMenu}><Code size={20} /></a>
                        <a href="/nagendra_ml.pdf" download="Nagendra_Resume.pdf" className="btn btn-primary resume-btn" onClick={closeMenu}>
                            <Download size={16} /> Resume
                        </a>
                    </div>
                </nav>

                {/* Overlay */}
                {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}

                <div className="header-actions">
                    <a href="https://github.com/nagu2812" target="_blank" rel="noreferrer" className="icon-link"><Github size={20} /></a>
                    <a href="https://www.linkedin.com/in/nagendra-chanuboyina-8b52b32b4/" target="_blank" rel="noreferrer" className="icon-link"><Linkedin size={20} /></a>
                    <a href="https://leetcode.com/u/nrokzzz_/" target="_blank" rel="noreferrer" className="icon-link"><Code size={20} /></a>
                    <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <a href="/nagendra_ml.pdf" download="Nagendra_Resume.pdf" className="btn btn-primary resume-btn">
                        <Download size={16} /> Resume
                    </a>
                </div>

                {/* Mobile right: theme + burger */}
                <div className="mobile-actions">
                    <button className="icon-btn theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button className="icon-btn hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
