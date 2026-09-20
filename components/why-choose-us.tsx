import { Compass, HeartHandshake, ShieldCheck, Leaf, Users, Headphones } from "lucide-react"

const features = [
  {
    icon: Compass,
    title: "Local Expertise",
    description:
      "Our guides were born in these valleys. They know every trail, weather pattern, and hidden viewpoint.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    description:
      "Certified guides, satellite communication, first-aid trained teams, and careful acclimatization plans.",
  },
  {
    icon: HeartHandshake,
    title: "Tailored Journeys",
    description:
      "Every itinerary is customizable to your pace, fitness, and the experiences you care about most.",
  },
  {
    icon: Leaf,
    title: "Responsible Travel",
    description:
      "Leave-no-trace trekking and fair wages that keep tourism benefiting the mountain communities.",
  },
  {
    icon: Users,
    title: "Small Groups",
    description:
      "Intimate group sizes mean personal attention, flexibility, and a lighter footprint on the trail.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "From your first question to your journey home, our team is reachable around the clock.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-secondary/60 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Why Altitude Explorer
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Adventure You Can Trust
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We combine deep local knowledge with world-class standards so you can
            focus on the mountains, not the logistics.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold tracking-tight text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
