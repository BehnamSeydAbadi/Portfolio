import React from "react";

function Samples({ samplesShot }) {
  return (
    <div>
      <div className='bg-cadmiumOrange grid grid-cols-none md:grid-cols-2 lg:grid-cols-3'>
        {samplesShot.map((sampleShot) => (
          <a
            className='relative flex justify-center items-center'
            href={sampleShot.href}>
            <img
              className='transition duration-500 '
              src={sampleShot.path}
              alt={sampleShot.alt}
            />

            <h1 className='absolute bg-cadmiumOrange w-full h-full text-white opacity-0 hover:opacity-100 duration-500  flex justify-center items-center'>{sampleShot.alt}</h1>
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
