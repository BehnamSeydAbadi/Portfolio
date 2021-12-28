import React from "react";
import Image from "./Common/Image";
import { ImageTemplateEnum } from "../Constants/ImageTemplateEnum.js";

function AboutMe({ Name, LastName, summary }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        imageTemplate={ImageTemplateEnum.CIRCLE}
        imageUrl={"/Images/userImage.svg"}
        width={512}
        height={512}
        alt={"XXX"}
      />

      <h1>
        <span className="text-5xl uppercase tracking-widest">{Name}</span>
        <span className="text-5xl uppercase tracking-widest font-bold">{LastName}</span>
      </h1>
      <p>{summary}</p>
    </div>
  );
}

export default AboutMe;
