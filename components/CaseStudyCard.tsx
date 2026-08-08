"use client";

import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
          <div className="relative w-full bg-secondary/50 backdrop-blur-xl border rounded overflow-hidden">
            <div className="relative w-full pt-[56.25%]">
              <Image 
                src={currentImage} 
                alt={`${caseStudy.name} project`} 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Carousel Controls */}
            {caseStudy.gallery && caseStudy.gallery.length > 1 && (
              <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
                <button
                  onClick={handlePrevImage}
                  className="pointer-events-auto p-2 rounded-full bg-primary/80 hover:bg-primary text-white transition-colors"
                  aria-label="Previous image"
                >
                  <FaChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="pointer-events-auto p-2 rounded-full bg-primary/80 hover:bg-primary text-white transition-colors"
                  aria-label="Next image"
                >
                  <FaChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Image Counter */}
            {caseStudy.gallery && caseStudy.gallery.length > 1 && (
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {caseStudy.gallery.length}
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
              <p className="text-sm sm:text-sm leading-relaxed">{caseStudy.testimony}</p>
            </div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open(caseStudy.link, '_blank')}
            >
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
