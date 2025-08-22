"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-start px-8 py-6 bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50">
      <div className="hidden md:flex space-x-6 font-medium text-gray-600 dark:text-gray-300">
        <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Home
        </a>
        <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
          Learn
        </a>
        <a
          href="/tips"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          Tips
        </a>
        <a
          href="/about"
          className="hover:text-blue-600 dark:hover:text-blue-400"
        >
          About
        </a>
      </div>

      <button
        className="md:hidden flex  justify-start text-2xl text-gray-700 dark:text-gray-200"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {menuOpen && (
        <div className="justify-start absolute top-16 left space-x-3 -0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-start px-8 py-4 space-y-4 md:hidden">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Learn
          </a>
          <a href="/tips" onClick={() => setMenuOpen(false)}>
            Tips
          </a>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </div>
      )}
      <div className="flex items-center ml-auto gap-2 text-blue-700 dark:text-blue-400 font-bold text-2xl">
        🔐 CyberAware
      </div>
    </nav>
  );
}
