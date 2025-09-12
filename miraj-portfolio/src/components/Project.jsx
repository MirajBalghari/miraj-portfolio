import React from 'react'
import { motion } from 'framer-motion'
import blog1 from '../assets/project-image/blog-1.png'
import blog2 from '../assets/project-image/blog-2.png'
import blog3 from '../assets/project-image/blog-3.png'
import blog4 from '../assets/project-image/blog-4.png'
import blog5 from '../assets/project-image/blog-5.png'
import chat1 from '../assets/project-image/chat-1.png'
import chat2 from '../assets/project-image/chat-2.png'
import chat3 from '../assets/project-image/chat-3.png'
import chat4 from '../assets/project-image/chat-4.png'
import chat5 from '../assets/project-image/chat-5.png'
import e1 from '../assets/project-image/e-1.png'
import e2 from '../assets/project-image/e-2.png'
import e3 from '../assets/project-image/e-3.png'
import e4 from '../assets/project-image/e-4.png'
import e5 from '../assets/project-image/e-5.png'
import move1 from '../assets/project-image/move-1.png'
import move2 from '../assets/project-image/move-2.png'
import move3 from '../assets/project-image/move-3.png'
import move4 from '../assets/project-image/move-4.png'
import move5 from '../assets/project-image/move-5.png'







function Project() {

  const projects = [
    {
      id: 0,
      title: "Blog Application",
      description: "A MERN-based blog platform with user authentication, post management, and responsive UI.",
      image: [blog1, blog2, blog3, blog4, blog5],
      tags: ["React JS", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/MirajBalghari/blog-platform",
    },
    {
      id: 1,
      title: "Chat Application",
      description: "A real-time chat app with user authentication, private messaging, and MongoDB integration.",
      image: [chat1, chat2, chat3, chat4, chat5],
      tags: ["React JS", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/MirajBalghari/chat_app",
    },
    {
      id: 2,
      title: "E-commerce",
      description: "A shopping cart application built with MERN stack featuring product listing and checkout.",
      image: [e1, e2, e3, e4, e5],
      tags: ["React JS", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/MirajBalghari/shopping-cart",
    },
    {
      id: 3,
      title: "Movie Recommendation App",
      description: "A React app that recommends movies based on genres and trending data using APIs.",
      image: [move1, move2, move3, move4, move5],
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/MirajBalghari/netflex",
    },
  ];



  return (
    <section id="projects" className="relative my-20">
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl mb-10 lg:text-5xl text-center font-bold text-white">
          Projects
        </h1>

        <div className="grid grid-cols-1 gap-8  md:grid-cols-2  mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, y: -100, scale: 0.9, rotate: -5 }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
              viewport={{ once: false, amount: 0.2 }}
              className="card lg:w-120 md:w-100 w-75 shadow-lg mx-auto 
              bg-gradient-to-br from-[#ffffff]/10 via-[#06B6D4]/10 to-[#22C55E]/10
              backdrop-blur-xl rounded-2xl border border-white/20 
              hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <figure className="hover-gallery w-full h-full">{
                project.image.map((img, ind) => (
                  <img key={ind} src={img} className='w-75 h-55 md:w-100 md:h-70 lg:h-80 lg:w-120 object-cover mx-auto' />

                ))
              }

              </figure>

              <div className="card-body text-white">
                <h2 className="card-title lg:text-2xl md:text-xl  font-semibold flex justify-between items-center">
                  {project.title}
                </h2>
                <p className="text-sm">{project.description}</p>

                {/* Tags */}
                <div className="card-actions flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge badge-outline">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm bg-black text-white hover:bg-gray-800"
                  >
                    GitHub
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm bg-green-600 text-white hover:bg-green-700"
                  >
                    Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

}

export default Project
