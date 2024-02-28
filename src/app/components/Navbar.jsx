// Navbar.jsx
import React, { useState } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import 'animate.css';

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Posts",
    path: "#posts",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black-800 p-4 relative">
      <div className="flex justify-between items-center">
        {/* Logo or Brand */}
        <div className="text-white text-xl font-bold">Logo</div>
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-4">
          {/* Render NavLink components dynamically */}
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.path} text={link.title} />
          ))}
        </div>
        {/* Mobile Navigation Menu */}
        <div className="sm:hidden">
          {/* Hamburger Icon */}
          <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <MenuOverlay navLinks={navLinks} onClose={toggleMobileMenu} />}
    </nav>
  );
};

export default Navbar;
