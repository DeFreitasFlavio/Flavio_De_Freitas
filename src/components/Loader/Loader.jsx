import { React, useState, useEffect } from "react";
import "./Loader.css";
import loaders from "../../assets/Loader.json";
import Lottie from "lottie-react";

import Homepage from "../Homepage/Homepage.jsx";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="Loading">
          <Lottie animationData={loaders} loop={true} />
        </div>
      ) : (
        <Homepage />
      )}
    </>
  );
};

export default Loader;
