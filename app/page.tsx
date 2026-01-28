"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { FeaturesSection } from "@/components/features-section"
import { BookingDemoSection } from "@/components/booking-demo-section"
import { FormTypesSection } from "@/components/form-types-section"
import { SupportSection } from "@/components/support-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <BookingDemoSection />
        <FormTypesSection />
        <SupportSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
