"use client";
import Container from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineGlobeAlt, HiOutlineMail } from "react-icons/hi";
import { IoPeopleOutline, IoSearch } from "react-icons/io5";
import { TbBrandVercel, TbSpeakerphone } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io"
import AnimateElement from "@/components/AnimatedElement";
import { useLanguage } from "@/app/language.context";
import { SERVICES, SITE_CONFIG } from "@/lib/config";

export default function Services() {
  const { language } = useLanguage();
  
  return (
    <Container className="flex flex-col gap-20" bgClassName="bg-secondary" id="services">
      <div className="w-full h-full  items-center gap-8 ">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="title">{SITE_CONFIG.services.title}</h3>
          <span className="sub-title">{SITE_CONFIG.services.subtitle}</span>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-4 ">
        {SERVICES.map((service, idx) => (
          <div
            key={service.name}
            className={`md:h-[450px] h-[600px] relative group `}
          >
            <Image
              src={service.imagePath}
              fill
              alt="Service"
              className="object-cover"
            />
            <div className="absolute inset-0 transition-all bg-gradient-to-b from-transparent to-black/95 " />
            <div className="absolute bottom-0 p-6 font-bold flex flex-col text-white">
              <div className="flex items-center gap-2 text-3xl transition-all">
                <div className="transition-all bg-primary w-4 h-4 "></div>
                <span>{language === "pt" ? service.namePt : service.name}</span>
              </div>
              <p
                className="
    w-full
    max-w-full
    text-neutral-400
  "
              >
                {language === "pt" ? service.descriptionPt : service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
