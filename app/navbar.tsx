"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { useHeroIntersectionContext } from "./heroIntersection.context";
import Link from "next/link";
import { useLanguage } from "./language.context";

export default function Navbar() {
  const { inView } = useHeroIntersectionContext();
  const { language, setLanguage } = useLanguage();

  return (
    <header className={` border transition-all   px-12  ${inView ? 'bg-transparent border-transparent w-full  text-white py-12' : 'bg-white/70 border-primary backdrop-blur-md text-primary py-2 top-4 inset-x-20 '} fixed nav-z `}>
      <nav className="flex flex-row-reverse md:flex-row  items-center justify-between max-screen-width mx-auto">
        <div className="md:hidden flex items-center gap-4">
          <div className="flex gap-2 bg-black/20 rounded px-2 py-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-sm font-bold transition-all rounded ${
                language === "en"
                  ? "bg-primary text-white"
                  : "text-white opacity-60"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-2 py-1 text-sm font-bold transition-all rounded ${
                language === "pt"
                  ? "bg-primary text-white"
                  : "text-white opacity-60"
              }`}
            >
              PT
            </button>
          </div>
          <Sheet>
            <SheetTrigger>
              <FiMenu className="text-3xl " />
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
          {inView ? (
            <Image src="/logo/icon-white.png" fill alt="Logo" className="object-contain" />
          ) : (
            <Image src="/logo/icon-primary.png" fill alt="Logo" className="object-contain" />
          )}
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
          <div className="flex gap-2 bg-black/20 rounded px-2 py-1">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 text-sm font-bold transition-all rounded ${
                language === "en"
                  ? "bg-primary text-white"
                  : inView ? "text-white opacity-60 hover:opacity-100" : "text-primary opacity-60 hover:opacity-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("pt")}
              className={`px-3 py-1 text-sm font-bold transition-all rounded ${
                language === "pt"
                  ? "bg-primary text-white"
                  : inView ? "text-white opacity-60 hover:opacity-100" : "text-primary opacity-60 hover:opacity-100"
              }`}
            >
              PT
            </button>
          </div>
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
