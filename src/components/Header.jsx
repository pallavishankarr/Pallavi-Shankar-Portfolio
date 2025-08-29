import React, { useState } from 'react'
import "../App.css";

const Header = () => {
    /**Toggle Menu */
    const [Toggle, showMenu] = useState(false);

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        if (Toggle) {
            showMenu(false);
        }
    };

  return (
    <header className="header">
        <nav className="nav container">
            <a href="#home" className="nav__logo" onClick={(e) => handleNavLinkClick(e, '#home')}>Pallavi Shankar</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link" onClick={(e) => handleNavLinkClick(e, '#home')}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link" onClick={(e) => handleNavLinkClick(e, '#about')}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#experience" className="nav__link" onClick={(e) => handleNavLinkClick(e, '#experience')}>
                            <i className="uil uil-file-alt nav__icon"></i> Experience
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#projects" className="nav__link" onClick={(e) => handleNavLinkClick(e, '#projects')}>
                            <i className="uil uil-scenery nav__icon"></i> Projects
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" className="nav__link" onClick={(e) => handleNavLinkClick(e, '#contact')}>
                            <i className="uil uil-message nav__icon"></i> Contact Me
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>
            <div  className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
} 

export default Header