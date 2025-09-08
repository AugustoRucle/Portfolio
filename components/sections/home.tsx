import { GithubOutlined, LinkedinOutlined, RightOutlined } from "@ant-design/icons";

import SocialLink from "../socialLink";
import { scrollToSection } from "@/utils/functions";

const Braces = () => <div />
const Code2 = () => <div />
const FileCode = () => <div />
const Layers = () => <div />
const Zap = () => <div />

export default function Home() {
    return <div id="home" className="container mx-auto px-6 py-30">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
                <div className="space-y-4">
                    <h1 className="text-5xl lg:text-6xl font-heading font-black">
                        <span className="text-muted-foreground text-lg font-mono block mb-2">Hello, my name is</span>
                        <span className="text-blue-500 text-4xl font-heading">Augusto Ruiz</span>
                    </h1>
                </div>

                {/* Role heading */}
                <div className="space-y-2">
                    <h2 className="text-6xl font-heading font-extralight text-blue-600 whitespace-normal sm:whitespace-normal md:whitespace-nowrap xl:text-nowrap 2xl:whitespace-nowrap">
                        Frontend Developer
                    </h2>
                </div>

                {/* Description paragraph */}
                <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed text-justify font-sans">
                        Experienced frontend developer passionate about creating exceptional user experiences with modern web
                        technologies. Specialized in React, TypeScript, and cutting-edge frameworks.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                    <button
                        onClick={() => scrollToSection('portfolio')}
                        className="rounded w-full sm:w-full md:w-auto lg:w-auto xl:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg group transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-inner hover:shadow-black/30 font-heading"
                    >
                        Explore My Work
                        <RightOutlined className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-6 pt-8 justify-center sm:justify-center md:justify-start xl:justify-start 2xl:justify-start">
                    <SocialLink icon={LinkedinOutlined} href="www.linkedin.com/in/augusto-ruiz" label="LinkedIn" />
                    <SocialLink icon={GithubOutlined} href="https://github.com/AugustoRucle" label="GitHub" />
                </div>
            </div>

            <div className="flex justify-center lg:justify-end">
                <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl scale-110"></div>
                    <div className="relative bg-gradient-to-br from-primary to-secondary p-1 rounded-full border-4 border-blue-900">
                        <div className="bg-background p-2 rounded-full">
                            <img loading="lazy"
                                src="./avatar_1.webp"
                                alt="Augusto Ruiz - Frontend Developer"
                                className="w-80 h-80 lg:w-110 lg:h-110 rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* React - Azul cyan */}
                    <div
                        className="group absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#61DAFB] text-white p-5 rounded-full shadow-lg cursor-pointer animate-[slideDown_1s_ease-out_0.1s_both]"
                        style={{
                            backgroundImage: "url(./react_icon_2.webp)",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            React
                        </div>
                    </div>

                    {/* HTML5 - Naranja */}
                    <div
                        className="group absolute top-8 -right-8 bg-orange-500 text-white p-2 rounded-full shadow-lg cursor-pointer animate-[slideDown_1s_ease-out_0.2s_both] flex items-center justify-center"
                    >
                        <img loading="lazy" src='./html_icon.webp' className='w-6 h-6' />

                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            HTML5
                        </div>
                    </div>

                    {/* Tailwind - Cyan */}
                    <div className="group absolute right-4 bottom-1/3 bg-[#06B6D4] text-white p-3 rounded-full shadow-lg cursor-pointer animate-[slideDown_1s_ease-out_0.3s_both]">
                        <img loading="lazy" src='./git.webp' className='w-5 h-5' />

                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Git
                        </div>
                    </div>

                    {/* JavaScript - Amarillo */}
                    <div className="group absolute -bottom-6 right-1/4 bg-[#F7DF1E] text-black p-3 rounded-full shadow-lg cursor-pointer animate-[slideDown_1s_ease-out_0.4s_both] flex justify-center items-center">
                        <img loading="lazy" src='./java-script.webp' className='w-5 h-5' />

                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            JavaScript
                        </div>
                    </div>

                    {/* CSS - Azul */}
                    <div className="group absolute -bottom-6 left-1/4 bg-[#1572B6] text-white p-3 rounded-full shadow-lg cursor-pointer animate-[slideDown_1s_ease-out_0.5s_both] flex justify-center items-center">
                        <img loading="lazy" src='./css-3.webp' className='w-5 h-5' />

                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            CSS3
                        </div>
                    </div>

                    {/* Figma - Púrpura/Rosa */}
                    <div className="group absolute top-8 -left-8 bg-white p-2 rounded-full shadow-lg cursor-pointer animate-[slideDown_1s_ease-out_0.6s_both]">
                        <img loading="lazy" src="./figma-icon.webp" alt="Figma" className="w-5 h-5" />
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Figma
                        </div>
                    </div>

                    {/* Three.js - Blanco */}
                    <div className="group absolute left-4 bottom-1/3 bg-white p-2 rounded-full shadow-lg cursor-pointer animate-[slideDown_1s_ease-out_0.7s_both]">
                        <img loading="lazy" src="./three-js-icon.webp" alt="Three.js" className="w-6 h-6" />
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Three.js
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}