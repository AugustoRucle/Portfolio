"use client"

export default function SocialLink({
    icon: Icon,
    href,
    label,
}: {
    icon: any
    href: string
    label: string
}) {
    return (
        <div className="group relative">
            <a
                href={href}
                className="flex justify-center items-center p-5 bg-white/10 hover:bg-white/15 rounded-full transition-all duration-300 hover:scale-110 shadow-lg block"
                aria-label={label}
            >
                <Icon className="text-white text-3xl" />
            </a>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
            </div>
        </div>
    )
}