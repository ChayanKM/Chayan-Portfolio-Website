import React, {useState} from 'react'
import "./qualification.css"
import LA from "../../assets/arrow-back-ios.png"
import RA from "../../assets/arrow-forward-ios.png"

const Qualification = () => {
  const[toggleState, setToggleState]= useState(1);

  const toggleTab =(index)=> {
      setToggleState(index);
  }

  return (
    <section className="qualification section">
      <h2 className="section__title"><img src={LA} alt="" width="35" /> Qualification <img src={RA} alt="" width="35" /></h2>
      <span className="section__subtitle">My personal journey</span>
    
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__active qualification__icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
          </div>
        </div>



        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Jspider BTM - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">BE in Electronics and <br></br> Telecommunication<br></br> Engineering</h3>
                <span className="qualification__subtitle">Jadavpur University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2021
                </div>
              </div>

            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Pure Science</h3>
                <span className="qualification__subtitle"> Higher Secondary in Barasat P.C.S Government High School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Pure Science</h3>
                <span className="qualification__subtitle"> Secondary in Barasat P.C.S Government High School</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015
                </div>
              </div>

            </div>
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              {/* <div>
                <h3 className="qualification__title">Web Design</h3>
                <span className="qualification__subtitle">Jspider BTM - Institute</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> */}
            </div>

            <div className="qualification__data">
              <div></div>

              {/* <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">Jadavpur University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div> */}

            </div>


            <div className="qualification__data">
              {/* <div>
                <h3 className="qualification__title">Web Developer</h3>
                <span className="qualification__subtitle">Jspider BTM</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div> */}
            </div>

            <div className="qualification__data">
              <div></div>

              {/* <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">UX Export</h3>
                <span className="qualification__subtitle">University</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2018
                </div>
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification