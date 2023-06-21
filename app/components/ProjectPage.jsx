import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectPage = () => {
    return (
        <div className='flex flex-col gap-5 items-center bg-base-300 h-full'>
            <h1 className='text-3xl mt-4 justify-start font-medium'>Projects</h1>
            <div className='flex mb-5 p-2'>
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectPage