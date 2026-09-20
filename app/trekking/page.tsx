import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ExperienceNav, GalleryPage } from "@/components/experience-pages"

export default function TrekkingRoute() {
  return <><SiteHeader /><ExperienceNav /><GalleryPage type="trekking" /><SiteFooter /></>
}
