import { Star, MapPin, Clock, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type Tour = {
  title: string
  image: string
  imageAlt: string
  location: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  rating: number
  reviews: number
  price: number
  tag?: string
  description: string
}

const difficultyStyles: Record<Tour["difficulty"], string> = {
  Easy: "bg-primary/10 text-primary",
  Moderate: "bg-chart-3/15 text-chart-4",
  Challenging: "bg-destructive/10 text-destructive",
}

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image || "/placeholder.svg"}
          alt={tour.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
        {tour.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
            {tour.tag}
          </span>
        )}
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/95 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
          <Star className="h-3.5 w-3.5 fill-chart-3 text-chart-3" aria-hidden="true" />
          {tour.rating.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          {tour.location}
        </div>

        <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-foreground">
          {tour.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {tour.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {tour.duration}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold",
              difficultyStyles[tour.difficulty],
            )}
          >
            <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
            {tour.difficulty}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
          <div>
            <span className="text-xs text-muted-foreground">from</span>
            <p className="text-xl font-extrabold tracking-tight text-foreground">
              ${tour.price.toLocaleString()}
              <span className="text-sm font-medium text-muted-foreground">/person</span>
            </p>
          </div>
          <Button
            render={<a href="#contact" aria-label={`View details for ${tour.title}`} />}
            size="sm"
            variant="ghost"
            className="group/btn gap-1.5 text-primary hover:bg-primary/10 hover:text-primary"
          >
            Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </article>
  )
}
