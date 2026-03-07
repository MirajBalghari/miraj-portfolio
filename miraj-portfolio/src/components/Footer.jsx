import React from "react";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative  backdrop-blur-lg bg-white/30 border-b border-white/20 text-white shadow-lg p-3">
      <div className="container px-2 md:px-4 mx-auto flex md:justify-between gap-3">
        {/* Logo + Text */}
        <aside>
          <p className="md:text-base text-sm">
            @mirajhussainbalghari-{new Date().getFullYear()}
          </p>
        </aside>

        {/* Social Icons */}
        <nav className="flex gap-3 mr-2">
          {/* GitHub */}
          <motion.a
            href="https://github.com/MirajBalghari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current md:w-6 md:h-6 w-5 h-5"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.088 3.292 9.397 7.865 10.918.575.104.785-.25.785-.557 0-.276-.01-1.007-.015-1.977-3.199.696-3.875-1.542-3.875-1.542-.523-1.33-1.278-1.684-1.278-1.684-1.043-.713.079-.698.079-.698 1.152.082 1.757 1.183 1.757 1.183 1.025 1.756 2.688 1.248 3.344.954.104-.743.401-1.249.729-1.538-2.553-.29-5.238-1.277-5.238-5.68 0-1.255.449-2.28 1.183-3.083-.119-.291-.513-1.459.112-3.04 0 0 .966-.309 3.165 1.178a11.03 11.03 0 0 1 2.881-.388c.977.005 1.963.132 2.88.388 2.2-1.487 3.165-1.178 3.165-1.178.626 1.581.232 2.749.114 3.04.737.803 1.183 1.828 1.183 3.083 0 4.412-2.688 5.386-5.253 5.671.413.356.782 1.059.782 2.135 0 1.541-.014 2.784-.014 3.161 0 .31.207.666.79.553C20.21 21.394 23.5 17.085 23.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/mirajhussainbalghari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-blue-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current md:w-6 md:h-6 w-5 h-5"
            >
              <path d="M19 0h-14C2.239 0 0 2.239 0 5.333v13.333C0 21.761 2.239 24 5 24h14c2.761 0 5-2.239 5-5.333V5.333C24 2.239 21.761 0 19 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.596a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.557v-5.604c0-1.336-.027-3.055-1.861-3.055-1.865 0-2.151 1.457-2.151 2.961v5.698h-3.557V9h3.414v1.561h.049c.475-.899 1.637-1.848 3.367-1.848 3.599 0 4.257 2.37 4.257 5.451v6.288z" />
            </svg>
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://x.com/Mi_jbalghariPTI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-cyan-300 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current md:w-6 md:h-6 w-5 h-5"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/mirajhussain.balghari"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-blue-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="fill-current md:w-6 md:h-6 w-5 h-5"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </motion.a>
        </nav>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute bottom-2 md:right-4 right-2 bg-cyan-400 text-white md:p-2 p-1 rounded-full shadow-lg hover:bg-cyan-500 transition"
      >
        <FaRegArrowAltCircleUp size={20} />
      </motion.button>
    </footer>
  );
}

export default Footer;
