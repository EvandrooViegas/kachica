"use client";

import React, { useState, useEffect, useRef } from "react";
import Container from "@/components/Container";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useLanguage } from "@/app/language.context";
import { getContent } from "@/lib/i18n";

export default function CaseStudies() {
  const { language } = useLanguage();
  const content = getContent(language);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-rotate through case studies
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.caseStudiesData.length);
    }, isHovering ? 10000 : 5000); // Stop loop when hovering

    return () => clearInterval(interval);
  }, [content.caseStudiesData.length, isHovering]);

  const getCardHeight = (idx: number): string => {
    if (idx === activeIndex) {
      return 'auto';
    }
    // For collapsed cards, use a fixed small height instead of calc
    return '80px';
  };

  return (
    <Container className="relative border-t flex flex-col gap-20" id="case-studies">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="title">{content.caseStudies.title}</h3>
        <span className="sub-title">{content.caseStudies.subtitle}</span>
      </div>
      <div className="absolute top-0 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>

      <div className="flex flex-col gap-2 w-full">
        {content.caseStudiesData.map((caseStudy: any, idx: number) => (
          <div
            key={caseStudy.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            onClick={() => setActiveIndex(idx)}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="w-full transition-all duration-700 ease-in-out overflow-hidden cursor-pointer"
            style={{
              height: getCardHeight(idx),
              filter: idx === activeIndex ? 'grayscale(0%)' : 'grayscale(100%)',
              opacity: idx === activeIndex ? 1 : 0.7,
              transform: idx === activeIndex ? 'scale(1)' : 'scale(0.98)',
            }}
          >
            <CaseStudyCard caseStudy={caseStudy} extended={false} />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {content.caseStudiesData.map((_: any, idx: number) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 transition-all duration-300 ${
              idx === activeIndex 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to case study ${idx + 1}`}
          />
        ))}
      </div>
    </Container>
  );
}
