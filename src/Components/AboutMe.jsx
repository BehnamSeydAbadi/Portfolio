import React from "react";
import Image from "./Common/Image";
import { ImageShapeEnum } from "../Constants/ImageShapeEnum.js";
import "../Styles/AboutMe.css";

function AboutMe({ name, lastName, summary }) {
  const imageWidth = 422;

  const wrapperDivCenterAlignmentClasses = "flex flex-col justify-center items-center";
  const wrapperDivSizeClasses = "h-[51rem]";
  const wrapperDivGradientClasses = "bg-gradient-hardEdge";
  const wrapperDivButtomMarginClass = "mb-1";

  return (
    <div
      className={`
      ${wrapperDivCenterAlignmentClasses} ${wrapperDivSizeClasses} 
      ${wrapperDivGradientClasses} ${wrapperDivButtomMarginClass}`}>
      <div className='mt-[-4rem]'>
        <Image
          imageTemplate={ImageShapeEnum.CIRCLE}
          imageUrl={"/Images/userImage.svg"}
          width={imageWidth}
          height={imageWidth}
          alt={"User's photo"}
        />
      </div>

      <div className='mt-15 text-5xl font-Roboto tracking-wider uppercase'>
        {name} <b>{lastName}</b>
      </div>
      <p className='mt-5 w-128 text-base text-center font-OpenSans tracking-wide'>
        {summary}
      </p>
    </div>
  );
}

export default AboutMe;
