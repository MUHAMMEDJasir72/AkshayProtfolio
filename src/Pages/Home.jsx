
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


function Home() {
  const [text, setText] = useState("");
  const fullText = "Akshay Das";

  // Typing animation
  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/8590987135",
      label: "WhatsApp",
    },
    {
      icon: FaPhoneAlt,
      href: "tel:+918590987135",
      label: "Phone",
    },
    {
      icon: MdEmail,
      href: "mailto:akshaydas7135@gmail.com",
      label: "Email",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/__akshay.das/",
      label: "Instagram",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/akshay-das-665042373/",
      label: "LinkedIn",
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <main className="relative min-h-[calc(100vh-80px)] flex items-center">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
                "linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            }}
        />

        {/* Background Glow */}
        <div className="absolute top-20 left-[-150px] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-[-150px] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px]" />

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-20">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* Small Heading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-lg mb-3"
              >
                Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
                  {text}
                </span>

                <span className="text-purple-400 animate-pulse">|</span>
              </motion.h1>

              {/* Role */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-5 text-2xl sm:text-3xl font-semibold"
              >
                <span className="text-purple-400">
                  Digital Marketer
                </span>{" / "}
                <span className="text-gray-200">
                  SEO Specialist
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 max-w-xl text-gray-400 text-base sm:text-lg leading-8"
              >
                I help businesses grow their online presence and reach the right audience through{" "}
                <span className="text-gray-200">
                  SEO, Social Media, Content Marketing
                </span>{" "}
                and{" "}
                <span className="text-gray-200">
                  Data-Driven Analytics
                </span>.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-4 mt-8"
              >

                {/* Let's Connect */}
                <motion.div
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Link
                            to="/contact"
                            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold transition-all duration-300 shadow-lg shadow-purple-500/20"
                          >
                            Let's Connect

                            <MdArrowOutward
                              className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                            />
                          </Link>
                        </motion.div>

                {/* Resume */}
                <motion.a
                  href="/Akshay_Das.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-gray-700 bg-white/[0.03] hover:bg-white/[0.08] hover:border-purple-400/50 text-gray-200 font-semibold transition-all duration-300"
                >
                  View Resume
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-10"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-4">
                  Connect with me
                </p>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        target={
                          item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={item.label}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: 1.1 + index * 0.08,
                        }}
                        whileHover={{
                          y: -5,
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.9,
                        }}
                        className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-700 bg-white/[0.03] text-gray-400 hover:text-purple-300 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300"
                      >
                        <Icon className="text-xl" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT PROFILE SECTION */}
            <motion.div
              initial={{
                opacity: 0,
                x: 60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
              }}
              className="relative flex justify-center lg:justify-end"
            >

              {/* Decorative Circle */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] border border-purple-400/10 rounded-full"
              />

              {/* Second Circle */}
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] border border-dashed border-indigo-400/10 rounded-full"
              />

              {/* Profile Card */}
              <motion.div
                whileHover={{
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative z-10 w-[280px] sm:w-[350px]"
              >

                {/* Glow */}
                <div className="absolute -inset-5 bg-purple-500/10 blur-3xl rounded-full" />

                {/* Card */}
                <div className="relative rounded-[2rem] border border-white/10 bg-[#111113]/80 backdrop-blur-xl p-4 shadow-2xl">

                  {/* Image */}
                  <div className="relative overflow-hidden rounded-[1.5rem]">

                    <img
                      src="/akshay-das.png"
                      alt="Akshay Das"
                      className="w-full aspect-square object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/70 via-transparent to-transparent" />
                  </div>

                  {/* Profile Info */}
                  <div className="px-3 pt-5 pb-3">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="font-semibold text-lg">
                          Akshay Das
                        </p>

                        <p className="text-sm text-gray-500 mt-1">
                          Digital Marketer / SEO Specialist
                        </p>
                      </div>

                      {/* Status */}
                      <div className="w-10 h-10 rounded-full bg-purple-400/10 border border-purple-400/20 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                      </div>

                    </div>

                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;

