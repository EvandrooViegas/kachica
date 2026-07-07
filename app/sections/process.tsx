"use client";
import Container from "@/components/Container";
import { PROCESS_STEPS } from "@/lib/config";
import { useLanguage } from "@/app/language.context";
import AnimateElement from "@/components/AnimatedElement";

export default function Process() {
  const { t, language } = useLanguage();

  return (
    <Container
      className="flex flex-col gap-4 relative"
      bgClassName="bg-primary relative overflow-hidden"
      id="process"
    >

      <div className="flex flex-col items-center gap-2">
        <h3 className="title-dark">
          {t("How We Work", "Como Trabalhamos")}
        </h3>
      </div>

      {/* Process Flow with connecting line */}
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 to-transparent z-0"></div>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 relative z-10">
          {PROCESS_STEPS.map((step, idx) => (
              <div className="flex flex-col items-center gap-4">
                {/* Step number square */}

                {/* Card */}
                <div className="w-full backdrop-blur-md border space-y-3 border-white/20 py-8 px-8  ">
                  <div className="flex-shrink-0  w-full bg-white/40 text-white font-bold text-lg p-4 ">
                    {step.step} . {language === "pt" ? step.titlePt : step.title}
                  </div>
                  <p className="text-secondary ">
                    {language === "pt" ? step.descriptionPt : step.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
