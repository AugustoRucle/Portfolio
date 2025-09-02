"use client"

export default function MobileNavItem({
    icon: Icon,
    href = '',
    label = '',
    active = false,
    onClick = () => { },
}: {
    icon: any
    href?: string,
    label: string
    active?: boolean
    onClick: () => void
}) {
    return <a
        onClick={onClick}
        {...(href && ({ href }))}
        className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left cursor-pointer
                ${active
                ? "text-white bg-blue-600/20 border border-blue-500/30"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
    >
        <Icon className="w-5 h-5" />

        <span className="font-heading">
            {label}
        </span>
    </a>
}
