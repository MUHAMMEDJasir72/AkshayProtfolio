import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Experience() {
  const experiences = [
    {
    company: "2Cloud",
    position: "SEO Executive",
    location: "UAE",
    description: [
      "Managed on-page and off-page SEO activities to improve organic search visibility and website performance.",
      "Conducted keyword research and optimized website content, meta titles, meta descriptions, headings, and other on-page elements.",
      "Handled backlink building, competitor analysis, and SERP analysis to support organic growth.",
      "Monitored keyword rankings, organic traffic, impressions, and overall search performance.",
      "Supported SEO strategies for Magento Cloud and eCommerce websites.",
      "Worked on website rework, content updates, and ongoing SEO initiatives.",
    ],
    technologies: [
      "SEO",
      "Keyword Research",
      "On-Page SEO",
      "Off-Page SEO",
      "Backlink Building",
      "SERP Analysis",
      "Competitor Analysis",
      "Magento Cloud",
      "eCommerce SEO",
      "Google Analytics",
    ],
    logo: "2cloud_logo.jpg",
  },
  {
    company: "Codeyaya",
    position: "Digital Marketing Intern",
    location: "UAE",
    description: [
      "Gained practical experience in executing and optimizing digital marketing campaigns across multiple platforms.",
      "Worked on SEO, Google Ads, Meta Ads, and Social Media Marketing, including content creation and keyword research.",
      "Assisted in campaign strategy development, audience targeting, data analysis, and performance tracking.",
      "Monitored campaign performance to improve engagement and conversion rates.",
      "Strengthened skills in digital advertising, analytics, campaign optimization, brand communication, and market trends.",
      "Collaborated with clients and team members within a professional digital marketing environment.",
    ],
    technologies: [
      "SEO",
      "Google Ads",
      "Meta Ads",
      "Social Media Marketing",
      "Keyword Research",
      "Content Creation",
      "Analytics",
      "Audience Targeting",
      "Campaign Optimization",
    ],
    logo: "codeyaya.jpg",
  },
];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-white font-sans overflow-hidden relative">
      <Navbar />

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

      <div className="absolute top-[45%] right-[-150px] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[130px]" />

      <div className="absolute bottom-[-150px] left-[30%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

      {/* Main Content */}
      <main className="relative z-10 pt-[120px] pb-32 px-6">

        <div className="max-w-5xl mx-auto">

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              My Journey
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">
                Work Experience
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
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-8"
            >
              My professional journey, projects, and experience building
              modern web applications.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >

            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-px bg-gray-800 h-full">

              <motion.div
                variants={timelineVariants}
                initial="hidden"
                animate="visible"
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500"
              />

            </div>

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex flex-col md:flex-row items-center mb-16"
              >

                {/* Left / Right Content */}
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12"
                      : "md:pl-12 md:ml-auto"
                  }`}
                >

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{
                      y: -6,
                      scale: 1.015,
                      boxShadow:
                        "0 20px 60px rgba(168, 85, 247, 0.15)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="
                      relative
                      overflow-hidden
                      rounded-[1.5rem]
                      border
                      border-white/10
                      bg-[#111113]/75
                      backdrop-blur-xl
                      p-6
                      sm:p-7
                      shadow-2xl
                      transition-all
                      duration-300
                    "
                  >

                    {/* Card Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

                    {/* Top Glow */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />

                    <div className="relative z-10">

                      {/* Company */}
                      <div className="flex items-center gap-4 mb-5">

                        <div className="w-14 h-14 rounded-xl border border-purple-400/20 bg-purple-400/5 flex items-center justify-center overflow-hidden">
                          <img
                            src={exp.logo}
                            alt="Company Logo"
                            className="w-full h-full object-contain p-2"
                          />
                        </div>

                        <div>
                          <h2 className="text-lg sm:text-xl font-semibold text-gray-100">
                            {exp.company}
                          </h2>

                          <p className="text-sm text-purple-400 mt-1 font-medium">
                            {exp.position}
                          </p>
                        </div>

                      </div>

                      {/* Duration & Location */}
                      <div className="flex flex-wrap gap-3 mb-5">

                        <span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs text-gray-400">
                          📍 {exp.location}
                        </span>

                      </div>

                      {/* Divider */}
                      <div className="h-px bg-white/10 mb-5" />

                      {/* Description */}
                      <ul className="space-y-3 text-sm text-gray-400 mb-6">

                        {exp.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3"
                          >
                            <span className="text-purple-400 mt-1">
                              ▸
                            </span>

                            <span className="leading-6">
                              {item}
                            </span>
                          </motion.li>
                        ))}

                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">

                        {exp.technologies.map((tech, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.04 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.08 }}
                            className="
                              text-xs
                              px-3
                              py-1.5
                              rounded-full
                              border
                              border-purple-400/20
                              bg-purple-400/5
                              text-purple-300
                              transition-all
                              duration-200
                            "
                          >
                            {tech}
                          </motion.span>
                        ))}

                      </div>

                    </div>
                  </motion.div>

                </div>

                {/* Timeline Dot */}
                <div
                  className="
                    hidden
                    md:flex
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-9
                    h-9
                    rounded-full
                    bg-[#09090B]
                    border
                    border-purple-400/40
                    items-center
                    justify-center
                    z-20
                  "
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-purple-400"
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

              </motion.div>
            ))}

          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative
              mt-8
              max-w-3xl
              mx-auto
              rounded-[2rem]
              border
              border-white/10
              bg-[#111113]/60
              backdrop-blur-xl
              p-8
              text-center
              overflow-hidden
            "
          >

            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5" />

            <div className="relative z-10">

              <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3">
                Growing Every Day
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold">
                <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                  Always Learning. Always Building.
                </span>
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                Continuously improving my technical skills and exploring
                modern technologies to build better digital experiences.
              </p>

            </div>

          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Experience;

