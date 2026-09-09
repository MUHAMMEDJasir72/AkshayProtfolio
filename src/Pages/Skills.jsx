import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Skills() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.06,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const skillCategories = [
    {
      title: "SEO & Search Optimization",
      skills: [
        "SEO",
        "AEO",
        "GEO",
        "Keyword Research",
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Backlink Building",
      ],
    },
    {
      title: "Paid Advertising",
      skills: [
        "Google Ads",
        "Meta Ads",
        "PPC",
        "TikTok Ads",
        "LinkedIn Ads",
        "Snapchat Ads",
      ],
    },
    {
      title: "Content & Social Media",
      skills: [
        "Content Strategy",
        "Social Media Management",
        "WhatsApp Marketing",
        "B2B Marketing",
        "Canva",
      ],
    },
    {
      title: "Analytics & Performance",
      skills: [
        "Google Analytics",
        "Lead Generation",
        "Performance Optimization",
        "Reporting",
      ],
    },
    {
      title: "Marketing Platforms",
      skills: [
        "WordPress",
        "Shopify",
        "Email Marketing",
        "Mailchimp",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans overflow-hidden">
      <Navbar />

      {/* Main Skills Section */}
      <main className="relative min-h-screen pt-[110px] pb-28">

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,158,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Background Glows */}
        <div className="absolute top-20 left-[-150px] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />

        <div className="absolute top-[45%] right-[-180px] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px]" />

        <div className="absolute bottom-0 left-[30%] w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[120px]" />

        {/* Main Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              What I Do
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
                My Skills
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "7rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 mx-auto mt-4 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto mt-6 text-gray-400 text-base sm:text-lg leading-8"
            >
              Digital marketing skills focused on improving online visibility,
              reaching the right audience, generating leads, and driving
              measurable business growth.
            </motion.p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-16">

            {skillCategories.map((category, categoryIndex) => (
              <section key={categoryIndex}>

                {/* Category Heading */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 mb-7"
                >
                  <div className="h-px w-10 bg-purple-500/50" />

                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
                    {category.title}
                  </h2>

                  <div className="h-px flex-1 max-w-32 bg-gray-800" />
                </motion.div>

                {/* Skill Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      custom={skillIndex}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}

                      whileHover={{
                        y: -7,
                        scale: 1.03,
                        boxShadow:
                          "0 20px 50px rgba(168, 85, 247, 0.15)",
                      }}

                      whileTap={{ scale: 0.97 }}

                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/10
                        bg-[#111113]/70
                        backdrop-blur-xl
                        px-5
                        py-6
                        min-h-[105px]
                        flex
                        items-center
                        justify-center
                        text-center
                        transition-all
                        duration-300
                      "
                    >

                      {/* Hover Gradient */}
                      <div
                        className="
                          absolute
                          inset-0
                          bg-gradient-to-br
                          from-purple-500/10
                          via-transparent
                          to-indigo-500/10
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      />

                      {/* Top Glow */}
                      <div
                        className="
                          absolute
                          top-0
                          left-1/2
                          -translate-x-1/2
                          w-16
                          h-px
                          bg-gradient-to-r
                          from-transparent
                          via-purple-400
                          to-transparent
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      />

                      {/* Skill Text */}
                      <p
                        className="
                          relative
                          z-10
                          text-sm
                          sm:text-base
                          font-semibold
                          text-gray-400
                          group-hover:text-purple-300
                          transition-colors
                          duration-300
                        "
                      >
                        {skill}
                      </p>

                      {/* Bottom Indicator */}
                      <motion.div
                        className="
                          absolute
                          bottom-2
                          left-1/2
                          -translate-x-1/2
                          h-0.5
                          w-0
                          bg-gradient-to-r
                          from-purple-400
                          to-indigo-400
                        "
                        whileHover={{ width: "45%" }}
                        transition={{ duration: 0.3 }}
                      />

                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              mt-20
              max-w-3xl
              mx-auto
              rounded-[2rem]
              border
              border-purple-400/10
              bg-[#111113]/70
              backdrop-blur-xl
              p-8
              sm:p-10
              text-center
              overflow-hidden
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5" />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
                Digital Growth
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  Strategy. Visibility. Results.
                </span>
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                Combining SEO, paid advertising, content, social media,
                analytics, and performance optimization to create
                data-driven digital marketing strategies.
              </p>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Skills;

