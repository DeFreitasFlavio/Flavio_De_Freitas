import React from "react";
import "./About_us.css";

import Design from "../../assets/concevoir.png";

const About_us = () => {
  return (
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
        <p className="MediumText">Web & Mobile App</p>
        <p>
          Transforming ideas into exceptional web and mobile app experiences.
        </p>
      </div>
      <div className="About_us">
        <p className="MediumText">Development</p>
        <p>
          Bring your vision to life with the latest technologies and trends in
          design and programming.
        </p>
      </div>
    </div>
  );
};

export default About_us;
