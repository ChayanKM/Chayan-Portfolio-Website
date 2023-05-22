import React, { useState } from 'react';
import "./header.css";
import { Icon } from '@iconify/react';

const Header = () => {
    /* ================== Change Background Header ================== */
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        // when the scroll is higher than 200 viewpoint height, add the scroll-header class to a tag with the header tag
        if(this.scrollY >= 80) header.classList.add ("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /* ================== Toggle Menu ================== */
    const[Toggle, showMenu]= useState(false);
    const[activeNav, setActiveNav] = useState("#home")

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Chayan</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu" }>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={()=> setActiveNav ('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={()=> setActiveNav ('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={()=> setActiveNav ('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    {/* <li className="nav__item">
                        <a href="#services" onClick={()=> setActiveNav ("#services")} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase nav__icon"></i> Services
                        </a>
                    </li> */}
                    <li className="nav__item">
                        <a href="#portfolio" onClick={()=> setActiveNav ("#portfolio")} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#hobbies" onClick={()=> setActiveNav ("#hobbies")} className={activeNav === "#hobbies" ? "nav__link active-link" : "nav__link"}>
                        <Icon icon="fluent-mdl2:photo-video-media" className="nav__icon" id='hobbie' /> Hobbies
                        </a>
                    </li>
                    <div className='arrow'>
                    <li className="nav__item">
                        <a href="#contact" onClick={()=> setActiveNav ("#contact")} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
                    </li>
                    </div>
                </ul>

                <i class="uil uil-times nav__close" onClick={()=> showMenu (!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={()=> showMenu (!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header