import { TourCard, type Tour } from "@/components/tour-card"

const tours: Tour[] = [
  {
    title: "K2 Base Camp Trek",
    image: "/images/tour-k2.png",
    imageAlt: "The pyramid-shaped K2 peak towering over the Baltoro glacier",
    location: "Baltoro Glacier",
    duration: "21 Days",
    stayPlan: "3 nights in Skardu, 12 nights camping, 5 nights in mountain lodges",
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
    stayPlan: "2 nights in Islamabad, 2 nights in Fairy Meadows, 1 night in Naran",
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
    stayPlan: "2 nights in Islamabad, 5 nights in Hunza hotels, 1 night in Gilgit",
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
    stayPlan: "1 night in Skardu, 2 nights in Deosai camps, 1 night in a riverside lodge",
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
    stayPlan: "2 nights in Skardu, 3 nights in lakeside lodges, 1 night in Shigar, 1 travel night",
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
    stayPlan: "3 nights in Skardu, 12 nights on glacier camps, 2 nights in Askole, 1 recovery night",
    difficulty: "Challenging",
    rating: 4.9,
    reviews: 98,
    price: 2180,
    tag: "Expert",
    description:
      "Traverse one of the largest glacial basins outside the polar regions.",
  },
  {
    title: "Thalay Broq & Thallay La",
    image: "/images/tour-deosai.png",
    imageAlt: "Wide alpine meadow beneath the Karakoram mountains",
    location: "Ghanche District",
    duration: "5 Days",
    stayPlan: "1 night in Khaplu, 2 nights camping at Thalay Broq, 1 night in Shigar",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 86,
    price: 620,
    tag: "New Route",
    description: "Camp in a peaceful Balti meadow and cross the historic high pass linking Khaplu and Shigar.",
    details: "A scenic high-altitude journey through alpine flowers, shepherd trails, and traditional Balti landscapes. The route is ideal for camping, photography, acclimatization, and travelers who want a quieter Karakoram experience.",
    highlights: ["Thalay Broq meadow camping", "Thallay La pass crossing", "Balti village life", "Karakoram peak views"],
  },
  {
    title: "Baltit & Altit Forts",
    image: "/images/tour-hunza.png",
    imageAlt: "Historic fort above the terraced villages of Hunza",
    location: "Hunza Valley",
    duration: "4 Days",
    stayPlan: "3 nights in Hunza guesthouses, including one night in a heritage village",
    difficulty: "Easy",
    rating: 4.9,
    reviews: 164,
    price: 430,
    tag: "Heritage",
    description: "Walk through ancient royal forts, old villages, and the living history of the Hunza kingdom.",
    details: "Explore the stone lanes of Altit and Ganish, visit the restored Baltit and Altit Forts, and learn how the old mountain kingdoms connected South Asia with Central Asia.",
    highlights: ["Baltit Fort", "Altit Fort and village", "Ganish heritage walk", "Local food and crafts"],
  },
  {
    title: "Rush Lake High Camp",
    image: "/images/tour-snow-lake.png",
    imageAlt: "High alpine lake surrounded by rugged snow-covered peaks",
    location: "Nagar Valley",
    duration: "7 Days",
    stayPlan: "2 nights in Nagar, 3 nights in high camps, 1 night in a valley lodge",
    difficulty: "Challenging",
    rating: 4.8,
    reviews: 112,
    price: 860,
    description: "Reach one of the highest alpine lakes in Pakistan for a rewarding wilderness escape above Nagar.",
    details: "A demanding but spectacular trek through forests, pastures, and rocky highland terrain. Clear weather reveals dramatic views toward Spantik, Malubiting, and the surrounding Karakoram.",
    highlights: ["Rush Lake viewpoint", "High-altitude camping", "Nagar villages", "Spantik panoramas"],
  },
  {
    title: "Khaplu Palace & Balti Valleys",
    image: "/images/tour-skardu.png",
    imageAlt: "A historic palace and green valley surrounded by Karakoram peaks",
    location: "Khaplu",
    duration: "6 Days",
    stayPlan: "2 nights in Khaplu Palace, 2 nights in Balti guesthouses, 1 night in Shyok Valley",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 139,
    price: 590,
    tag: "Culture",
    description: "Discover royal architecture, Chaqchan Mosque, and the warm hospitality of eastern Baltistan.",
    details: "This slower-paced cultural journey combines Khaplu Palace, historic mosques, village walks, local kitchens, and mountain viewpoints along the Shyok Valley.",
    highlights: ["Khaplu Palace", "Chaqchan Mosque", "Shyok Valley views", "Balti cooking experience"],
  },
  {
    title: "Shandur Pass & Chitral",
    image: "/images/tour-fairy-meadows.png",
    imageAlt: "High mountain pass landscape with distant snowy peaks",
    location: "Chitral–Ghizer",
    duration: "8 Days",
    stayPlan: "2 nights in Chitral, 3 nights in valley lodges, 2 nights near Shandur, 1 travel night",
    difficulty: "Moderate",
    rating: 4.7,
    reviews: 74,
    price: 940,
    description: "Cross the legendary mountain pass and experience the landscapes and traditions of the Hindu Kush.",
    details: "Travel through remote valleys toward the world's highest polo ground, with time for photography, village visits, and cultural encounters in Chitral and Ghizer.",
    highlights: ["Shandur Pass", "High-altitude polo ground", "Chitral town", "Hindu Kush landscapes"],
  },
  {
    title: "Taxila & Gandhara Heritage",
    image: "/images/tour-hunza.png",
    imageAlt: "Ancient stone ruins from Pakistan's Gandhara heritage",
    location: "Taxila",
    duration: "3 Days",
    stayPlan: "2 nights in Taxila guesthouses, 1 night in Islamabad",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 58,
    price: 360,
    tag: "History",
    description: "Step into the ancient world of Gandhara through monasteries, stupas, museums, and old cities.",
    details: "A guided heritage itinerary through Taxila's archaeological sites, including Sirkap, Jaulian, Dharmarajika, and the Taxila Museum, with context from local historians.",
    highlights: ["Sirkap ancient city", "Jaulian monastery", "Taxila Museum", "Gandharan sculpture"],
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
