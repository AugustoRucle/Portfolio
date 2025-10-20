import { useLanguageContext } from "@/context/laguageContext";
import { CalendarOutlined, GlobalOutlined, LaptopOutlined, DownOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useIsMobile } from "@/hooks/useIsMobile";
import AnimatedBorder from "../AnimatedBorder";

import PROJECTS_DATA from "../../data/projects.json";

export default function Portfolio() {
    const { language } = useLanguageContext();
    const [activeCard, setActiveCard] = useState<number | null>(null);
    const isMobile = useIsMobile(1024);

    const PROJECTS = useMemo(() => {
        return PROJECTS_DATA.map((project) => ({
            ...project,
            date: project.dateKey ? <FormattedMessage id={project.dateKey} /> : project.date,
            shortDescription: <FormattedMessage id={project.shortDescriptionKey} />,
            tasks: project.tasksKeys.map((key) => <FormattedMessage key={key} id={key} />),
        }));
    }, [language]);

    const { visibleItems: visibleProjects, setRef } = useIntersectionObserver<HTMLDivElement>(
        PROJECTS.length,
        { threshold: 0.2, rootMargin: '0px' }
    );

    const handleCardClick = (index: number) => {
        if (isMobile) {
            setActiveCard(activeCard === index ? null : index);
        }
    };

    return <section id='portfolio' className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-5xl font-heading font-black text-white mb-16 text-center">
                <FormattedMessage id="portfolio" />
            </h2>

            <div className='space-y-30'>
                {PROJECTS.map((project, index) => (
                    <div
                        key={`project_${project.title}`}
                        ref={setRef(index)}
                        className='flex flex-col sm:flex-col md:flex-col xl:flex-row 2xl:flex-row items-center space-y-10 sm:space-y-10 md:space-y-10 xl:space-y-0 2xl:space-y-0  space-x-5 sm:space-x-5 md:space-x-5 xl:space-x-18 2xl:space-x-18'
                    >
                        <div className={`grow opacity-0 ${visibleProjects.has(index) ? 'animate-slide-in-left' : ''}`}>
                            <Image
                                loading="lazy"
                                src={project.img.source}
                                alt={project.img.alt}
                                width={800}
                                height={600}
                                className="w-200 h-auto sm:h-auto md:h-auto xl:h-100 2xl:h-90 rounded object-fill"
                            />
                        </div>

                        <div className={`flex flex-col items-start space-y-5 w-full sm:w-full md:w-220 xl:w-220 2xl:w-220 opacity-0 ${visibleProjects.has(index) ? 'animate-slide-in-right' : ''}`}>
                            <div className='flex items-center justify-between w-full'>
                                {project.title && (
                                    <p className='text-white text-3xl font-light'>
                                        {project.title}
                                    </p>
                                )}

                                {project.active && (
                                    <p className='px-6 text-blue-500 font-extrabold text-lg'>
                                        <FormattedMessage id="present" />
                                    </p>
                                )}
                            </div>

                            <div className='flex space-x-10'>
                                <a
                                    href={project.company.link}
                                    className='text-blue-500 font-bold group hover:underline'
                                >
                                    <LaptopOutlined className='mr-3 font-normal ' />
                                    <span className=''>
                                        {project.company.name}
                                    </span>
                                </a>

                                <p className='text-blue-500 font-bold'>
                                    <CalendarOutlined className='mr-3 font-normal' />
                                    <span>{project.date}</span>
                                </p>
                            </div>

                            <div
                                className={`relative group shadow-2xl bg-neutral-800 px-8 py-6 rounded text-md text-justify space-y-6 transition-shadow duration-300 ${
                                    isMobile
                                        ? `cursor-pointer ${activeCard === index ? 'shadow-yellow-900' : 'shadow-gray-800'}`
                                        : 'shadow-gray-800 hover:shadow-yellow-900'
                                }`}
                                onClick={() => handleCardClick(index)}
                            >
                                <AnimatedBorder isActive={activeCard === index} isMobile={isMobile} />

                                <p className='group-hover:border-b-1 pb-5 border-yellow-600 font-light' >{project.shortDescription}</p>

                                <ul className={`list-none ml-0 space-y-4 pl-6 relative before:content-[''] before:absolute before:left-[0.4rem] before:top-4 before:bottom-0 before:w-0.5 before:bg-yellow-600 overflow-hidden transition-all duration-500 ease-in-out ${
                                    isMobile
                                        ? activeCard === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        : 'max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100'
                                }`}>
                                    {project?.tasks?.map((task, taskIndex) => (
                                        <li className='text-sm relative before:content-[""] before:absolute before:left-[-1.275rem] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-yellow-600 before:rounded-full' key={`task - ${taskIndex} - ${project.title}`}> {task}</li>
                                    ))}
                                </ul>

                                <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${
                                    isMobile
                                        ? activeCard === index ? 'opacity-0' : 'opacity-100'
                                        : 'opacity-100 group-hover:opacity-0'
                                }`}>
                                    <DownOutlined className='text-xl font-bold animate-bounce' />
                                </div>
                            </div>

                            <div className='mt-6 flex flex-wrap grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 w-full'>
                                {project.tools.map((tool: any) => (
                                    <div key={`${tool.imgAlt} - ${project.title}`} className='flex items-center space-x-2 grow'>
                                        <Image
                                            loading="lazy"
                                            src={tool.imgSrc}
                                            alt={tool.imgAlt}
                                            width={100}
                                            height={100}
                                            className={tool.imgClassName}
                                        />

                                        <p>{tool.name}</p>
                                    </div>
                                ))}
                            </div>

                            <a
                                href={project.website.link}
                                className='text-blue-500 font-bold group hover:underline'
                            >
                                <GlobalOutlined className='mr-3 font-normal ' />
                                <span className=''>{project.website.name}</span>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}