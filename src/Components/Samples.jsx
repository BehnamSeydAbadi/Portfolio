import React from "react";

function Samples({ samplesShot }) {
  return (
    <div>
      <div className='bg-cadmiumOrange grid grid-cols-none md:grid-cols-2 lg:grid-cols-3'>
        {samplesShot.map((sampleShot) => (
          <a className='relative flex' href={sampleShot.href}>
            <img src={sampleShot.path} alt={sampleShot.alt} />

            <h1
              className='
              absolute 
              text-4xl uppercase
              flex justify-center items-center 
              bg-cadmiumOrange text-white 
              w-full h-full 
              opacity-0 duration-500 hover:opacity-100'>
              {sampleShot.alt}
            </h1>
          </a>
        ))}
      </div>

      <div className=' flex flex-col justify-center items-center'>
        <button className='mt-14 px-6 py-3 bg-cadmiumOrange text-white font-bold tracking-widest'>
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default Samples;
