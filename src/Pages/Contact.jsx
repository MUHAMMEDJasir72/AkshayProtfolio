import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3a8qlw4",
        "template_4t0n75r",
        form.current,
        "51_OZ5pPsv3lUKLgS"
      )
      .then(
        (result) => {
            console.log("SUCCESS:", result.text);
            toast.success("Message sent successfully!");
            form.current.reset();
        },
        (error) => {
            console.error("EMAILJS ERROR:", error);
            toast.error("Failed to send message. Please try again.");
        }
    );
  };

  const fieldVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white pt-[130px] flex flex-col justify-between px-4 sm:px-6 pb-20 overflow-hidden relative">
      <Navbar />

      {/* Amber Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Purple Background Glow */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Indigo Background Glow */}
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-10 pointer-events-none"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center Purple Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-5 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      

      {/* Main Content */}
      <div className="flex flex-col items-center flex-grow relative z-10 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mb-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 mb-10 max-w-md"
          >
            Have a question or want to work together? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.form
          ref={form}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#111113]/80 backdrop-blur-xl p-6 sm:p-8 shadow-2xl"
          onSubmit={sendEmail}
        >
          {/* Name Field */}
          <motion.div
            custom={0}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="relative mb-6"
          >
            <label className="block mb-2 font-medium text-gray-300">
              Full Name
              <span className="text-purple-400 ml-1">*</span>
            </label>

            <motion.input
              type="text"
              name="name"
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-5 py-3.5 rounded-xl bg-[#09090B]/80 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/30 border border-white/10 focus:border-purple-400/50 transition-all duration-300"
              placeholder="Enter your name"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            custom={1}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="relative mb-6"
          >
            <label className="block mb-2 font-medium text-gray-300">
              Email Address
              <span className="text-purple-400 ml-1">*</span>
            </label>

            <motion.input
              type="email"
              name="email"
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-5 py-3.5 rounded-xl bg-[#09090B]/80 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/30 border border-white/10 focus:border-purple-400/50 transition-all duration-300"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            custom={2}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="relative mb-6"
          >
            <label className="block mb-2 font-medium text-gray-300">
              Message
              <span className="text-purple-400 ml-1">*</span>
            </label>

            <motion.textarea
              name="message"
              rows="5"
              required
              whileFocus={{ scale: 1.01 }}
              className="w-full px-5 py-3.5 rounded-xl bg-[#09090B]/80 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500/30 border border-white/10 focus:border-purple-400/50 transition-all duration-300 resize-none"
              placeholder="Your message..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            custom={3}
            variants={fieldVariants}
            initial="hidden"
            animate="visible"
            className="text-right"
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 transition-all duration-300 text-white font-semibold shadow-lg relative overflow-hidden group"
            >
              <span className="relative z-10">Send Message</span>

              {/* Button Shine */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
        </motion.form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;

