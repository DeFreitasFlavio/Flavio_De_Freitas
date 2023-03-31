import React from "react";
import "./Homepage.css";
import Header from "../Header/Header.jsx";

import Flavio from "../../assets/Flavio.jpg";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <div className="pres">
        <img src={Flavio} alt="" />
        <p className="SmallText">Hi, I'm Flavio</p>
        <p className="BigText">
          Building digital products, Developper Web and Mobile
        </p>
        <button className="Discover">Discover Me</button>
      </div>
    </div>
  );
};

export default Homepage;
