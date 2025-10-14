import React from "react";
import { motion } from "framer-motion";

// --- SVG Icons ---
// Replaced react-icons with inline SVGs to resolve the import error.
const FaCode = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
);
const FaBookOpen = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
);
const FaBullseye = () => (
    <svg className="w-12 h-12 mx-auto mb-4 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
);
const FaBriefcase = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-4V3a1 1 0 00-1-1zm-1 4a1 1 0 10-2 0v1a1 1 0 102 0V6z" clipRule="evenodd"></path></svg>
);
const FaAward = () => (
  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd"></path></svg>
);


// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-20"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            About Me
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Transforming passion into expertise through dedicated learning and hands-on development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Personal Introduction */}
          <motion.div
            className="space-y-8"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={cardVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                  <FaCode />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                I'm <span className="text-blue-600 font-semibold">Parth Gupta</span>,
                a dedicated <span className="font-semibold">Full-Stack Developer in training</span>
                {" "}currently mastering the MERN Stack at <span className="font-semibold text-indigo-600">Sheryians Coding School</span>.
                My journey represents a complete mindset transformation from curiosity to commitment,
                from basics to building scalable applications.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={cardVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                  <FaBookOpen />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Current Learning Path</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-green-600 mb-2">MERN Stack Mastery</h4>
                  <p className="text-gray-600">
                    Diving deep into MongoDB, Express.js, React, and Node.js to build end-to-end applications.
                    Currently focusing on advanced React patterns, state management, and API development.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-600 mb-2">Professional Development</h4>
                  <p className="text-gray-600">
                    Learning industry best practices, clean code principles, version control with Git,
                    deployment strategies, and collaborative development workflows.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Skills & Achievements */}
          <motion.div
            className="space-y-8"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={cardVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                  <FaAward />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-600">Frontend</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• React.js & Hooks</li>
                    <li>• JavaScript (ES6+)</li>
                    <li>• HTML5 & CSS3</li>
                    <li>• TailwindCSS</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-600">Backend & Tools</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Node.js & Express.js</li>
                    <li>• MongoDB & Mongoose</li>
                    <li>• RESTful APIs</li>
                    <li>• Git & GitHub</li>
                    <li>• Postman</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              variants={cardVariants}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <FaBriefcase />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">What I've Built</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-orange-600 mb-2">Portfolio Projects</h4>
                  <p className="text-gray-600 text-sm">
                    Responsive web applications showcasing modern UI/UX principles,
                    API integration, and interactive user experiences.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-600 mb-2">Learning Projects</h4>
                  <p className="text-gray-600 text-sm">
                    E-commerce platforms, task management apps, and social media interfaces
                    built with React, featuring state management and real-time functionality.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Vision & Goals */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <FaBullseye />
            <h3 className="text-3xl font-bold mb-4">My Professional Vision</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-semibold mb-3">Immediate Goals</h4>
              <p className="opacity-90 text-sm">
                Master the MERN stack, contribute to open-source projects,
                and build a portfolio of impactful applications.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Professional Aspirations</h4>
              <p className="opacity-90 text-sm">
                Join a dynamic development team, work on scalable products,
                and continuously evolve with emerging technologies.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Long-term Vision</h4>
              <p className="opacity-90 text-sm">
                Become a senior full-stack developer, mentor upcoming developers,
                and contribute to innovative tech solutions.
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-6 border-t border-blue-400">
            <p className="text-lg font-medium opacity-95">
              "Every line of code is a step towards mastery, every project a milestone in my journey."
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

