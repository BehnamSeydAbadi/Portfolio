import React from "react";

function Samples({ samplesShot }) {
  return (
    <div className='grid grid-cols-none md:grid-cols-2 lg:grid-cols-3'>
      {samplesShot.map((sampleShot) => (
        <a href={sampleShot.href}>
          <img src={sampleShot.path} alt={sampleShot.alt} />
        </a>
      ))}
    </div>
  );
}

export default Samples;
