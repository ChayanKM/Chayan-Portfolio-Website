import React from 'react'
import HTML from "../../assets/html.png"
import CSS from "../../assets/css-3.png"
import JS from "../../assets/js.png"
import RJS from "../../assets/reactJS.png"
import BS from "../../assets/bootstrap.png"
import GIT from "../../assets/github.png"

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={HTML} className='icon__skills' />
                    

                    <div className="skills__descp">
                        <he className="skills__name">HTML</he>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={CSS} className='icon__skills' />

                    <div className="skills__descp">
                        <he className="skills__name">CSS</he>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={JS} className='icon__skills' />

                    <div className="skills__descp">
                        <he className="skills__name">JavaScript</he>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>

            <div className="skills__group">

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={RJS} className='icon__skills' />

                    <div className="skills__descp">
                        <he className="skills__name">React JS</he>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={BS} className='icon__skills' />

                    <div className="skills__descp">
                        <he className="skills__name">Bootstrap</he>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>

                <div className="skills__data">
                    {/* <i className="bx bx-badge-check"></i> */}
                    <img src={GIT} className='icon__skills' />

                    <div className="skills__descp">
                        <he className="skills__name">Git</he>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Frontend