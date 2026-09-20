import Image from "next/image"
import { ArrowRight, Check, MapPin, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrandLogo } from "@/components/brand-logo"
import { Button } from "@/components/ui/button"

type Feature = { title: string; description: string }

export function InnerPage({ eyebrow, title, intro, image, children }: { eyebrow: string; title: string; intro: string; image: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-[#081b30] pt-32 text-white sm:pt-40">
          <div className="absolute inset-0 opacity-35"><Image src={image} alt="" fill className="object-cover" priority /></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#081b30] via-[#081b30]/90 to-[#081b30]/40" />
          <div className="relative mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-8"><BrandLogo compact /></div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">{intro}</p>
            </div>
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return <div className="grid gap-5 sm:grid-cols-2">{features.map((feature) => <article key={feature.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm"><div className="mb-4 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary"><Check className="size-5" aria-hidden="true" /></div><h3 className="font-bold text-foreground">{feature.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.description}</p></article>)}</div>
}

export function ContactBand() {
  return <section className="bg-primary text-primary-foreground"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] opacity-80">Start planning</p><h2 className="mt-2 text-3xl font-extrabold">Your mountain story starts here.</h2></div><Button render={<a href="/contact" />} variant="secondary" size="lg">Talk to our team <ArrowRight data-icon="inline-end" /></Button></div></section>
}
