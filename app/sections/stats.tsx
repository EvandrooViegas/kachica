"use client";
import Container from "@/components/Container";
import { STATS, SITE_CONFIG } from "@/lib/config";
import { useLanguage } from "@/app/language.context";
import AnimateElement from "@/components/AnimatedElement";

export default function Stats() {
  const { language } = useLanguage();

  return (
    <Container
      className="flex flex-col gap-16 relative"
      bgClassName="bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden"
      id="stats"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"></div>
      
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="title text-primary">
          {language === "pt" ? "Nosso Impacto" : SITE_CONFIG.stats.title}
        </h3>
        <span className="sub-title text-primary">
          {language === "pt" ? "Resultados Comprovados" : SITE_CONFIG.stats.subtitle}
        </span>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {STATS.map((stat, idx) => (
          <div key={idx} >
            <div className="flex flex-col items-center gap-3 text-center p-8 rounded-lg bg-white/20 backdrop-blur-md border border-primary/20 hover:bg-white/50 transition-all duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary">
                {stat.value}
              </div>
              <h4 className="text-lg font-bold text-gray-900">
                {language === "pt" ? stat.labelPt : stat.label}
              </h4>
              <p className="text-sm text-gray-700">
                {language === "pt" ? stat.descriptionPt : stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
