import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Chayan</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/chayan.mondal.9041" className="footer__social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="https://instagram.com/c.h.a.y.a.n.m.o.n.d.a.l?igshid=ZGUzMzM3NWJiOQ==" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="https://github.com/ChayanKM" className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; 2023,Chayan Kr. Mondal, ReactJs CSS3 Portfolio Website</span>
        </div>
    </footer>
  )
}

export default Footer