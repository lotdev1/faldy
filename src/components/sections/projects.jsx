import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    number: "01",
    name: "PORTFOLIO",
    category: "PERSONAL WEBSITE",
    description:
      "A personal portfolio showcasing my projects, development journey, and passion for creating interactive digital experiences.",
    tech: ["React", "JavaScript", "Tailwind CSS", "GSAP", "Three.js"],
    image: "../projects/porto.png",
    demo: "#",
    github: "#",
  },
  {
    number: "02",
    name: "GIUNCO",
    category: "E-COMMERCE WEBSITE",
    description:
      "A dynamic perfume catalog website featuring product collections, interactive interfaces, and modern web experiences.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "GSAP", "PostgreSQL"],
    image: "../projects/giunco.png",
    demo: "https://giunco.id/",
    github: "#",
  },
  {
    number: "03",
    name: "TASKLY",
    category: "MOBILE APPLICATION",
    description:
      "A task management application designed to help users organize daily activities, manage deadlines, and stay productive.",
    tech: ["Flutter", "Dart", "SQLite"],
    image: "../projects/taskly.jpeg",
    demo: "#",
    github: "#",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-espresso px-6 py-28 text-cream md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-20">
          <div className="flex items-center justify-between">
            <motion.span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-saddle"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={transition}
            >
              SELECTED WORKS / 05
            </motion.span>

            <motion.span
              className="text-xs tracking-widest text-cream/40"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                ...transition,
                delay: 0.15,
              }}
            >
              03 PROJECTS
            </motion.span>
          </div>

          <motion.h2
            className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              ...transition,
              delay: 0.2,
            }}
          >
            SELECTED
            <br />
            <span className="text-saddle">WORKS.</span>
          </motion.h2>

          <motion.p
            className="mt-6 max-w-md text-sm leading-7 text-cream/60 sm:text-base"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              ...transition,
              delay: 0.35,
            }}
          >
            A collection of projects, experiments, and digital experiences I've
            worked on.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => {
            const reversed = index % 2 !== 0;

            return (
              <article
                key={project.number}
                className="grid grid-cols-1 items-center gap-8 border-b border-sand/30 pb-16 lg:grid-cols-2 lg:gap-16"
              >
                {/* Project Image */}
                <motion.div
                  className={`group relative overflow-hidden rounded-lg bg-sand/20 ${
                    reversed ? "lg:order-2" : "lg:order-1"
                  }`}
                  initial={{
                    opacity: 0,
                    x: reversed ? 60 : -60,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={transition}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} project preview`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-espresso/10 transition-colors duration-500 group-hover:bg-transparent" />

                  <motion.span
                    className="absolute left-5 top-5 text-xs font-semibold tracking-widest text-cream"
                    initial={{ opacity: 0, y: -15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                      ...transition,
                      delay: 0.3,
                    }}
                  >
                    PROJECT / {project.number}
                  </motion.span>
                </motion.div>

                {/* Project Information */}
                <div
                  className={`flex flex-col ${
                    reversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Project Category */}
                  <motion.div
                    className="flex items-center gap-4"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={transition}
                  >
                    <span className="text-sm font-semibold text-saddle">
                      {project.number}
                    </span>

                    <span className="h-px w-10 bg-sand/60" />

                    <span className="text-xs font-semibold tracking-[0.18em] text-cream/50">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Project Name */}
                  <motion.h3
                    className="mt-6 font-display text-4xl font-bold uppercase tracking-tight transition-colors duration-300 hover:text-saddle sm:text-5xl lg:text-6xl"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      ...transition,
                      delay: 0.1,
                    }}
                  >
                    {project.name}
                    <span className="text-saddle">.</span>
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="mt-6 max-w-lg text-justify text-sm leading-7 text-cream/60 sm:text-base"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      ...transition,
                      delay: 0.2,
                    }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((technology, techIndex) => (
                      <motion.span
                        key={technology}
                        className="border border-sand/40 px-3 py-2 text-xs text-cream/70 transition-colors duration-300 hover:border-saddle hover:text-saddle"
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: false,
                          amount: 0.5,
                        }}
                        transition={{
                          ...transition,
                          delay: 0.25 + techIndex * 0.08,
                        }}
                      >
                        {technology}
                      </motion.span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <motion.div
                    className="mt-10 flex flex-wrap items-center gap-5"
                    variants={reveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                      ...transition,
                      delay: 0.4,
                    }}
                  >
                    {/* Live Preview Button */}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-md bg-saddle px-6 py-3 text-sm font-bold uppercase tracking-wide text-espresso transition-all duration-300 hover:-translate-y-1 hover:bg-cream"
                    >
                      Live Preview
                      <span>↗</span>
                    </a>

                    {/* GitHub Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} source code on GitHub`}
                      title="Source Code"
                      className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-sand/50 text-cream transition-all duration-300 hover:-translate-y-1 hover:border-saddle hover:bg-saddle hover:text-espresso"
                    >
                      <FaGithub size={24} />
                    </a>
                  </motion.div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
