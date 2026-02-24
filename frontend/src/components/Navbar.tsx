const Navbar = () => {
  return (
    <nav className="fixed w-full bg-black/70 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Sanskriti Srivastava</h1>
        <div className="space-x-6 text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#chat" className="hover:text-white">AI Chat</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;