import React from "react";
import "../../Styles/Image.css";



function Image({ imageUrl, width, height, alt }) {
  console.log(imageUrl);

  return (
    <img className="circle border border--white" src={imageUrl} width={width} height={height} alt={alt} />
  );
}

export default Image;
