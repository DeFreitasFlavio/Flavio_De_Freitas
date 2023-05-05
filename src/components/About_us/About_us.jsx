import React from "react";
import "./About_us.css";

import Design from "../../assets/UX&UI.png";
import Web from "../../assets/Web&MobileApp.png";
import Dev from "../../assets/Development.png";
import Creative from "../../assets/Design&Creative.png";

const About_us = () => {
  return (
    <section className="WrapperAbout">
      <p className="BigText About" id="About">
        Collaborate with professionals and individuals to create impactful
        results.
      </p>
      <div className="Wrapper">
        <div className="About_us">
          <img src={Design} alt="" className="About_us" />
          <p className="MediumText">UX & UI</p>
          <p>
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </p>
        </div>

        <div className="About_us">
          <img src={Web} alt="" className="About_us" />
          <p className="MediumText">Web & Mobile App</p>
          <p>
            Transforming ideas into exceptional web and mobile app experiences.
          </p>
        </div>

        <div className="About_us">
          <img src={Creative} alt="" className="About_us" />
          <p className="MediumText">Design & Creative</p>
          <p>
            Crafting visually stunning designs that connect with your audience.
          </p>
        </div>

        <div className="About_us">
          <img src={Dev} alt="" className="About_us" />
          <p className="MediumText">Development</p>
          <p>
            Bring your vision to life with the latest technologies and trends in
            design and programming.
          </p>
        </div>
      </div>
      <div className="Line"></div>
    </section>
  );
};

export default About_us;
