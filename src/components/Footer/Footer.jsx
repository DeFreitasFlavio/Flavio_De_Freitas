import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="WrapperFooter">
      <p className="BigText About">Talk with me</p>
      <a href="mailto:flavio.defreitas@ynov.com">
        <button className="Discover">Get in touch</button>
      </a>
    </section>
  );
};

export default Footer;
