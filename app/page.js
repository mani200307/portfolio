import AboutPage from '@/app/components/AboutPage'
import NamePage from '@/app/components/NamePage'
import ProjectPage from '@/app/components/ProjectPage'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen'>
      <NamePage />
      <AboutPage />
      <div className='divider invisible'></div>
      <ProjectPage />
    </div>
  )
}

export default page