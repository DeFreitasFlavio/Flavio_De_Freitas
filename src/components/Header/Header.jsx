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
          <a href="https://www.linkedin.com/in/flavio-de-freitas/">
            <p className="MediumText Header">Linkedin</p>
          </a>
          <p>/</p>
          <a href="https://github.com/DeFreitasFlavio">
            <p className="MediumText Header">Github</p>
          </a>
        </div>
      </div>
      <div className="LineHeader"></div>
    </div>
  );
};

export default Header;
