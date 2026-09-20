import Image from "next/image"
import { MapPin } from "lucide-react"
import { ContactBand, InnerPage } from "@/components/inner-page"
import { destinations } from "@/lib/expeditions"

export const metadata = { title: "Destinations | Altitude Explorer Expeditions", description: "Explore the Karakoram, Hunza, Deosai, Skardu, and Pakistan’s most unforgettable mountain destinations." }

export default function DestinationsPage() {
  return <InnerPage eyebrow="Where we go" title="Pakistan, beyond the map." intro="From legendary glaciers to warm valley villages, our routes connect you with the landscapes, people, and stories that make the north extraordinary." image="/images/hero-karakoram.png">
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{destinations.map((place) => <article key={place.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"><div className="relative aspect-[4/3]"><Image src={place.image} alt={place.title} fill className="object-cover" /></div><div className="p-6"><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary"><MapPin className="size-3.5" />{place.region}</p><h2 className="mt-3 text-2xl font-bold">{place.title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{place.description}</p><p className="mt-5 border-t border-border pt-4 text-xs font-semibold uppercase tracking-wider text-foreground/60">{place.details}</p></div></article>)}</div></section><ContactBand />
  </InnerPage>
}
