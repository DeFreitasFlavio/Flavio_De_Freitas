import React from "react";
import "./Apropos.css";

import Design from "../../assets/concevoir.png";

const Apropos = () => {
  return (
    <div className="Wrapper">
      <div className="Apropos">
        <img src={Design} alt="" className="Apropos" />
        <p className="MediumText">UX & UI</p>
        <p>
          Designing interfaces that are intuitive, efficient, and enjoyable to
          use.
        </p>
      </div>
      <div className="Apropos">
        <p className="MediumText">Web & Mobile App</p>
        <p>
          Transforming ideas into exceptional web and mobile app experiences.
        </p>
      </div>
      <div className="Apropos">
        <p className="MediumText">Development</p>
        <p>
          Bring your vision to life with the latest technologies and trends in
          design and programming.
        </p>
      </div>
    </div>
  );
};

export default Apropos;
