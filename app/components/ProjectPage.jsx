import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectPage = () => {
    return (
        <div className='h-full'>
            <div className='m-5 bg-base-100 flex flex-col gap-5 items-center'>
                <h1 className='text-3xl justify-start font-semibold'>Projects</h1>
                <ProjectCard />
            </div>
        </div>
    )
}

export default ProjectPage