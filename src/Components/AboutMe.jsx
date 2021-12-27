import React from "react";
import Image from "./Common/Image";

function AboutMe() {
  return (
    <React.Fragment>
      <Image
        isCircle={true}
        imageUrl={"/Images/userImage.svg"}
        width={512}
        height={512}
        alt={"XXX"}
      />
    </React.Fragment>
  );
}

export default AboutMe;
