import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The most well-organized trek I've ever done. Our guide's knowledge of the Baltoro made K2 base camp unforgettable and safe.",
    name: "Sarah Mitchell",
    role: "United Kingdom",
    initials: "SM",
    rating: 5,
  },
  {
    quote:
      "Hunza in autumn was pure magic. Peak Route handled every detail and the local hospitality they arranged was beyond anything I expected.",
    name: "Daniel Reyes",
    role: "Spain",
    initials: "DR",
    rating: 5,
  },
  {
    quote:
      "As a first-time trekker I felt supported every step. Small group, patient guides, and breathtaking scenery. I'm already booking my next trip.",
    name: "Aiko Tanaka",
    role: "Japan",
    initials: "AT",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Traveler Stories
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Loved by Adventurers Worldwide
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <Quote className="h-8 w-8 text-primary/25" aria-hidden="true" />
            <div className="mt-3 flex" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-chart-3 text-chart-3" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {t.initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                <span className="block text-xs text-muted-foreground">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
