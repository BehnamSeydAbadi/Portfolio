import React from "react";

function ContactMe({ instagramUrl, linkedInUrl, githubUrl }) {
  return (
    <div
      className='
    bg-contactMe
     w-full h-80 sm:h-96 
     flex justify-center'>
      <div className='text-white text-xl text-center'>
        We want to stay in touch with you!
        <div> Please follow us on social media so we can keep in touch.</div>
      </div>
    </div>
  );
}

export default ContactMe;
