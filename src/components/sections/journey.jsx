import React from "react";
import { motion } from "framer-motion";

const journey = [
  {
    year: "2020 — 2023",
    title: "SMP PGRI Citeureup",
    subtitle: "Junior High School",
    description:
      "The beginning of my educational journey and interest in technology.",
  },
  {
    year: "2024 — 2026",
    title: "SMKN 1 Cibinong",
    subtitle: "Vocational High School",
    description:
      "Developed technical knowledge and started building practical skills in technology.",
  },
  {
    year: "2026 — PRESENT",
    title: "Universitas Gunadarma",
    subtitle: "Informatics",
    description:
      "Currently exploring computer science, programming fundamentals, and software development.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

function Journey() {
  return (
    <section
      id="journey"
      className="relative bg-espresso px-6 py-28 text-cream md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Centered Heading */}
        <div className="mb-20 text-center">
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.25em] text-saddle"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={transition}
          >
            MY JOURNEY / 04
          </motion.span>

          <motion.h2
            className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ ...transition, delay: 0.2 }}
          >
            THE PATH
            <br />
            <span className="text-saddle">SO FAR</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <motion.div
            className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-sand/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2 }}
          />

          <div className="space-y-20">
            {journey.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className="relative grid grid-cols-2 items-center"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-1/2 top-2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-saddle bg-espresso"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                      ease: "backOut",
                    }}
                  />

                  {/* Left Content */}
                  <div
                    className={`${
                      isLeft
                        ? "col-start-1 pr-8 text-right md:pr-16"
                        : "col-start-1"
                    }`}
                  >
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          ...transition,
                          delay: index * 0.1,
                        }}
                      >
                        <motion.span
                          className="text-xs font-semibold tracking-[0.15em] text-saddle"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.1 }}
                        >
                          {item.year}
                        </motion.span>

                        <motion.h3
                          className="mt-3 text-lg font-semibold uppercase text-cream sm:text-2xl"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.2 }}
                        >
                          {item.title}
                        </motion.h3>

                        <motion.p
                          className="mt-1 text-sm text-saddle"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.3 }}
                        >
                          {item.subtitle}
                        </motion.p>

                        <motion.p
                          className="ml-auto mt-4 max-w-sm text-sm leading-7 text-cream/60"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.4 }}
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Content */}
                  <div
                    className={`${
                      !isLeft
                        ? "col-start-2 pl-8 text-left md:pl-16"
                        : "col-start-2"
                    }`}
                  >
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                          ...transition,
                          delay: index * 0.1,
                        }}
                      >
                        <motion.span
                          className="text-xs font-semibold tracking-[0.15em] text-saddle"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.1 }}
                        >
                          {item.year}
                        </motion.span>

                        <motion.h3
                          className="mt-3 text-lg font-semibold uppercase text-cream sm:text-2xl"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.2 }}
                        >
                          {item.title}
                        </motion.h3>

                        <motion.p
                          className="mt-1 text-sm text-saddle"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.3 }}
                        >
                          {item.subtitle}
                        </motion.p>

                        <motion.p
                          className="mt-4 max-w-sm text-sm leading-7 text-cream/60"
                          variants={reveal}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false, amount: 0.5 }}
                          transition={{ ...transition, delay: 0.4 }}
                        >
                          {item.description}
                        </motion.p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
