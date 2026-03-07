import React from "react";
import blog1 from "../assets/project-image/blog-1.png";
import blog2 from "../assets/project-image/blog-2.png";
import blog3 from "../assets/project-image/blog-3.png";
import blog4 from "../assets/project-image/blog-4.png";
import blog5 from "../assets/project-image/blog-5.png";
import chat1 from "../assets/project-image/chat-1.png";
import chat2 from "../assets/project-image/chat-2.png";
import chat3 from "../assets/project-image/chat-3.png";
import chat4 from "../assets/project-image/chat-4.png";
import chat5 from "../assets/project-image/chat-5.png";
import e1 from "../assets/project-image/e-1.png";
import e2 from "../assets/project-image/e-2.png";
import e3 from "../assets/project-image/e-3.png";
import e4 from "../assets/project-image/e-4.png";
import e5 from "../assets/project-image/e-5.png";
import move1 from "../assets/project-image/move-1.png";
import move2 from "../assets/project-image/move-2.png";
import move3 from "../assets/project-image/move-3.png";
import move4 from "../assets/project-image/move-4.png";
import move5 from "../assets/project-image/move-5.png";
import ads1 from "../assets/project-image/ads1.png";
import ads2 from "../assets/project-image/ads2.png";
import ads3 from "../assets/project-image/ads3.png";
import ads4 from "../assets/project-image/ads4.png";
import ads5 from "../assets/project-image/ads5.png";
import dubaiza1 from "../assets/project-image/dubaiza1.png";
import dubaiza2 from "../assets/project-image/dubaiza2.png";
import dubaiza3 from "../assets/project-image/dubaiza3.png";

function Project() {
  const projects = [
    {
      id: 1,
      title: "Dubaiza – UAE Online Classifieds Marketplace",
      description:
        "Full-stack marketplace platform enabling users across the UAE to buy and sell products and services including cars, properties, electronics, and jobs. Implemented features such as free ad posting, category-based listings, advanced filtering by location and price, and secure authentication.",
      image: [dubaiza1, dubaiza2, dubaiza3],
      tags: [
        "React JS",
        "Next JS",
        "Redux",
        "tailwind",
        "HTML",
        "CSS",
        "JavaScript",
        "API",
      ],
      live: "https://dubaiza.com/en",
    },
    {
      id: 2,
      title: "Blog Application",
      description:
        "A MERN-based blog platform with user authentication, post management, and responsive UI.",
      image: [blog1, blog2, blog3, blog4, blog5],
      tags: [
        "React JS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
        "API",
      ],
      github: "https://github.com/MirajBalghari/blog-platform",
    },
    {
      id: 3,
      title: "Chat Application",
      description:
        "A real-time chat app with user authentication, private messaging, and MongoDB integration.",
      image: [chat1, chat2, chat3, chat4, chat5],
      tags: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/MirajBalghari/chat_app",
    },
    {
      id: 4,
      title: "E-commerce",
      description:
        "A shopping cart application built with MERN stack featuring product listing and checkout.",
      image: [e1, e2, e3, e4, e5],
      tags: [
        "React JS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      github: "https://github.com/MirajBalghari/shopping-cart",
    },
    {
      id: 5,
      title: "Movie Recommendation App",
      description:
        "A React app that recommends movies based on genres and trending data using APIs.",
      image: [move1, move2, move3, move4, move5],
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/MirajBalghari/netflex",
    },
    {
      id: 6,
      title: "Advertisement Platform",
      description:
        "A React app that recommends movies based on genres and trending data using APIs.",
      image: [ads1, ads2, ads3, ads4, ads5],
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript", "Graph Api"],
      github: "https://github.com/MirajBalghari/Advertisement-Platform",
    },
  ];

  return (
    <section
      id="projects"
      className="container px-2 md:px-4 mx-auto relative  my-10"
    >
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl mb-10 lg:text-5xl text-center font-bold text-white">
          Projects
        </h1>

        <div className="block md:hidden overflow-x-auto pb-6 px-4 -mx-4">
          <div className="flex gap-5 w-max">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card w-[95vw] max-w-[350px] shadow-lg 
                bg-gradient-to-br from-[#ffffff]/10 via-[#06B6D4]/10 to-[#22C55E]/10
                backdrop-blur-xl rounded-2xl border border-white/20 
                hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex-shrink-0"
              >
                <figure className="w-full h-full">
                  {project.image.map((img, ind) => (
                    <img
                      key={ind}
                      src={img}
                      className="w-full h-48 object-cover"
                      alt={`${project.title} screenshot ${ind + 1}`}
                    />
                  ))}
                </figure>

                <div className="card-body text-white p-4">
                  <h2 className="card-title text-lg font-semibold flex justify-between items-center">
                    {project.title}
                  </h2>
                  <p className="text-sm line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="card-actions flex flex-wrap gap-2 mt-3">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <span key={i} className="badge badge-outline text-xs">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="badge badge-outline text-xs">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-xs sm:btn-sm bg-black text-white hover:bg-gray-800"
                      >
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-xs sm:btn-sm bg-green-600 text-white hover:bg-green-700"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="flex justify-center mt-4 gap-1">
          <span className="text-xs text-gray-200">← Swipe to see more →</span>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card shadow-lg mx-auto max-w-md
              bg-gradient-to-br from-[#ffffff]/10 via-[#06B6D4]/10 to-[#22C55E]/10
              backdrop-blur-xl rounded-2xl border border-white/20 
              hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <figure className="hover-gallery w-full h-full">
                {project.image.map((img, ind) => (
                  <img
                    key={ind}
                    src={img}
                    className="w-full h-48 md:h-56 lg:h-64 object-cover"
                    alt={`${project.title} screenshot ${ind + 1}`}
                  />
                ))}
              </figure>

              <div className="card-body text-white p-5">
                <h2 className="card-title lg:text-2xl md:text-xl font-semibold">
                  {project.title}
                </h2>
                <p className="text-sm line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="card-actions flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="badge badge-outline text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm bg-black text-white hover:bg-gray-800"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm bg-green-600 text-white hover:bg-green-700"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
