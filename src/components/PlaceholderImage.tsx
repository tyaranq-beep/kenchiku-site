import { Building2 } from "lucide-react"

interface PlaceholderImageProps {
  label?: string
  className?: string
  iconSize?: number
}

export function PlaceholderImage({
  label,
  className = "",
  iconSize = 40,
}: PlaceholderImageProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-[#1b2d40] border border-[#2e4f6e] ${className}`}
    >
      <Building2
        size={iconSize}
        className="text-[#d4a843] opacity-60"
      />
      {label && (
        <span className="text-xs text-[#4e6478] tracking-widest uppercase text-center px-4">
          {label}
        </span>
      )}
    </div>
  )
}
