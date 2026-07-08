"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "./language.context";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const { language, setLanguage } = useLanguage();

  return (
    <header className={` border transition-all px-12 bg-transparent border-transparent w-full text-white py-12 absolute top-0 left-0 right-0 nav-z `}>
      <nav className="flex flex-row-reverse md:flex-row  items-center justify-between max-screen-width mx-auto">
        <div className="md:hidden flex items-center gap-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-16 bg-black/20 border-transparent text-white h-auto py-2.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-black text-white border-white/20">
              <SelectItem value="pt">PT</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
          <Sheet>
            <SheetTrigger>
              <Menu className="text-3xl" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-black text-white">
              <ul className="flex flex-col justify-center h-full  items-center  gap-12">
                <li>
                  <Image src="/logo/icon-white.png" width={170} height={170} alt="Logo" />
                </li>
                {links.map((l) => (
                  <li key={l.href} className="text-3xl font-semibold ">
                    <a href={l.href} className="">
                      {l.text}
                    </a>
                  </li>
                ))}
                <Button
                  cta
                  variant="outline"
                  size="lg"
                >
                  Contact Us
                </Button>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <Link href="/" className="md:w-[150px] md:h-[70px] w-[100px] h-[60px] relative">
          <Image src="/logo/icon-white.png" fill alt="Logo" className="object-contain" />
        </Link>
        <ul className="md:flex hidden  items-center gap-3  ">
          {links.map((l) => (
            <li
              key={l.href}
              className="transition-all px-4 py-1.5 bg-transparent hover:bg-primary hover:text-white font-semibold"
            >
              <a href={l.href}>{l.text}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:flex items-center gap-4">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-20 bg-black/20 border-transparent text-white h-auto py-2.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-black text-white border-white/20">
              <SelectItem value="pt">PT</SelectItem>
              <SelectItem value="en">EN</SelectItem>
            </SelectContent>
          </Select>
          <Button cta>
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  );
}

const links = [
  { text: "HOME", href: "/#home" },
  { text: "CLIENTS", href: "/#clients" },
  { text: "SERVICES", href: "/#services" },
  { text: "PORTFOLIO", href: "/#portfolio" },
  { text: "CONTACT", href: "/#contact" },
];
