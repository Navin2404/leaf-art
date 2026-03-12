"use client";

import { motion } from "framer-motion";

export default function ReachUs() {
  return (
    <section id="reachus" className="py-24 bg-[#f8f5ef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Reach Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-green-950 mb-5">
            Let’s Create Something Beautiful
          </h2>

          <p className="text-gray-700 leading-8">
            Contact us for custom leaf art, collaborations, or creative
            inquiries. We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl shadow-md p-8"
          >
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-green-900 mb-1">
                  Phone
                </h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-900 mb-1">
                  Email
                </h4>
                <p className="text-gray-600">hello@leafart.com</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-900 mb-1">
                  Address
                </h4>
                <p className="text-gray-600">
                  Your address here, Tamil Nadu, India
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-green-900 mb-1">
                  Instagram
                </h4>
                <p className="text-gray-600">@leafartstudio</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            className="bg-white rounded-3xl shadow-md p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-green-700 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-green-700 transition"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-green-700 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-green-700 resize-none transition"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-green-700 hover:bg-green-800 transition text-white font-semibold"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}