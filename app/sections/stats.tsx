"use client";
import Container from "@/components/Container";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";

export default function Stats() {
  const { language } = useLanguage();
  const content = getContent(language);

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
          {content.stats.title}
        </h3>
        <span className="sub-title text-primary">
          {content.stats.subtitle}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-2 lg:gap-2">
        {content.statsData.map((stat: any, idx: number) => (
          <div key={idx} >
            <div className="flex flex-col items-center gap-3 text-center p-4 sm:p-6 md:p-8 rounded-lg bg-white/20 backdrop-blur-md border border-primary/20 hover:bg-white/50 transition-all duration-300">
              <div className="text-5xl sm:text-5xl md:text-6xl font-bold text-primary">
                {stat.value}
              </div>
              <h4 className="text-lg sm:text-lg font-bold text-gray-900">
                {stat.label}
              </h4>
              <p className="text-sm sm:text-sm text-gray-700">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
