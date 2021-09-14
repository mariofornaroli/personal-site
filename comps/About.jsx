import React from "react";
import Fade from "react-reveal/Fade";

const About = ({ myExpertise, aboutMe }) => {
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
                  <h3>{aboutMe.my_name}</h3>
                  <h5>
                    A <span className="color-theme">Software Engineer</span> graduated
                    in Italy in 2009 <span className="color-theme">passionate</span> about development
                  </h5>
                  <p>
                    I have a strong background in Information Technology as I carried out various IT projects during my professional experience.
                    <p>
                    </p>
                    During my work experience I have developed various web applications, mainly working with the following technologies: Reactjs (both with React only and with Redux+Saga, now moving to React Hooks + Context API), Angular 2+ and AngularJS, plus obviously Jquery-html5-css3-js, (frontend side) and .Net technologies, such as Web API/Asp MVC - Entity Framework, Node.js + Express – Microsoft Sql server and MongoDB (backend side).
                  </p>
                  <p>I have worked also on mobile development projects, targeting Android platform mainly. Coming from a web-developer background it was a natural choice to select multi-platform technology web based as Cordova, with the support of Ionic Framework (using several plugins to reach native functionalities).</p>

                  <p>In my first years I also developed Windows applications (mainly C# .Net with WPF), multi-platform applications (C++ Qt framework for Linux), often in the domain of cryptography and security, and I DLLs (C/C++ language) to communicate with external devices through API.</p>
                  <p>I enjoy a lot working with Visual Studio Code and Visual Studio, depending on the project! They are my favorite IDE. I also developed some project with Qt Creator and Borland/Embarcadero.</p>

                  <p>I am passionate about my job!</p>
                  <p>I constantly train myself, mainly through online courses the evening after the work.</p>
                  <div className="row about-list">
                    <div className="col-md-6">
                      <div className="media">
                        <label>E-mail</label>
                        <p>mario.fornaroli@yahoo.it</p>
                      </div>
                      <div className="media">
                        <label>Phone</label>
                        <p>+39 3347385621</p>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-md-6">
                      <div className="media">
                        <label>Address</label>
                        <p>Bologna, Italy</p>
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
