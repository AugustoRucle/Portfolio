export default function AboutMe() {
    return <section id="aboutme" className="relative py-50 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
            <img
                src="./workspace-background-new.webp"
                alt="Workspace background"
                className="w-full h-full object-cover object-left"
            />
            <div className="absolute inset-0 bg-neutral-900/85"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <h2 className="text-5xl font-heading font-black text-white mb-8">About me</h2>

                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                            Hello, my name is <span className="text-blue-500 font-semibold">Augusto Ruiz</span> and I am a{" "}
                            <span className="text-blue-600 font-bold">Frontend Developer</span> from{" "}
                            <span className="text-blue-500 font-semibold">Chiapas, Mexico</span> with over {" "}
                            <span className="text-blue-500 font-bold">6 years</span> of experience building web applications
                        </p>

                        <h3 className="text-2xl font-heading font-bold text-white mb-4">
                            Throughout my career, I have:
                        </h3>

                        <ul className="w-full list-disc space-y-4 pl-4 marker:text-blue-500 marker:text-xl">
                            <li className="text-muted-foreground font-sans text-justify">
                                <span className="text-blue-500 font-semibold">
                                    Lead frontend development
                                </span>{" "}
                                in 4 projects, taking ownership from planning to deployment.
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                <span className="text-blue-500 font-semibold">
                                    Supervised and mentored junior developers,
                                </span>{" "}
                                ensuring code quality and best practices.
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                Taken the role of{" "}
                                <span className="text-blue-500 font-semibold">
                                    UX/UI designer,
                                </span>{" "}
                                creating user-friendly and visually appealing interfaces.
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                Developed{" "}
                                <span className="text-blue-500 font-semibold">
                                    multiple landing pages
                                </span>
                                {" "} optimized for performance and conversions.
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                Collaborated directly with clients to {" "}
                                <span className="text-blue-500 font-semibold">
                                    gather requirements
                                </span>
                                {" "} and translate them into scalable solutions.
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                <span className="text-blue-500 font-semibold">
                                    Supported application deployments
                                </span>
                                {" "}and{" "}
                                <span className="text-blue-500 font-semibold">
                                    upervised team code changes before release
                                </span>
                                {" "}to production.
                            </li>
                        </ul>

                        <div className="pt-6">
                            <h3 className="text-2xl font-heading font-bold text-white mb-4">Interests</h3>

                            <ul className="w-full list-disc space-y-4 pl-4 marker:text-blue-500 marker:text-xl">
                                <li className="text-muted-foreground font-sans text-justify">
                                    Becoming a full-stack engineer
                                </li>

                                <li className="text-muted-foreground font-sans text-justify">
                                    Applying artificial intelligence to real-world projects
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Content - Portrait Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        <div className="p-2 rounded-2xl shadow-2xl shadow-black/50">
                            <img
                                src="./augusto-portrait.png"
                                alt="Augusto Ruiz Portrait"
                                className="w-80 h-80 lg:w-96 lg:h-96 rounded-xl object-cover shadow-xl"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}