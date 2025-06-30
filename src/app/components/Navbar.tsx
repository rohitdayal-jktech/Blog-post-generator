"use client";

import Link from "next/link";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="bg-white dark:bg-black dark:border-b dark:border-gray-600 shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[rgb(229,70,118)]">
            BlogLab
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-200 hover:text-[rgb(229,70,118)] transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-200 hover:text-[rgb(229,70,118)] transition"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 dark:text-gray-200 hover:text-[rgb(229,70,118)] transition"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-200 hover:text-[rgb(229,70,118)] transition"
            >
              Contact
            </Link>
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300"
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="mr-2 text-gray-600 dark:text-gray-300"
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-4 pt-2 pb-4 space-y-2 shadow-md transition-colors duration-300">
          <Link
            href="/"
            className="block text-gray-700 dark:text-gray-200 hover:text-[rgb(229,70,118)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-gray-700 dark:text-gray-200 hover:text-[rgb(229,70,118)]"
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 dark:text-gray-200 hover:text-[rgb(229,70,118)]"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 dark:text-gray-200 hover:text-[rgb(229,70,118)]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
