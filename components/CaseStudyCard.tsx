"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "./ui/button";
import Image from "next/image";

export default function CaseStudyCard({caseStudy, extended}: {caseStudy:any, extended: boolean}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    if (caseStudy.gallery && caseStudy.gallery.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? caseStudy.gallery.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (caseStudy.gallery && caseStudy.gallery.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === caseStudy.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const currentImage = caseStudy.gallery?.[currentImageIndex] || caseStudy.src;

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-2">
        
        {/* Left side - 60% - Carousel with 16:9 ratio */}
        <div className="w-full lg:w-3/5">
          {/* Image Container - 16:9 aspect ratio */}
          <div className="relative w-full bg-secondary/50 backdrop-blur-xl border rounded overflow-hidden group">
            <div className="relative w-full pt-[56.25%]">
              <Image 
                src={currentImage} 
                alt={`${caseStudy.name} project`} 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Carousel Controls - Hidden by default, shown on hover */}
            {caseStudy.gallery && caseStudy.gallery.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between px-3 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                <button
                  onClick={handlePrevImage}
                  className="pointer-events-auto p-1.5 rounded-lg bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-200 shadow-lg"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="pointer-events-auto p-1.5 rounded-lg bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white transition-all duration-200 shadow-lg"
                  aria-label="Next image"
                >
                  <FaChevronRight size={18} />
                </button>
              </div>
            )}

            {/* Dot indicators */}
            {caseStudy.gallery && caseStudy.gallery.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {caseStudy.gallery.map((_: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 transition-all duration-200 ${
                      idx === currentImageIndex 
                        ? 'w-6 bg-white' 
                        : 'w-1.5 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side - 40% - Client Info, Services, Description */}
        <div className="w-full lg:w-2/5 flex flex-col gap-2">
          
          {/* Client Logo and Name */}
          <div className="flex items-center gap-5 bg-secondary/50 backdrop-blur-xl border p-4 sm:p-5">
            <div className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 flex-shrink-0 rounded-full overflow-hidden">
              <Image 
                src={caseStudy.src} 
                alt={caseStudy.name}
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold text-base sm:text-base">{caseStudy.name}</span>
              <span className="text-muted-foreground text-sm sm:text-sm">{caseStudy.services.join(", ")}</span>
            </div>
          </div>

          {/* Description - Same height as image */}
          <div className="space-y-3 bg-secondary/50 backdrop-blur-xl border p-4 sm:p-5 flex flex-col justify-between flex-grow">
            <div className="flex flex-col gap-3">
              <p className="text-sm sm:text-sm leading-relaxed">
                <span className="inline-block w-4 h-px bg-primary mr-2 align-middle"></span>
                {caseStudy.testimony}
              </p>
            </div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(caseStudy.link, '_blank')}
              className="flex items-center gap-2"
            >
              See More
              <FiArrowUpRight size={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
