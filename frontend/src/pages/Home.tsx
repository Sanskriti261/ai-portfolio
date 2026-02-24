import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/projects";
import Experience from "../components/Experience";
import AIChat from "../components/AIChat";
import Contact from "../components/contact";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <AIChat />
      <Contact />
    </div>
  );
};

export default Home;