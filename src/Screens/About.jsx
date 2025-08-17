import React from "react";
import { FaCode, FaBookOpen, FaBullseye, FaUsers, FaBriefcase, FaAward } from "react-icons/fa";

const About = () => {
   return (
      <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-20">
         <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-16">
               <h2 className="text-5xl font-bold text-gray-900 mb-4 relative inline-block">
                  About Me
                  <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></span>
               </h2>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                  Transforming passion into expertise through dedicated learning and hands-on development
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
               {/* Left Side - Personal Introduction */}
               <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                           <FaCode className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">Who I Am</h3>
                     </div>
                     <p className="text-gray-700 leading-relaxed text-lg">
                        I'm <span className="text-blue-600 font-semibold">Deepak Thakur</span>,
                        a dedicated <span className="font-semibold">Full-Stack Developer in training </span>
                        currently pursuing the MERN Stack at <span className="font-semibold text-indigo-600">Sheryians Coding School</span>.
                        My journey represents a complete mindset transformation from curiosity to commitment,
                        from basics to building scalable applications.
                     </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                           <FaBookOpen className="w-6 h-6 text-white" />
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
                  </div>
               </div>

               {/* Right Side - Skills & Achievements */}
               <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                           <FaAward className="w-6 h-6 text-white" />
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
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                     <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                           <FaBriefcase className="w-6 h-6 text-white" />
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
                  </div>
               </div>
            </div>

            {/* Bottom Section - Vision & Goals */}
            <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
               <div className="text-center mb-8">
                  <FaBullseye className="w-12 h-12 mx-auto mb-4 opacity-90" />
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
            </div>
         </div>
      </section>
   );
};

export default About;