import React from "react";
import Fade from "react-reveal/Fade";
import { getOrderedPostsBy } from './../utils/utils';

const Education = ({ posts, languages }) => {

    let orderedPosts = [...posts]
    orderedPosts = getOrderedPostsBy(orderedPosts, 'start-year')

    return (
        <>
            <section id="education" className="section skill-section">
                <div className="container">
                    {/* <div className="row justify-content-center section-title text-center">
                        <div className="col-lg-7">
                            <Fade bottom>
                                <h3 className="font-alt">Education and Languages</h3>
                            </Fade>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="col-lg-7">
                            <div className="sm-title">
                                <h4 className="font-alt">Education</h4>
                            </div>
                            <ul className="aducation-box dark-bg">
                                {orderedPosts.map(op => (
                                    <Fade bottom key={op.id}>
                                        <li>
                                            <span className="theme-bg">{op.date_range}</span>
                                            <h6>{op.job_title}</h6>
                                            <p>{op.company}</p>
                                            <p>{op.description_1}</p>
                                        </li>
                                    </Fade>
                                ))
                                }
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="sm-title">
                                <h4 className="font-alt">Languages</h4>
                            </div>
                            <ul className="aducation-box dark-bg">
                                {languages.map(lang => (
                                    <Fade bottom key={lang.id}>
                                        <li>
                                            <span className="theme-bg">{lang.name}</span>
                                            {/* <h6>{lang.name}</h6> */}
                                            <p>{lang.level}</p>
                                            <p>{lang.description}</p>
                                        </li>
                                    </Fade>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Education;