"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";
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
        // <Container className="relative" bgClassName="bg-black">
        //     <div className="absolute -top-4 -right-4 z-[2] bg-white/70 backdrop-blur p-12 max-w-[500px]">
        //         <span className="block sub-title-dark">Case Studies</span>
        //         <div className="title">
        //             <p className="text-5xl title">
        //                 See how we helped other businesses
        //             </p>
        //             <p className="bg-primary text-white px-3 mt-3 text-5xl w-fit">
        //                 LEVEL UP
        //             </p>
        //         </div>
        //     </div>


        //     <div className="w-full h-full  relative col-span-2 min-h-[650px]">
        //         <Carousel
        //             plugins={[plugin.current]}
        //             className="w-full h-full bg-red-400"
        //             onMouseEnter={plugin.current.stop}
        //             onMouseLeave={plugin.current.reset}
        //         >
        //             <CarouselContent className="h-full">
        //                 {caseStudies.map((caseStudy) => (
        //                     <CarouselItem key={caseStudy.name} className="h-full">
        //                         <div className="relative w-full h-full min-h-[550px] p-5 overflow-hidden">
        //                             <Image
        //                                 src={`/case_studies${caseStudy.image}`}
        //                                 fill
        //                                 alt={caseStudy.name}
        //                                 className="object-cover"
        //                             />

        //                             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/95" />

        //                             <div className="absolute bottom-0 p-6 gap-3 font-bold flex flex-col text-white">
        //                                 <span className="text-3xl bg-primary w-fit px-2 py-1">
        //                                     {caseStudy.name}
        //                                 </span>

        //                                 <p className="w-full text-xl text-neutral-300">
        //                                     {caseStudy.services.join(", ")}
        //                                 </p>

        //                                 <Link
        //                                     href={`/service/${caseStudy.name}`}
        //                                     className={buttonVariants({
        //                                         variant: "outline",
        //                                         size: "sm",
        //                                         className: "flex items-center gap-2 w-fit",
        //                                     })}
        //                                 >
        //                                     <span>See more</span>
        //                                     <IoIosArrowForward />
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                     </CarouselItem>
        //                 ))}
        //             </CarouselContent>

        //             <CarouselPrevious />
        //             <CarouselNext />
        //         </Carousel>
        //     </div>
        // </Container>
        <div className="relative bg-secondary border-t"  >
            <Container >
                <span className="block sub-title-dark">Case Studies</span>
                <div className="title">
                    <p className="text-5xl title">
                        See how we helped other businesses
                    </p>
                    <p className="bg-primary text-white px-3 mt-3 text-5xl w-fit">
                        LEVEL UP
                    </p>
                </div>
            </Container>


            <div className="w-full  bg-red-400">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full h-full bg-blue-400"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent >
                        {caseStudies.map((caseStudy) => (
                            <CarouselItem key={caseStudy.name} className="h-full">
                                <div className="relative w-full min-h-[700px] p-5 overflow-hidden">
                                    <Image
                                        src={`/case_studies${caseStudy.image}`}
                                        fill
                                        alt={caseStudy.name}
                                        className="object-cover "
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />

                                    <Container className="absolute bottom-0  gap-3 font-bold flex flex-col text-white">
                                        <span className="text-3xl bg-primary w-fit px-2 py-1">
                                            {caseStudy.name}
                                        </span>

                                        <p className="w-full text-xl text-neutral-300">
                                            {caseStudy.services.join(", ")}
                                        </p>

                                        <Link
                                            href={`/service/${caseStudy.name}`}
                                            className={buttonVariants({
                                                variant: "outline",
                                                size: "sm",
                                                className: "flex items-center gap-2 w-fit",
                                            })}
                                        >
                                            <span>See more</span>
                                            <IoIosArrowForward />
                                        </Link>
                                    </Container>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

const caseStudies = [
    {
        name: "Eliana Capilar",
        description: `Eliana was struggling to attract consistent clients to her hair clinic and relied mostly on walk-ins and word of mouth. Growth was slow, and her services weren’t reaching the right audience.

We stepped in with a strategic combination of Facebook Ads and Social Media Management. By creating targeted ad campaigns and a strong, consistent social media presence, we positioned her clinic in front of high-intent local customers while building trust through engaging content.

The results were transformational. Eliana now receives daily bookings from loyal clients, has a recognizable brand in her local market, and enjoys a steady, predictable flow of customers—allowing her business to scale with confidence.`,
        services: [
            "Website Creation",
            "Paid Facebook Ads",
            "Social Media Management",
        ],
        image: "/eliana.jpg",
        testimonial: "I liked it very much",
    },
];
