"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getContent } from "@/lib/i18n";
import { useLanguage } from "@/app/language.context";

export default function Footer() {
  const year = new Date().getFullYear();
  const { language } = useLanguage();
  const content = getContent(language);
  
  return (
    <footer>
      <Container className="flex md:flex-row flex-col gap-8 items-center text-sm  text-neutral-800  justify-between p-4">
        <Image src={content.branding.logoPrimary} width={100} height={100} alt="Logo" />
        <div className="flex flex-col md:flex-row items-center gap-4">
          <span>{content.branding.brandName} © {year}</span>
          <span>|</span>
          <Link href="/terms" className="underline">
            Terms
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <a href={content.social.instagram} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><circle cx="17.5" cy="6.5" r="1.5"></circle></svg>
          </a>
        </div>
      </Container>
    </footer>
  );
}
