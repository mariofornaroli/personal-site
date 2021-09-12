import React, { useState } from "react";
import Modal from "react-modal";
import Fade from "react-reveal/Fade";

if (process.browser && document.getElementById('root')) {
  Modal.setAppElement("#root");
}

const Blog = ({posts}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <>
      <section id="blog" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <Fade bottom>
                <h3 className="font-alt">Recent articles</h3>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
              </Fade>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 my-3">
              <div className="blog-post" onClick={toggleModalOne}>
                <div className="blog-img">
                  <div className="data">
                    <span>14</span>
                    <small>Jan</small>
                  </div>
                  <Fade bottom>
                    <img src="img/blog/blog-1.jpg" alt="blog post"></img>
                  </Fade>
                </div>
                {/* End blog-img */}

                <div className="blog-info">
                  <Fade bottom>
                    <h6>I saw few die of hunger of eating, a hundred thousand.</h6>
                    <p>
                      Integer vitae mi libero. Aliquam consequat dolor libero, nec
                      varius elit tempusporttitor.
                    </p>
                    <div className="btn-bar">Read More</div>
                  </Fade>
                </div>
                {/* End blog-info */}
              </div>
              {/* End blog-post */}
            </div>
            {/* End .col for blog-1 */}

            <div className="col-lg-4 col-md-6 my-3">
              <div className="blog-post" onClick={toggleModalTwo}>
                <div className="blog-img">
                  <div className="data">
                    <span>07</span>
                    <small>Aug</small>
                  </div>
                  <Fade bottom>
                    <img src="img/blog/blog-2.jpg" alt="blog post"></img>
                  </Fade>
                </div>
                {/* End blog-img */}

                <div className="blog-info">
                  <Fade bottom>
                    <h6>New Freehand Templates, built for the whole team.</h6>
                    <p>
                      Consectetur dorem ipsum dolor sit amet, adipisicing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="btn-bar">Read More</div>{" "}
                  </Fade>
                </div>
                {/* End blog-info */}
              </div>
              {/* End blog-post */}
            </div>
            {/* End .col for blog-1 */}

            <div className="col-lg-4 col-md-6 my-3">
              <div className="blog-post" onClick={toggleModalThree}>
                <div className="blog-img">
                  <div className="data">
                    <span>22</span>
                    <small>Apr</small>
                  </div>
                  <Fade bottom>
                    <img src="img/blog/blog-3.jpg" alt="blog post"></img>
                  </Fade>
                </div>
                {/* End blog-img */}

                <div className="blog-info">
                  <Fade bottom>
                    <h6>To the lover of wilderness, Alaska is one of the most.</h6>
                    <p>
                      Estibulum eu ante sed dui porta porttitor. Nullam a placerat
                      velit. Suspendisse non ligula felis
                    </p>
                    <div className="btn-bar">Read More</div>
                  </Fade>
                </div>
                {/* End blog-info */}
              </div>
              {/* End blog-post */}
            </div>
            {/* End .col for blog-1 */}
          </div>
          {/* End .row */}

        </div>
      </section>
    </>
  );
};

export default Blog;
