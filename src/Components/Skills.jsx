import React from "react";

function Skills() {

  const titleClasses = "sm:mt-[6rem] text-center sm:text-7xl font-bold";

  return <div className="flex bg-white sm:h-128">
    <div name="left" className="flex-initial w-1/2">
      <div className={`${titleClasses} text-gray-400`}>Back-End</div>
    </div>
    <div name="right" className="flex-initial w-1/2">
      <div className={`${titleClasses} text-orange-400`}>Front-End</div>
    </div>
  </div>;
}

export default Skills;
