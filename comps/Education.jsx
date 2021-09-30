import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { getOrderedPostsBy } from './../utils/utils';

const Education = ({ posts, languages }) => {

    let orderedPosts = [...posts]
    orderedPosts = getOrderedPostsBy(orderedPosts, 'start-year')

    return (
        <>
            <section id="education" className="section skill-section education-section">
                <div className="container">
                    <div className="row d-flex justify-content-center section-title text-center">
                        <div className="col-lg-7">
                            <Fade bottom>
                                <h3 className="font-alt">Education</h3>
                            </Fade>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <ul className="education-list dark-bg d-flex justify-content-center">
                                {orderedPosts.map(op => (
                                    <Fade bottom key={op.id}>
                                        <li className="education-info">
                                            <div className="icon graduation-icon">
                                                <FontAwesomeIcon size={"lg"} icon={faGraduationCap} />
                                            </div>
                                            <p className="date-info">{op.date_range}</p>
                                            <p className="job-title">{op.job_title}</p>
                                            <p className="company">{op.company}</p>
                                            <p className="description">{op.description_1}</p>
                                        </li>
                                    </Fade>
                                ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="sm-title">
                                <h4 className="font-alt">Languages</h4>
                            </div>
                            <ul className="education-list dark-bg">
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
