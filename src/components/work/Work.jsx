import React from 'react'
import "./work.css"
import Works from './Works'
import LA from "../../assets/arrow-back-ios.png"
import RA from "../../assets/arrow-forward-ios.png"

const Work = () => {
  return (
    <section className="work section" id="portfolio">
        <h2 className="section__title"><img src={LA} alt="" width="35" /> Portfolio <img src={RA} alt="" width="35" /></h2>
        <span className="section__subtitle">Most recent Works</span>
    
        <Works/>
    </section>
  )
}

export default Work