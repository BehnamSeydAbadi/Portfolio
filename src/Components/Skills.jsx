import React from "react";

function Skills() {

  const titleClasses = "sm:mt-[6rem] text-center sm:text-7xl font-bold";

  const backEndSkills = ["ASP.NET Core", "TDD", "DDD", "CQRS", "SQL", "NoSQL"];

  return <div className="flex bg-white sm:h-128">
  <div name="left" className="flex-initial w-1/2">
    <div className={`${titleClasses} text-gray-400`}>Back-End</div>
    <div name="backEndSkillsList" className="mt-8 flex-">
      <ul>
        {backEndSkills.map(skill => <li className="text-2xl">{skill}</li>)}
      </ul>
    </div>

  </div>
  <div name="right" className="flex-initial w-1/2">
    <div className={`${titleClasses} text-orange-400`}>Front-End</div>
  </div>
</div>;
}

export default Skills;
