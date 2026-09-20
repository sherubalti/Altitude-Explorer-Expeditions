const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_puwpedpuwpedpuwp-KkSk7G7QpFfzbRMq4VJLRHaMJwesSC.jpg"

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="relative block size-10 overflow-hidden rounded-md border border-primary/30 bg-[#081b30]">
        <img src={logoUrl} alt="Altitude Explorer Expeditions logo" className="size-full object-cover" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-bold">Altitude Explorer</span>
          <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-primary">Expeditions</span>
        </span>
      )}
    </span>
  )
}
