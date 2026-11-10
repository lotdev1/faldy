import React from "react";
import Dock from "../dockbar/Dock";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home01Icon,
  Settings01Icon,
  MusicNote03Icon,
  Mail01Icon,
  Delete02Icon,
} from "@hugeicons/core-free-icons";

const glyph = (icon) => (
  <HugeiconsIcon icon={icon} size="1em" strokeWidth={1.8} />
);

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const items = [
    {
      icon: glyph(Home01Icon),
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: glyph(Settings01Icon),
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: glyph(MusicNote03Icon),
      label: "Projects",
      onClick: () => scrollToSection("projects"),
    },
    {
      icon: glyph(Mail01Icon),
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
    { separator: true },
    {
      icon: glyph(Delete02Icon),
      label: "Back to Top",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
  ];

  return (
    <footer className="relative bg-espresso px-6 pb-8 pt-12 text-cream md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Dock Navigation */}
        <div className="pointer-events-none fixed bottom-5 left-0 z-[100] flex w-full justify-center">
          <div className="pointer-events-auto">
            <Dock
              items={items}
              baseItemSize={50}
              magnification={70}
              panelHeight={90}
              accentColor="#30221B"
              badgeColor="#C5A77D"
              position="bottom"
              distance={200}
              gap={10}
              roundness={0.5}
              bounce
              autoHide={false}
              tiles
              showLabels
              showIndicators
            />
          </div>

          {/* Footer Bottom */}
        </div>
      </div>
      <div className="relative left-1/2 mt-10 flex w-screen -translate-x-1/2 flex-col justify-between gap-3 border-t border-sand/30 px-6 pt-6 text-[10px] uppercase tracking-[0.2em] text-cream/30 sm:flex-row md:px-12 lg:px-20">
        <p>
          © {new Date().getFullYear()} Muhammad Faldy Julian. All rights
          reserved.
        </p>
        <p>Designed & Developed with Passion.</p>
      </div>
    </footer>
  );
}

export default Footer;
