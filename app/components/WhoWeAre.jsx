"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-[#f8f5ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/ragu.jpg"
            alt="About Leaf Art"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <p className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Who We Are
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-green-950 leading-tight mb-6">
            Creative Hands, Natural Inspiration
          </h2>

          <p className="text-gray-700 leading-8 mb-5">
            Leaf Art is a creative studio where nature becomes a canvas. We
            transform leaves into artistic creations
            that feel elegant, peaceful, and deeply meaningful.
          </p>

          <p className="text-gray-700 leading-8 mb-8">
            Our work celebrates craftsmanship, originality, and the beauty of
            natural textures. Each piece is designed with care to bring warmth,
            style, and a natural story into every space.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "100%", text: "Nature-inspired designs" },
              { title: "Custom", text: "Handcrafted creative work" },
              { title: "Unique", text: "Art with character" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl p-5 shadow-md"
              >
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}