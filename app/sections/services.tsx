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
const services = [
  {
    name: "Social Media Managment",
    icon: <TbSpeakerphone />,
    imagePath: "/social.jpg",
    description:
      "We manage your social media—from content creation to posting and engagement—helping you build a strong brand voice, grow your audience, and turn followers into loyal customers.",
  },
  {
    name: "Facebook Paid Ads",
    icon: <TbSpeakerphone />,
    imagePath: "/ads.jpg",
    description:
      "We create and manage high-performing Facebook ad campaigns that drive real results—focusing on targeting, creative, and optimization to maximize your return and scale what works.",
  },
  {
    name: "Website Creation",
    icon: <HiOutlineGlobeAlt />,
    imagePath: "/website.jpg",
    description:
      "We design and build fast, modern, and user-friendly websites—focused on conversions and tailored to reflect your brand and turn visitors into customers.",
  },
  {
    name: "AI Automations",
    icon: <HiOutlineGlobeAlt />,
    imagePath: "/ai.jpg",
    description:
      "We implement AI-powered automations to streamline your operations—reducing manual work, boosting efficiency, and helping your business scale smarter.",
  },

];

export default function Services() {
  return (
    <Container className="flex flex-col gap-20" bgClassName="bg-secondary" id="services">
      <div className="w-full h-full  items-center gap-8 ">
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="title">Agency Expertise</h3>
          <span className="sub-title">Our Skills</span>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-8 ">
        {services.map((service, idx) => (
          <div
            key={service.name}
            className="md:h-[450px] h-[600px] relative group "
          >
            <Image
              src={`/services${service.imagePath}`}
              fill
              alt="Service"
              className="object-cover"
            />
            <div className="absolute inset-0 transition-all bg-gradient-to-b from-transparent to-black/95 " />
            <div className="absolute bottom-0 p-6 font-bold flex flex-col text-white">
              <div className="flex items-center gap-2 text-3xl transition-all">
                <div className="transition-all bg-primary w-4 h-4 "></div>
                <span>{service.name}</span>
              </div>
              <p
                className="
    w-full
    max-w-full
    text-neutral-400
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
