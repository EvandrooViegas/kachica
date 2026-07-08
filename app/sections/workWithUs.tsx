import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";

export default function WorkWithUs() {
  const { language } = useLanguage();
  const content = getContent(language);
  
  return (
    <Container className="md:grid md:grid-cols-2 md:justify-between items-center flex flex-col-reverse gap-20 ">
      <div className="md:w-[500px] md:h-[500px] w-[350px] h-[350px] relative ">
        <Image
          src="/1.jfif"
          fill
          alt="Icon"
          className=" object-cover rounded-xl  aspect-square"
        />
      </div>
      <div className="flex flex-col gap-6 w-full text-center items-center">
        <h4 className="sub-title">{content.workWithUs.subtitle}</h4>
        <h2 className="title">
          {content.workWithUs.title}
        </h2>

        <p className="text-2xl text-dimmed">
          {content.workWithUs.description}
        </p>
      </div>
    </Container>
  );
}
