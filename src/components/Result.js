import React from "react";
import "./Result.css";

const Result = (props) => {
  const { slugs, err } = props.stateValues;

  const images = [];
  if (!err && slugs) {
    for (const value of slugs.values()) {
      images.push(
        <img src={`http://source.unsplash.com/${value}`} alt="Logo" />
      );
    }
  }

  return <div className="wrapper">{images}</div>;
};
export default Result;
