import React from 'react'
import { motion } from 'framer-motion'

import codeSoftLogo from '../assets/codeSoftlogo.jpg'
import gapLogo from '../assets/gapLogo.png'

function Experience() {


const experiences = [
  {
    id: 0,
    img: gapLogo,
    role: "MERN Stack Developer",
    company: "gap-dynamic",
    date: "Dec 2024 - Present",
    desc: "Built full-stack applications with MERN stack, REST APIs, state management, and responsive UI.",
    skills: [
       "JavaScript", "React JS", "Node JS", "Express JS", "Tailwind CSS", "MongoDB",
    ],
  },
  {
    id: 1,
    img: codeSoftLogo,
    role: "Frontend Developer",
    company: "CodeSoft",
    date: "Jun 2024 - Nov 2024",
    desc: "Developed responsive frontends with React, Redux, Tailwind CSS, and optimized UI/UX.",
    skills: [
      "ReactJS", "Redux", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Shadcn UI",
    ],
  },
];


  return (
    <section id="experience" className="relative my-20">

      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white">
          Experience
        </h1>

        <div className="grid grid-cols-1 gap-8 my-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.9, rotate: 3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: -80, scale: 0.9, rotate: -3 }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring" }}
              viewport={{ once: false, amount: 0.2 }}
              className="card lg:w-2/3 md:w-4/5 w-11/12 mx-auto 
              bg-gradient-to-br from-white/10 via-[#06B6D4]/10 to-[#22C55E]/10
              backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-3  md:p-6
              hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="card-body text-white">
                <div className="flex items-center gap-4">
                  <div className="md:w-16 md:h-16 lg:h-20 lg:w-20 w-13 h-13 bg-white rounded-md overflow-hidden flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={experience.img}
                      alt={experience.company}
                    />
                  </div>
                  <div>
                    <h2 className="card-title md:text-xl lg:text-2xl text-base font-semibold">{experience.role}</h2>
                    <p className="text-sm opacity-80">{experience.company}</p>
                  </div>
                </div>

                <p className="mt-4 text-base  leading-relaxed">{experience.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="badge badge-outline border-white/30 text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-end mt-4">
                  <span className="text-xs opacity-70">{experience.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
