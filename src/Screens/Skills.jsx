import React from "react";
import { motion } from "framer-motion";
import {
   FaReact,
   FaNodeJs,
   FaDatabase,
   FaGithub,
   FaHtml5,
   FaCss3Alt,
   FaJsSquare,
   FaNpm,
   FaLaptopCode,
   FaBootstrap,
   FaDocker,
   FaLock,
} from "react-icons/fa";
import {
   SiMongodb,
   SiExpress,
   SiTailwindcss,
   SiOpenai,
   SiRedux,
   SiNextdotjs,
   SiFirebase,
   SiTypescript,
   SiApollographql,
} from "react-icons/si";

// Skills Data
const skillsData = [
   {
      category: "Frontend",
      skills: [
         { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
         { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
         { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
         { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
         { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
         { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
         { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
         { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
         { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
      ],
   },
   {
      category: "Backend",
      skills: [
         { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
         { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
         { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
         { name: "REST APIs", icon: <SiApollographql className="text-purple-500" /> },
         { name: "JWT Authentication", icon: <FaLock className="text-gray-700" /> },
         { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      ],
   },
   {
      category: "Database",
      skills: [
         { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
         { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
      ],
   },
   {
      category: "Tools & Others",
      skills: [
         { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
         { name: "NPM", icon: <FaNpm className="text-red-500" /> },
         { name: "VS Code", icon: <FaLaptopCode className="text-blue-400" /> },
         { name: "ChatGPT", icon: <SiOpenai className="text-emerald-400" /> },
      ],
   },
];

const Skills = () => {
   return (
      <section className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900 overflow-hidden">
         {/* Subtle Background elements */}
         <div className="absolute inset-0 -z-10">
            {/* Soft neutral gradient blobs */}
            <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gray-200 rounded-full blur-[180px] opacity-50" />
            <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-gray-300 rounded-full blur-[150px] opacity-50" />
         </div>

         <div className="max-w-7xl mx-auto px-6">
            {/* Heading */}
            <motion.h2
               initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
               className="text-5xl font-bold text-center mb-4 tracking-tight"
            >
               My <span className="text-blue-600">Skills</span>
            </motion.h2>

            <p className="text-center text-gray-500 mb-16 max-w-2xl mx-auto leading-relaxed">
               A curated list of my technical expertise in frontend, backend, databases, and development tools.
            </p>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
               {skillsData.map((category, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: idx * 0.2 }}
                     viewport={{ once: true }}
                     whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(99,102,241,0.3)" }}
                     className="relative rounded-lg bg-white shadow-md hover:shadow-lg border border-gray-300 p-6 flex flex-col"
                  >

                     {/* Header with watermark icon */}
                     <div className="relative mb-4 pb-3 border-b border-gray-300">
                        <h3 className="text-xl font-semibold text-indigo-700 z-10 relative">
                           {category.category}
                        </h3>
                        <div
                           aria-hidden="true"
                           className="absolute top-1/2 right-3 -translate-y-1/2 text-indigo-100 text-[4rem] opacity-30 select-none pointer-events-none"
                        >
                           {/* Use category icon or first skill icon here as watermark */}
                           {category.skills[0].icon}
                        </div>
                        <p className="text-sm text-gray-600 mt-1 max-w-[240px]">
                           {/* Optional tagline or description */}
                           {`Explore my expertise in ${category.category.toLowerCase()}.`}
                        </p>
                     </div>

                     {/* Skills badges */}
                     <div className="flex flex-wrap gap-3 mt-4">
                        {category.skills.map((skill, i) => (
                           <motion.div
                              key={i}
                              whileHover={{ scale: 1.1, y: -4 }}
                              className="flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 cursor-default select-none transition"
                           >
                              <span className="text-indigo-600 text-lg">{skill.icon}</span>
                              <span className="text-indigo-700 font-medium text-sm">{skill.name}</span>
                           </motion.div>
                        ))}
                     </div>

                     {/* Footer with 'skill bar' */}
                     <div className="mt-auto pt-4">
                        <div className="w-full h-1 rounded-full bg-indigo-100 overflow-hidden shadow-sm">
                           <div
                              className="h-full bg-indigo-500"
                              style={{ width: `${Math.min(category.skills.length * 10, 100)}%` }}
                           ></div>
                        </div>
                        <p className="text-xs text-indigo-600 mt-1 text-center">
                           {category.skills.length} Skills Mastered
                        </p>
                     </div>
                  </motion.div>
               ))}
            </div>

         </div>
      </section>
   );
};

export default Skills;
