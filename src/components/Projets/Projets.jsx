import React from "react";
import "./Projets.css";

const Projets = () => {
  const posts = [
    {
      id: "1",
      title: "ShopTaBoard",
      details: "",
    },
    {
      id: "2",
      title: "Twitter Clone",
      details: "",
    },
    {
      id: "3",
      title: "Top-Down Shooter",
      details: "",
    },
    {
      id: "4",
      title: "PortraiScopie",
      details: "",
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
                <p>
                  {post.details}
                  Explication bref de ce que c'est et ce que fait le projet. en
                  Anglais
                </p>
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
