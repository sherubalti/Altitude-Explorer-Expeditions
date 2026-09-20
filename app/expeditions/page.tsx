import { Mountain, ShieldCheck, Users, Compass } from "lucide-react"
import { ContactBand, FeatureGrid, InnerPage } from "@/components/inner-page"
import { services } from "@/lib/expeditions"

export const metadata = { title: "Expeditions & Services | Altitude Explorer", description: "Professional mountaineering, trekking, cultural tours, and expedition preparation in Pakistan." }

const values = [
  { title: "Local knowledge", description: "Our team lives close to these mountains. We know the seasons, trails, communities, and small details that make a journey work." },
  { title: "Safety first", description: "Clear briefings, acclimatisation plans, weather awareness, and experienced crew keep every decision grounded in care." },
  { title: "Responsible travel", description: "We work with local partners, respect fragile places, and make sure tourism supports the communities along the route." },
  { title: "Human pace", description: "We build itineraries that leave room for rest, curiosity, photographs, and the unexpected moments between destinations." },
]

export default function ExpeditionsPage() {
  return <InnerPage eyebrow="What we do" title="More than a route. A complete expedition." intro="Whether you are arriving for your first mountain trek or preparing for a serious summit objective, Altitude Explorer brings the planning, people, and local experience together." image="/images/cta-camp.png">
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our services</p><h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Built around your ambition.</h2><p className="mt-5 leading-7 text-muted-foreground">We handle the details behind the experience so you can focus on the mountains ahead.</p><div className="mt-8 grid gap-4 text-sm text-muted-foreground"><p className="flex gap-3"><Mountain className="size-5 shrink-0 text-primary" />Mountain access across the Karakoram, Himalaya, and Hindu Kush.</p><p className="flex gap-3"><ShieldCheck className="size-5 shrink-0 text-primary" />Thoughtful plans with honest difficulty and seasonal advice.</p><p className="flex gap-3"><Users className="size-5 shrink-0 text-primary" />Trusted local guides, cooks, porters, and transport partners.</p></div></div><FeatureGrid features={services} /></div></section><section className="bg-muted/50"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-2xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our promise</p><h2 className="mt-3 text-3xl font-extrabold">Travel with purpose.</h2></div><div className="mt-10"><FeatureGrid features={values} /></div></div></section><ContactBand />
  </InnerPage>
}
