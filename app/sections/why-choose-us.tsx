"use client";
import Container from "@/components/Container";
import { WHY_CHOOSE_US, SITE_CONFIG } from "@/lib/config";
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
            {language === "pt"
              ? "Por Que Escolher KACHICA"
              : SITE_CONFIG.whyChooseUs.title}
          </h3>
          <span className="sub-title text-primary">
            {language === "pt"
              ? "O Que Nos Diferencia"
              : SITE_CONFIG.whyChooseUs.subtitle}
          </span>
        </div>

        {/* Grid container with 4 columns */}
        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 relative z-10">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  className={`
                       
                        transition-all duration-300 cursor-pointer
                        flex flex-col gap-2 
                        h-full
                       
                        ${idx == 0 || idx == 3 ? 'col-span-2' : ''}
                      `}
                >
                  {/* Icon and Header */}
                  <div className="flex items-center gap-4 text-primary  bg-secondary/50  border p-8  backdrop-blur-md">
                    <div className="inline-flex items-center justify-center ">
                      {IconComponent && (
                        <IconComponent size={34} className="" />
                      )}
                    </div>
                    <h4 className={`text-lg font-bold  leading-tight`}>
                      {language === "pt" ? item.titlePt : item.title}
                    </h4>
                  </div>


                  {/* Expandable Details */}
                  <div className={`h-full  bg-secondary/50   border  p-8 backdrop-blur-md`}>
                    <p className="text-dimmed leading-relaxed ">
                      {language === "pt" ? item.detailsPt : item.details}
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
