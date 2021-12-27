import React, { useState } from "react";

function Image({ imageUrl, width, height, alt }) {
  console.log(imageUrl);

  return (
    <img src={imageUrl} width={width} height={height} alt={alt} />
  );
}

export default Image;
