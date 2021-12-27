import React from "react";
import "../../Styles/Image.css";

function Image({ isCircle, imageUrl, width, height, alt }) {
  console.log(imageUrl);

  let imageTemplate;

  if (isCircle) imageTemplate = "circle";

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
