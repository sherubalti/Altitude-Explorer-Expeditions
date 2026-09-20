"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { useEffect, useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Guides", href: "/guides" },
  { label: "Climbing", href: "/climbing" },
  { label: "Trekking", href: "/trekking" },
  { label: "Culture", href: "/culture" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#081b30]/95 shadow-lg backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="flex h-12 w-48 items-center overflow-hidden rounded-md"
          aria-label="Altitude Explorer home"
        >
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_jxwgvjxwgvjxwgvj-RHFGWvvWczIMF2bbjh6PwVXmIb7xjo.jpg"
            alt="Altitude Explorer mountain climber logo"
            className="h-full w-full scale-[1.45] object-cover"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "text-white/90 hover:bg-white/10 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+923327525752"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              "text-white/90 hover:text-white",
            )}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            +92 332 752 5752
          </a>
          <Button render={<a href="/contact" />} className="shadow-md">
            Book a Trek
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden",
            "text-white hover:bg-white/10",
            "inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden",
            scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              render={<a href="/contact" onClick={() => setOpen(false)} />}
              className="mt-2 w-full"
            >
              Book a Trek
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
