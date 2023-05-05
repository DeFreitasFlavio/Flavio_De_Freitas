import { React } from "react";
import "./Homepage.css";

import Header from "../Header/Header.jsx";
import Projets from "../Projets/Projets.jsx";
import About_us from "../About_us/About_us.jsx";
import Footer from "../Footer/Footer.jsx";

import Flavio from "../../assets/Flavio.jpg";

const Homepage = () => {
  return (
    <div className="">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap"
        rel="stylesheet"
      ></link>
      <Header />
      <div className="pres">
        <img src={Flavio} alt="" />
        <p className="SmallText">Hi, I'm Flavio</p>
        <p className="BigText">
          Building digital products, Developper Web and Mobile
        </p>
        <a href="#About">
          <button className="Discover">Discover Me</button>
        </a>
      </div>
      <About_us />
      <Projets />
      <Footer />
    </div>
  );
};

export default Homepage;
