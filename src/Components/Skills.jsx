import React from "react";

function Skills({ backEndSkills, frontEndSkills }) {
  const titleClasses =
    "text-center font-bold text-5xl md:text-7xl md:mt-[6rem]";

  const leftAndRightDivClasses = "flex-initial mt-10 md:w-1/2 md:mt-0";

  return (
    <div
      className={`
      bg-white 
        flex items-center flex-col h-[43rem]
        md:flex-row md:items-start md:h-128`}>
      <div name='left' className={leftAndRightDivClasses}>
        <div className={`${titleClasses} text-gray-400`}>Back-End</div>
        {GenerateSkillsList(backEndSkills)}
      </div>

      <div name='right' className={leftAndRightDivClasses}>
        <div className={`${titleClasses} text-cadmiumOrange`}>Front-End</div>
        {GenerateSkillsList(frontEndSkills)}
      </div>
    </div>
  );
}

function GenerateSkillsList(skills) {
  return (
    <div className='mt-8 text-center'>
      <ul>
        {skills.map((skill) => (
          <li className='text-2xl  mb-2'>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
