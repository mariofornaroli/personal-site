import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";

const SocialShare = [
    { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mariofornaroli" },
    { Social: <FaGithub />, link: "https://github.com/mariofornaroli" },
    { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCTSDQ3BAZfrweD2nBMwJEpQ" },
    { Social: <FaFacebookF />, link: "https://www.facebook.com/mario.fornaroli" }
];

const Footer = () => {
    return (
        <>
            <footer className="footer white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 my-2">
                            <Fade bottom>
                                <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
                                    {SocialShare.map((val, i) => (
                                        <a
                                            key={i}
                                            href={`${val.link}`}
                                            rel="noreferrer"
                                            target="_blank"
                                        >
                                            {val.Social}
                                        </a>
                                    ))}
                                </div>
                                {/* End .nav */}
                            </Fade>
                        </div>
                        {/* End .col */}

                        <div className="col-md-6 my-2 text-center text-md-right">
                            <Fade bottom>
                                <p>
                                    © {new Date().getFullYear()} copyright{" "}
                                    <a
                                        href="https://mariofornaroli.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        mariofornaroli.com
                                    </a>
                                </p>
                            </Fade>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}
                </div>
            </footer>
        </>
    );
};

export default Footer;
