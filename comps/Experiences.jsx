import React, { useMemo } from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

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
  orderedPosts = orderedPosts.sort((p1, p2) => (+p2['start-year']) - (+p1['start-year']))

  return (
    <>
      <section id="services" className="section job-experience-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <Fade bottom>
                <h3 className="font-alt">Job Experiences</h3>
              </Fade>
            </div>
          </div>
          <div className="row">
            <ul className="feature-box-01 no-animation job-experience-box dark-bg">
              {orderedPosts.map(op => (
                <>
                  <Fade bottom key={op.id}>
                    <li>
                      <span className="theme-bg">{op.date_range}</span>
                      <h6>{op.job_title}</h6>
                      <p>{op.company}</p>
                      <p>{op.location}</p>
                      <p>{op.description_1}</p>
                      <p>{op.description_2}</p>
                      <p>{op.description_3}</p>
                    </li>
                  </Fade>
                </>
              ))
              }
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}
