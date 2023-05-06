import { React, useState, useEffect } from "react";
import "./Loader.css";

import { Player } from "@lottiefiles/react-lottie-player";

import Homepage from "../Homepage/Homepage.jsx";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="Loading">
          <Player
            autoplay
            loop
            src="https://lottie.host/a07a2d86-686c-4ab5-9c27-4ee52e860989/wBZeqo9vFH.json"
            style={{
              height: "480px",
              width: "480px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            speed={2}
          ></Player>
        </div>
      ) : (
        <Homepage />
      )}
    </>
  );
};

export default Loader;
