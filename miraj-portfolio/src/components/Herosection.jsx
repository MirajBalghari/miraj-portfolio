import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import mirajhussain from "../assets/mirajhussain.png";

function Herosection() {
  const cv_url = `${import.meta.env.VITE_Url}/Miraj_Hussain_CV.pdf`;

  return (
    <section
      id="about"
      className="container px-2 md:px-4 mx-auto  relative overflow-hidden mt-20 md:p-10 lg:p-20 p-5 "
    >
      <div className="flex md:flex-row flex-col gap-10 md:gap-20 items-center justify-center ">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="w-full flex flex-col gap-5 order-2 md:order-1"
        >
          <div className="lg:space-y-5 md:space-y-3 space-y-2 flex flex-col items-center md:block justify-center">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:text-3xl md:text-2xl text-xl font-bold text-white"
            >
              Hello, It's Me
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:text-5xl md:text-2xl text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              Miraj Hussain Balghari
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="lg:text-3xl md:text-xl flex text-base font-semibold items-center gap-3"
            >
              And I'm a
              <TypeAnimation
                sequence={[
                  " Full Stack Developer",
                  1500,
                  " Mern Stack Developer",
                  1500,
                  " Web Developer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  background:
                    "linear-gradient(to right, #06B6D4, #3B82F6, #A855F7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  fontWeight: "bold",
                }}
                repeat={Infinity}
              />
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="md:text-xl text-sm text-gray-200"
          >
            I am a passionate and results-driven MERN Stack Developer with 1.4
            years of experience architecting and building dynamic,
            high-performance web applications. My expertise spans the entire
            development lifecycle, from crafting responsive and intuitive
            front-ends with Reactjs, JavaScript, and Tailwind CSS to engineering
            powerful back-end systems with Node.js, Express, and MongoDB.
          </motion.p>
          <div className="flex gap-4 mt-5">
            <a
              href={cv_url}
              download
              className="md:px-6 px-4 md:py-2 py-1 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Download CV
            </a>
            <a
              href={cv_url}
              target="_blank"
              rel="noopener noreferrer"
              className="md:px-6 px-4 md:py-2 py-1 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition"
            >
              View CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
          className="w-full order-1 md:order-2 flex justify-center items-center"
        >
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0}
            tiltMaxAngleX={17}
            tiltMaxAngleY={17}
          >
            <motion.figure
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className=" relative w-full h-full  md:ring-10  ring-white/15 rounded-full"
            >
              <img
                className="md:w-80 md:h-80  lg:w-90 lg:h-90 w-65 h-65 rounded-full   mx-auto object-cover transition-transform duration-300 hover:scale-105 hover:rotate-3"
                src={mirajhussain}
                alt="profile"
              />
            </motion.figure>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
}

export default Herosection;
