import React from "react";
import { ImageShapeEnum } from "../../Constants/ImageShapeEnum.js";

function Image({ imageTemplate, imageUrl, width, height, alt }) {
  let imageShapeClass;

  if (imageTemplate == ImageShapeEnum.CIRCLE)
    imageShapeClass = "rounded-full";

  return (
    <img
      className={`${imageShapeClass} border-8 border-white`}
      src={imageUrl}
      width={width}
      height={height}
      alt={alt}
    />
  );
}

export default Image;
