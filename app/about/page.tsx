import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutPage, ExperienceNav } from "@/components/experience-pages"

export default function AboutRoute() {
  return <><SiteHeader /><ExperienceNav /><AboutPage /><SiteFooter /></>
}
