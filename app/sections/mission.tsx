"use client"
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/app/language.context";
import { SITE_CONFIG } from "@/lib/config";

export default function Mission() {
  const { language } = useLanguage();
  const missionConfig = SITE_CONFIG.mission;

  return (
    <Container className="md:grid md:grid-cols-5  flex flex-col gap-20 " id="mission">
      <div className="col-span-2 flex flex-col gap-6">
        <h4 className="sub-title">{missionConfig.subtitle}</h4>
        <h2 className="title">{missionConfig.title}</h2>
        <p className="text-2xl text-dimmed">
          {missionConfig.description}
        </p>
        <Button className="w-fit border-primary text-primary" variant="outline" size="default" cta>
          {language === "pt" ? "Ver Como" : missionConfig.cta}
        </Button>
      </div>
      <div className="md:col-span-3 md:h-[600px] h-[400px] w-full md:grid md:grid-cols-2 flex flex-col gap-8">
        <Image
          src="/our_mission/1.jpg"
          width={500}
          height={500}
          alt="Icon"
          className="md:ml-auto hidden md:inline object-cover h-full"
        />
        <Image
          src="/our_mission/3.jpg"
          width={500}
          height={500}
          alt="Icon"
          className="md:ml-auto  object-cover h-full"
        />
      </div>
    </Container>
  );
}
