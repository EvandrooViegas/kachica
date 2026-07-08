"use client";
import Container from "@/components/Container";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";
import Image from "next/image";
import AnimateElement from "@/components/AnimatedElement";

export default function Testimonials() {
  const { language } = useLanguage();
  const content = getContent(language);

  return (
    <Container
      className="flex flex-col gap-16 relative"
      bgClassName="bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden"
      id="testimonials"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="flex flex-col items-start gap-2">
        <h3 className="title text-primary">
          {content.testimonials.title}
        </h3>
        <span className="sub-title text-primary">
          {content.testimonials.subtitle}
        </span>
      </div>

      {/* Two-column grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 lg:gap-2">
        {content.testimonialsData.map((testimonial: any, idx: number) => (
          <AnimateElement key={testimonial.name} delay={idx * 0.1}>
            <div className="bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 flex flex-col h-full">
              {/* Message */}
              <div className="flex-1 px-4 sm:px-6 md:px-8 py-6 md:py-8">
                <p className="text-gray-700 text-base sm:text-base leading-relaxed italic">
                  &quot;{testimonial.message}&quot;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 pt-4 md:pt-8 border-t-2 border-primary/10">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.imagePath}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-primary font-bold text-sm sm:text-base">{testimonial.name}</h5>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </AnimateElement>
        ))}
      </div>
    </Container>
  );
}
