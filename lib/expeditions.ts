export type Destination = {
  title: string
  region: string
  image: string
  description: string
  details: string
  highlights: string[]
  experience: string
}

export const destinations: Destination[] = [
  {
    title: "K2 Base Camp & Concordia",
    region: "Central Karakoram",
    image: "/images/tour-k2.png",
    description: "Follow the Baltoro Glacier through a cathedral of granite towers to Concordia, the world’s greatest mountain amphitheatre, with K2 rising beyond.",
    details: "21 days · Challenging · June–August",
    highlights: ["Baltoro Glacier", "Concordia", "K2 viewpoint", "Broad Peak Base Camp"],
    experience: "A legendary high-altitude trek through Askole, Paiju, Urdukas, and Concordia. This is a demanding wilderness journey with long walking days, glacier travel, expedition camps, and unforgettable views of K2, Broad Peak, and the Gasherbrums.",
  },
  {
    title: "Hunza, Nagar & Khunjerab",
    region: "Gilgit-Baltistan",
    image: "/images/tour-hunza.png",
    description: "Move slowly through terraced orchards, ancient forts, and high villages while learning the stories and hospitality of the Hunza people.",
    details: "8 days · Easy · April–October",
    highlights: ["Baltit & Altit Forts", "Passu Cones", "Khunjerab Pass", "Local food & villages"],
    experience: "A rich valley journey combining old royal settlements, mountain viewpoints, apricot orchards, glacier-fed rivers, and the historic route toward China. Add Ganish, Gulmit, Hussaini, Nagar, or a village homestay for deeper cultural connection.",
  },
  {
    title: "Deosai Plains & Satpara",
    region: "The Land of Giants",
    image: "/images/tour-deosai.png",
    description: "Cross the high Deosai plateau by 4x4 and on foot, stopping beside wildflower meadows, Sheosar Lake, and the habitat of the Himalayan brown bear.",
    details: "4 days · Easy · June–September",
    highlights: ["Sheosar Lake", "Himalayan brown bear habitat", "Wildflower meadows", "Satpara Lake"],
    experience: "Designed for nature lovers and photographers, this open-plateau adventure combines scenic drives, quiet walks, lake picnics, star-filled camps, and time in the traditional villages around Skardu and Satpara.",
  },
  {
    title: "Fairy Meadows & Nanga Parbat",
    region: "Western Himalaya",
    image: "/images/tour-fairy-meadows.png",
    description: "Walk into a storybook alpine meadow below Nanga Parbat, with warm camps, forest trails, and one of Pakistan’s most memorable mountain views.",
    details: "6 days · Moderate · May–October",
    highlights: ["Fairy Meadows", "Nanga Parbat viewpoint", "Raikot Bridge", "Beyal Camp walk"],
    experience: "A rewarding introduction to Pakistan’s mountain landscapes. Travel by jeep into the forest, walk to the meadow, and continue toward Beyal Camp for close views of Nanga Parbat’s immense north face.",
  },
  {
    title: "Skardu, Shigar & Khaplu",
    region: "Baltistan Heritage",
    image: "/images/tour-skardu.png",
    description: "Combine cold deserts, turquoise lakes, Shigar Fort, and local food into a thoughtful introduction to the landscapes and culture of Baltistan.",
    details: "7 days · Easy · March–November",
    highlights: ["Kharpocho Fort", "Manthal Buddha Rock", "Shigar Fort", "Khaplu Palace"],
    experience: "Our home-region itinerary brings together Skardu’s viewpoints, Manthal’s Buddhist heritage, Shigar’s historic fort, Khaplu’s royal palace, Satpara Lake, local bazaars, Balti cuisine, and traditional settlements.",
  },
  {
    title: "Snow Lake & Hispar La",
    region: "Biafo–Hispar Glacier",
    image: "/images/tour-snow-lake.png",
    description: "A serious glacial traverse for experienced trekkers across one of the largest non-polar ice basins on earth, supported by a seasoned expedition crew.",
    details: "18 days · Expert · July–August",
    highlights: ["Biafo Glacier", "Snow Lake", "Hispar La", "Hispar Glacier"],
    experience: "A remote expedition for fit and experienced trekkers. The route crosses vast ice, high passes, and dramatic moraine landscapes where careful pacing, glacier awareness, and a strong support team are essential.",
  },
  {
    title: "Hushe & Charakusa Valley",
    region: "Southern Karakoram",
    image: "/images/tour-k2.png",
    description: "Enter a quieter side of the Karakoram through Hushe, a welcoming mountain community surrounded by sharp granite peaks and hidden valleys.",
    details: "10 days · Moderate · June–September",
    highlights: ["Hushe Valley", "Charakusa views", "Balti villages", "Alpine camps"],
    experience: "This route pairs village hospitality with dramatic mountain scenery. It is ideal for travelers who want a less-traveled trekking experience, photography, and a genuine connection with the communities that support Karakoram expeditions.",
  },
  {
    title: "Chitral & Kalash Valleys",
    region: "Hindu Kush",
    image: "/images/tour-hunza.png",
    description: "Discover Chitral’s mountain culture, historic town, hot springs, high passes, and the living traditions of the Kalash valleys.",
    details: "9 days · Easy · April–October",
    highlights: ["Chitral Fort", "Bumburet & Rumbur", "Garam Chashma", "Shandur Pass"],
    experience: "A respectful cultural journey through the Hindu Kush, with time for village walks, traditional homes, local crafts, historic sites, and seasonal festivals. Routes are shaped around community permission and local guidance.",
  },
  {
    title: "Swat & Gandhara Heritage",
    region: "History and Archaeology",
    image: "/images/tour-fairy-meadows.png",
    description: "Trace Buddhist and Gandharan history through Swat’s valleys, museums, stupas, ancient settlements, and mountain landscapes.",
    details: "6 days · Easy · March–November",
    highlights: ["Butkara Stupa", "Saidu Sharif Museum", "Udegram", "Malam Jabba"],
    experience: "Perfect for history-minded travelers, this itinerary connects archaeological sites, local museums, old bazaars, mountain viewpoints, and the stories of the civilizations that moved through northern Pakistan.",
  },
  {
    title: "Silk Road Heritage Journey",
    region: "Islamabad to Khunjerab",
    image: "/images/tour-skardu.png",
    description: "Travel the ancient corridor linking Taxila, the Indus Valley, Gilgit, Hunza, and the high pass toward Central Asia.",
    details: "12 days · Easy · April–October",
    highlights: ["Taxila Museum", "Chilas rock art", "Gilgit", "Khunjerab Pass"],
    experience: "A custom-designed road journey blending archaeology, rock carvings, forts, traditional villages, rivers, and high mountain scenery. Ideal for researchers, photographers, families, and curious first-time visitors.",
  },
]

export const services = [
  { title: "Mountaineering expeditions", description: "Expedition planning, permits, logistics, camps, porters, guides, and high-altitude support for ambitious objectives." },
  { title: "Trekking & camping", description: "Beautiful multi-day routes with measured pacing, comfortable camps, local meals, and practical safety systems." },
  { title: "Cultural journeys", description: "Slow travel through forts, villages, valleys, food traditions, and the living heritage of Gilgit-Baltistan." },
  { title: "Training & preparation", description: "Practical guidance for conditioning, acclimatisation, packing, risk awareness, and expedition readiness." },
]

export const planningNotes = [
  "Permits, transport, accommodation, meals, equipment coordination, and route planning",
  "Experienced mountain guides, high-altitude staff, porters, drivers, and local partners",
  "Honest seasonal advice, acclimatisation planning, safety briefings, and flexible pacing",
  "Responsible travel that respects local customs, protected landscapes, and heritage sites",
]
