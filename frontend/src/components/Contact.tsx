const Contact = () => {
  return (
    <section
      id="contact"
      className="contact-bg py-32 px-6 relative"
    >
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="contact-particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-20px",
            animationDuration: `${8 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Elegant Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text text-transparent">
          Let’s Build Something Amazing Together
        </h2>

        <div className="w-24 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-12 rounded-full"></div>

        <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
          I'm open to internships, collaborations, and innovative opportunities.
          If you're looking for someone passionate about AI and full-stack development,
          let's connect.
        </p>

        {/* Contact Card */}
        <div className="contact-card p-10 rounded-2xl max-w-2xl mx-auto">

          <div className="space-y-6 text-gray-300">

            <p>
              📧{" "}
              <a
                href="mailto:srisanskriti05@gmail.com"
                className="text-blue-400 hover:text-white transition"
              >
                srisanskriti05@gmail.com
              </a>
            </p>

            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/sanskriti-srivastava-20103b284/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-white transition"
              >
                LinkedIn Profile
              </a>
            </p>

            <p>
              💻{" "}
              <a
                href="https://github.com/sanskriti261"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-white transition"
              >
                github.com/sanskriti261
              </a>
            </p>

          </div>

        </div>

        {/* Closing Line */}
        <p className="mt-16 text-gray-500 text-sm">
          Designed & Developed with 💜 by Sanskriti
        </p>

      </div>
    </section>
  );
};

export default Contact;