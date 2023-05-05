import React from "react";
import "./Projets.css";

const Projets = () => {
  const posts = [
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
      details: "",
      created: "Graig, Flavio",
      git: "",
    },
    {
      id: "3",
      title: "Top-Down Shooter",
      details: "",
      created: "Flavio",
      git: "",
    },
    {
      id: "4",
      title: "PortraiScopie",
      details: "",
      created: "Graig, Flavio",
      git: "",
    },
  ];
  return (
    <>
      <section className="WrapperProjets">
        <p className="BigText About" id="Projets">
          Works
        </p>
        <div className="Wrapper">
          {posts.map((post) => {
            return (
              <div className="Projets">
                <p className="MediumText">{post.title}</p>
                <p>{post.details}</p>
                <p>Created by {post.created}</p>
                <div className="Button">
                  <a href={post.git} className="ButtonProjets">
                    Github
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="Line"></div>
      </section>
    </>
  );
};

export default Projets;
