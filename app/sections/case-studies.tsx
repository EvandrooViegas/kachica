"use client";

import React from "react";
import Container from "@/components/Container";
import CaseStudyCard from "@/components/CaseStudyCard";
import { useLanguage } from "@/app/language.context";
import { getContent } from "@/lib/i18n";

export default function CaseStudies() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Container className="relative border-t flex flex-col gap-20" id="case-studies">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="title">{content.caseStudies.title}</h3>
        <span className="sub-title">{content.caseStudies.subtitle}</span>
      </div>
      <div className="absolute top-0 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2">
        {content.caseStudiesData.map((caseStudy: any, idx: number) => (
          <div key={caseStudy.id} className={`${idx == 0 ? 'md:col-span-2' : ''}`}>
            <CaseStudyCard caseStudy={caseStudy} extended={idx == 0} />
          </div>
        ))}
      </div>
    </Container>
  );
}
