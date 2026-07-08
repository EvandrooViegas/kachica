"use client";
import Container from "@/components/Container";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";
import Image from "next/image";
import AnimateElement from "@/components/AnimatedElement";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Container
      className="flex flex-col gap-20 relative"
      bgClassName="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      id="portfolio"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      {/* Header */}
      <div className="flex flex-col items-start gap-3 max-w-2xl">
        <h3 className="title text-primary">
          {content.portfolio.title}
        </h3>
        <span className="sub-title text-primary">
          {content.portfolio.subtitle}
        </span>
        <p className="text-gray-600 text-base leading-relaxed mt-2">
          {content.portfolio.description}
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-2 lg:grid-cols-3">
        {content.portfolioData.map((project: any, idx: number) => (
          <AnimateElement key={project.title} delay={idx * 0.1}>
            <div className="group flex flex-col h-full bg-white/40 backdrop-blur-md border-2 border-primary/10 hover:border-primary transition-all duration-300 overflow-hidden hover:bg-white/50">
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-primary text-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-bold uppercase tracking-wider">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 sm:p-6 md:p-8 gap-4">
                {/* Title */}
                <h4 className="text-lg sm:text-lg font-bold text-primary leading-tight">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Divider */}
                <div className="w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent"></div>

                {/* CTA Button */}
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center justify-between gap-2 text-primary font-semibold text-sm sm:text-sm hover:gap-3 transition-all group/btn"
                >
                  <span className="uppercase tracking-wider">
                    {content.portfolio.ctaText}
                  </span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </AnimateElement>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center gap-4 pt-8">
        <p className="text-gray-700 text-center max-w-lg">
          {content.portfolio.bottomText}
        </p>
        <Button cta size="lg">
          {content.portfolio.bottomCta}
        </Button>
      </div>
    </Container>
  );
}
