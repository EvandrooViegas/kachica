"use client";
import Container from "@/components/Container";
import Image from "next/image";
import { useLanguage } from "@/app/language.context";
import { getContent } from "@/lib/i18n";

export default function Services() {
  const { language } = useLanguage();
  const content = getContent(language);
  
  return (
    <Container className="flex flex-col gap-20" bgClassName="bg-secondary" id="services">
      <div className="w-full h-full  items-center gap-8 ">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="title">{content.services.title}</h3>
          <span className="sub-title">{content.services.subtitle}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-2 lg:gap-2 ">
        {content.servicesData.map((service: any) => (
          <div
            key={service.name}
            className={`h-64 sm:h-80 md:h-[420px] lg:h-[450px] relative group `}
          >
            <Image
              src={service.imagePath}
              fill
              alt="Service"
              className="object-cover"
            />
            <div className="absolute inset-0 transition-all bg-gradient-to-b from-transparent to-black/95 " />
            <div className="absolute bottom-0 p-4 sm:p-6 font-bold flex flex-col text-white">
              <div className="flex items-center gap-2 text-2xl sm:text-2xl md:text-3xl transition-all">
                <div className="transition-all bg-primary w-4 h-4 "></div>
                <span className="line-clamp-2">{service.name}</span>
              </div>
              <p
                className="
    w-full
    max-w-full
    text-neutral-400 text-sm sm:text-sm
  "
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
