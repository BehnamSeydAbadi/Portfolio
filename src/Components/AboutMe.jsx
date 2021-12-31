import React from "react";
import Image from "./Common/Image";
import { ImageTemplateEnum } from "../Constants/ImageTemplateEnum.js";
import "../Styles/AboutMe.css";

function AboutMe({ Name, LastName, summary }) {

  const nameStyleClass = "text-5xl uppercase tracking-widest";

  const imageWidth = 422;

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        imageTemplate={ImageTemplateEnum.CIRCLE}
        imageUrl={"/Images/userImage.svg"}
        width={imageWidth}
        height={imageWidth}
        alt={"XXX"}
      />

      <h1 className="mt-15">
        <span className={nameStyleClass}>{Name}</span>
        <span> </span>
        <span className={`${nameStyleClass} font-bold`}>{LastName}</span>
      </h1>
      <p className="mt-5 w-128 text-center text-base">{summary}</p>
    </div >
  );
}

export default AboutMe;
