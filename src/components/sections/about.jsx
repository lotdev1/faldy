import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../profile/ProfileCard";

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

function About() {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-espresso px-5 py-16 text-cream sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Profile Card */}
          <div className="flex min-w-0 flex-col">
            {/* Profile Header */}
            <motion.div
              className="mb-5 flex items-center justify-between gap-3"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={transition}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-sand/60 sm:text-xs sm:tracking-[0.2em]">
                ABOUT ME / 02
              </span>

              <span className="text-[10px] text-right text-sand/60 sm:text-xs">
                GET TO KNOW ME
              </span>
            </motion.div>

            {/* Profile Card */}
            <motion.div
              className="flex flex-1 items-center justify-center py-3 sm:py-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="w-full max-w-[320px] sm:max-w-[360px]">
                <ProfileCard
                  name="Muhammad Faldy Julian"
                  title="Web Developer"
                  handle="lothand"
                  status="Available"
                  contactText="Contact"
                  avatarUrl="../me/about.jpeg"
                  iconUrl="/assets/demo/iconpattern.png"
                  holo={0.8}
                  glare={0.5}
                  tiltStrength={12}
                  parallax={8}
                  radius={16}
                  enableTilt
                  intro
                  showUserInfo
                  enableMobileTilt={false}
                  theme="dark"
                  onContactClick={handleContactClick}
                />
              </div>
            </motion.div>

            {/* Profile Status */}
            <motion.div
              className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-sand/20 pt-4"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ ...transition, delay: 0.15 }}
            >
              <span className="text-[10px] uppercase tracking-widest text-sand/60 sm:text-xs">
                WEB DEVELOPER
              </span>

              <span className="text-[10px] text-saddle sm:text-xs">
                CURRENTLY LEARNING
              </span>
            </motion.div>
          </div>

          {/* Right - About Description */}
          <div className="flex min-w-0 flex-col justify-center">
            {/* Section Label */}
            <motion.span
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-saddle sm:mb-5 sm:text-xs sm:tracking-[0.25em]"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ ...transition, delay: 0.1 }}
            >
              WHO I AM
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              JUST
              <br />
              CALL ME <span className="text-saddle">FALDY</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="mt-6 max-w-xl text-justify text-sm leading-7 text-cream/70 sm:mt-8 sm:text-base sm:leading-8 lg:text-lg"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ ...transition, delay: 0.3 }}
            >
              I'm a web developer passionate about building modern, interactive,
              and user-friendly digital experiences. I enjoy transforming ideas
              into functional websites, exploring creative web technologies, and
              continuously refining my skills through hands-on projects and
              experimentation.
            </motion.p>

            {/* Current Focus */}
            <motion.div
              className="mt-8 max-w-xl border-t border-sand/20 pt-5 sm:mt-10 sm:pt-6"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ ...transition, delay: 0.15 }}
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-saddle sm:text-xs">
                CURRENTLY EXPLORING
              </span>

              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                {/* Web Development */}
                <motion.div
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ ...transition, delay: 0.2 }}
                >
                  <span className="text-sm font-semibold text-cream">
                    Web Development
                  </span>

                  <p className="mt-2 text-sm leading-6 text-cream/50">
                    Building modern and responsive web applications.
                  </p>
                </motion.div>

                {/* Creative Development */}
                <motion.div
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ ...transition, delay: 0.35 }}
                >
                  <span className="text-sm font-semibold text-cream">
                    Creative Development
                  </span>

                  <p className="mt-2 text-sm leading-6 text-cream/50">
                    Exploring animations and interactive web experiences.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ ...transition, delay: 0.3 }}
            >
              <a
                href="/cv/muhammad-faldy-julian.pdf"
                download
                className="inline-flex items-center justify-center gap-3 bg-saddle px-5 py-3 text-xs font-semibold uppercase tracking-wide text-espresso transition-colors duration-300 hover:bg-cream sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Download CV
                <span>↓</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border border-sand/50 px-5 py-3 text-xs font-semibold uppercase tracking-wide text-cream transition-colors duration-300 hover:border-saddle hover:bg-saddle hover:text-espresso sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Contact Me
                <span>↗</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
