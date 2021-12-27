import React from "react";
import "../../Styles/Image.css";

function Image({ imageTemplate, imageUrl, width, height, alt }) {
  return (
    <img
      className={`${imageTemplate} border border--white`}
      src={imageUrl}
      width={width}
      height={height}
      alt={alt}
    />
  );
}

export default Image;
