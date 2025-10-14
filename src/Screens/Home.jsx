import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCode,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaChevronDown,
  FaDownload,
  FaEnvelope,
  FaGraduationCap,
  FaCoffee,
  FaBrain,
  FaUsers,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiOpenai,
} from "react-icons/si";

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const Hero = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React.js", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
    { name: "AI Integration", icon: SiOpenai, color: "text-blue-600" },
  ];

  const stats = [
    { number: "10+", label: "Practical Projects", icon: FaCode },
    { number: "1+", label: "Year of Experience", icon: FaLaptopCode },
    { number: "5+", label: "Team Collaborations", icon: FaUsers },
    { number: "∞", label: "Passion for Learning", icon: FaBrain },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden text-white">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff,transparent_1px)] bg-[length:25px_25px] opacity-20"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen mt-12 flex flex-col justify-center items-center px-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold    leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"
            variants={itemVariants}
          >
            Parth Gupta
          </motion.h1>

          {/* Dynamic Role with Typing Animation */}
          <motion.div className="h-16 mb-6" variants={itemVariants}>
            <TypeAnimation
              sequence={[
                "A Front-End Developer",
                2000,
                "A MERN Stack Developer",
                2000,
                "A Full-Stack Developer",
                2000,
                "A React Specialist",
                2000,
              ]}
              wrapper="p"
              speed={50}
              className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I transform ideas into high-performance web applications. With a
            passion for the{" "}
            <span className="font-semibold text-purple-300">MERN stack</span>, I
            build <span className="italic">pixel-perfect interfaces</span> and{" "}
            <span className="font-semibold">
              robust, scalable backend systems
            </span>
            . Currently seeking impactful{" "}
            <span className="font-bold text-indigo-300">
              Full-Stack opportunities
            </span>
            .
          </motion.p>

          {/* Social Links */}
          <motion.div className="flex gap-4 mb-12" variants={itemVariants}>
            <a
              href="https://github.com/Parthgit9519" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-gray-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-2xl text-white group-hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/parth-gupta-816b35226/" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl text-white group-hover:text-blue-400" />
            </a>
            <a
              href="https://twitter.com/parth-gupta" // Placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-sky-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter className="text-2xl text-white group-hover:text-sky-400" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaChevronDown className="text-3xl text-gray-300" />
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="py-20 px-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              My Tech Stack
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              A curated collection of tools I use to build modern and beautiful
              applications.
            </p>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2"
                  variants={itemVariants}
                >
                  <skill.icon
                    className={`text-4xl ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="font-bold text-gray-800 text-lg">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          className="py-20 px-6 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#2563eb]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              My Journey <span className="text-yellow-300">By The Numbers</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center text-white">
                  <stat.icon className="text-5xl mb-4 mx-auto opacity-90" />
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something{" "}
              <span className="text-blue-400">Amazing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects. Let's create
              something extraordinary together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact" // Changed from href to 'to', pointing to your contact route
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-colors duration-300 flex items-center gap-2 transform hover:scale-105"
              >
                <FaEnvelope />
                Get in Touch
              </Link>
              <a
                href="/resume/parthguptaresume.pdf" // Your correct resume path
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-colors duration-300 flex items-center gap-2 transform hover:scale-105"
              >
                <FaDownload />
                View CV
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Hero;
