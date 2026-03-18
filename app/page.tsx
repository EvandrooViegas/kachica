import About from "./sections/mission";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Contact from "./sections/contact";
import CaseStudies from "./sections/case-studies";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Services />
    <CaseStudies />
    <Contact />
    </>
  );
}

