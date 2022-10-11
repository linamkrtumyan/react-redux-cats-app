import React from "react";
import "./imageBox.css";

function ImageBox({ cat }) {
  return (
    <div className="img-container">
      <img className="img-box" src={cat.url} alt={cat.url} />
    </div>
  );
}

export default ImageBox;
