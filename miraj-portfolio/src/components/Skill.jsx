import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.jpg";
import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import redux from "../assets/redux.png";
import shadcn from "../assets/shadcn.jpg";
import Bootstrap from "../assets/bootstrap.jpg";
import tailwind from "../assets/tailwind.jpg";
import material from "../assets/material.png";
import typeScript from "../assets/ts.png";
import nodejsLogo from "../assets/nodejs.png";
import mysqlLogo from "../assets/mysql.png";
import expressjsLogo from "../assets/expressjs.png";
import mongodbLogo from "../assets/mongodb.png";
import gitLogo from "../assets/git.png";
import githubLogo from "../assets/github.jpg";
import vscodeLogo from "../assets/vs.jpg";
import postmanLogo from "../assets/postman.png";
import vercelLogo from "../assets/vercel.png";
import socketlogo from "../assets/socket.png";

const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "React JS", logo: react },
      { name: "Redux", logo: redux },
      { name: "Next JS", logo: nextjs },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Socket.io", logo: socketlogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "Tailwind CSS", logo: tailwind },
      { name: "Shadcn UI", logo: shadcn },
      { name: "Material UI", logo: material },
      { name: "Bootstrap", logo: Bootstrap },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: js },
      { name: "TypeScript", logo: typeScript },
    ],
  },
];

function Skill() {
  return (
    <section id="skills" className="w-full px-4 py-10">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white mb-8">
        Skills
      </h1>

      <div className="block md:hidden">
        <div className="relative">
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {SkillsInfo.map((category, indx) => (
                <div
                  key={indx}
                  className="w-72 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-5"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <div className="space-y-3">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-green-400 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-6 h-6 object-cover rounded flex-shrink-0"
                        />
                        <span className="text-white/90 text-base">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-4">
          <span className="text-sm text-gray-200 ">← Swipe to see more →</span>
        </div>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SkillsInfo.map((category, indx) => (
            <div
              key={indx}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-6 hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-green-400 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-6 h-6 object-cover rounded flex-shrink-0"
                    />
                    <span className="text-white/90 text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
