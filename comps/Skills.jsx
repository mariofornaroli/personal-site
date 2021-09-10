import React from "react";
import Fade from "react-reveal/Fade";

const Skills = () => {
    return (
        <>
            <section className="section skill-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 my-3">
                            <div className="sm-title">
                                <h4 className="font-alt">Education</h4>
                            </div>

                            <ul className="aducation-box theme-bg">
                                <Fade bottom>
                                    <li>
                                        <span className="dark-bg">2010-2012</span>
                                        <h6>Front-end Engineer</h6>
                                        <p>International Design Institute</p>
                                    </li>
                                </Fade>
                                <Fade bottom>
                                    <li>
                                        <span className="dark-bg">2010-2012</span>
                                        <h6>Graphic Designer</h6>
                                        <p>Rio Design Institute</p>
                                    </li>
                                </Fade>
                                <Fade bottom>
                                    <li>
                                        <span className="dark-bg">2010-2012</span>
                                        <h6>Visual Designer</h6>
                                        <p>Jakarta Design Institute</p>
                                    </li>
                                </Fade>
                            </ul>

                            {/* End  .aducation-box */}
                        </div>
                        {/* End .col */}

                        <div className="col-lg-4 my-3">
                            <div className="sm-title">
                                <h4 className="font-alt">Experience</h4>
                            </div>
                            <ul className="aducation-box dark-bg">
                                <Fade bottom>
                                    <li>
                                        <span className="theme-bg">2010-2012</span>
                                        <h6>Software Engineer</h6>
                                        <p>Furious Design Institute</p>
                                    </li>
                                </Fade>
                                <Fade bottom>
                                    <li>
                                        <span className="theme-bg">2010-2012</span>
                                        <h6>Android Developer</h6>
                                        <p>Ketlimte Design Ltd.</p>
                                    </li>
                                </Fade>
                                <Fade bottom>
                                    <li>
                                        <span className="theme-bg">2010-2012</span>
                                        <h6>Rubby Developer</h6>
                                        <p>Randara Institute Academy</p>
                                    </li>
                                </Fade>
                            </ul>
                            {/* End  .aducation-box */}
                        </div>
                        {/* End .col */}

                        <div className="col-lg-4 ml-auto my-3">
                            <div className="sm-title">
                                <h4 className="font-alt">My Skills</h4>
                            </div>
                            <div className="gray-bg skill-box">
                                <div className="skill-lt">
                                    <Fade>
                                        <h6>React js</h6>
                                    </Fade>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-bar-in theme-bg"
                                            style={{ width: 92 + "%" }}
                                        >
                                            <Fade left>
                                                <span>92%</span>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                {/* End skill-lt */}

                                <div className="skill-lt">
                                    <Fade>
                                        <h6>WordPress</h6>
                                    </Fade>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-bar-in theme-bg"
                                            style={{ width: 75 + "%" }}
                                        >
                                            <Fade left>
                                                <span>75%</span>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                {/* End skill-lt */}

                                <div className="skill-lt">
                                    <Fade>
                                        <h6>Vue js</h6>
                                    </Fade>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-bar-in theme-bg"
                                            style={{ width: 86 + "%" }}
                                        >
                                            <Fade left>
                                                <span>86%</span>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                {/* End skill-lt */}

                                <div className="skill-lt">
                                    <Fade>
                                        <h6>UI/UX</h6>
                                    </Fade>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-bar-in theme-bg"
                                            style={{ width: 88 + "%" }}
                                        >
                                            <Fade left>
                                                <span>88%</span>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                {/* End skill-lt */}

                                <div className="skill-lt">
                                    <Fade>
                                        <h6>CSS3</h6>
                                    </Fade>

                                    <div className="skill-bar">
                                        <div
                                            className="skill-bar-in theme-bg"
                                            style={{ width: 92 + "%" }}
                                        >
                                            <Fade left>
                                                <span>92%</span>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                {/* End skill-lt */}
                            </div>
                        </div>
                        {/* End .col */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
