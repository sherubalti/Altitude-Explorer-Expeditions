import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ExperienceNav, GalleryPage } from "@/components/experience-pages"

export default function ClimbingRoute() {
  return <><SiteHeader /><ExperienceNav /><GalleryPage type="climbing" /><SiteFooter /></>
}
