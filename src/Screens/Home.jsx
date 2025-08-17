import React from "react";
import { NavLink } from "react-router";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Hero = () => {
   return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white px-6 text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100 to-transparent blur-3xl opacity-30"></div>

         <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight drop-shadow">
            Hi, I’m <span className="text-blue-600">Deepak Thakur</span>
         </h1>

         <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2">
            Front-End Developer • MERN Stack Developer
         </p>

         <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            I craft <span className="font-semibold text-blue-600">Modern, Responsive</span>
            & interactive web applications with <span className="font-semibold">React, TailwindCSS, and JavaScript</span>.
            My goal is to build <span className="italic">pixel-perfect, high-performance</span> projects that leave an impact.
            Currently preparing for a <span className="font-semibold text-blue-600">Full-Stack Developer Role</span>  ready to solve real problems.
         </p>

         <div className="flex flex-wrap gap-4 justify-center mb-8 cursor-pointer">
            <NavLink
               to="/projects"
               className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-blue-700 transition"
            >
               See My Work
            </NavLink>

            <NavLink
               to="/contact"
               className="bg-transparent cursor-pointer border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-md 
             font-semibold transition-colors duration-300 ease-in-out
             hover:bg-blue-600 hover:text-white"
            >
               Contact Me
            </NavLink>
         </div>

         {/* Social Links */}


         <div className="flex gap-6 text-2xl text-gray-600 ">
            <a
               href="https://github.com/Deepak-thakur-321"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white border border-gray-200 
             text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm 
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
             hover:text-white hover:shadow-lg transition-all duration-300"
            >
               <FaGithub />
            </a>

            <a
               href="https://github.com/Deepak-thakur-321"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white border border-gray-200 
             text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm 
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
             hover:text-white hover:shadow-lg transition-all duration-300"
            >
               <FaLinkedin />
            </a>

            <a
               href="https://github.com/Deepak-thakur-321"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white border border-gray-200 
             text-gray-800 font-medium px-4 py-2 rounded-lg shadow-sm 
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
             hover:text-white hover:shadow-lg transition-all duration-300"
            >
               <FaTwitter />
            </a>
         </div>

      </section>
   );
};

export default Hero;
