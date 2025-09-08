import { CalendarOutlined, GlobalOutlined, LaptopOutlined } from "@ant-design/icons";

const PROJECTS = [
    {
        img: {
            source: './shedcloud_c.webp',
            alt: 'Shedcloud portal',
        },
        title: 'Shedcloud',
        active: true,
        company: {
            link: 'https://www1.realhost.com.mx',
            name: 'realhost.com.mx'
        },
        date: '2021-2025',
        description: 'A portal to manage quotes, sales orders, and work orders, as well as create and edit inventory and manage product locations for import and export.',
        tools: [
            {
                imgSrc: './react.webp',
                imgAlt: 'React logo',
                imgClassName: 'w-auto h-5 rounded object-cover',
                name: 'React'
            },
            {
                imgSrc: './javascript.webp',
                imgAlt: 'Javascript logo',
                imgClassName: 'w-auto h-7 rounded object-cover',
                name: 'Javascript'
            },
            {
                imgSrc: './tailwind.webp',
                imgAlt: 'Tawilwind logo',
                imgClassName: 'w-auto h-6 rounded object-cover',
                name: 'Tailwindcss'
            },
            {
                imgSrc: './redux.webp',
                imgAlt: 'Redux logo',
                imgClassName: 'w-auto h-6 rounded object-cover',
                name: 'Redux'
            },
            {
                imgSrc: './amplify-logo.webp',
                imgAlt: 'Amplify logo',
                imgClassName: 'w-auto h-5 rounded object-cover',
                name: 'AWS Amplify'
            },
            {
                imgSrc: './ant-design.webp',
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
            source: './3dportal_c.webp',
            alt: '3D Shedcloud portal',
        },
        title: '3D Shedcloud portal',
        active: true,
        company: {
            link: 'https://www1.realhost.com.mx',
            name: 'realhost.com.mx'
        },
        date: '2021-2025',
        description: 'A website to configure shed buildings. Users can add and update walls, porches, roofs, building colors, and accessories, as well as create quotes, sales orders, and work orders. The system links each configuration with quotes, sales, and work orders, allowing users to continue editing at any stage.',
        tools: [
            {
                imgSrc: './react.webp',
                imgAlt: 'React logo',
                imgClassName: 'w-auto h-5 rounded object-cover',
                name: 'React'
            },
            {
                imgSrc: './javascript.webp',
                imgAlt: 'Javascript logo',
                imgClassName: 'w-auto h-8 rounded object-cover',
                name: 'Javascript'
            },
            {
                imgSrc: './tailwind.webp',
                imgAlt: 'Tawilwind logo',
                imgClassName: 'w-auto h-4 rounded object-cover',
                name: 'Tailwindcss'
            },
            {
                imgSrc: './amplify-logo.webp',
                imgAlt: 'Amplify logo',
                imgClassName: 'w-auto h-5 rounded object-cover',
                name: 'AWS Amplify'
            },
            {
                imgSrc: './threejs-icon.png',
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
            source: './facturatuticket.png',
            alt: 'Factura tu ticket portal',
        },
        title: 'Factura tu ticket',
        active: true,
        company: {
            link: 'https://www1.realhost.com.mx',
            name: 'realhost.com.mx'
        },
        date: 'January - November 2020',
        description: "A web platform to manage invoices for Realhost's companies. It allows any related company to access the website, add invoice details, and generate completed invoices.",
        tools: [
            {
                imgSrc: './lavarel.png',
                imgAlt: 'Laravel logo',
                imgClassName: 'w-auto h-8 rounded object-cover',
                name: 'Laravel'
            },
            {
                imgSrc: './vuejslogo.png',
                imgAlt: 'Vuejs logo',
                imgClassName: 'w-auto h-5 rounded object-cover',
                name: 'Vue JS'
            },
            {
                imgSrc: './css3.png',
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
];

export default function Portfolio() {
    return <section id='portfolio' className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6">
            <h2 className="text-5xl font-heading font-black text-white mb-16 text-center">Portfolio</h2>

            <div className='space-y-30'>

                {PROJECTS.map((project) => (
                    <div
                        key={`project_${project.title}`}
                        className='flex flex-col sm:flex-col md:flex-col xl:flex-row 2xl:flex-row items-center space-y-10 sm:space-y-10 md:space-y-10 xl:space-y-0 2xl:space-y-0  space-x-5 sm:space-x-5 md:space-x-5 xl:space-x-18 2xl:space-x-18'
                    >
                        <div className='grow'>
                            <img
                                loading="lazy"
                                src={project.img.source}
                                alt={project.img.alt}
                                className="w-200 h-auto sm:h-auto md:h-auto xl:h-100 2xl:h-100 rounded object-fill"
                            />
                        </div>

                        <div className='flex flex-col items-start space-y-5 w-full sm:w-full md:w-200 xl:w-200 2xl:w-200'>
                            <div className='flex items-center justify-between w-full'>
                                {project.title && (
                                    <p className='text-white text-3xl font-light'>
                                        {project.title}
                                    </p>
                                )}

                                {project.active && (
                                    <p className='px-6 text-blue-500 font-extrabold text-lg'>
                                        Present
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

                            {/* shadow-xl/30 shadow-blue-500/30  */}
                            <p className='bg-neutral-800 px-8 py-6 rounded text-sm text-justify'>
                                {project.description}
                            </p>

                            <div className='flex flex-wrap grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 w-full'>
                                {project.tools.map((tool) => (
                                    <div key={`${tool.imgAlt} - ${project.title}`} className='flex items-center space-x-2 grow'>
                                        <img
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