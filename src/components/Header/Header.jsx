import React from "react";
import "./Header.css";
import { HiMail } from "react-icons/hi";

const Header = () => {
  return (
    <div className="WrapperHeader">
      <div className="Header">
        <a href="mailto:flavio.defreitas@ynov.com" className="ButtonHeader">
          <HiMail className="Mail" />
        </a>
        <div className="TextHeader">
          <a href="#About">
            <p className="MediumText Header">About</p>
          </a>
          <a href="#Projets">
            <p className="MediumText Header">Projets</p>
          </a>
        </div>
      </div>
      <div className="LineHeader"></div>
    </div>
  );
};

export default Header;
