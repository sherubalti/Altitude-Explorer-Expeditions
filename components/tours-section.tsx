import { TourCard, type Tour } from "@/components/tour-card"

const tours: Tour[] = [
  {
    title: "K2 Base Camp Trek",
    image: "/images/tour-k2.png",
    imageAlt: "The pyramid-shaped K2 peak towering over the Baltoro glacier",
    location: "Baltoro Glacier",
    duration: "21 Days",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 214,
    price: 2450,
    tag: "Flagship",
    description:
      "Trek the legendary Baltoro to stand beneath the second-highest mountain on Earth.",
  },
  {
    title: "Fairy Meadows & Nanga Parbat",
    image: "/images/tour-fairy-meadows.png",
    imageAlt: "Green alpine meadow with wooden huts below the snow peak of Nanga Parbat",
    location: "Raikot Valley",
    duration: "6 Days",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 341,
    price: 690,
    tag: "Best Seller",
    description:
      "Camp on emerald meadows facing the sheer Rakhiot face of Nanga Parbat.",
  },
  {
    title: "Hunza Valley Cultural Tour",
    image: "/images/tour-hunza.png",
    imageAlt: "Autumn-colored Hunza Valley with Baltit Fort and snow mountains",
    location: "Hunza",
    duration: "8 Days",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 512,
    price: 780,
    description:
      "Ancient forts, golden orchards, and warm Wakhi hospitality in the heart of Hunza.",
  },
  {
    title: "Deosai Plains Safari",
    image: "/images/tour-deosai.png",
    imageAlt: "Vast green Deosai plateau with wildflowers and a reflective lake",
    location: "Deosai National Park",
    duration: "4 Days",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 189,
    price: 540,
    description:
      "Cross the world's second-highest plateau, home to wildflowers and brown bears.",
  },
  {
    title: "Skardu & Shangrila Escape",
    image: "/images/tour-skardu.png",
    imageAlt: "Turquoise Kachura lake surrounded by mountains near Skardu",
    location: "Skardu",
    duration: "7 Days",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 276,
    price: 720,
    description:
      "Turquoise lakes, cold deserts, and riverside towns gateway to the great peaks.",
  },
  {
    title: "Snow Lake Expedition",
    image: "/images/tour-snow-lake.png",
    imageAlt: "Roped trekkers crossing the vast white Snow Lake glacier basin",
    location: "Biafo–Hispar",
    duration: "18 Days",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 98,
    price: 2180,
    tag: "Expert",
    description:
      "Traverse one of the largest glacial basins outside the polar regions.",
  },
]

export function ToursSection() {
  return (
    <section id="tours" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Signature Journeys
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Choose Your Adventure
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          From gentle valley walks to serious high-altitude expeditions — every
          route is designed and led by certified local mountain guides.
        </p>
      </div>

      <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.title} tour={tour} />
        ))}
      </div>
    </section>
  )
}
