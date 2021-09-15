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
  orderedPosts = orderedPosts.sort((p1, p2) => (+p1['start-year']) - (+p2['start-year']))

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
            {/* {ServiceContent.map((val, i) => (
              <div className="col-md-6 col-lg-4 my-3" key={i}>
                <Zoom>
                  <div className="feature-box-01">
                    <Fade bottom>
                      <div>
                        <div className="icon">
                          <i className={val.icon}></i>
                        </div>
                        <div className="feature-content">
                          <h5>{val.title}</h5>
                          <p>{val.descriptions}</p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </Zoom>
              </div>
            ))} */}
          </div>

        </div>
      </section>
    </>
  );
}
