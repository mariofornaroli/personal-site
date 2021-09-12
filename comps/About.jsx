import React from "react";
import Fade from "react-reveal/Fade";

const About = ({posts}) => {
  return (
    <>
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 my-3">
              <div className="img-box dark-img-box">
                <Fade left>
                  <img src="img/about/about-2.jpg" alt="smiling a girl" />
                </Fade>
              </div>
            </div>

            <div className="col-lg-6 my-3">
              <div className="typo-box about-me">
                <Fade bottom>
                  <h3>Miladra Narzo</h3>
                  <h5>
                    A Lead <span className="color-theme">App Developer</span> based
                    in <span className="color-theme">Canada</span>
                  </h5>
                  <p>
                    I design and develop services for customers of all sizes,
                    specializing in creating stylish, modern websites, web services
                    and online stores. My passion is to design digital user
                    experiences through the bold interface and meaningful
                    interactions. Check out my Portfolio
                  </p>
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>Birthday</label>
                        <p>4th april 1991</p>
                      </div>
                      <div className="media">
                        <label>Age</label>
                        <p>22 Yr</p>
                      </div>
                      <div className="media">
                        <label>Residence</label>
                        <p>Canada</p>
                      </div>
                      <div className="media">
                        <label>Address</label>
                        <p>California, USA</p>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>info@domain.com</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>820-885-3321</p>
                      </div>
                      <div className="media">
                        <label>Skype</label>
                        <p>skype.0404</p>
                      </div>
                      <div className="media">
                        <label>Freelance</label>
                        <p>Available</p>
                      </div>
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
