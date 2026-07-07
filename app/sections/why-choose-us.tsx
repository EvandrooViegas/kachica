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
    <div
      className="w-full bg-gradient-to-b from-white via-primary/5 to-white py-20 relative overflow-hidden"
      id="why-choose-us"
    >
      {/* Decorative gradient circles */}
     <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20  rounded-full blur-3xl -z-10"></div>
     <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/20  rounded-full blur-3xl -z-10"></div>
      <div className="px-6 md:px-12 flex flex-col gap-12">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div key={idx} className="relative">
                    <div
                      className={`
                        bg-white/40 border-2 border-primary/20 
                        transition-all duration-300 cursor-pointer
                        flex flex-col gap-6 p-8
                        h-full
                        backdrop-blur-md
                        md:col-span-4
                      `}
                    >
                      {/* Icon and Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center justify-center mb-4">
                            {IconComponent && (
                              <IconComponent size={48} className="text-primary" />
                            )}
                          </div>
                          <h4 className="text-lg font-bold text-primary leading-tight">
                            {language === "pt" ? item.titlePt : item.title}
                          </h4>
                        </div>
                      </div>


                      {/* Expandable Details */}
                      <div className={`
                        transition-all duration-300 overflow-hidden
                        opacity-100 pt-6 border-t-2 border-primary/20
                      `}>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {language === "pt" ? item.detailsPt : item.details}
                        </p>
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </div>
  );
}
