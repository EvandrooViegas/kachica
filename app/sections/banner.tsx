"use client";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";

export default function Banner() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Container className="md:grid md:grid-cols-2 justify-between">

      <div className='p-8 flex flex-col gap-8 justify-center items-center text-center'>
        <span className='block sub-title'>{content.banner.subtitle}</span>
        <div className="title flex flex-col gap-1 items-center">
          <span>{content.banner.title}</span>
        </div>
      </div>
      <div className="relative w-full h-[400px]">
        <Image
          alt="Banner"
          fill
          src="/banner.jpg"
          className="relative z-[-2] object-cover rounded-xl"
        />
      </div>
    </Container>
  );
}