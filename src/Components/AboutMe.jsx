import React from "react";
import Image from "./Common/Image";
import { ImageShapeEnum } from "../Constants/ImageShapeEnum.js";
import "../Styles/AboutMe.css";

function AboutMe({ Name, LastName, summary }) {
  const nameStyleClass = "text-5xl uppercase tracking-widest";

  const imageWidth = 422;

  const alignmentClasses = "flex flex-col justify-center items-center";
  const sizeClasses = "h-[51rem]";
  const gradientClasses = "bg-gradient-hardEdge";

  return (
    <div className={`${alignmentClasses} ${sizeClasses} ${gradientClasses}`}>
      <div className="mt-[-4rem]">
        <Image
          imageTemplate={ImageShapeEnum.CIRCLE}
          imageUrl={"/Images/userImage.svg"}
          width={imageWidth}
          height={imageWidth}
          alt={"User's photo"}
        />
      </div>

      <h1 className="mt-15">
        <span className={nameStyleClass}>{Name}</span>
        <span> </span>
        <span className={`${nameStyleClass} font-bold`}>{LastName}</span>
      </h1>
      <p className='mt-5 w-128 text-center text-base'>{summary}</p>
    </div>
  );
}

export default AboutMe;
