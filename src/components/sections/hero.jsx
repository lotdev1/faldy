import { motion } from "framer-motion";

import RotatingText from "../texts/RotatingText";
import TechText from "../texts/TechText";
import Button from "../button/button";

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

function Hero() {
  return (
    <section
      id="home"
      className="pointer-events-none relative flex min-h-screen items-center overflow-hidden bg-transparent px-5 py-24 text-cream sm:px-6 md:px-12 lg:px-20"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-sand/10" />
      <div className="pointer-events-none absolute -left-28 top-32 h-72 w-72 rounded-full border border-sand/10" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT - Hero Text */}
        <div className="pointer-events-auto relative z-20 flex min-w-0 flex-col items-start pl-0 sm:pl-6 lg:pl-10">
          {/* Eyebrow */}
          <motion.div
            className="mb-6 flex items-center gap-3 sm:mb-8"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="h-px w-7 bg-saddle sm:w-10" />

            <p className="text-[10px] font-medium tracking-[0.2em] text-sand sm:text-xs sm:tracking-[0.3em]">
              Muhammad Faldy Julian / 01
            </p>
          </motion.div>

          {/* Hero Heading - TechText */}
          <div className="pointer-events-auto flex w-full min-w-0 flex-col items-start">
            {/* First Line */}
            <motion.div
              className="relative h-[58px] w-full max-w-3xl sm:h-[75px] md:h-[90px] lg:h-[100px]"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TechText
                text="LINES THAT MATTER"
                fontWeight={600}
                fontSize={150}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily=""
                letterSpacing={-0.05}
                accentColor="#C5A77D"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={1.5}
                speed={0.8}
                bounce={0.4}
                selection
                labels
                color="#FFF8E7"
                align="left"
                draggable
                sweep
              />
            </motion.div>

            {/* Second Line */}
            <motion.div
              className="relative -mt-1 h-[58px] w-full max-w-3xl sm:h-[75px] md:h-[90px] lg:-mt-2 lg:h-[100px]"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <TechText
                text="CODE THAT COUNTS"
                fontWeight={600}
                fontSize={150}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily=""
                letterSpacing={-0.05}
                accentColor="#C5A77D"
                reach={200}
                softness={0.7}
                lineStyle="dashed"
                strokeWidth={1.5}
                speed={0.7}
                bounce={0.4}
                selection
                labels
                color="#C5A77D"
                align="left"
                draggable
                sweep
              />
            </motion.div>
          </div>

          {/* Rotating Text */}
          <motion.div
            className="mt-6 flex w-full flex-wrap items-center gap-x-3 gap-y-1 sm:mt-8 sm:gap-4"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="shrink-0 text-xl font-bold uppercase tracking-tight text-sand sm:text-3xl lg:text-4xl">
              FOCUS
            </span>

            <div className="min-w-0 text-xl font-bold uppercase tracking-tight text-saddle sm:text-3xl lg:text-4xl">
              <RotatingText
                texts={[
                  "WEB DEVELOPMENT",
                  "CREATIVE CODING",
                  "INTERACTIVE WEBSITES",
                  "MODERN WEB TECHNOLOGIES",
                  "DIGITAL EXPERIENCES",
                ]}
                effect="slide"
                direction="up"
                highlight
                highlightColor="#C5A77D"
                staggerFrom="last"
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                rotationInterval={2500}
                splitBy="characters"
                blur={0}
                auto
                loop
                pauseOnHover={false}
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 w-full max-w-3xl text-sm leading-7 text-sand/80 sm:mt-7 sm:text-base sm:leading-8"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Turning ideas into interactive experiences through code, creativity,
            and a passion for the web.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="mt-7 flex w-full flex-wrap gap-3 sm:mt-8 sm:gap-4"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <Button href="#projects">Explore Projects</Button>

            <Button href="/cv.pdf" variant="outline" icon="↓">
              Download CV
            </Button>
          </motion.div>

          {/* Bottom Label */}
          <motion.div
            className="mt-20 hidden items-center gap-4 md:flex"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="h-px w-12 bg-saddle/60" />

            <p className="text-[10px] tracking-[0.3em] text-sand/50">
              DESIGN · DEVELOPMENT · INNOVATION
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
