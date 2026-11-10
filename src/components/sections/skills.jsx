import React from "react";
import GlassIcons from "../icon/GlassIcons";

const TechIcon = ({ name, style = {} }) => (
  <img
    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`}
    alt={name}
    className="h-10 w-10 object-contain"
    style={style}
  />
);

const items = [
  // Frontend
  {
    icon: <TechIcon name="html5" />,
    color: "orange",
    label: "HTML5",
  },
  {
    icon: <TechIcon name="css3" />,
    color: "blue",
    label: "CSS3",
  },
  {
    icon: <TechIcon name="javascript" />,
    color: "yellow",
    label: "JavaScript",
  },
  {
    icon: (
      <TechIcon
        name="react"
        style={{
          filter: "brightness(1.5) saturate(1.4)",
          dropShadow: "0 0 5px #61DAFB",
        }}
      />
    ),
    color: "cyan",
    label: "React",
  },
  {
    icon: <TechIcon name="nextjs" />,
    color: "gray",
    label: "Next.js",
  },
  {
    icon: (
      <TechIcon
        name="tailwindcss"
        style={{
          filter: "brightness(1.7) saturate(1.5)",
          dropShadow: "0 0 5px #38BDF8",
        }}
      />
    ),
    color: "blue",
    label: "Tailwind CSS",
  },

  // Backend
  {
    icon: <TechIcon name="php" />,
    color: "purple",
    label: "PHP",
  },
  {
    icon: <TechIcon name="laravel" />,
    color: "red",
    label: "Laravel",
  },
  {
    icon: <TechIcon name="postgresql" />,
    color: "blue",
    label: "PostgreSQL",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-espresso px-6 py-24 text-cream md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left - Heading */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-saddle">
              03 / SKILLS & TECHNOLOGIES
            </span>

            <h2 className="mt-5 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-cream sm:text-6xl lg:text-7xl">
              TOOLS OF
              <br />
              <span className="text-saddle">MY TRADE.</span>
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-cream/60 sm:text-lg">
              Technologies and tools I use to build modern websites, interactive
              interfaces, and engaging digital experiences.
            </p>
          </div>

          {/* Right - Glass Icons */}
          <div className="relative flex min-h-[500px] w-full items-center justify-center">
            <div className="w-full">
              <GlassIcons
                items={items}
                size={82}
                gap={40}
                columns={3}
                roundness={0.6}
                refraction={0.8}
                bevel={0.6}
                dispersion={0}
                frost={0.2}
                shine={0.85}
                tint="#dfdfdf"
                tintOpacity={0.2}
                iconColor="#ffffff"
                plate="tilt"
                tilt={30}
                spread={0.5}
                hover="press"
                parallax={1}
                labels="hover"
                intro
                theme="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
