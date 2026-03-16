"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  { type: "image", src: "/couples.jpg" },
  { type: "video", src: "/bamboo.mp4" },
  { type: "image", src: "/greeny.jpg" },
  { type: "video", src: "/soap.mp4" },
  { type: "image", src: "/greeny.jpg" },
];

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slides[currentSlide].type === "image" ? (
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${slides[currentSlide].src}')` }}
              />
            ) : (
              <video
                className="w-full h-full object-cover"
                src={slides[currentSlide].src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-r from-green-950/85 via-green-900/60 to-green-800/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
        <motion.div
          className="max-w-3xl text-white"
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={textItemVariants}
            className="uppercase tracking-[0.2em] text-sm md:text-base text-green-100 mb-4"
          >
            Nature Inspired Creative Studio
          </motion.p>

          <motion.h1
            variants={textItemVariants}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Bringing Nature to Life Through Leaf Art
          </motion.h1>

          <motion.p
            variants={textItemVariants}
            className="text-base md:text-lg leading-8 text-green-50/90 max-w-2xl mb-8"
          >
            We create beautiful handcrafted leaf art pieces that blend natural
            elegance with meaningful design. Every creation reflects creativity,
            calmness, and the timeless beauty of nature.
          </motion.p>

          <motion.div
            variants={textItemVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.a
              href="#works"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 transition text-white font-semibold"
            >
              View Our Works
            </motion.a>

            <motion.a
              href="#reachus"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-green-900 transition font-semibold"
            >
              Reach Us
            </motion.a>
          </motion.div>

          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-10 bg-white"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}