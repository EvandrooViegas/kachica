"use client";
import React from "react";
import { HeroIntersectionContextProvider } from "./heroIntersection.context";
import { LanguageProvider } from "./language.context";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <HeroIntersectionContextProvider>
        {children}
      </HeroIntersectionContextProvider>
    </LanguageProvider>
  );
}
