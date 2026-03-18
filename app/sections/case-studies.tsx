"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaQuoteRight } from "react-icons/fa"
import Container from "@/components/Container";
import { Button, buttonVariants } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { IoIosArrowForward } from "react-icons/io";

export default function CaseStudies() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (

        <Container className="border-t flex flex-col gap-20" >
            <div className="flex flex-col items-center gap-2 text-center">
                <h3 className="title">Agency Expertise</h3>
                <span className="sub-title">Our Skills</span>
            </div>


                    <div className="max-w-full">
                        {caseStudies.map((caseStudy) => (
                            <div key={caseStudy.name} className="md:basis-1/3" >
                                <div className={`h-full space-y-1 `}>
                                    <div className="flex items-center gap-5 bg-secondary p-5">
                                        <Image src={`/case_studies/${caseStudy.image}`} alt="Case Study" width={60} height={60} className="rounded-full object-cover" />
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold">{caseStudy.name}</span>
                                            <span className="text-muted-foreground text-sm">{caseStudy.services.join(", ")}</span>
                                        </div>
                                    </div>

                                   <div className="space-y-3 bg-secondary p-5">
                                     <div className="flex flex-col gap-3">
                                        <span className="text-4xl text-primary text-center mx-auto">
                                            <FaQuoteRight />
                                        </span>
                                        <p>{caseStudy.testimonial}</p>
                                    </div>

                                    <Button>
                                        See More
                                    </Button>
                                   </div>
                                </div>

                            </div>
                        ))}
                    </div>
        </Container>
    );
}

const caseStudies = [
    {
        name: "Eliana Capilar",
        testimonial: `Eliana was struggling to attract consistent clients to her hair clinic and relied mostly on walk-ins and word of mouth. Growth was slow, and her services weren’t reaching the right audience.

We stepped in with a strategic combination of Facebook Ads and Social Media Management. By creating targeted ad campaigns and a strong, consistent social media presence, we positioned her clinic in front of high-intent local customers while building trust through engaging content.

The results were transformational. Eliana now receives daily bookings from loyal clients, has a recognizable brand in her local market, and enjoys a steady, predictable flow of customers—allowing her business to scale with confidence.`,
        services: [
            "Website Creation",
            "Paid Facebook Ads",
            "Social Media Management",
        ],
        image: "sonia.jpg",
        see_more: "https://www.soniaeliana.pt/"
    },
];
