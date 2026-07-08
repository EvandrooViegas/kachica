"use client"
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/app/language.context";
import { getContent } from "@/lib/i18n";

export default function Mission() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 lg:gap-12 " id="mission">
      <div className="md:col-span-2 flex flex-col gap-4 sm:gap-6">
        <h4 className="sub-title text-base sm:text-base">{content.mission.subtitle}</h4>
        <h2 className="title text-2xl sm:text-2xl md:text-3xl lg:text-4xl">{content.mission.title}</h2>
        <p className="text-xl sm:text-xl md:text-2xl text-dimmed">
          {content.mission.description}
        </p>
        <Button className="w-fit border-primary text-primary" variant="outline" size="default" cta>
          {content.mission.cta}
        </Button>
      </div>
      <div className="md:col-span-3 h-64 sm:h-96 md:h-[500px] lg:h-[600px] w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2">
        <Image
          src="/our_mission/1.jpg"
          width={500}
          height={500}
          alt="Icon"
          className="hidden md:inline md:ml-auto object-cover h-full w-full"
        />
        <Image
          src="/our_mission/3.jpg"
          width={500}
          height={500}
          alt="Icon"
          className="md:ml-auto  object-cover h-full w-full"
        />
      </div>
    </Container>
  );
}
