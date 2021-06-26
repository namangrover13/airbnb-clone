import React from "react";
import "../../styles/varieties.css";

const Varieties = props => {
  return (
    <div className="varieties">
      <img className="varieties-image" src={props.imgName} />
      <p>{props.tagline}</p>
    </div>
  );
};

export default Varieties;
