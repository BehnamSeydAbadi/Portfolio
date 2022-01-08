import React from "react";

function Skills({backEndSkills, frontEndSkills}) {
  const titleClasses = "sm:mt-[6rem] text-center sm:text-7xl font-bold";

  return (
    <div className='flex bg-white sm:h-128'>
      <div name='left' className='flex-initial w-1/2'>
        <div className={`${titleClasses} text-gray-400`}>Back-End</div>
        {GenerateSkillsList(backEndSkills)}
      </div>

      <div name='right' className='flex-initial w-1/2'>
        <div className={`${titleClasses} text-orange-400`}>Front-End</div>
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
