const Skills = () => {
  return (
    <section
      id="skills"
      className="code-bg py-32 px-6 bg-black relative overflow-hidden"
    >
      {/* ===== Background Code Layer ===== */}
      <div className="code-layer absolute inset-0 pointer-events-none select-none">
        <div className="animate-code-slow">
          {`const AI = () => { return <Future /> }   function innovate() { build(); }   class Developer { }   import React from 'react';`}
        </div>

        <div className="animate-code-fast mt-16">
          {`while(true){ learn(); create(); improve(); }   export default Skills;   let growth = true;`}
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 skills-title">
          Technical Expertise
        </h2>

        {/* Elegant Divider */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-10 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          Crafting intelligent systems, scalable applications,
          and impactful digital solutions through modern technologies.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10 text-left">

          {/* Languages */}
          <div className="skill-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="skill-subtitle mb-2">Languages</p>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Programming Foundations
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Java</li>
              <li>Python</li>
              <li>C</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* Web Development */}
          <div className="skill-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="skill-subtitle mb-2">Web Development</p>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Modern Web Stack
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>HTML & CSS</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="skill-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="skill-subtitle mb-2">Databases</p>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Data Management
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* AI & ML */}
          <div className="skill-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="skill-subtitle mb-2">AI & Machine Learning</p>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Intelligent Systems
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Machine Learning</li>
              <li>Artificial Intelligence</li>
              <li>Data Science</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skill-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="skill-subtitle mb-2">Tools & Platforms</p>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Development Environment
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>AWS (Basics)</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="skill-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <p className="skill-subtitle mb-2">Soft Skills</p>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Collaboration & Growth
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>Team Collaboration</li>
              <li>Leadership</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;