"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="w-full flex justify-start px-8 py-6 bg-gradient-to-r from-gray-900 to-gray-800 shadow-md fixed top-0 z-50">
      {/* Links */}
      <div className="hidden md:flex justify-start space-x-6 font-medium text-gray-300">
        <a href="#home" className="hover:text-blue-400">Home</a>
        <a href="#learn" className="hover:text-blue-400">Learn</a>
        <a href="#tips" className="hover:text-blue-400">Tips</a>
        <a href="#about" className="hover:text-blue-400">About</a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden flex justify-start text-2xl text-gray-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 shadow-md flex flex-col items-start px-8 py-4 space-y-4 md:hidden text-gray-300">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#learn" onClick={() => setMenuOpen(false)}>Learn</a>
          <a href="#tips" onClick={() => setMenuOpen(false)}>Tips</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </div>
      )}

      {/* Logo */}
      <div className="flex items-center ml-auto text-blue-400 font-bold text-2xl">
        🔐 CyberAware
      </div>
    </nav>
  );
}
