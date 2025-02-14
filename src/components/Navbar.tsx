import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="KIIT Logo" className="h-10" />
          <h1 className="text-green-600 font-bold text-lg">KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY</h1>
        </div>

        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-green-600">ABOUT KIIT</a>
          <a href="#academics" className="hover:text-green-600">ACADEMICS</a>
          <a href="#research" className="hover:text-green-600">RESEARCH</a>
          <a href="#news" className="hover:text-green-600">NEWS & EVENTS</a>
          <a href="#explore" className="hover:text-green-600">EXPLORE KIIT</a>
          <a href="#virtual-tour" className="hover:text-green-600">VIRTUAL TOUR</a>
          <a href="#contact" className="hover:text-green-600">CONTACT US</a>
          <a href="#admissions" className="hover:text-green-600">ADMISSION 2025</a>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-2 p-4 text-gray-700 font-medium">
          <a href="#about" className="hover:text-green-600">ABOUT KIIT</a>
          <a href="#academics" className="hover:text-green-600">ACADEMICS</a>
          <a href="#research" className="hover:text-green-600">RESEARCH</a>
          <a href="#news" className="hover:text-green-600">NEWS & EVENTS</a>
          <a href="#explore" className="hover:text-green-600">EXPLORE KIIT</a>
          <a href="#virtual-tour" className="hover:text-green-600">VIRTUAL TOUR</a>
          <a href="#contact" className="hover:text-green-600">CONTACT US</a>
          <a href="#admissions" className="hover:text-green-600">ADMISSION 2025</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
