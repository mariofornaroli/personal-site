import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function SomeProjects({ posts: projects }) {
  return (
    <>
      <section id="someProjects" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <Fade bottom>
                <h3 className="font-alt">Some Projects</h3>
                <p>
                  As I worked with several customers under NDA and delivering web applications accessible only through credentials, I can show here the descriptions of some projects and the implemented technical stack. Please, click on each box to have a diagram showing the stack, frameworks/libraries and tools I worked with.
                </p>
              </Fade>
            </div>
          </div>
          <div className="row">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4 my-3" key={project.id}>
                <Zoom>
                  <div className="feature-box-01">
                    <Fade bottom>
                      <div>
                        <div className="icon">
                          <i className="ti-layout"></i>
                        </div>
                        <div className="feature-content">
                          <h5>{project.title}</h5>
                          <p>{project.short_description}</p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </Zoom>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
