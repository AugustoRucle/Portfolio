import { useLanguageContext } from "@/context/laguageContext";
import { CalendarOutlined, GlobalOutlined, LaptopOutlined, DownOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import Image from "next/image";

import ShedcloudImage from '../../public/shedcloud_c.webp';
import ThreeDPortalImage from '../../public/3dportal_c.webp';
import FacturatuTicketImage from '../../public/facturatuticket_with_bgc.webp';

import ReactLogo from '../../public/react.webp';
import JavascriptLogo from '../../public/javascript.webp';
import TailwindLogo from '../../public/tailwind.webp';
import ReduxLogo from '../../public/redux.webp';
import AmplifyLogo from '../../public/amplify-logo.webp';
import AntDesignLogo from '../../public/ant-design.webp';
import ThreeJsLogo from '../../public/threejs-icon.png';
import LaravelLogo from '../../public/lavarel.png';
import VuejsLogo from '../../public/vuejslogo.png';
import Css3Logo from '../../public/css3.png';
import AnimatedBorder from "../AnimatedBorder";

export default function Portfolio() {
    const { language } = useLanguageContext();

    const PROJECTS = useMemo(() => [
        {
            img: {
                source: ShedcloudImage,
                alt: 'Shedcloud portal',
            },
            title: 'Shedcloud',
            active: false,
            company: {
                link: 'https://www1.realhost.com.mx',
                name: 'realhost.com.mx'
            },
            date: '2021-2025',
            shortDescription: language
                ? <FormattedMessage id="experenceShedcloudShortDescription" />
                : <FormattedMessage id="experenceShedcloudShortDescription" />,
            tasks: [
                <FormattedMessage id="experenceShedcloudTask1" />,
                <FormattedMessage id="experenceShedcloudTask2" />,
                <FormattedMessage id="experenceShedcloudTask3" />,
                <FormattedMessage id="experenceShedcloudTask4" />,
                <FormattedMessage id="experenceShedcloudTask5" />
            ],
            tools: [
                {
                    imgSrc: ReactLogo,
                    imgAlt: 'React logo',
                    imgClassName: 'w-auto h-5 rounded object-cover',
                    name: 'React'
                },
                {
                    imgSrc: JavascriptLogo,
                    imgAlt: 'Javascript logo',
                    imgClassName: 'w-auto h-7 rounded object-cover',
                    name: 'Javascript'
                },
                {
                    imgSrc: TailwindLogo,
                    imgAlt: 'Tawilwind logo',
                    imgClassName: 'w-auto h-6 rounded object-cover',
                    name: 'Tailwindcss'
                },
                {
                    imgSrc: ReduxLogo,
                    imgAlt: 'Redux logo',
                    imgClassName: 'w-auto h-6 rounded object-cover',
                    name: 'Redux'
                },
                {
                    imgSrc: AmplifyLogo,
                    imgAlt: 'Amplify logo',
                    imgClassName: 'w-auto h-5 rounded object-cover',
                    name: 'AWS Amplify'
                },
                {
                    imgSrc: AntDesignLogo,
                    imgAlt: 'Ant design logo',
                    imgClassName: 'w-auto h-6 rounded object-cover',
                    name: 'Ant design'
                }
            ],
            website: {
                link: 'https://io.shedcloud.com/',
                name: 'io.shedcloud.com',
            },
        },
        {
            img: {
                source: ThreeDPortalImage,
                alt: '3D Shedcloud portal',
            },
            title: '3D Shedcloud portal',
            active: false,
            company: {
                link: 'https://www1.realhost.com.mx',
                name: 'realhost.com.mx'
            },
            date: '2021-2025',
            shortDescription: language
                ? <FormattedMessage id="experence3DportalShortDescription" />
                : <FormattedMessage id="experence3DportalShortDescription" />,
            tasks: [
                <FormattedMessage id="experence3DportalTask1" />,
                <FormattedMessage id="experence3DportalTask2" />,
                <FormattedMessage id="experence3DportalTask3" />,
                <FormattedMessage id="experence3DportalTask4" />,
            ],
            tools: [
                {
                    imgSrc: ReactLogo,
                    imgAlt: 'React logo',
                    imgClassName: 'w-auto h-5 rounded object-cover',
                    name: 'React'
                },
                {
                    imgSrc: JavascriptLogo,
                    imgAlt: 'Javascript logo',
                    imgClassName: 'w-auto h-8 rounded object-cover',
                    name: 'Javascript'
                },
                {
                    imgSrc: TailwindLogo,
                    imgAlt: 'Tawilwind logo',
                    imgClassName: 'w-auto h-4 rounded object-cover',
                    name: 'Tailwindcss'
                },
                {
                    imgSrc: AmplifyLogo,
                    imgAlt: 'Amplify logo',
                    imgClassName: 'w-auto h-5 rounded object-cover',
                    name: 'AWS Amplify'
                },
                {
                    imgSrc: ThreeJsLogo,
                    imgAlt: 'Three js logo',
                    imgClassName: 'w-auto h-6 rounded object-cover',
                    name: 'Three JS'
                }
            ],
            website: {
                link: 'https://barnssheds.shedcloud.com/configurator/6529b409e7d0f84e18e2a108',
                name: 'barnssheds.shedcloud.com',
            },
        },
        {
            img: {
                source: FacturatuTicketImage,
                alt: 'Factura tu ticket portal',
            },
            title: 'Factura tu ticket',
            active: false,
            company: {
                link: 'https://www1.realhost.com.mx',
                name: 'realhost.com.mx'
            },
            date: <FormattedMessage id="experenceFacturatuticketDate" />,
            shortDescription: language
                ? <FormattedMessage id="experenceFacturatuticketShortDescription" />
                : <FormattedMessage id="experenceFacturatuticketShortDescription" />,
            tasks: [
                <FormattedMessage id="experenceFacturatuticketTask1" />,
                <FormattedMessage id="experenceFacturatuticketTask2" />,
                <FormattedMessage id="experenceFacturatuticketTask3" />,
                <FormattedMessage id="experenceFacturatuticketTask4" />,
                <FormattedMessage id="experenceFacturatuticketTask5" />,
            ],
            tools: [
                {
                    imgSrc: LaravelLogo,
                    imgAlt: 'Laravel logo',
                    imgClassName: 'w-auto h-8 rounded object-cover',
                    name: 'Laravel'
                },
                {
                    imgSrc: VuejsLogo,
                    imgAlt: 'Vuejs logo',
                    imgClassName: 'w-auto h-5 rounded object-cover',
                    name: 'Vue JS'
                },
                {
                    imgSrc: Css3Logo,
                    imgAlt: 'CSS3 logo',
                    imgClassName: 'w-auto h-8 rounded object-cover',
                    name: 'CSS3'
                },
            ],
            website: {
                link: 'https://www.facturatuticket.com/',
                name: 'facturatuticket.com',
            },
        }
    ], [language]);

    return <section id='portfolio' className="py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-5xl font-heading font-black text-white mb-16 text-center">
                <FormattedMessage id="portfolio" />
            </h2>

            <div className='space-y-30'>
                {PROJECTS.map((project) => (
                    <div
                        key={`project_${project.title}`}
                        className='flex flex-col sm:flex-col md:flex-col xl:flex-row 2xl:flex-row items-center space-y-10 sm:space-y-10 md:space-y-10 xl:space-y-0 2xl:space-y-0  space-x-5 sm:space-x-5 md:space-x-5 xl:space-x-18 2xl:space-x-18'
                    >
                        <div className='grow'>
                            <Image
                                loading="lazy"
                                src={project.img.source}
                                alt={project.img.alt}
                                className="w-200 h-auto sm:h-auto md:h-auto xl:h-100 2xl:h-90 rounded object-fill"
                            />
                        </div>

                        <div className='flex flex-col items-start space-y-5 w-full sm:w-full md:w-220 xl:w-220 2xl:w-220'>
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

                            <div className='relative group shadow-2xl shadow-gray-800 hover:shadow-2xl hover:shadow-yellow-900 bg-neutral-800 px-8 py-6 rounded text-md text-justify space-y-6 group'>
                                <AnimatedBorder />

                                <p className='group-hover:border-b-1 pb-5 border-yellow-600 font-light' >{project.shortDescription}</p>

                                <ul className="list-none ml-0 space-y-4 pl-6 relative before:content-[''] before:absolute before:left-[0.4rem] before:top-4 before:bottom-0 before:w-0.5 before:bg-yellow-600 max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    {project?.tasks?.map((task, index) => (
                                        <li className='text-sm relative before:content-[""] before:absolute before:left-[-1.275rem] before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-yellow-600 before:rounded-full' key={`task - ${index} - ${project.title}`}> {task}</li>
                                    ))}
                                </ul>

                                <div className='absolute bottom-2 left-1/2 -translate-x-1/2 opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                                    <DownOutlined className='text-xl font-bold animate-bounce' />
                                </div>
                            </div>

                            <div className='mt-6 flex flex-wrap grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 w-full'>
                                {project.tools.map((tool) => (
                                    <div key={`${tool.imgAlt} - ${project.title}`} className='flex items-center space-x-2 grow'>
                                        <Image
                                            loading="lazy"
                                            src={tool.imgSrc}
                                            alt={tool.imgAlt}
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