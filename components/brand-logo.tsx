const logoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_puwpedpuwpedpuwp-KkSk7G7QpFfzbRMq4VJLRHaMJwesSC.jpg"

export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span
      className={
        compact
          ? "relative block h-9 w-[68px] shrink-0 overflow-hidden rounded-md bg-[#081b30]"
          : "relative block h-16 w-[176px] shrink-0 overflow-hidden rounded-md bg-[#081b30]"
      }
    >
      <img
        src={logoUrl}
        alt="Altitude Explorer Expeditions logo"
        className="block size-full scale-[1.45] object-cover object-center"
      />
    </span>
  )
}
