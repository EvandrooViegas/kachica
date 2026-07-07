"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteRight } from "react-icons/fa"
import Container from "@/components/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowForward } from "react-icons/io";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function CaseStudies() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (

    <Container className="relative border-t flex flex-col gap-20" >
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="title">Agency Expertise</h3>
        <span className="sub-title">Our Skills</span>
      </div>
<div className="absolute top-0 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>
<div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>

      <div className="grid grid-cols-2 gap-2">
        {caseStudies.map((caseStudy, idx) => (
          <CaseStudyCard caseStudy={caseStudy} extended={idx == 0} />
        ))}
      </div>
    </Container>
  );
}

const caseStudies = [
  {
    name: "Eliana Capilar",
    testimonial: `Eliana was struggling to attract consistent clients to her hair clinic and relied mostly on walk-ins and word of mouth. Growth was slow, and her services weren’t reaching the right audience.

We stepped in with a strategic combination of Facebook Ads and Social Media Management. By creating targeted ad campaigns and a strong, consistent social media presence, we positioned her clinic in front of high-intent local customers while building trust through engaging content.

The results were transformational. Eliana now receives daily bookings from loyal clients, has a recognizable brand in her local market, and enjoys a steady, predictable flow of customers—allowing her business to scale with confidence.`,
    services: [
      "Website Creation",
      "Paid Facebook Ads",
      "Social Media Management",
    ],
    image: "sonia.jpg",
    see_more: "https://www.soniaeliana.pt/"
  },
  {
    name: "Eliana Capilar",
    testimonial: `Eliana was struggling to attract consistent clients to her hair clinic and relied mostly on walk-ins and word of mouth. Growth was slow, and her services weren’t reaching the right audience.

We stepped in with a strategic combination of Facebook Ads and Social Media Management. By creating targeted ad campaigns and a strong, consistent social media presence, we positioned her clinic in front of high-intent local customers while building trust through engaging content.

The results were transformational. Eliana now receives daily bookings from loyal clients, has a recognizable brand in her local market, and enjoys a steady, predictable flow of customers—allowing her business to scale with confidence.`,
    services: [
      "Website Creation",
      "Paid Facebook Ads",
      "Social Media Management",
    ],
    image: "sonia.jpg",
    see_more: "https://www.soniaeliana.pt/"
  },
  {
    name: "Eliana Capilar",
    testimonial: `Eliana was struggling to attract consistent clients to her hair clinic and relied mostly on walk-ins and word of mouth. Growth was slow, and her services weren’t reaching the right audience.

We stepped in with a strategic combination of Facebook Ads and Social Media Management. By creating targeted ad campaigns and a strong, consistent social media presence, we positioned her clinic in front of high-intent local customers while building trust through engaging content.

The results were transformational. Eliana now receives daily bookings from loyal clients, has a recognizable brand in her local market, and enjoys a steady, predictable flow of customers—allowing her business to scale with confidence.`,
    services: [
      "Website Creation",
      "Paid Facebook Ads",
      "Social Media Management",
    ],
    image: "sonia.jpg",
    see_more: "https://www.soniaeliana.pt/"
  },
];

// "use client";

// import Container from "@/components/Container";
// import { useLanguage } from "@/app/language.context";
// import CaseStudyCard from "@/components/CaseStudyCard";

// // Sample case studies data
// const CASE_STUDIES = [
//   {
//     id: 1,
//     name: "Eliana Capilar",
//     services: ["Facebook Ads", "Social Media", "Branding"],
//     explanation: "Transformed a local hair clinic into a thriving digital business with strategic social media and targeted ads.",
//     explanationPt: "Transformou uma clínica de cabelo local em um negócio digital próspero com mídia social estratégica e anúncios direcionados.",
//     testimony: "KACHICA is not just an agency, they are a true partner in growth.",
//     testimonyPt: "KACHICA não é apenas uma agência, é uma parceira verdadeira no crescimento.",
//     link: "https://example.com",
//     src: "/portfolio/project-2.jpg",

//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Sonia Rodriguez",
//     services: ["Website", "Facebook Ads", "Social Media"],
//     explanation: "Expanded a fashion brand's reach from local to regional market with comprehensive digital strategy.",
//     explanationPt: "Expandiu o alcance de uma marca de moda de local para regional com estratégia digital abrangente.",
//     testimony: "The ROI from their campaigns has been incredible.",
//     testimonyPt: "O ROI de suas campanhas foi incrível.",
//     link: "https://example.com",
//     src: "/portfolio/project-2.jpg",
//     featured: false,
//   },
//   {
//     id: 3,
//     name: "Tech Startup",
//     services: ["Website", "AI Automation", "Strategy"],
//     explanation: "Built a professional digital presence for a growing tech platform.",
//     explanationPt: "Construiu uma presença digital profissional para uma plataforma de tecnologia em crescimento.",
//     testimony: "Their strategic approach helped us scale faster than expected.",
//     testimonyPt: "A abordagem estratégica deles nos ajudou a escalar mais rápido do que o esperado.",
//     link: "https://example.com",
//     src: "/portfolio/project-2.jpg",
//     featured: false,
//   },
// ];

// export default function CaseStudies() {
//   const { language } = useLanguage();
//   const featured = CASE_STUDIES.find((cs) => cs.featured);
//   const others = CASE_STUDIES.filter((cs) => !cs.featured);

//   return (
//     <Container
//       className="flex flex-col gap-20 relative"
//       bgClassName="bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden"
//       id="case-studies"
//     >
//       {/* Decorative gradient circles */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>

//       {/* Header */}
//       <div className="flex flex-col items-start gap-3 max-w-2xl">
//         <h3 className="title text-primary">
//           {language === "pt" ? "Estudos de Caso" : "Case Studies"}
//         </h3>
//         <span className="sub-title text-primary">
//           {language === "pt" ? "Nossos Sucessos" : "Our Successes"}
//         </span>
//       </div>

//       {/* Grid with featured card */}
//       {featured && (
//         <div className="grid grid-cols-2  gap-4">
//           <CaseStudyCard
//             name={featured.name}
//             services={featured.services}
//             explanation={language === "pt" ? featured.explanationPt : featured.explanation}
//             testimony={language === "pt" ? featured.testimonyPt : featured.testimony}
//             link={featured.link}
//                      src={featured.src}
//             featured={true}
//             delay={0}
//           />

//           {/* Other cards */}
//           {others.map((cs, idx) => (
//             <CaseStudyCard
//               key={cs.id}
//               src={cs.src}
//               name={cs.name}
//               services={cs.services}
//               explanation={language === "pt" ? cs.explanationPt : cs.explanation}
//               testimony={language === "pt" ? cs.testimonyPt : cs.testimony}
//               link={cs.link}
//               featured={false}
//               delay={(idx + 1) * 0.1}
//             />
//           ))}
//         </div>
//       )}
//     </Container>
//   );
// }
