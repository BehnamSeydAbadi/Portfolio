import React from "react";

function Samples({ samplesShot }) {
  return (
    <div className='bg-cadmiumOrange grid grid-cols-none md:grid-cols-2 lg:grid-cols-3'>
      {samplesShot.map((sampleShot) => (
        <a className='relative flex justify-center items-center' href={sampleShot.href}>
          <img
            className='transition duration-500 hover:opacity-0'
            src={sampleShot.path}
            alt={sampleShot.alt}
          />
          
          <h1 className='absolute'>BBBGBBB</h1>
        </a>
      ))}
    </div>
  );
}

export default Samples;
