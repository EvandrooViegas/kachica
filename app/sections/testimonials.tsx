"use client";
import Container from "@/components/Container";
import { TESTIMONIALS } from "@/lib/config";
import { useLanguage } from "@/app/language.context";
import Image from "next/image";
import AnimateElement from "@/components/AnimatedElement";

export default function Testimonials() {
  const { language } = useLanguage();

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
          {language === "pt" ? "O Que Nossos Clientes Dizem" : "What Our Clients Say"}
        </h3>
        <span className="sub-title text-primary">
          {language === "pt" ? "Testemunhos" : "Testimonials"}
        </span>
      </div>

      {/* Two-column grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial, idx) => (
          <AnimateElement key={testimonial.name} delay={idx * 0.1}>
            <div className="bg-white border-2 border-primary/20 hover:border-primary transition-all duration-300 flex flex-col h-full">
              {/* Message */}
              <div className="flex-1 px-8 py-8">
                <p className="text-gray-700 text-base leading-relaxed italic">
                  "{language === "pt" ? testimonial.messagePt : testimonial.message}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 p-8 pt-8 border-t-2 border-primary/10">
                <div className="relative w-12 h-12 flex-shrink-0 overflow-hidden">
                  <Image
                    src={testimonial.imagePath}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-primary font-bold text-base">{testimonial.name}</h5>
                  <p className="text-gray-600 text-sm">
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
