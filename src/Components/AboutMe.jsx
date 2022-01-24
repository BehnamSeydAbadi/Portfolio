import React from "react";
import "../Styles/AboutMe.css";

function AboutMe({ name, lastName, summary }) {
  return (
    <div
      className={`
        flex flex-col justify-center items-center
        h-[47rem] sm:h-[51rem]
        bg-gradient-hardEdge-mobile sm:bg-gradient-hardEdge 
        mb-1`}>
      <img
        className={`
          mt-[-9rem] sm:mt-[-4rem] 
          rounded-full 
          border-8 border-white
          w-[324px] h-[324px] sm:w-[422px] sm:h-[422px]`}
        src='/Images/userImage.svg'
        alt="User's photo"
      />

      <div
        className={`
        text-2xl mt-14 sm:mt-15 sm:text-5xl
        font-Roboto tracking-wider uppercase`}>
        {name} <b>{lastName}</b>
      </div>
      <p className='mt-5 w-80 sm:w-128 text-base text-center font-OpenSans tracking-wide'>
        {summary}
      </p>
    </div>
  );
}

export default AboutMe;
