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
      "We manage your social media presence end-to-end, from content creation to posting and engagement. Our goal is to build a consistent brand voice, grow your audience, and turn followers into loyal customers through strategic, data-driven content.",
  },
  {
    name: "Facebook Paid Ads",
    icon: <TbSpeakerphone />,
    imagePath: "/ads.jpg",
    description:
      "We create and manage high-performing Facebook ad campaigns designed to drive real results. From audience targeting and creative design to testing and optimization, we focus on maximizing your return on ad spend and scaling what works.",
  },
  {
    name: "Website Creation",
    icon: <HiOutlineGlobeAlt />,
    imagePath: "/website.jpg",
    description:
      "We design and build modern, responsive websites that are fast, user-friendly, and conversion-focused. Whether you need a simple landing page or a full business website, we create online experiences that reflect your brand and turn visitors into customers.",
  },
  {
    name: "AI Automations",
    icon: <HiOutlineGlobeAlt />,
    imagePath: "/ai.jpg",
    description:
      "We implement AI-powered automations to streamline your business operations and save time. From lead handling and customer support to internal workflows, our solutions reduce manual work, increase efficiency, and help your business scale smarter.",
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
          <AnimateElement
            key={service.name}
            animate={{
              transition: { duration: 1.2 },
              opacity: [0, 1],
              y: [idx * 20 + 60, 0],
            }}
            className="md:h-[450px] h-[600px] relative group "
          >
            <Image
              src={`/services${service.imagePath}`}
              fill
              alt="Service"
              className="object-cover  rounded-xl"
            />
            <div className="absolute inset-0 transition-all group-hover:bg-black/50 group-hover:backdrop-blur bg-gradient-to-b from-transparent to-black/95  rounded-xl" />
            <div className="absolute bottom-0 p-6 font-bold flex flex-col text-white">
              <span className="flex items-center gap-2 text-3xl transition-all translate-y-24 group-hover:translate-y-[calc(100%_-_20px)] ">
                <div className="transition-all bg-primary w-4 h-4 group-hover:rounded-none rounded-full"></div>
                <span>{service.name}</span>

              </span>
              <br />
              <p
                className="
    w-full
    max-w-full
    text-lg
    text-neutral-300
    opacity-0
    translate-y-4
    transition-all duration-500 ease-in-out
    group-hover:opacity-100
    group-hover:translate-y-0
  "
              >
                {service.description}
              </p>
            </div>
          </AnimateElement>
        ))}
      </div>
    </Container>
  );
}
