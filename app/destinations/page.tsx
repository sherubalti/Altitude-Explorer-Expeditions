import Image from "next/image"
import { ArrowRight, Check, MapPin } from "lucide-react"
import { ContactBand, InnerPage } from "@/components/inner-page"
import { Button } from "@/components/ui/button"
import { destinations } from "@/lib/expeditions"

export const metadata = { title: "Destinations | Altitude Explorer Expeditions", description: "Explore detailed mountain, trekking, heritage, and cultural journeys across northern Pakistan." }

export default function DestinationsPage() {
  return <InnerPage eyebrow="Where we go" title="Pakistan, beyond the map." intro="From legendary glaciers to warm valley villages, our routes connect you with the landscapes, people, and stories that make the north extraordinary." image="/images/hero-karakoram.png">
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Choose your horizon</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Routes with more room to explore.</h2><p className="mt-5 leading-7 text-muted-foreground">Every itinerary can be adjusted around your interests, fitness, season, and available time. Explore the guide below, then speak with our Skardu team about a route made for you.</p></div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">{destinations.map((place) => <article key={place.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"><div className="relative aspect-[4/3] overflow-hidden"><Image src={place.image} alt={`${place.title} mountain landscape`} fill className="object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-14"><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground"><MapPin className="size-3.5" />{place.region}</p></div></div><div className="p-6"><h2 className="text-2xl font-bold">{place.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{place.description}</p><p className="mt-5 text-sm leading-7 text-foreground/80">{place.experience}</p><div className="mt-5 grid gap-2 border-t border-border pt-5">{place.highlights.map((highlight) => <p key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="size-4 shrink-0 text-primary" />{highlight}</p>)}</div><div className="mt-5 flex items-center justify-between gap-4 border-t border-border pt-4"><p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">{place.details}</p><Button render={<a href="/contact" />} variant="ghost" size="sm">Plan this route <ArrowRight data-icon="inline-end" /></Button></div></div></article>)}</div>
    </section>
    <ContactBand />
  </InnerPage>
}
