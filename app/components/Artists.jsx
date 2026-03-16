"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const artists = [
  {
    id: 1,
    name: "Raguvaran",
    role: "Leaf Artist",
    image: "/ragu.jpg",
    phone: "+91 73589 14490",
    email: "gravitystudio2428@leafart.com",
    instagram: "salem_leaf_art",
    instagramUrl: "https://instagram.com/leafart.artistone",
  },
  {
    id: 2,
    name: "Navin Walker",
    role: "Botanical Designer and leaf artist",
    image: "/navv.jpeg",
    phone: "+91 96293 34302",
    email: "gravitystudio2428@gmail.com",
    instagram: "lovely_leaf_art",
    instagramUrl: "https://instagram.com/leafart.artisttwo",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="py-24 bg-[#f3f8f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <p className="text-green-700 font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Artists
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-green-950 mb-5">
            Meet the Creative Hands Behind Leaf Art
          </h2>

          <p className="text-gray-700 leading-8">
            Our artists bring nature, imagination, and craftsmanship together
            to create unique pieces filled with life and character.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 50, rotate: index === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.85,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                y: -12,
                rotate: index === 0 ? -1 : 1,
                transition: { duration: 0.3 },
              }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-green-200/50 via-white/40 to-green-100/50 blur-xl" />

              <div className="relative bg-white/90 backdrop-blur-md rounded-[2rem] shadow-xl border border-white/60 overflow-hidden">
                <div className="grid sm:grid-cols-[240px_1fr] items-center">
                  <div className="relative h-[320px] sm:h-full min-h-[320px]">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-7 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-green-950 mb-2">
                      {artist.name}
                    </h3>

                    <p className="text-green-700 font-medium mb-6">
                      {artist.role}
                    </p>

                    <div className="space-y-4 text-gray-700">
                      <div>
                        <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                          Phone
                        </p>
                        <a
                          href={`tel:${artist.phone.replace(/\s+/g, "")}`}
                          className="hover:text-green-700 transition"
                        >
                          {artist.phone}
                        </a>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-wide text-gray-500 mb-1">
                          Email
                        </p>
                        <a
                          href={`mailto:${artist.email}`}
                          className="hover:text-green-700 transition break-all"
                        >
                          {artist.email}
                        </a>
                      </div>

                      <div>
                        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                          Instagram
                        </p>

                        <a
                          href={artist.instagramUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-3 rounded-full bg-[#fff5f5] px-4 py-2 text-[#d62976] hover:scale-[1.03] transition"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z" />
                          </svg>
                          <span className="font-medium">@{artist.instagram}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}