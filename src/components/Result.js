import React from "react";
import "./Result.css";

const Result = (props) => {
  const { slugs, err } = props.abc;

  let content = null;

  if (!err && slugs) {
    for (let i = 0; i < slugs.length; i++) {
      content = (
        <div className="wrapper">
          <img
            src={`http://source.unsplash.com/${this.state.slugs[i]}`}
            alt="Logo"
          />
        </div>
      );
    }
  }
  return content;
};
export default Result;
