import Image from 'next/image'
import React from 'react'
import ProjectGallery from './_shared/ProjectGallery'


const projects = [
    {
      id: 1,
      imageUrl: '/image.png',
      title: 'Magzone Website',
      description: 'A responsive website designed for an online magazine platform...',
      topic: 'WEB DESIGN',
      year: '2023',
    },
    {
      id: 2,
      imageUrl: '/heel.png',
      title: 'E-commerce Shoe Store',
      description: 'An e-commerce platform for footwear with a focus on user experience...',
      topic: 'E-COMMERCE',
      year: '2022',
    },
    {
      id: 3,
      imageUrl: '/image.png',
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing design and development skills...',
      topic: 'PORTFOLIO',
      year: '2023',
    },
    {
      id: 4,
      imageUrl: '/heel.png',
      title: 'Event Management App',
      description: 'A mobile application for managing and attending events...',
      topic: 'APP DEVELOPMENT',
      year: '2022',
    },
    {
      id: 5,
      imageUrl: '/image.png',
      title: 'Blogging Platform',
      description: 'A content-rich blogging platform that emphasizes seamless user interaction...',
      topic: 'WEB DEVELOPMENT',
      year: '2021',
    },
  ];
  

  
const MyWork = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 pt-10">
        <h1 className="text-center text-7xl font-semibold">Selected Work</h1>
        <p className="text-center text-2xl pr-3">The work I'm proud of</p>
      </div>

        <ProjectGallery projects = {projects}/>
    </div>
  )
}

export default MyWork
