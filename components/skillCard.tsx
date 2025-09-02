export default function SkillCard({
    icon,
    name,
    category,
    percentage,
    color,
    textColor,
}: {
    icon: string
    name: string
    category: string
    percentage: number
    color: string
    textColor: string
}) {
    return (
        <div className="bg-neutral-800/50 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-4">
                <div
                    className={`w-12 h-12 ${color} ${textColor} rounded-lg flex items-center justify-center font-bold text-lg`}
                >
                    {icon}
                </div>
                <div>
                    <h3 className="text-lg font-heading font-bold text-white">{name}</h3>
                    <p className="text-sm text-muted-foreground font-sans">{category}</p>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground font-sans">Progress</span>
                    <span className="text-sm font-semibold text-blue-500 font-sans">{percentage}%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                    <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
