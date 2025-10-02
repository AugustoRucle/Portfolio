import { GlobalOutlined } from "@ant-design/icons"
import { ReactNode } from "react"

export default function ExperienceCard({
    company,
    website,
    period,
    logo,
    isActive,
}: {
    company: string
    website: string
    period: ReactNode
    logo: string
    isActive: boolean
}) {
    return (
        <div
            className={`relative p-8 rounded-2xl border transition-all duration-300 ${isActive
                ? "bg-blue-500/10 border-blue-500/40 shadow-lg shadow-blue-500/20"
                : "bg-neutral-800/50 border-blue-500/20 hover:border-blue-500/40"
                }`}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="text-4xl">{logo}</div>
                    <div>
                        <h3 className="text-2xl font-heading font-bold text-blue-500">{company}</h3>
                        <a
                            href={`https://${website}`}
                            className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-sans"
                        >
                            <GlobalOutlined className="w-4 h-4" />
                            <span>{website}</span>
                        </a>
                    </div>
                </div>

                {period && (
                    <div className="text-right">
                        <span className="text-blue-600 font-semibold font-sans">{period}</span>
                    </div>
                )}
            </div>

            {isActive && (
                <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
            )}
        </div>
    )
}
