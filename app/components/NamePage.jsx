import React from 'react'

const NamePage = () => {

    const name = "Hello, I'm Manikandan";
    const about = "I'm a full stack web developer and an open source contributor";

    return (
        <div className='-mt-10 flex flex-col gap-10 justify-center items-center bg-base-300 h-screen w-screen'>
            <h1 className='text-3xl font-medium'>{name}</h1>
            <h1 className='w-80 text-center text-xl'>{about}</h1>
            <button className='btn'>Projects</button>
        </div>
    )
}

export default NamePage