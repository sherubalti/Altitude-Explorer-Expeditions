import { ArrowUpRight, Mountain, ShieldCheck, Users } from "lucide-react"

const destinations = ["K2 & Concordia", "Baltoro Glacier", "Deosai Plains", "Hunza & Nagar", "Shigar & Khaplu", "Chitral & Kalash"]

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 overflow-hidden bg-[#f5f1e8] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#a97c2d]">The Altitude Explorer way</span>
          <h2 className="mt-4 max-w-xl text-3xl font-extrabold tracking-tight text-[#0b2036] sm:text-4xl lg:text-5xl">
            Your trusted gateway to the world&apos;s greatest mountain landscapes.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#536273]">
            Based in Skardu, we bring together experienced mountain guides, high-altitude staff, local communities, and thoughtful logistics to make ambitious journeys feel personal, safe, and unforgettable.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#536273]">
            From technical climbing and expedition training to family-friendly valley tours and Silk Road heritage, every itinerary is shaped around the character of northern Pakistan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#0b2036] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#173754]">
              Plan your journey <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#tours" className="inline-flex items-center rounded-full border border-[#0b2036]/20 px-5 py-3 text-sm font-semibold text-[#0b2036] transition hover:border-[#a97c2d] hover:text-[#a97c2d]">
              View destinations
            </a>
          </div>
        </div>
        <div className="relative rounded-[2rem] bg-[#0b2036] p-6 text-white shadow-2xl sm:p-8">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#c79b4a]/20 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[#c79b4a] text-[#0b2036]"><Mountain className="size-6" aria-hidden="true" /></div>
              <div><p className="font-semibold">Rooted in Skardu</p><p className="text-sm text-white/60">Gilgit-Baltistan, Pakistan</p></div>
            </div>
            <div className="grid gap-5 border-b border-white/10 py-7 sm:grid-cols-2">
              <div className="flex gap-3"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#c79b4a]" aria-hidden="true" /><div><p className="font-semibold">Safety-led planning</p><p className="mt-1 text-sm leading-relaxed text-white/60">Acclimatization, route plans, permits, and dependable field support.</p></div></div>
              <div className="flex gap-3"><Users className="mt-0.5 size-5 shrink-0 text-[#c79b4a]" aria-hidden="true" /><div><p className="font-semibold">Local relationships</p><p className="mt-1 text-sm leading-relaxed text-white/60">Fair partnerships with guides, porters, drivers, and communities.</p></div></div>
            </div>
            <div className="pt-6"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c79b4a]">Explore across Pakistan</p><div className="mt-4 flex flex-wrap gap-2">{destinations.map((destination) => <span key={destination} className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/75">{destination}</span>)}</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
