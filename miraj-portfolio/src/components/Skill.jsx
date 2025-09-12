import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/js.jpg'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import redux from '../assets/redux.png'
import shadcn from '../assets/shadcn.jpg'
import Bootstrap from '../assets/bootstrap.jpg'
import tailwind from '../assets/tailwind.jpg'
import material from '../assets/material.png'
import typeScript from '../assets/ts.png'
import nodejsLogo from '../assets/nodejs.png'
import mysqlLogo from '../assets/mysql.png'
import expressjsLogo from '../assets/expressjs.png'
import mongodbLogo from '../assets/mongodb.png'
import gitLogo from '../assets/git.png'
import githubLogo from '../assets/github.jpg'
import vscodeLogo from '../assets/vs.jpg'
import postmanLogo from '../assets/postman.png'
import vercelLogo from '../assets/vercel.png'
import socketlogo from '../assets/socket.png'
import { motion } from 'framer-motion';


const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'React JS', logo: react },
      { name: 'Redux', logo: redux },
      { name: 'Next JS', logo: nextjs },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Socket.io', logo: socketlogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
  {
    title: 'Libraries',
    skills: [
      { name: 'Tailwind CSS', logo: tailwind },
      { name: 'Shadcn UI', logo: shadcn },
      { name: 'Material UI', logo: material },
      { name: 'Bootstrap', logo: Bootstrap },
    ]

  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: js },
      { name: 'TypeScript', logo: typeScript },
    ],
  },

];


function Skill() {
  return (
    <section id='skills' className='my-10  '>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white">Skills</h1>
      <div className='grid grid-cols-1 gap-8   md:grid-cols-2 lg:grid-cols-3 m-5'>
        {
          SkillsInfo.map((category, indx) => (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: -100, scale: 0.9, rotate: -5 }}
              transition={{ duration: 0.8, delay: indx * 0.2, type: "spring" }}
              viewport={{ once: false, amount: 0.2 }}
              className="card lg:w-96 md:w-90 w-73 shadow-lg mx-auto bg-white/10 backdrop-blur-md 
  rounded-xl border border-white/20 p-5 hover:scale-105 hover:shadow-2xl transition-transform duration-300" key={indx}>
              <div className="card-body">
                <div className="flex justify-between">
                  <h2 className="md:text-3xl text-2xl font-bold">{category?.title}</h2>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">{
                  category?.skills.map((Skill, index) => (
                    <li key={index} className='flex gap-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="md:size-5 size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <img src={Skill.logo} className='md:w-7 md:h-7 w-5 h-5 object-cover' alt={Skill.name} />
                      <span className='md:text-xl text-base'>{Skill.name}</span>
                    </li>
                  ))
                }


                </ul>

              </div>
            </motion.div>
          ))

        }


      </div>
    </section>
  )
}

export default Skill
