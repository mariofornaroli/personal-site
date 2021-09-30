import React, { useMemo } from "react";
import Fade from "react-reveal/Fade";
import { getOrderedPostsBy } from './../utils/utils';

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    title: "Development",
    descriptions: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  }
];

export default function Experiences({ posts }) {

  let orderedPosts = [...posts]
  orderedPosts = getOrderedPostsBy(orderedPosts, 'start-year')

  return (
    <>
      <section id="experience" className="section job-experience-section">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <Fade bottom>
                <h3 className="font-alt">Job Experiences</h3>
              </Fade>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <ul className="feature-box-01 no-animation job-experience-box dark-bg">
                {orderedPosts.map(op => (
                  <Fade bottom key={op.id}>
                    <li className="job-exp-box">
                      <div>
                        <p className="date-info">{op.date_range}</p>
                      </div>
                      <div className="separator-item"></div>
                      <div className="job-info">
                        <p className="job-title">{op.job_title}</p>
                        <p className="company">{op.company}&nbsp; - &nbsp;{op.location}</p>
                        <p className="description">{op.description_1}</p>
                        <p className="description">{op.description_2}</p>
                        <p className="description">{op.description_3}</p>
                      </div>
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
}
