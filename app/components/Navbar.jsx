"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-green-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-green-900 tracking-wide justify-self-start"
        >
          Leaf Art
        </a>

        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-green-700 transition">
            Home
          </a>
          <a href="#about" className="hover:text-green-700 transition">
            Who We Are
          </a>
          <a href="#works" className="hover:text-green-700 transition">
            Our Works
          </a>
          <a href="#reachus" className="hover:text-green-700 transition">
            Reach Us
          </a>
        </nav>

        <div />
      </div>
    </motion.header>
  );
}