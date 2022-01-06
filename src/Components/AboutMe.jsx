import React from "react";
import "../Styles/AboutMe.css";

function AboutMe({ name, lastName, summary }) {
  const wrapperDivCenterAlignmentClasses = "flex flex-col justify-center items-center";
  const wrapperDivSizeClasses = "h-[51rem]";
  const wrapperDivGradientClasses = "bg-gradient-hardEdge-mobile sm:bg-gradient-hardEdge";
  const wrapperDivButtomMarginClass = "mb-1";

  return (
    <div
      className={`
      ${wrapperDivCenterAlignmentClasses} ${wrapperDivSizeClasses} 
      ${wrapperDivGradientClasses} ${wrapperDivButtomMarginClass}`}>

      <img
        className={`
          mt-[-9rem] sm:mt-[-4rem] 
          rounded-full 
          border-8 border-white
          w-[324px] h-[324px] sm:w-[422px] sm:h-[422px]`}
        src="/Images/userImage.svg"
        alt="User's photo"
      />

      <div className='text-2xl mt-14 ms:mt-15 ms:text-5xl font-Roboto tracking-wider uppercase'>
        {name} <b>{lastName}</b>
      </div>
      <p className='mt-5 w-128 text-base text-center font-OpenSans tracking-wide'>
        {summary}
      </p>
    </div>
  );
}

export default AboutMe;
