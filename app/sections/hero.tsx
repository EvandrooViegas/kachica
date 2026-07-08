"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/app/language.context";
import { getContent } from "@/lib/i18n";
import { GoArrowRight } from "react-icons/go"
import { forwardRef, LegacyRef } from "react";

export default function Hero() {
  const { language } = useLanguage();
  const content = getContent(language);
  const heroConfig = content.hero;
    const brandingConfig = content.branding;
  return (
    <Background className="pt-44 sm:pt-40 md:pt-40 lg:pt-60 pb-20 md:pb-24 lg:pb-40" id="hero">
      <Container className="h-full p-0 flex flex-col  ">
        <div className="h-full flex flex-col mb-auto">
          <div className="flex flex-col gap-3 justify-center  items-center text-center  h-full text-white md:p-0 px-4 sm:px-6">
             <span className="font-semibold mb-2 text-lg sm:text-lg md:text-xl lg:text-2xl">
             {brandingConfig.tagline}
            </span>
            <h4 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold flex flex-col items-center gap-1.5 ">
              <span>{heroConfig.title}</span>{" "}
              <span className="bg-primary px-4 py-2">{heroConfig.highlight}</span>
            </h4>

            <div className="flex items-center gap-4 mt-6">
              <Button cta className="flex items-center gap-2">
                {heroConfig.cta}
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
