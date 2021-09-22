import React from "react";
import "./Card.css";

const BakeTile = ({ img, title }) => {
  return (
    <div className="bakeTile">
      <div className="tileImage">
        <img className="tileImage" src={img} alt={title} />
      </div>
      <div className="tileLabel">{title}</div>
    </div>
  );
};
export default BakeTile;
