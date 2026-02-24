const Projects = () => {
  return (
    <section
      id="projects"
      className="projects-bg py-32 px-6 relative"
    >
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-20px",
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>

        <p className="text-gray-400 max-w-2xl mx-auto mb-20">
          Innovative solutions combining artificial intelligence,
          scalable architecture, and real-time system development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">

          {/* AI Tourist Reservation */}
          <div className="project-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="font-bold text-xl mb-4 text-white">
              AI Tourist Reservation System
            </h3>

            <p className="text-gray-400 mb-6">
              Full-stack AI-powered tourism platform with chatbot support,
              secure authentication, and dynamic reservation management.
            </p>

            <ul className="text-gray-500 text-sm space-y-2 mb-6">
              <li>• AI chatbot integration</li>
              <li>• JWT authentication</li>
              <li>• Real-time booking system</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">React</span>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">MongoDB</span>
              <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full">Express</span>
            </div>
          </div>

          {/* AI Virtual Mouse */}
          <div className="project-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="font-bold text-xl mb-4 text-white">
              AI Virtual Mouse
            </h3>

            <p className="text-gray-400 mb-6">
              Gesture-controlled mouse using real-time computer vision,
              enabling hands-free interaction.
            </p>

            <ul className="text-gray-500 text-sm space-y-2 mb-6">
              <li>• OpenCV & Mediapipe</li>
              <li>• Real-time gesture tracking</li>
              <li>• Cursor simulation</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full">Python</span>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">OpenCV</span>
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">Mediapipe</span>
            </div>
          </div>

          {/* Kidney Disease Prediction */}
          <div className="project-card bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="font-bold text-xl mb-4 text-white">
              Kidney Disease Prediction System
            </h3>

            <p className="text-gray-400 mb-6">
              Machine learning model predicting chronic kidney disease
              using patient medical data with optimized accuracy.
            </p>

            <ul className="text-gray-500 text-sm space-y-2 mb-6">
              <li>• Data preprocessing</li>
              <li>• Model evaluation</li>
              <li>• Accuracy optimization</li>
            </ul>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-pink-600/20 text-pink-400 px-3 py-1 rounded-full">Machine Learning</span>
              <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">Python</span>
              <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">Scikit-learn</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;