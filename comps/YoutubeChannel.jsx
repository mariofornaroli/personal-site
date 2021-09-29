import React from "react";
import Image from 'next/image'
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

export default function YoutubeChannel({ videos }) {

  const openVideo = (video) => {
    const id = video && video.id && video.id.videoId;
    const url = `https://www.youtube.com/watch?v=${id}`
    window.open(url, '_blank').focus();
  }

  return (
    <>
      <section id="myYtChannel" className="section services-section gray-bg yt-section">
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
                <p>For the <span className="hilighted
                ">complete list</span> of videos <a
                    className="my-channel"
                    href={`https://www.youtube.com/channel/${process.env.NEXT_PUBLIC_YT_CHANNEL_ID}`}
                    target="_blank">visit my channel</a></p>
              </Fade>
            </div>
          </div>
          <div className="row yt-row justify-content-center">
            {videos.map((video) => {
              const videoInfo = video.snippet;
              if (!videoInfo) return (null)
              return (
                <div className="yt-item" key={video.etag}
                  onClick={() => openVideo(video)}>
                  <Zoom>
                    <div className="feature-box-01 yt-box">
                      <Fade bottom>
                        <>
                          {videoInfo.thumbnails && videoInfo.thumbnails.high &&
                            <div className="img-container">
                              <Image src={videoInfo.thumbnails.high.url} alt={videoInfo.title}
                                width="260" height="195" />
                            </div>
                          }
                          <div className="yt-info">
                            <h5>{videoInfo.title}</h5>
                            <p>{videoInfo.description}</p>
                          </div>
                        </>
                        <button className="px-btn px-btn-theme bottom-cta outlined">
                          Watch video
                        </button>
                      </Fade>
                    </div>
                  </Zoom>
                </div>
              )
            }
            )}
          </div>

        </div>
      </section>
    </>
  );
}
