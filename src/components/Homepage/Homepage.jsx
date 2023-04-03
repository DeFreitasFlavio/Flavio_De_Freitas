import { React } from "react";
import "./Homepage.css";

import Header from "../Header/Header.jsx";
import Projets from "../Projets/Projets.jsx";
import About_us from "../About_us/About_us.jsx";

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
      <About_us />
      <Projets />
    </div>
  );
};

export default Homepage;
