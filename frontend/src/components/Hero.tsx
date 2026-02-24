import { useEffect, useState } from "react";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Machine Learning Explorer",
    "Problem Solver"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const current = roles[index];
    let i = 0;

    const typing = setInterval(() => {
      setText(current.slice(0, i));
      i++;
      if (i > current.length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
          setText("");
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section className="hero-bg h-screen flex flex-col justify-center items-center text-center px-6 relative">

      {/* Glow */}
      <div className="hero-glow"></div>

      <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
        Hi, I'm Sanskriti 👋
      </h1>

      <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
        {text}
        <span className="cursor"></span>
      </h2>

      <p className="text-gray-400 max-w-2xl mb-10">
        Passionate about building intelligent systems, scalable web applications,
        and impactful digital solutions powered by AI.
      </p>

      <div className="flex gap-6">
        <a
          href="#projects"
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-8 py-3 border border-purple-500 rounded-full text-purple-400 hover:bg-purple-500 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>

    </section>
  );
};

export default Hero;