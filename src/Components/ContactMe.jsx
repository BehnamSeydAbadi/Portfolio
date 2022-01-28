import React from "react";

function ContactMe({ instagramUrl, linkedInUrl, githubUrl }) {

  const iconClassnames = "w-12 h-12 bg-white";

  return (
    <div
      className='
      bg-contactMe bg-center
      w-full h-80 sm:h-96
      flex justify-center'>
      <div className="mt-24">
        <div className='text-white text-xl text-center'>
          We want to stay in touch with you!
          <div> Please follow us on social media so we can keep in touch.</div>
        </div>

        <div className="flex justify-center mt-8">
          <a href={instagramUrl}>
            <img className={iconClassnames} src="/Images/instagram-svgrepo-com.svg" alt="Instagram profile" />
          </a>
          <a href={linkedInUrl}>
            <img className={`${iconClassnames} mx-8`} src="/Images/linkedin-svgrepo-com.svg" alt="LinkedIn profile" />
          </a>
          <a href={githubUrl}>
            <img className={iconClassnames} src="/Images/github-svgrepo-com.svg" alt="Github profile" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
