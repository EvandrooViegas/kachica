"use client";
import Container from "@/components/Container";
import { FAQ } from "@/lib/config";
import { useLanguage } from "@/app/language.context";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimateElement from "@/components/AnimatedElement";

export default function FAQSection() {
  const { language } = useLanguage();

  return (
    <Container
      className="flex flex-col gap-16 relative"
      bgClassName="bg-gradient-to-b from-white via-primary/5 to-white relative overflow-hidden"
      id="faq"
    >
      {/* Decorative gradient circles */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="title text-primary">
          {language === "pt"
            ? "Perguntas Frequentes"
            : "Frequently Asked Questions"}
        </h3>
        <span className="sub-title text-primary">
          {language === "pt" ? "Tem Dúvidas?" : "Got Questions?"}
        </span>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <Accordion type="single" collapsible className="w-full">
          {FAQ.map((item, idx) => (
            <AnimateElement key={idx} delay={idx * 0.05}>
              <AccordionItem value={`item-${idx}`} className="border-b border-primary/20">
                <AccordionTrigger className="text-left font-bold text-primary hover:text-primary/80">
                  {language === "pt" ? item.questionPt : item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-700">
                  {language === "pt" ? item.answerPt : item.answer}
                </AccordionContent>
              </AccordionItem>
            </AnimateElement>
          ))}
        </Accordion>
      </div>
    </Container>
  );
}
