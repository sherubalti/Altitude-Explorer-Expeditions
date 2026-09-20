import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { AboutSection } from "@/components/about-section"
import { ToursSection } from "@/components/tours-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"
import { BackToTop } from "@/components/back-to-top"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#tours"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to tours
      </a>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <AboutSection />
        <ToursSection />
        <WhyChooseUs />
        <Testimonials />
        <CtaSection />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  )
}
