import React, { useMemo } from "react";
import Social from "./Social";
import TextLoop from "react-text-loop";
import { getYearsOfExperience } from './../utils/utils'

const Slider = ({ aboutMe }) => {
  const yearOfExperience = useMemo(() => getYearsOfExperience(), []);
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay overlay-65"
      >
        <div className="container">
          <div className="row d-flex align-items-center full-screen">
            <div className="col-lg-6">
              <div className="hb-typo ">
                <h1 className="font-alt">
                  Hi There, I'm a passionate
                </h1>
                <h1 className="font-alt">
                  <TextLoop>
                    <span className="loop-text">Frontend</span>
                    <span className="loop-text">Fullstack</span>
                  </TextLoop>{" "}
                  Web Developer
                </h1>
                <h4>with {yearOfExperience}+ years of professional experience</h4>
                <div className="btn-bar mt-4 main-cta">
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    My Expertise
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 video-container d-flex justify-content-center">
              <iframe src="https://www.youtube.com/embed/yknfQp4LGUg" 
              frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>

        {/* End bottom scroll */}

        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
