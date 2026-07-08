"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/language.context";
import { SITE_CONFIG } from "@/lib/config";
import { GoArrowRight } from "react-icons/go"
import { forwardRef, LegacyRef } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const heroConfig = SITE_CONFIG.hero;
  
  return (
    <Background className="pt-80 pb-40">
      <Container className="h-full p-0 flex flex-col  ">
        <div className="h-full flex flex-col mb-auto">
          <div className="flex flex-col gap-3 justify-center  items-center   h-full text-white md:p-0 px-6">
           
            <h4 className="md:text-7xl text-6xl font-bold flex flex-col items-center gap-1.5 ">
              <span>{t(heroConfig.title, heroConfig.titlePt)}</span>{" "}
              <span className="bg-primary px-4 py-2">{t(heroConfig.highlight, heroConfig.highlightPt)}</span>
            </h4>

            <div className="flex items-center gap-4 mt-6">
              <Button cta className="flex items-center gap-2">
                {t(heroConfig.cta, heroConfig.ctaPt)}
                <GoArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Background>
  );
}

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;
const Background = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className="relative"
     
    >
      <video
        className="absolute z-[-2] w-full h-full object-cover bg-black"
        loop
        autoPlay
        muted={true}
      >
        <source src="/sections/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 z-[-1] bg-black/75" />
      <div className={`relative z-[1] w-full h-full ${className}`}  ref={ref as LegacyRef<HTMLDivElement> | undefined}>{children}</div>
    </div>
  );
});
Background.displayName = "Background";
