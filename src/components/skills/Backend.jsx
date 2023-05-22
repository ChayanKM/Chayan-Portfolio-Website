import React from 'react'
import JAVA from "../../assets/java.png"
import SQL from "../../assets/sql-server.png"

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">
                {/* <div className="skills__data">
                    <i className="bx bx-badge-check"></i>

                    <div className="skills__descp">
                        <he className="skills__name">Node Js</he>
                        <span className="skills__level">Basic</span>
                    </div>
                </div> */}

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={JAVA} className='icon__skills' />

                    <div className="skills__descp">
                        <he className="skills__name">JAVA</he>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={SQL} className='icon__skills' />

                    <div className="skills__descp">
                        <he className="skills__name">SQL</he>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Backend