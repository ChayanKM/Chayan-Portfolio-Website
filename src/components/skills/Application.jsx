import React from 'react'
import PS from "../../assets/photoshop.png"
import PR from "../../assets/premiere-pro.png"
import LR from "../../assets/photoshop-lightroom.png"
import AF from "../../assets/after-effects.png"
import FM from "../../assets/filmora-logo-icon.png"

const Application = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Applications</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <img src={PS} className='icon__skills' />

                <div className="skills__descp">
                    <he className="skills__name">Photoshop</he>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>

            <div className="skills__data">
                <img src={PR} className='icon__skills' />

                <div className="skills__descp">
                    <he className="skills__name">Premiere Pro</he>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            
            <div className="skills__data">
                <img src={AF} className='icon__skills' />

                <div className="skills__descp">
                    <he className="skills__name">After Effects</he>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
        </div>
        <div className="skills__group">
            <div className="skills__data">
                <img src={LR} className='icon__skills' />

                <div className="skills__descp">
                    <he className="skills__name">Lightroom</he>
                    <span className="skills__level">Basic</span>
                </div>
            </div>

            <div className="skills__data">
                <img src={FM} className='icon__skills' />

                <div className="skills__descp">
                    <he className="skills__name">Filmora</he>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div>
            {/* <div className="skills__data">
                <img src={FM} className='icon__skills' />

                <div className="skills__descp">
                    <he className="skills__name">Filmora</he>
                    <span className="skills__level">Intermediate</span>
                </div>
            </div> */}
            
        </div>

    </div>
</div>

  )
}

export default Application