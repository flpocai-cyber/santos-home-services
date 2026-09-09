"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { HeroCanvas } from "@/components/sections/HeroCanvas";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ReviewsCarousel } from "@/components/sections/ReviewsCarousel";
import { LicenseSection } from "@/components/sections/LicenseSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MobileContactBar } from "@/components/ui/MobileContactBar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import type { Locale } from "@/lib/translations";

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState<Locale>("en");
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const scrollToContact = (service?: string) => {
    if (service) setSelectedService(service);
    const elem = document.getElementById("contact");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#001D2B] text-white selection:bg-[#0089D0] selection:text-white">
      {/* Custom Desktop Interactive Cursor */}
      <CustomCursor />

      {/* Glassmorphism Header */}
      <Navbar
        currentLocale={currentLocale}
        onSelectLocale={setCurrentLocale}
        onOpenQuote={() => scrollToContact()}
      />

      <main>
        {/* 02. Interactive 50-Frames Hero with Canvas & Preloader */}
        <HeroCanvas
          currentLocale={currentLocale}
          onOpenQuote={() => scrollToContact()}
        />

        {/* 03. Trust / License Strip */}
        <TrustBar currentLocale={currentLocale} />

        {/* 04. Services (6 Core Services with Cards) */}
        <ServicesSection
          currentLocale={currentLocale}
          onOpenQuote={scrollToContact}
        />

        {/* 05. Before / After Interactive Slider */}
        <BeforeAfterSlider currentLocale={currentLocale} />

        {/* 06. Why Choose Santos Home Services */}
        <WhyChooseUs currentLocale={currentLocale} />

        {/* 07. Recent Projects Gallery with Filter */}
        <ProjectsGallery
          currentLocale={currentLocale}
          onOpenQuote={scrollToContact}
        />

        {/* 08. About Us Section with Real Metrics & Composition */}
        <AboutSection currentLocale={currentLocale} />

        {/* 09. Process Section (How it works) */}
        <ProcessSection currentLocale={currentLocale} />

        {/* 10. Reviews Carousel (15 Sample Reviews with Auto-play & Pause) */}
        <ReviewsCarousel currentLocale={currentLocale} />

        {/* 11. Licensed Contractor & BuildZoom 91 Profile */}
        <LicenseSection currentLocale={currentLocale} />

        {/* 12. Mid-Page High Impact CTA */}
        <CTASection
          currentLocale={currentLocale}
          onOpenQuote={() => scrollToContact()}
        />

        {/* 13 & 14. Contact Form + Location Map */}
        <ContactFormSection
          currentLocale={currentLocale}
          preselectedService={selectedService}
        />
      </main>

      {/* 15. Footer */}
      <Footer
        currentLocale={currentLocale}
        onSelectLocale={setCurrentLocale}
      />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <MobileContactBar locale={currentLocale} />
    </div>
  );
}
