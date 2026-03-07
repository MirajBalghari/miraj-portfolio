import React, { useActionState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const serviceId = import.meta.env.VITE_Service_Id;
const templateId = import.meta.env.VITE_Template_Id;
const publicKey = import.meta.env.VITE_Public_key;

async function handleSubmit(prevState, formData) {
  try {
    const values = Object.fromEntries(formData.entries());

    await emailjs.send(serviceId, templateId, values, publicKey);

    toast.success("Your message was sent ✅");
    return { status: "success", message: "Message sent" };
  } catch (error) {
    console.error("FAILED...", error);
    toast.error("Your message could not be sent ❌");
    return { status: "error", message: "Message not sent" };
  }
}

function Contact() {
  const [state, formAction, isPending] = useActionState(handleSubmit, {
    status: "",
    message: "",
  });
  return (
    <section
      id="contact"
      className="container px-2 md:px-4 mx-auto md:my-20 my-10 relative z-10"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-white drop-shadow-lg"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-gray-200 mt-2"
      >
        I’d love to hear from you — reach out for any opportunities or
        questions!
      </motion.p>

      {/* Contact Form */}
      <motion.form
        action={formAction}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="mt-10 max-w-xl mx-auto md:p-8 p-4  md:rounded-2xl rounded-xl shadow-xl 
        bg-white/10 backdrop-blur-xl border border-white/20 space-y-5"
      >
        <h2 className="text-lg md:text-2xl text-center font-semibold text-white">
          Contact With Me
        </h2>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="mail@site.com"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            minLength="3"
            maxLength="30"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Subject */}
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
        ></textarea>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isPending}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-full py-3 font-semibold text-lg text-white rounded-lg 
          bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 
          hover:from-purple-500 hover:via-pink-500 hover:to-red-500 transition-all duration-500 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Send Message "}
        </motion.button>
      </motion.form>
    </section>
  );
}

export default Contact;
