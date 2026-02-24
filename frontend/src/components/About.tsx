import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ================= IMAGE SIDE ================= */}
        <div className="flex justify-center relative w-96 h-96 group">

          {/* Rotating Rays */}
          <div className="rays"></div>

          {/* Sparks */}
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="spark"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: "-20px",
                  animationDuration: `${3 + Math.random() * 3}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>

          {/* Image Card */}
          <div className="energy-card relative w-80 h-80 rounded-full p-[4px] bg-gradient-to-tr from-purple-500 via-blue-500 to-pink-500">

            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profile}
                alt="Sanskriti"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

          </div>
        </div>

        {/* ================= TEXT SIDE ================= */}
        <div className="fade-up">

          <h2 className="text-4xl md:text-5xl font-bold mb-8 animated-heading">
            About Me
          </h2>

          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            I am a passionate Computer Science undergraduate with a strong
            foundation in data structures, algorithms, and AI-driven development.
            I enjoy solving complex problems and transforming innovative ideas
            into scalable, real-world solutions.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed text-lg">
            With hands-on experience in React, Python, and Machine Learning,
            I focus on building intelligent, user-centric applications that combine
            clean design with powerful backend logic. I thrive at the intersection
            of full-stack development and artificial intelligence.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
            Beyond coding, I am driven by curiosity and continuous learning.
            Whether exploring emerging AI technologies or crafting seamless
            digital experiences, I aim to build impactful solutions that
            create meaningful change.
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;