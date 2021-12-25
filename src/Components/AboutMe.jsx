import React from "react";
import Image from "./Common/Image";

function AboutMe() {
  return (
    <React.Fragment>
      <Image
        imageUrl = {"../Resources/userImage.jpg"}
        width={340}
        height={340}
        alt={"XXX"} />
    </React.Fragment>);
}

export default AboutMe;
