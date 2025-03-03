"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

interface NavLinksInterface {
  title: string;
  href: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navLinks: NavLinksInterface[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Tech Stack",
      href: "#techstack",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "/about",
    },
  ];

  return (
    <motion.nav
      className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Section */}
      <div className="z-50">
        <Link
          href="/"
          className="text-base font-medium leading-6 text-[#4A5568] flex items-center gap-2"
        >
          <Image 
            src={"/images/ajaykhan.png"} 
            alt="Logo" 
            width={110} 
            height={80}
            className="w-24 md:w-28 lg:w-32 transition-all duration-300"
          />
        </Link>
      </div>

      {/* Desktop Navigation (lg+) */}
      <div className="hidden lg:flex items-center gap-8 xl:gap-12">
        {navLinks.map(({ title, href }) => (
          <Link
            href={href}
            key={title}
            className="text-base font-medium text-[#4A5568] hover:-translate-y-1 transition-all duration-200 hover:text-purple-600"
          >
            {title}
          </Link>
        ))}
      </div>


      {/* Tablet Navigation (md-lg) */}
      <div className="hidden md:flex lg:hidden items-center gap-4">
        {navLinks.slice(0, 4).map(({ title, href }) => (
          <Link
            href={href}
            key={title}
            className="text-sm font-medium text-[#4A5568] hover:-translate-y-1 transition-all duration-200 hover:text-purple-600"
          >
            {title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (sm-md) */}
      <button
        className="md:hidden z-50 p-2 rounded-lg hover:bg-white text-black transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Dropdown */}
      <motion.div
        className={`md:hidden absolute top-full justify-center flex items-center flex-col left-0 right-0 bg-white shadow-xl backdrop-blur-xl transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center py-4">
          {navLinks.map(({ title, href }) => (
            <Link
              href={href}
              key={title}
              className="w-full text-center py-3 text-base font-medium text-[#4A5568] hover:bg-gray-100 transition-colors px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;