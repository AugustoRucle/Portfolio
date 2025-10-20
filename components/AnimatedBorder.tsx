export default function AnimatedBorder() {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <rect
                className="stroke-yellow-600 fill-none transition-all duration-800 [stroke-dasharray:0_1000] group-hover:[stroke-dasharray:1000_0]"
                x="1"
                y="1"
                width="calc(100% - 2px)"
                height="calc(100% - 2px)"
                rx="12"
                strokeWidth="2"
                pathLength="1000"
                strokeDashoffset="0"
            />
        </svg>
    )
}
