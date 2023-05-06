import React from "react";
import "./Projets.css";

const Projets = () => {
  const projets = [
    {
      id: "1",
      title: "ShopTaBoard",
      details:
        "This is a skateboard E-commerce, developed in flutter with GetX and Dio libraries for the front-end, and for the back-end we used NestJs with PostgresSql.",
      created: "Graig, Bastien, Flavio",
      git: "https://github.com/Gra1gkolodziejczyk/flutter_ecommerce_getx/tree/feature/home_page",
    },
    {
      id: "2",
      title: "Twitter Clone",
      details:
        "It's a Twitter clone, developed in NextJs with the tailwindcss library for the front-end, and for the back-end we used Firebase.",
      created: "Graig, Flavio",
      git: "https://github.com/Gra1gkolodziejczyk/twitter_nextjs_firebase/tree/main",
    },
    {
      id: "3",
      title: "The last survivor on the space",
      details: "This is a top-down shooter, developed on GameMaker Studio 2",
      created: "Flavio",
      git: "https://github.com/DeFreitasFlavio/The-last-survivor-on-the-space",
    },
    {
      id: "4",
      title: "PortraiScopie",
      details:
        "PortraiScopie is a new approach to entering in the world of work or reconversion, it brings a new vision of the CV or rather a refocusing of the skills that we really think we have.",
      created: "Graig, Flavio",
      git: "https://github.com/DeFreitasFlavio/PortraiScopie",
    },
  ];
  return (
    <>
      <section className="WrapperProjets">
        <p className="BigText About" id="Projets">
          Works
        </p>
        <div className="Wrapper">
          {projets.map((projet) => {
            return (
              <div className="Card">
                <p className="MediumText">{projet.title}</p>
                <p>{projet.details}</p>
                <p>Created by {projet.created}</p>
                <div className="Button">
                  <a href={projet.git} className="ButtonProjets">
                    Github
                  </a>
                </div>
              </div>
            );
          })}
          <div className="Line"></div>
        </div>
      </section>
    </>
  );
};

export default Projets;
