import React from "react";
import { motion } from "framer-motion";

const socials = [
  {
    name: "WhatsApp",
    username: "+62 896 3846 9776",
    url: "https://wa.me/089638469776",
  },
  {
    name: "Instagram",
    username: "@fldy____",
    url: "https://instagram.com/fldy____",
  },
  {
    name: "LinkedIn",
    username: "Muhammad Faldy Julian",
    url: "https://www.linkedin.com/in/muhammad-faldy-julian-a9b75844a/",
  },
  {
    name: "GitHub",
    username: "@lotdev1",
    url: "https://github.com/lotdev1",
  },
];

const revealLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const revealRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-espresso px-6 py-20 text-cream md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl md:grid-cols-2">
          {/* LEFT - Main Text */}
          <motion.div
            className="flex flex-col justify-center border-b border-sand/40 p-8 sm:p-12 md:border-b-0 md:border-r lg:p-16"
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={transition}
          >
            <motion.h2
              className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                ...transition,
                delay: 0.2,
              }}
            >
              LINES THAT
              <br />
              <span className="text-saddle">MATTER.</span>
              <br />
              CODE THAT
              <br />
              <span className="text-saddle">COUNTS.</span>
            </motion.h2>
          </motion.div>

          {/* RIGHT - Social Links */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-b border-sand/40 py-6 transition-colors duration-300 first:border-t hover:text-saddle"
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.5,
                }}
                transition={{
                  ...transition,
                  delay: index * 0.12,
                }}
              >
                <div>
                  <motion.h3
                    className="text-lg font-semibold uppercase tracking-wide sm:text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      ...transition,
                      delay: 0.15 + index * 0.12,
                    }}
                  >
                    {social.name}
                  </motion.h3>

                  <motion.p
                    className="mt-1 text-xs tracking-wide text-cream/40 transition-colors group-hover:text-saddle/70"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      ...transition,
                      delay: 0.25 + index * 0.12,
                    }}
                  >
                    {social.username}
                  </motion.p>
                </div>

                <motion.span
                  className="text-xl text-saddle transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    ...transition,
                    delay: 0.3 + index * 0.12,
                  }}
                >
                  ↗
                </motion.span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
