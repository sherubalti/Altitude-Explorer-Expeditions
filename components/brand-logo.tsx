const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_puwpedpuwpedpuwp-KkSk7G7QpFfzbRMq4VJLRHaMJwesSC.jpg"

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "relative block h-10 w-16 overflow-hidden rounded-md border border-primary/30 bg-[#081b30]" : "relative block h-12 w-[172px] overflow-hidden rounded-md border border-primary/30 bg-[#081b30]"}>
      <img
        src={logoUrl}
        alt="Altitude Explorer Expeditions logo"
        className="absolute inset-0 size-full scale-[1.35] object-cover object-center"
      />
    </span>
  )
}
