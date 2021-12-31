import React from "react";
import Image from "./Common/Image";
import { ImageTemplateEnum } from "../Constants/ImageTemplateEnum.js";
import "../Styles/AboutMe.css";

function AboutMe({ Name, LastName, summary }) {

  const nameStyleClass = "text-5xl uppercase tracking-widest";

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        imageTemplate={ImageTemplateEnum.CIRCLE}
        imageUrl={"/Images/userImage.svg"}
        width={512}
        height={512}
        alt={"XXX"}
      />

      <h1 className="mt-14">
        <span className={nameStyleClass}>{Name}</span>
        <span className={`${nameStyleClass} font-bold`}>{LastName}</span>
      </h1>
      <p className="mt-5">{summary}</p>
    </div >
  );
}

export default AboutMe;
