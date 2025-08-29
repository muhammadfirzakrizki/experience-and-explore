type SectionTitleProps = {
  title: string
  icon?: string
}

export function SectionTitle({ title, icon = "🌿" }: SectionTitleProps) {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      <div className="h-[2px] w-16 bg-gradient-to-r from-green-400 to-green-700 rounded-full"></div>
      <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 bg-clip-text text-transparent tracking-wide flex items-center gap-2">
        <span>{icon}</span> {title}
      </h3>
      <div className="h-[2px] w-16 bg-gradient-to-l from-green-400 to-green-700 rounded-full"></div>
    </div>
  )
}
