import React from "react";
import Image from "./Common/Image";
import { ImageTemplateEnum } from "../Constants/ImageTemplateEnum.js";
import "../Styles/AboutMe.css";

function AboutMe({ Name, LastName, summary }) {
  const nameStyleClass = "text-5xl uppercase tracking-widest";

  const imageWidth = 422;

  const alignmentClasses = "flex flex-col justify-center items-center";
  const gradientClasses = "bg-gradient-to-b from-indigo-400";

  const marginTopClass = "mt-15";

  return (
    <div className={`${alignmentClasses} ${gradientClasses}`}>
      <div className={marginTopClass}>
        <Image
          imageTemplate={ImageTemplateEnum.CIRCLE}
          imageUrl={"/Images/userImage.svg"}
          width={imageWidth}
          height={imageWidth}
          alt={"User's photo"}
        />
      </div>

      <h1 className={marginTopClass}>
        <span className={nameStyleClass}>{Name}</span>
        <span> </span>
        <span className={`${nameStyleClass} font-bold`}>{LastName}</span>
      </h1>
      <p className='mt-5 w-128 text-center text-base'>{summary}</p>
    </div>
  );
}

export default AboutMe;
