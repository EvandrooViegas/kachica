import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer>
      <Container className="flex md:flex-row flex-col gap-5 items-center text-sm  text-neutral-800  justify-between p-4">
        <Image src={SITE_CONFIG.branding.logoPrimary} width={100} height={100} alt="Logo" />
        <span>{SITE_CONFIG.branding.brandName} © {year}</span>
        <div className="flex items-center gap-4">
          <span className="">All Rights Reserved </span>
          <span>|</span>
          <Link href="/terms" className="underline">
            Terms
          </Link>
        </div>
      </Container>
    </footer>
  );
}
