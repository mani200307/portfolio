import React from 'react'

const AboutPage = () => {

    const desc = "I'm a full stack web developer, a machine learning enthusiast. I've done several projects in web development";

    return (
        <div className='h-full' id='AboutPage'>
            <div className='mt-5 flex flex-col gap-5 items-center '>
                <h1 className='text-3xl justify-start font-medium'>About me</h1>
                <div className='flex mx-5 bg-base-200 rounded-lg shadow-lg p-4'>
                    <h1 className='text-center'>{desc}</h1>
                </div>
            </div>
        </div>
    )
}

export default AboutPage