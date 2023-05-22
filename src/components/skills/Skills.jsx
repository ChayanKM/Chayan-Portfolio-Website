import React from 'react'
import "./skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import LA from "../../assets/arrow-back-ios.png"
import RA from "../../assets/arrow-forward-ios.png"

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title"><img src={LA} alt="" width="35" /> Skills <img src={RA} alt="" width="35" /></h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            
            <Frontend/>
            <Backend/>
            
        </div>
    
    </section>
  )
}

export default Skills