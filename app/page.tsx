import About from "./sections/mission";
import Hero from "./sections/hero";
import Services from "./sections/services";
import Contact from "./sections/contact";
import CaseStudies from "./sections/case-studies";
import Stats from "./sections/stats";
import Process from "./sections/process";
import WhyChooseUs from "./sections/why-choose-us";
import FAQSection from "./sections/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Services />
      <CaseStudies />
      <Process />
      <WhyChooseUs />
      {/* <Contact /> */}
      <FAQSection />
    </>
  );
}

