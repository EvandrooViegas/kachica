"use client"

import Container from '@/components/Container'
import Image from 'next/image'
import React from 'react'

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { IoIosArrowForward } from 'react-icons/io'

export default function CaseStudies() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <Container className="md:grid md:grid-cols-2 justify-between" bgClassName='bg-black/90'>

            <div className='p-8 flex flex-col gap-8 justify-center items-center text-center'>
                <span className='block sub-title'>Case Studies</span>
                <div className="title flex flex-col gap-1 items-center">
                    <span className='text-7xl'>See how we helped other business</span> <span className=" bg-primary text-white px-3 py-3 ">LEVEL UP</span>
                </div>
            </div>
            <div className="w-full h-full">
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full "
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {caseStudies.map((caseStudy, index) => (
                            <div
                                key={caseStudy.name}
                                className="w-full h-full min-h-[550px]  rounded-xl p-5"
                            >
                                <Image
                                    src={`/case_studies${caseStudy.image}`}
                                    fill
                                    alt="Service"
                                    className="object-cover  rounded-xl"
                                />
                                <div className="absolute  inset-0   bg-gradient-to-b from-transparent to-black/95  rounded-xl" />
                                <div className="absolute bottom-0 p-6 gap-3 rounded-xl font-bold flex flex-col text-white">
                                    <span className="text-3xl bg-primary w-fit">
                                      {caseStudy.name}

                                    </span>
                                         <p
                                        className="
                            text-black/80
                                        bg-white
                                w-fit
                                text-lg
                              "
                                    >
                                        {caseStudy.services.join(", ")}
                                    </p>
                                    <p
                                        className="
                                w-full
                                text-xl
                                text-neutral-300
                              "
                                    >
                                        {caseStudy.description.slice(0, 123) + "..."}
                                    </p>

                                   
                                      <Link
                                      
                      href={`/service/${caseStudy.name}`}
                      className={buttonVariants({
                        variant: "outline",
                        className: "flex items-center gap-2 w-fit",
                        size: "sm",
                      })}
                    >
                      <span>See more</span>
                      <IoIosArrowForward />
                    </Link>
                                </div>
                            </div>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </Container>
    )
}


const caseStudies = [
    {
        name: "Eliana Capilar", description: `Eliana was struggling to attract consistent clients to her hair clinic and relied mostly on walk-ins and word of mouth. Growth was slow, and her services weren’t reaching the right audience.

We stepped in with a strategic combination of Facebook Ads and Social Media Management. By creating targeted ad campaigns and a strong, consistent social media presence, we positioned her clinic in front of high-intent local customers while building trust through engaging content.

The results were transformational. Eliana now receives daily bookings from loyal clients, has a recognizable brand in her local market, and enjoys a steady, predictable flow of customers—allowing her business to scale with confidence.`, services: ["Website Creation, Paid Facebook Ads, Social Media Managment"], image: "/eliana.jpg", testimonial: "I liked very much"
    }
]