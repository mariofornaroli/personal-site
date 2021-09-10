import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";

const SocialShare = [
    { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
    { Social: <FaTwitter />, link: "https://www.linkedin.com/" },
    { Social: <FaInstagram />, link: "https://www.instagram.com/" },
    { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
    { Social: <FaPinterestP />, link: "https://www.pinterest.com/" },
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
                                        href="https://themeforest.net/user/ib-themes/portfolio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        ib-themes
                                    </a>
                                    all right reserved
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
