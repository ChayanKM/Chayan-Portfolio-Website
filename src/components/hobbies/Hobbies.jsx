import React, { useState,useEffect } from 'react'
import "./hobbies.css"
import { Icon } from '@iconify/react';
import FSketch from './FSketch';
import CSketch from './CSketch';
import LA from "../../assets/arrow-back-ios.png"
import RA from "../../assets/arrow-forward-ios.png"



const Hobbies = () => {
    const[toglestate, setTogleState]= useState(0);
    const togleTab =(index)=> {
        setTogleState(index);
    }

    
  return (
    <section className="hobbies section" id="hobbies">
        <h2 className="section__title"><img src={LA} alt="" width="35" /> Hobbies <img src={RA} alt="" width="35" /></h2>
        <span className="section__subtitle">
            My sketches and cinematic videos
            <a href="https://instagram.com/chayans_sketches?igshid=ZGUzMzM3NWJiOQ==" className="home__social-icon" id="art__insta" target="_blank">
                <i class="uil uil-instagram"></i>
            </a>
        </span>

        <div className="hobbies__container container grid">
            <div className="services__content">
                <div>
                    <Icon icon="ph:pencil-line-duotone" className="icon" />
                    {/* <Icon icon="et:pencil" hFlip={true} className="icon" /> */}
                    <h3 className="hobbies__title">
                        Portrait pencil sketches
                    </h3>
                    
                </div>

                <span className="services__button" onClick={()=> togleTab(1)}>
                    View friends sketches
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toglestate === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="hobbies__modal-content">
                        <i onClick={()=> togleTab(0)} className="uil uil-times hobbies__modal-close"></i>
                    
                        <p className="hobbies__description">My friends sketches </p>
                        
                    </div>
                    <div className='disp__sketches-container'>
                            <FSketch/>
                    </div>
                </div>

                <span className="services__button" onClick={()=> togleTab(2)}>
                    View celebrities sketches
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toglestate === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="hobbies__modal-content">
                        <i onClick={()=> togleTab(0)} className="uil uil-times hobbies__modal-close"></i>
                    
                        <p className="hobbies__description">Celebrities sketches </p>
                        
                    </div>
                    <div className='disp__sketches-container'>
                            <CSketch/>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <Icon icon="fluent-mdl2:photo-video-media" className="icon" />
                    <h3 className="hobbies__title">
                        Cinematic B roll videos
                    </h3>
                </div>

                <span className="services__button" onClick={()=> togleTab(3)}>
                    <a href="https://chayankm.github.io/VGLY/" className="services__button" target="_blank">
                        View landscape videos
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </span>


                <span className="services__button" onClick={()=> togleTab(4)}>
                    <a href="https://chayankm.github.io/VRG/" className="services__button" target="_blank">
                        View reels videos
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </a>
                </span>

            </div>
        </div>
    </section>
  )
}

export default Hobbies