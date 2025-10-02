import { FormattedMessage } from "react-intl";

export default function AboutMe() {
    return <section id="aboutme" className="relative py-50 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
            <img
                loading="lazy"
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
                    <h2 className="text-5xl font-heading font-black text-white">
                        <FormattedMessage id="aboutMeTitle" />
                    </h2>

                    <div className="space-y-15 pt-3">
                        <p className="text-lg text-muted-foreground leading-relaxed font-sans text-justify">
                            <FormattedMessage id="aboutMeDescription" />
                        </p>

                        <h3 className="text-2xl font-heading font-bold text-white mb-4">
                            <FormattedMessage id="aboutMeThroughouMyCareer" />:
                        </h3>

                        <ul className="w-full list-disc space-y-4 pl-4 marker:text-blue-500 marker:text-xl">
                            <li className="text-muted-foreground font-sans text-justify">
                                <span className="text-blue-500 font-semibold">
                                    <FormattedMessage id="aboutMeLeadFrontend1" />
                                </span>{" "}
                                <FormattedMessage id="aboutMeLeadFrontend2" />
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                <span className="text-blue-500 font-semibold">
                                    <FormattedMessage id="aboutMeSupervisedJunior1" />
                                </span>{" "}
                                <FormattedMessage id="aboutMeSupervisedJunior2" />
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                <FormattedMessage id="aboutMeTakeUXRole1" />{" "}
                                <span className="text-blue-500 font-semibold">
                                    <FormattedMessage id="aboutMeTakeUXRole2" />
                                </span>{" "}
                                <FormattedMessage id="aboutMeTakeUXRole3" />
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                <FormattedMessage id="aboutMeDevelopLandingPage1" />{" "}
                                <span className="text-blue-500 font-semibold">
                                    <FormattedMessage id="aboutMeDevelopLandingPage2" />
                                </span>
                                {" "} <FormattedMessage id="aboutMeDevelopLandingPage3" />
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                <FormattedMessage id="aboutMeCollaboredClients1" /> {" "}
                                <span className="text-blue-500 font-semibold">
                                    <FormattedMessage id="aboutMeCollaboredClients2" />
                                </span>
                                {" "}  <FormattedMessage id="aboutMeCollaboredClients3" />
                            </li>

                            <li className="text-muted-foreground font-sans text-justify">
                                <FormattedMessage id="aboutMeSupporteApplication1" /> {" "}
                                <span className="text-blue-500 font-semibold">
                                    <FormattedMessage id="aboutMeSupporteApplication2" />
                                </span>
                                {" "} <FormattedMessage id="aboutMeSupporteApplication3" />{" "}
                                <span className="text-blue-500 font-semibold">
                                    <FormattedMessage id="aboutMeSupporteApplication4" />
                                </span>
                                {" "}<FormattedMessage id="aboutMeSupporteApplication5" />
                            </li>
                        </ul>

                        <div className="">
                            <h3 className="text-2xl font-heading font-bold text-white mb-4">
                                <FormattedMessage id="aboutMeIntereses" />
                            </h3>

                            <ul className="w-full list-disc space-y-4 pl-4 marker:text-blue-500 marker:text-xl">
                                <li className="text-muted-foreground font-sans text-justify">
                                    <FormattedMessage id="aboutMeIntereses1" />
                                </li>

                                <li className="text-muted-foreground font-sans text-justify">
                                    <FormattedMessage id="aboutMeIntereses2" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

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