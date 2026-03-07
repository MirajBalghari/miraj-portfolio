import React from "react";
import codeSoftLogo from "../assets/codeSoftlogo.jpg";
import smartObjectlogo from "../assets/smartobjectlogo.jpg";

function Experience() {
  const experiences = [
    {
      id: 0,
      img: smartObjectlogo,
      role: "MERN Stack Developer",
      company: "TheSmartObject",
      date: "Dec 2025 - Present",
      desc: "Built full-stack applications with MERN stack, REST APIs, state management, and responsive UI.",
      skills: [
        "JavaScript",
        "Next JS",
        "React JS",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDB",
        "SQL",
      ],
    },
    {
      id: 1,
      img: codeSoftLogo,
      role: "Frontend Developer",
      company: "CodeSoft",
      date: "Jun 2025 - Nov 2025",
      desc: "Developed responsive frontends with React, Redux, Tailwind CSS, and optimized UI/UX.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Shadcn UI",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="container px-2 md:px-4 mx-auto relative my-10"
    >
      <div className="relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white">
          Experience
        </h1>

        <div className="relative mt-5">
          <div className="overflow-x-auto pb-6 px-4 md:overflow-visible md:px-0 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            <div className="flex md:flex-row gap-6 w-max md:w-auto min-w-full md:min-w-0 md:justify-center md:mx-auto">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className="card mx-auto   w-[85vw] md:w-4/5 lg:w-2/3 
                  bg-gradient-to-br from-white/10 via-[#06B6D4]/10 to-[#22C55E]/10
                  backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-2 md:p-2
                  hover:scale-105 hover:shadow-2xl transition-transform duration-300
                  flex-shrink-0 md:flex-shrink"
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
                        <h2 className="card-title md:text-xl lg:text-2xl text-base font-semibold">
                          {experience.role}
                        </h2>
                        <p className="text-sm opacity-80">
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-base leading-relaxed">
                      {experience.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="badge badge-outline border-white/30 text-white/80 text-xs md:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="card-actions justify-end mt-4">
                      <span className="text-xs opacity-70">
                        {experience.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-1 mt-2 md:hidden">
          <span className="text-xs text-gray-200">← Swipe to see more →</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
