"use client";
import Container from "@/components/Container";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";
import AnimateElement from "@/components/AnimatedElement";
import {
  BarChart3,
  Target,
  Users,
  Award
} from "lucide-react";
import { useState } from "react";

const iconMap: { [key: string]: React.ComponentType<{ size: number; className?: string }> } = {
  BarChart3,
  Target,
  Users,
  Award,
};

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Container
      className="w-full relative overflow-hidden"
      id="why-choose-us"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20  rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20  rounded-full blur-3xl -z-10"></div>
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 max-w-3xl">
          <h3 className="title text-primary">
            {content.whyChooseUs.title}
          </h3>
          <span className="sub-title text-primary">
            {content.whyChooseUs.subtitle}
          </span>
        </div>

        {/* Grid container with 4 columns */}
        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-2 relative z-10">
            {content.whyChooseUsData.map((item: any, idx: number) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={idx}
                  className={`
                        transition-all duration-300 cursor-pointer
                        flex flex-col gap-2 
                        h-full
                        ${idx == 0 || idx == 3 ? 'md:col-span-2' : ''}
                      `}
                >
                  {/* Icon and Header */}
                  <div className="flex items-center gap-3 sm:gap-4 text-primary  bg-secondary/50  border p-4 sm:p-6 md:p-8  backdrop-blur-md">
                    <div className="inline-flex items-center justify-center flex-shrink-0">
                      {IconComponent && (
                        <IconComponent size={28} className="sm:w-8 sm:h-8 md:w-9 md:h-9" />
                      )}
                    </div>
                    <h4 className={`text-lg sm:text-lg md:text-lg font-bold  leading-tight`}>
                      {item.title}
                    </h4>
                  </div>


                  {/* Expandable Details */}
                  <div className={`h-full  bg-secondary/50   border  p-4 sm:p-6 md:p-8 backdrop-blur-md`}>
                    <p className="text-dimmed text-base sm:text-base md:text-sm leading-relaxed ">
                      {item.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </Container>
  );
}
