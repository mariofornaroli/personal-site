import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/mariofornaroli" },
  { Social: <FaGithub />, link: "https://github.com/mariofornaroli" },
  { Social: <FaYoutube />, link: "https://www.youtube.com/channel/UCTSDQ3BAZfrweD2nBMwJEpQ" },
  { Social: <FaFacebookF />, link: "https://www.facebook.com/mario.fornaroli" }
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
