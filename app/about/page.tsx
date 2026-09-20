import Image from "next/image"
import { ContactBand, FeatureGrid, InnerPage } from "@/components/inner-page"

export const metadata = { title: "About Us | Altitude Explorer Expeditions", description: "Meet the Skardu-based team behind Altitude Explorer Expeditions." }

export default function AboutPage() {
  return <InnerPage eyebrow="Our story" title="Born in the mountains. Built for the journey." intro="Altitude Explorer Expeditions is a Skardu-based travel company creating meaningful journeys through the highlands of Pakistan." image="/images/tour-skardu.png">
    <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8"><div className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src="/images/hero-karakoram.png" alt="Karakoram mountain landscape" fill className="object-cover" /></div><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">A local perspective</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">The north is our home, not just our destination.</h2><p className="mt-5 leading-7 text-muted-foreground">Our work begins in Skardu and stretches into the valleys, glaciers, and communities of Gilgit-Baltistan. We combine practical expedition knowledge with a deep respect for the people and places that make this region unforgettable.</p><p className="mt-4 leading-7 text-muted-foreground">Every itinerary is shaped around real conversations: what you want to feel, what you are ready for, and how we can make the experience safe, welcoming, and genuinely yours.</p></div></section><section className="bg-muted/50"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why travel with us</p><h2 className="mt-3 text-3xl font-extrabold">Good journeys are made of good decisions.</h2></div><div className="mt-10"><FeatureGrid features={[{ title: "Skardu based", description: "A local office and local relationships mean faster answers and more authentic access." }, { title: "Experienced crew", description: "From valley walks to glacier crossings, our team understands the rhythm of the mountains." }, { title: "Clear planning", description: "Transparent route details, honest difficulty, and careful preparation before departure." }, { title: "Warm hospitality", description: "Thoughtful meals, comfortable camps, and a team that makes every guest feel looked after." }]} /></div></div></section><ContactBand />
  </InnerPage>
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutPage, ExperienceNav } from "@/components/experience-pages"

export default function AboutRoute() {
  return <><SiteHeader /><ExperienceNav /><AboutPage /><SiteFooter /></>
}
