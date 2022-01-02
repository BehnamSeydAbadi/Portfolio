import React from "react";
import Image from "./Common/Image";
import { ImageShapeEnum } from "../Constants/ImageShapeEnum.js";
import "../Styles/AboutMe.css";

function AboutMe({ name, lastName, summary }) {
  const textClasses = "mt-15 text-5xl font-Roboto tracking-wider uppercase";

  const imageWidth = 422;

  const centerAlignmentClasses = "flex flex-col justify-center items-center";
  const sizeClasses = "h-[51rem]";
  const gradientClasses = "bg-gradient-hardEdge";

  return (
    <div
      className={`${centerAlignmentClasses} ${sizeClasses} ${gradientClasses}`}>
      <div className='mt-[-4rem]'>
        <Image
          imageTemplate={ImageShapeEnum.CIRCLE}
          imageUrl={"/Images/userImage.svg"}
          width={imageWidth}
          height={imageWidth}
          alt={"User's photo"}
        />
      </div>

      <text className={textClasses}>
        {name} <b>{lastName}</b>
      </text>
      <p className='mt-5 w-128 text-center text-base'>{summary}</p>
    </div>
  );
}

export default AboutMe;
