'use client'

import React from 'react'
import { Link } from 'react-scroll';

const NamePage = () => {

    const name = "Hello, I'm Manikandan";
    const about = "I'm a full stack web developer and an open source contributor";

    return (
        <div id='HomePage' className="bg-gradient-to-b from-base-200 to-base-100 -mt-10 flex flex-col gap-10 justify-center items-center h-screen w-screen">
            <h1 className='text-3xl font-medium'>{name}</h1>
            <h1 className='w-80 text-center text-xl'>{about}</h1>
            <Link
                activeClass="active"
                to="ProjectPage"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <button className='btn'>Projects</button>
            </Link>
        </div>
    )
}

export default NamePage