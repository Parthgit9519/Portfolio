import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // fixed react-router import
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaMobile,
  FaRocket,
  FaLaptopCode,
  FaChevronDown,
  FaDownload,
  FaExternalLinkAlt,
  FaUser,
  FaGraduationCap,
  FaCoffee,
  FaBrain,
  FaUsers
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiOpenai
} from "react-icons/si";

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Front-End Developer",
    "MERN Stack Developer",
    "Full-Stack Developer",
    "React Specialist"
  ];

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React.js", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-800" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
    { name: "AI Integration", icon: SiOpenai, color: "text-blue-600" }
  ];

  const stats = [
    { number: "10+", label: "Practical Projects", icon: FaCode },
    { number: "1", label: "Year of Hands-on Experience", icon: FaLaptopCode },
    { number: "5+", label: "Collaborations & Team Projects", icon: FaUsers },
    { number: "Ongoing", label: "Continuous Learning & Growth", icon: FaBrain }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden text-white" >
      {/* Fade-in Effect */}
      < div className={`relative z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

        <div className="absolute inset-0 bg-[radial-gradient(#fff,transparent_1px)] bg-[length:25px_25px] opacity-30"></div>

        
        {/* Hero Section */}
        < section className="min-h-screen flex flex-col justify-center items-center px-6 text-center" >
          {/* Main Heading */}
          < h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500" >
            Hi, I’m Deepak Thakur
          </h1 >

          {/* Dynamic Role */}
          < div className="h-16 mb-6" >
            <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              {roles[currentRole]}
            </p>
          </div >

          {/* Description */}
          < p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed" >
            I'm a passionate developer who creates{" "}
            < span className="font-bold text-blue-300" >
              modern, scalable web applications
            </span > {" "}
            that solve real - world problems.With expertise in {" "}
            < span className="font-semibold text-purple-300" > MERN stack</span >, I
            build < span className="italic" > pixel - perfect interfaces</span > and{" "}
            <span className="font-semibold">robust backend systems</span>.
            Currently seeking{" "}
            <span className="font-bold text-indigo-300">
              Full-Stack opportunities
            </span>{" "}
            to make an impact.
          </p >

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-4 justify-center mb-12">
                  <NavLink
                     to="/projects"
                     className="group bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                  >
                     <FaRocket className="group-hover:animate-bounce" />
                     View My Work
                  </NavLink>

                  <NavLink
                     to="/contact"
                     className="bg-transparent border-2 border-blue-400 text-blue-300 px-8 py-3 rounded-full font-bold hover:bg-blue-500/20 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2"
                  >
                     <FaUser />
                     Get In Touch
                  </NavLink>

                  <a
                     href="/resume.pdf"
                     download
                     className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-3 rounded-full font-bold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2"
                  >
                     <FaDownload />
                     Download CV
                  </a>
               </div> */}

          {/* Social Links */}
          <div className="flex gap-4 mb-12">
            <a
              href="https://github.com/Deepak-thakur-321"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-gray-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub className="text-2xl text-white group-hover:text-gray-200" />
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin className="text-2xl text-white group-hover:text-blue-400" />
            </a>

            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 backdrop-blur-md p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-700 hover:border-sky-400 transition-all duration-300 transform hover:scale-110"
            >
              <FaTwitter className="text-2xl text-white group-hover:text-sky-400" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <FaChevronDown className="text-3xl text-gray-300" />
          </div>
        </section >

        {/* Skills Section */}
        < section className="py-20 px-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] text-gray-900" >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              My Tech Stack
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              I work with cutting-edge technologies to build modern, scalable
              applications
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2"
                >
                  <skill.icon
                    className={`text-4xl ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="font-bold text-gray-800 text-lg">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* Stats Section */}
        < section className="py-20 px-6 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#2563eb]" >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              My Journey in{" "}
              <span className="text-yellow-300">Numbers</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center text-white"
                >
                  <stat.icon className="text-5xl mb-4 mx-auto opacity-90" />
                  <h3 className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section >

        {/* About Preview */}
        < section className="py-20 px-6 bg-gradient-to-br from-[#f9fafb] to-[#f3f4f6] text-gray-900" >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                  More About Me
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  I'm a self-taught developer with a passion for creating
                  digital experiences that matter. When I'm not coding, you'll
                  find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer
                  community.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <FaGraduationCap className="text-2xl text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Education</h4>
                      <p className="text-gray-600">Computer Science</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaCoffee className="text-2xl text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Fuel</h4>
                      <p className="text-gray-600">Coffee & Code</p>
                    </div>
                  </div>
                </div>

                {/* <NavLink
                           to="/about"
                           className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors duration-300"
                        >
                           Learn More About Me
                           <FaExternalLinkAlt />
                        </NavLink> */}
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Quick Facts
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Based in India · Collaborating Remotely
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Focused on MERN Stack Development
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                        Built 10+ Practical Projects (Frontend & Fullstack)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Currently Exploring AI Integration with Web Apps
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* CTA Section */}
        < section className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white" >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Something{" "}
              <span className="text-blue-400">Amazing</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's create something extraordinary together!
            </p>

            {/* <div className="flex flex-wrap gap-4 justify-center">
                     <NavLink
                        to="/contact"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold transition-colors duration-300 flex items-center gap-2 transform hover:scale-105"
                     >
                        <FaRocket />
                        Start a Project
                     </NavLink>

                     <NavLink
                        to="/projects"
                        className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                     >
                        <FaCode />
                        View Portfolio
                     </NavLink>
                  </div> */}
          </div>
        </section >
      </div >
    </div >
  );
};

export default Hero;
