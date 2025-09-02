"use client"

export default function NavItem({
    icon: Icon,
    active = false,
    onClick = () => { },
    href = '',
    label = '',
}: {
    icon: any
    active?: boolean
    scrollToSectionId?: string,
    href?: string
    label: string
    onClick?: () => void
}) {
    return <a
        onClick={onClick}
        {...(href && ({ href }))}
        className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer group ${active ? "text-white bg-white/10" : "text-white/80 hover:text-white hover:bg-white/5"}`}
    >
        <Icon className="w-4 h-4" />

        <span className="text-sm font-medium font-heading">
            {label}
        </span>

        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
    </a>
}
