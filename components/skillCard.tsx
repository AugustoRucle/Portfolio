import AnimatedBorder from './AnimatedBorder'

export default function SkillCard({
    Icon,
    name,
    category,
    percentage,
    color,
}: {
    Icon: any
    name: string
    category: string
    percentage: number
    color: string
}) {
    return (
        <div className="group relative bg-radial-[at_50%_50%] from-neutral-900 to-white to-1100% rounded-xl p-6 shadow-xl border border-neutral-900 hover:scale-110 transform transition-transform duration-300">
            <AnimatedBorder />

            <div className="flex flex-col items-center justify-center space-x-4 space-y-4 mb-6 relative z-10">
                <div
                    className={`w-20 h-20 rounded-lg flex items-center justify-center font-bold text-lg`}
                >
                    <Icon className='text-blue-500 group-hover:text-yellow-500' />
                </div>
                <div>
                    <p className="group-hover:text-yellow-500 text-2xl font-heading font-bold text-white text-center">{name}</p>
                    <p className="group-hover:text-yellow-500 text-sm text-muted-foreground font-sans text-center">{category}</p>
                </div>
            </div>

            <div className="space-y-2 relative z-10">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-white group-hover:text-yellow-500 font-sans">Progress</span>
                    <span className="text-sm font-semibold text-blue-500 group-hover:text-yellow-500 font-sans">{percentage}%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                    <div
                        className="bg-blue-700 group-hover:bg-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
