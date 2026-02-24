import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section
      id="experience"
      className="experience-bg py-32 px-6 relative"
    >
      {/* React Icon Background */}
      <FaReact className="react-bg" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 skills-title">
           Experience
        </h2>

        <div className="w-20 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-16 rounded-full"></div>

        {/* Experience Card */}
        <div className="experience-card bg-gray-900 p-10 rounded-2xl border border-gray-800 text-left">

          <h3 className="text-xl font-semibold mb-2 text-blue-400">
            Web Development Intern
          </h3>

          <p className="text-gray-400 mb-6">
            Oasis Infobyte | Jan 2025 – Feb 2025
          </p>

          <ul className="list-disc pl-6 text-gray-400 space-y-3">
            <li>
              Developed responsive user interfaces using HTML, CSS, and JavaScript.
            </li>
            <li>
              Collaborated in real-world development workflows and debugging processes.
            </li>
            <li>
              Improved UI performance and enhanced cross-device compatibility.
            </li>
            <li>
              Gained practical exposure to the web development lifecycle.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
};

export default Experience;