import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function YoutubeChannel({ videos }) {
  return (
    <>
      <section id="myYtChannel" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <Fade bottom>
                <h3 className="font-alt">My Youtube Channel</h3>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites, web
                  services and online stores.
                </p>
                <p>For the complete list of videos <a 
                href="https://www.youtube.com/channel/UCTSDQ3BAZfrweD2nBMwJEpQ"
                target="_blank">visit my channel</a></p>
              </Fade>
            </div>
          </div>
          <div className="row">
            {videos.map((video) => {
            const videoInfo = video.snippet;
              return (
                <div className="col-md-6 col-lg-4 my-3" key={video.id}>
                  <Zoom>
                    <div className="feature-box-01">
                      <Fade bottom>
                        <div>
                          <p>
                          {videoInfo.thumbnails && videoInfo.thumbnails.high && videoInfo.thumbnails.high.url}
                          </p>
                          <div className="feature-content">
                            <h5>{videoInfo.title}</h5>
                            <p>{videoInfo.description}</p>
                          </div>
                        </div>
                      </Fade>
                    </div>
                    {/* End .feature-box-01 */}
                  </Zoom>
                </div>
              )
            }
            )}
            {/* End .col */}
          </div>

        </div>
      </section>
    </>
  );
}
