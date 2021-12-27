import React from "react";
import Image from "./Common/Image";
import { ImageTemplateEnum } from "../Constants/ImageTemplateEnum.js";

function AboutMe() {
  return (
    <React.Fragment>
      <Image
        imageTemplate={ImageTemplateEnum.CIRCLE}
        imageUrl={"/Images/userImage.svg"}
        width={512}
        height={512}
        alt={"XXX"}
      />
    </React.Fragment>
  );
}

export default AboutMe;
