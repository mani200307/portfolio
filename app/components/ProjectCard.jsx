import Image from 'next/image'
import React from 'react'
import moto from '../assets/motofix.png'
import github from '../assets/github.png'
import live from '../assets/live.png'
import Link from 'next/link'

const ProjectCard = () => {

    const projects = [{
        github: 'https://github.com/mani200307/moto-fix',
        live: 'https://moto-fix.vercel.app',
        desc: 'This website connects store technicians and vehicle owners. In case of a vehicle repair, it helps the vehicle owner to locate to the nearest store for a repair.',
        tech: ['React.js', 'Firebase', 'TailwindCSS']
    },
    {
        github: 'https://github.com/mani200307/blog-event-app',
        live: 'https://blog-event-app.vercel.app',
        desc: 'This website helps an user to create blogs, create events, view blogs and view events. It also has a homepage to view the active events today and to filer events and blogs',
        tech: ['Next.js', 'Supabase', 'TailwindCSS', 'Zustand']
    },
    {
        github: 'https://github.com/mani200307/Depression-Detection-using-Social-media-texts',
        live: '',
        desc: 'It is a machine learning project, it helps an user to detect whether an user is depressed or not. It is predicted using Machine learning classifiers. It is deployed using Flask in python',
        tech: ['Python', 'Flask']
    },
    {
        github: 'https://github.com/mani200307/BookingApp',
        live: '',
        desc: 'This website helps an user to book a hotel. Stripe payment geteway is also included with this.',
        tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js']
    }]

    return (
        <div className='flex flex-col gap-5'>
            {
                projects.map((project) => (
                    <div className='items-center bg-base-100 rounded-md shadow-lg p-4'>
                        <div className='flex cursor-context-menu gap-16'>
                            <h1 className='w-1/2'>
                                <p className='w-96'>{project.desc}</p>
                            </h1>
                            <h1 className='w-1/2 flex justify-center items-center space-x-5'>
                                {project.tech.map((lang) => (<span className='bg-base-200 p-2 rounded-full flex-col items-center justify-center'>{lang}</span>))}
                            </h1>
                        </div>
                        <div className='flex justify-center items-center mt-4 space-x-5'>
                            <Link href={project.github}><Image src={github} width={30} height={30} /></Link>
                            {project.live !== '' && <Link href={project.live}><Image src={live} width={32} height={32} /></Link>}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjectCard