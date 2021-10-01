import React from "react";
import Fade from "react-reveal/Fade";
import parse from 'html-react-parser';
import { SKILL_TAGS_LABELS } from './../utils/utils'

const About = ({ myExpertise, aboutMe }) => {
  return (
    <>
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 my-3">
              <div className="img-box dark-img-box waved-box">
                <Fade left>
                  {
                    SKILL_TAGS_LABELS.map(tagsKey => {
                      return (<div className={`tags-container ${tagsKey}`} key={tagsKey}>
                        {parse(myExpertise[tagsKey])}
                      </div>)
                    })
                  }
                </Fade>
              </div>
            </div>

            <div className="col-lg-6 my-3">
              <div className="typo-box about-me">
                <Fade bottom>
                  <h3>{aboutMe.my_name}</h3>
                  <h5>
                    A <span className="color-theme">Software Engineer</span> graduated
                    in Italy in 2009 <span className="color-theme">passionate</span> about development
                  </h5>
                  <div className="my-long-description">
                    {parse(myExpertise.long_description_shorter)}
                  </div>
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>{aboutMe.email}</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>{aboutMe.phone_number}</p>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-md-6">
                      <div className="media">
                        <label>Address</label>
                        <p>{aboutMe.address}</p>
                      </div>
                      {aboutMe.freelance_available_showfield &&
                        <div className="media">
                          <label>Freelance</label>
                          <p>{aboutMe.freelance_available_value ? 'Available' : 'Not Available'}</p>
                        </div>
                      }
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}
                  <div className="btn-bar">
                    <a
                      className="px-btn px-btn-theme"
                      href="img/resume.png"
                      download
                    >
                      Download CV
                    </a>
                  </div>
                </Fade>
              </div>
              {/* End .about me */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
