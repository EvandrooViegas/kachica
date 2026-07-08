import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import Form from "./form";

export default function Contact() {
  // Note: Contact component doesn't need language context as Form handles it internally
  return (
    <Container
    id="contact"
      className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 items-start"
      bgClassName="bg-secondary"
    >
        <div className="relative w-full h-64 sm:h-80 md:h-auto md:aspect-square">
    <Image src="/sections/contact.jpg" fill  alt="Contact" className="object-cover" />

        </div>
      <div className="w-full ">
        <Form />
      </div>
    </Container>
  );
}
