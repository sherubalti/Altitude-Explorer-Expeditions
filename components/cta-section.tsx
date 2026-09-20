import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
        <img
          src="/images/cta-camp.png"
          alt="Illuminated tents beneath a star-filled night sky in the Karakoram mountains"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />

        <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Write Your Mountain Story?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-white/85">
              Tell us where you dream of going. Our team will craft a personalized
              itinerary with dates, pricing, and everything in between — free of charge.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="mailto:hello@peakroute.com" />}
                size="lg"
                className="h-12 px-7 text-base shadow-lg"
              >
                Get a Free Quote
              </Button>
              <Button
                render={
                  <a
                    href="https://wa.me/923400000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                variant="outline"
                className="h-12 border-white/40 bg-white/10 px-7 text-base text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
