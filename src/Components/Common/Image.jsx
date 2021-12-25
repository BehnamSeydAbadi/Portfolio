import React, { useState } from 'react';

function Image({ imageUrl, width, height, alt }) {

    return (
        <img src={require(`${imageUrl}`)} width={width} height={height} alt={alt} />
    );
}

export default Image;