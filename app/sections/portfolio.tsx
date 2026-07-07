"use client";
import Container from "@/components/Container";
import { PORTFOLIO } from "@/lib/config";
import { useLanguage } from "@/app/language.context";
import Image from "next/image";
import AnimateElement from "@/components/AnimatedElement";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  const { language } = useLanguage();

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
          {language === "pt" ? "Nosso Portfólio" : "Our Portfolio"}
        </h3>
        <span className="sub-title text-primary">
          {language === "pt" ? "Projetos Recentes" : "Recent Projects"}
        </span>
        <p className="text-gray-600 text-base leading-relaxed mt-2">
          {language === "pt" 
            ? "Conheça alguns dos projetos que transformaram negócios e geraram resultados reais para nossos clientes."
            : "Explore some of the projects that transformed businesses and generated real results for our clients."}
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO.map((project, idx) => (
          <AnimateElement key={project.title} delay={idx * 0.1}>
            <div className="group flex flex-col h-full bg-white/40 backdrop-blur-md border-2 border-primary/10 hover:border-primary transition-all duration-300 overflow-hidden hover:bg-white/50">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-200 flex-shrink-0">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  {language === "pt" ? project.categoryPt : project.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 gap-4">
                {/* Title */}
                <h4 className="text-xl font-bold text-primary leading-tight">
                  {language === "pt" ? project.titlePt : project.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {language === "pt" ? project.descriptionPt : project.description}
                </p>

                {/* Divider */}
                <div className="w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent"></div>

                {/* CTA Button */}
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="flex items-center justify-between gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group/btn"
                >
                  <span className="uppercase tracking-wider">
                    {language === "pt" ? "Ver Projeto" : "View Project"}
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
          {language === "pt"
            ? "Quer saber como podemos transformar seu negócio? Vamos conversar!"
            : "Want to see how we can transform your business? Let's talk!"}
        </p>
        <Button cta size="lg">
          {language === "pt" ? "Começar Projeto" : "Start Your Project"}
        </Button>
      </div>
    </Container>
  );
}
