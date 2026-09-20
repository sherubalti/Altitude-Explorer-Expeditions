import type { SVGProps } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.5a3 3 0 0 0-2.11-2.13C19.5 3.86 12 3.86 12 3.86s-7.5 0-9.39.51A3 3 0 0 0 .5 6.5 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.5 3 3 0 0 0 2.11 2.13c1.89.51 9.39.51 9.39.51s7.5 0 9.39-.51a3 3 0 0 0 2.11-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.5ZM9.6 15.6V8.4l6.2 3.6Z" />
    </svg>
  )
}

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
]

const columns = [
  {
    title: "Explore",
    links: [
      { label: "All Tours", href: "#tours" },
      { label: "K2 Base Camp", href: "#tours" },
      { label: "Hunza Valley", href: "#tours" },
      { label: "Fairy Meadows", href: "#tours" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#why-us" },
      { label: "Our Guides", href: "#why-us" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Travel Insurance", href: "#contact" },
      { label: "Packing Guides", href: "#contact" },
      { label: "FAQs", href: "#contact" },
      { label: "Booking Terms", href: "#contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-[oklch(0.24_0.03_250)] text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a
              href="/"
              className="flex h-16 w-64 items-center"
              aria-label="Altitude Explorer home"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_puwpedpuwpedpuwp-removebg-preview-21D4lkfAIpjeVkKE2o0d8uyAe8gsc8.png"
                alt="Altitude Explorer mountain climber logo"
                className="h-full w-full scale-[2.4] object-contain"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Guiding adventurers to the roof of the world since 2009. Certified
              local experts, unforgettable routes, responsible travel.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="tel:+923400000000" className="hover:text-white">
                  +92 340 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <a href="mailto:hello@altitudeexplorer.com" className="hover:text-white">
                  hello@altitudeexplorer.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                Skardu, Gilgit-Baltistan, Pakistan
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-white/70 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Trail Notes
            </h3>
            <p className="mt-4 text-sm text-white/70">
              Get seasonal route guides and early-bird expedition dates in your inbox.
            </p>
            <form
              className="mt-4 flex gap-2"
              action="#"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@email.com"
                className="h-10 w-full rounded-md border border-white/15 bg-white/10 px-3 text-sm text-white placeholder:text-white/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button type="submit" size="icon" className="h-10 w-10 shrink-0" aria-label="Subscribe">
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Altitude Explorer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
