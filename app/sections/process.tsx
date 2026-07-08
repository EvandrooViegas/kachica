"use client";
import Container from "@/components/Container";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";
import AnimateElement from "@/components/AnimatedElement";

export default function Process() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Container
      className="flex flex-col gap-4 relative"
      bgClassName="bg-primary relative overflow-hidden"
      id="process"
    >

      <div className="flex flex-col items-center gap-2">
        <h3 className="title-dark">
          {content.process.title}
        </h3>
      </div>

      {/* Process Flow with connecting line */}
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 to-transparent z-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-2 lg:grid-cols-4 relative z-10">
          {content.processSteps.map((step: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center gap-4">
                {/* Step number square */}

                {/* Card */}
                <div className="w-full backdrop-blur-md border space-y-3 border-white/20 py-4 sm:py-6 md:py-8 px-4 sm:px-6 md:px-8  ">
                  <div className="flex-shrink-0  w-full bg-white/40 text-white font-bold text-lg sm:text-lg p-2 sm:p-3 md:p-4 ">
                    {step.step} . {step.title}
                  </div>
                  <p className="text-secondary text-sm sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
