const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_puwpedpuwpedpuwp-removebg-preview-OjaIcf4nQBgcQCh4B8TjWR5M0roEUS.png"

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={
        compact
          ? "relative block h-10 w-24 shrink-0 overflow-hidden"
          : "relative block h-14 w-48 shrink-0 overflow-hidden"
      }
    >
      <img
        src={logoUrl}
        alt="Altitude Explorer Expeditions logo"
        className="block size-full scale-[1.9] object-contain object-center"
      />
    </span>
  )
}
