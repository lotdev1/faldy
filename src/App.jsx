import Hero from "./components/sections/hero";
import Lanyard from "./components/lanyard/Lanyard";
import StaggeredMenu from "./components/navbar/StaggeredMenu";
import About from "./components/sections/about";
import Journey from "./components/sections/journey";
import Certificates from "./components/sections/certificates";
import Projects from "./components/sections/projects";
import Contact from "./components/sections/contact";
import Footer from "./components/sections/footer";
import Skills from "./components/sections/skills";
import SmoothScroll from "./components/animations/SmoothScroll";

const menuItems = [
  {
    label: "Home",
    ariaLabel: "Go to home section",
    link: "#home",
  },
  {
    label: "About",
    ariaLabel: "Learn about me",
    link: "#about",
  },
  {
    label: "Projects",
    ariaLabel: "Explore my projects",
    link: "#projects",
  },
  {
    label: "Contact",
    ariaLabel: "Get in touch",
    link: "#contact",
  },
];

const socialItems = [
  {
    label: "GitHub",
    link: "https://github.com/",
  },
  {
    label: "LinkedIn",
    link: "https://linkedin.com/",
  },
];

function App() {
  return (
    <>
      {/* Smooth Wheel Scrolling */}
      <SmoothScroll />

      <main className="relative min-h-screen overflow-x-clip bg-espresso">
        {/* Staggered Menu */}
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering
            menuButtonColor="#FFF8E7"
            openMenuButtonColor="#FFF8E7"
            changeMenuColorOnOpen
            colors={["#60432F", "#30221B"]}
            accentColor="#C5A77D"
            isFixed
          />
        </div>

        {/* Lanyard */}
        <div className="pointer-events-none absolute inset-0 z-10 hidden h-screen w-full md:block">
          <div className="pointer-events-auto h-full w-full">
            <Lanyard
              frontImage="/card-front.jpeg"
              backImage="/card-back.png"
              imageFit="cover"
              cardColor="#30221B"
              orientation="portrait"
              finish="matte"
              cornerRadius={0.3}
              size={0.6}
              anchor="right"
              strapLength={0.5}
              strapColor="#60432F"
              strapWidth={0.65}
              metal="gold"
              gravity={1}
              damping={0.5}
              elasticity={0.5}
              breeze={0.2}
              interactive
              intro
            />
          </div>
        </div>

        {/* Portfolio Sections */}
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
