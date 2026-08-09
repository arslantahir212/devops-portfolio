function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <a href="#home" className="text-2xl font-bold text-blue-400">
          Muhammad Arslan Tahir
        </a>

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">

          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#certifications" className="hover:text-blue-400 transition">
              Certifications
            </a>
          </li>
           
           <li>
  <a
    href="#education"
    className="hover:text-blue-400 transition-colors"
  >
    Education
  </a>
</li>           

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
