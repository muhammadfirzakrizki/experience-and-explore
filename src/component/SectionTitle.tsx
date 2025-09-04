type SectionTitleProps = {
    title: string
    className?: string
}

export function SectionTitle({ title, className = "" }: SectionTitleProps) {
    return (
        <div className={`text-center mb-12 ${className}`}>
            <h3 className="inline-flex items-center gap-2 text-3xl md:text-4xl font-extrabold text-gray-800">
               {title}
            </h3>
            <div className="mt-2 h-1 w-24 mx-auto bg-gradient-to-r from-green-400 to-emerald-600 rounded-full" />
        </div>
    )
}
