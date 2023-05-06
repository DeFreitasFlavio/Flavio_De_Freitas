import React from "react";
import "./About_us.css";

import Design from "../../assets/UX&UI.png";
import Web from "../../assets/Web&MobileApp.png";
import Dev from "../../assets/Development.png";
import Creative from "../../assets/Design&Creative.png";

const About_us = () => {
  const abouts = [
    {
      id: "1",
      image: Design,
      title: "UX & UI",
      details:
        "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    },
    {
      id: "2",
      image: Web,
      title: "Web & Mobile App",
      details:
        "Transforming ideas into exceptional web and mobile app experiences.",
    },
    {
      id: "3",
      image: Dev,
      title: "Design & Creative",
      details:
        "Crafting visually stunning designs that connect with your audience.",
    },
    {
      id: "4",
      image: Creative,
      title: "Development",
      details:
        "Bring your vision to life with the latest technologies and trends in design and programming.",
    },
  ];
  return (
    <section className="WrapperAbout">
      <p className="BigText About" id="About">
        Collaborate with professionals and individuals to create impactful
        results.
      </p>
      <div className="Wrapper">
        {abouts.map((about) => {
          return (
            <div className="Card">
              <img src={about.image} className="About_us" />
              <p className="MediumText">{about.title}</p>
              <p>{about.details}</p>
            </div>
          );
        })}
        <div className="Line"></div>
      </div>
    </section>
  );
};

export default About_us;
