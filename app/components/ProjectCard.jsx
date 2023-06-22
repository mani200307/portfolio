import Image from 'next/image';
import React from 'react';
import moto from '../assets/motofix.png';
import github from '../assets/github.png';
import live from '../assets/live.png';
import Link from 'next/link';

const ProjectCard = () => {
    const projects = [
        {
            github: 'https://github.com/mani200307/moto-fix',
            live: 'https://moto-fix.vercel.app',
            title: 'Moto-Fix',
            desc:
                'This website connects store technicians and vehicle owners. In case of a vehicle repair, it helps the vehicle owner to locate the nearest store for a repair.',
            tech: ['React.js', 'Firebase', 'TailwindCSS'],
        },
        {
            github: 'https://github.com/mani200307/blog-event-app',
            live: 'https://blog-event-app.vercel.app',
            title: 'Blog-Event',
            desc:
                'This website helps a user to create blogs, create events, view blogs, and view events. It also has a homepage to view the active events today and to filter events and blogs.',
            tech: ['Next.js', 'Supabase', 'TailwindCSS', 'Zustand'],
        },
        {
            github: 'https://github.com/mani200307/Depression-Detection-using-Social-media-texts',
            live: '',
            title: 'Depression Detection ML',
            desc:
                'It is a machine learning project that helps a user to detect whether a user is depressed or not. It is predicted using Machine learning classifiers. It is deployed using Flask in Python.',
            tech: ['Python', 'Flask'],
        },
        {
            github: 'https://github.com/mani200307/BookingApp',
            live: '',
            title: 'Hotel Booking App',
            desc:
                'This website helps a user to book a hotel. It is a MERN project. Stripe payment gateway is also included with this.',
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        },
    ];

    return (
        <div className='w-screen flex flex-col lg:flex-row lg:gap-0 mt-5 mr-5 p-5 xs:gap-10'>
            {projects.map((project, index) => (
                <div key={index} className='items-center flex flex-col lg:w-1/4 m-3 w-full gap-5 bg-base-200 cursor-context-menu rounded-lg shadow-xl p-4'>
                    <h1 className='text-center font-medium text-2xl'>{project.title}</h1>
                    <p className='text-center'>{project.desc}</p>
                    <div className='flex p-4 justify-center items-center flex-wrap gap-2 w-full'>
                        {project.tech.map((lang) => (
                            <span className='bg-base-300 py-2 px-3 rounded-full font-medium' key={lang}>
                                {lang}
                            </span>
                        ))}
                    </div>
                    <div className='flex-grow'></div>
                    <div className='flex justify-center items-center space-x-4 mt-4'>
                        <Link href={project.github} className='flex gap-2 items-center'>
                            <h1 className='text-lg font-medium'>Code</h1><Image src={github} width={40} height={40} className='bg-base-200 rounded-full' />
                        </Link>
                        {project.live !== '' && (
                            <Link href={project.live} className='flex gap-2 items-center'>
                                <h1 className='text-lg font-medium'>Live</h1><Image src={live} width={40} height={40} className='bg-base-200 rounded-full' />
                            </Link>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectCard;
