"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  {
    id: 1,
    image: "/bloom.jpg",
    title: "Leaf Frame Design",
    description:
      "Elegant handcrafted leaf framing with natural textures and refined artistic composition.",
  },
  {
    id: 2,
    image: "/close.png",
    title: "Botanical Wall Art",
    description:
      "Preserved botanical elements arranged into premium decorative wall art pieces.",
  },
  {
    id: 3,
    image: "/bloom.jpg",
    title: "Custom Leaf Craft",
    description:
      "Personalized leaf artwork created for gifts, home styling, and special occasions.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function OurWorks() {
  return (
    <section id="works" className="py-24 bg-[#edf5ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Our Works
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-green-950 mb-5">
            Nature Made Beautiful
          </h2>

          <p className="text-gray-700 leading-8">
            Explore a selection of our recent creations, where natural beauty
            and artistic craftsmanship come together in every design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md transition duration-300"
            >
              <div className="relative w-full h-72 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {work.title}
                </h3>
                <p className="text-gray-600 leading-7">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}