import React from "react";
import { motion } from "framer-motion";
import AccordionGallery from "../gallery/AccordionGallery";

const certificateItems = [
  {
    image: "/sertificates/bnsp.jpeg",
    label: "Softwere Development Junior Coder",
    link: "#",
  },
  {
    image: "/sertificates/kominfo.png",
    label: "Data Analytics",
    link: "#",
  },
  {
    image: "/sertificates/clevio.jpg",
    label: "Game Development Training with Clevio Innovator Camp",
    link: "#",
  },
  {
    image: "/sertificates/idn.jpg",
    label: "Bootcamp Programmer Class",
    link: "#",
  },
  {
    image: "/sertificates/pkl.jpeg",
    label: "PKL in Astech Technology",
    link: "#",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
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

function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-espresso px-6 py-28 text-cream md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          {/* Eyebrow */}
          <motion.span
            className="text-xs font-semibold uppercase tracking-[0.25em] text-saddle"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={transition}
          >
            ACHIEVEMENTS / 05
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            className="mt-5 font-display text-5xl font-bold uppercase sm:text-6xl lg:text-7xl"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              ...transition,
              delay: 0.2,
            }}
          >
            CERTIFI<span className="text-saddle">CATES</span>
          </motion.h2>
        </div>

        {/* Accordion Gallery */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <AccordionGallery
            items={certificateItems}
            defaultIndex={0}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#FFF8E7"
            overlayColor="#30221B"
            textColor="#FFF8E7"
            grayscale={false}
            showLabels
            duration={0.6}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={460}
            gap={10}
            radius={12}
            orientation="horizontal"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Certificates;
