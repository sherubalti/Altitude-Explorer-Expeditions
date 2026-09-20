import { Star, MapPin, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src="/images/hero-karakoram.png"
        alt="Snow-capped Karakoram peaks glowing at golden hour with a trail winding toward the summits"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-primary-foreground" aria-hidden="true" />
            Gilgit-Baltistan, Pakistan
          </span>

          <h1 className="mt-6 text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Climb Higher. Explore Deeper. Discover Pakistan.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
            Altitude Explorer Expeditions creates expertly guided mountaineering,
            trekking, training, and cultural journeys across the Karakoram, Himalaya,
            and Hindu Kush — from our home in Skardu, Gilgit-Baltistan.
            Altitude Explorer crafts expertly guided treks, expeditions, and
            cultural journeys across the Karakoram, Himalaya, and Hindu Kush —
            with local guides who call these mountains home.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#tours" />}
              size="lg"
              className="h-12 px-7 text-base shadow-lg"
            >
              Explore Expeditions
            </Button>
            <Button
              render={<a href="#contact" />}
              size="lg"
              variant="outline"
              className="h-12 border-white/40 bg-white/10 px-7 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
            >
              Plan a Custom Trip
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/85">
            <div className="flex items-center gap-2">
              <div className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-chart-3 text-chart-3" />
                ))}
              </div>
              <span className="font-medium">4.9/5 from 1,200+ travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary-foreground" aria-hidden="true" />
              <span className="font-medium">Licensed & safety-certified guides</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
