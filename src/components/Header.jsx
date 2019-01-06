import React from "react";
import "./Header.scss";
import Topgun from "../assets/topgun-header.jpg";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Pinterest from "../assets/pinterest.png";
import GooglePlus from "../assets/googleplus.png";

const Header = props => {
  return (
    <div className="headerMain">
      <div className="linksContainer">
        <div>
          <button className="button">Home</button>
        </div>
        <div>
          <button className="button">About</button>
        </div>
        <div>
          <button className="button">Contact</button>
        </div>
      </div>
      <div className="centerHeader">
        <img src={Topgun} alt="topgun header" />
      </div>
      <div className="socialIcons">
        <img src={Facebook} alt="facebook icon" />
        <img src={Twitter} alt="twitter icon" />
        <img src={Instagram} alt="instagram icon" />
        <img src={Pinterest} alt="pinterest icon" />
        <img src={GooglePlus} alt="googleplus icon" />
      </div>
    </div>
  );
};

export default Header;
