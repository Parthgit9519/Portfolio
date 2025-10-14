import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- SVG Icons ---
// Replaced react-icons with inline SVGs to resolve potential import errors.
const FaGraduationCap = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M622.34 153.2L343.4 27.2c-15.3-7-33.5-7-48.8 0L17.66 153.2c-23.4 10.7-23.4 39.3 0 50l278.94 126c15.3 7 33.5 7 48.8 0l278.94-126c23.4-10.7 23.4-39.3 0-50zM320 352c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zM128 480V317.5L320 400l192-82.5V480c0 17.67-14.33 32-32 32H160c-17.67 0-32-14.33-32-32z"></path></svg>
);
const FaCode = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 251.9c-5.1 4.7-5.1 12.8 0 17.5l144.1 134.3c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-134.3c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>
);
const FaYoutube = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 42.276 48.284 48.597C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.322 42.003-24.947 48.284-48.597 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zM232 341.679V170.321L394.8 256 232 341.679z"></path></svg>
);
const FaCertificate = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 0H48C21.49 0 0 21.49 0 48v416c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V48c0-26.51-21.49-48-48-48zM256 416c-88.36 0-160-71.64-160-160s71.64-160 160-160 160 71.64 160 160-71.64 160-160 160zm0-224c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64z"></path></svg>
);
const FaChevronRight = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
);
const FaCalendarAlt = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zM436 48h-36V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v36H112V12c0-6.6-5.4-12-12-12H60c-6.6 0-12 5.4-12 12v36H12C5.4 48 0 53.4 0 60v52c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12V60c0-6.6-5.4-12-12-12z"></path></svg>
);
const FaMapMarkerAlt = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
);

const Education = () => {
    const [activeCard, setActiveCard] = useState(0);

    const educationData = [
        {
            id: 0,
            title: "MERN Stack Development",
            institution: "Sheryians Coding School",
            period: "2025 - Present",
            status: "Currently Enrolled",
            type: "Full-Stack Development",
            icon: FaCode,
            color: "from-blue-600 to-indigo-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            description: "Mastering full-stack development with MongoDB, Express.js, React, and Node.js. Building scalable applications with modern development practices.",
            skills: ["MongoDB", "Express.js", "React", "Node.js", "Authentication", "Deployment"],
            achievements: ["Built 5+ Full-stack Projects", "REST API Development", "Database Design", "Modern UI/UX"],
        },
        {
            id: 1,
            title: "Self-Directed Learning",
            institution: "YouTube & Online Platforms",
            period: "2023 - Present",
            status: "Ongoing",
            type: "Continuous Learning",
            icon: FaYoutube,
            color: "from-red-600 to-pink-600",
            bgColor: "bg-red-50",
            textColor: "text-red-600",
            description: "Continuous upskilling through YouTube tutorials, documentation, and hands-on practice. Focus on practical implementation and problem-solving.",
            skills: ["JavaScript ES6+", "React Hooks", "Problem Solving", "Best Practices", "Git & GitHub"],
            achievements: ["50+ Hours Monthly Learning", "10+ Personal Projects", "Active on GitHub", "Tech Community Engagement"],
        },
        {
            id: 2,
            title: "B.Sc (Maths, Stats & Computer Science)",
            institution: "Bundelkhand University, Jhansi",
            period: "2021 - 2024",
            status: "Completed",
            type: "Formal Education",
            icon: FaGraduationCap,
            color: "from-purple-600 to-indigo-600",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            description: "Completed an interdisciplinary degree combining Mathematics, Statistics, and Computer Science, providing a strong analytical and logical foundation.",
            skills: ["Statistical Analysis", "Mathematical Modeling", "Programming Fundamentals", "Problem Solving", "Data Visualization"],
            achievements: ["Major project on 'Financial Habits of Students'", "Graduated with solid academic performance", "Engaged in analytical and computing coursework"],
        },
        {
            id: 3,
            title: "Master of Computer Applications (MCA)",
            institution: "Barkatullah University Institute of Technology",
            city: "Bhopal",
            period: "2023 - 2025",
            status: "Pursuing",
            type: "Education",
            icon: FaGraduationCap,
            color: "from-blue-600 to-indigo-600",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            description: "Pursuing MCA with a focus on Full Stack Development, Data Structures, and Software Engineering. Actively involved in technical events and hackathons.",
            skills: ["Frontend Development", "Backend Development", "Data Structures & Algorithms", "Project Management", "Leadership"],
            achievements: ["TNP Cell Representative – MCA Department", "Organized university-level Hackathons", "Won Trophy in a Tech Bootcamp", "Collaborated on multiple web projects"],
        },
    ];

    return (
        <motion.section 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6">
                        <FaCertificate className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Education & Professional Journey
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A comprehensive path of continuous learning, professional growth, and skill development.
                    </p>
                </motion.div>

                {/* Interactive Education Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Left Side - Navigation Cards */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="space-y-4">
                        {educationData.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => setActiveCard(index)}
                                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${activeCard === index ? `${item.bgColor} border-current ${item.textColor} shadow-lg scale-105` : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-md"}`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${activeCard === index ? "bg-white" : `bg-gradient-to-r ${item.color}`}`}>
                                            <item.icon className={`w-6 h-6 ${activeCard === index ? item.textColor : "text-white"}`} />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold text-lg ${activeCard === index ? item.textColor : "text-gray-800"}`}>{item.title}</h3>
                                            <p className={`text-sm ${activeCard === index ? item.textColor : "text-gray-600"}`}>{item.institution}</p>
                                        </div>
                                    </div>
                                    <FaChevronRight className={`w-5 h-5 transition-transform duration-300 ${activeCard === index ? `${item.textColor} rotate-90` : "text-gray-400"}`} />
                                </div>
                                <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
                                    <div className="flex items-center space-x-1">
                                        <FaCalendarAlt className="w-4 h-4" />
                                        <span>{item.period}</span>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${activeCard === index ? "bg-white" : "bg-gray-100 text-gray-800"}`}>{item.status}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Right Side - Detailed View */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCard}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {(() => {
                                    const activeItem = educationData[activeCard];
                                    const ActiveIcon = activeItem.icon;
                                    return (
                                        <>
                                            <div className={`h-2 bg-gradient-to-r ${activeItem.color}`}></div>
                                            <div className="p-8">
                                                <div className="flex items-center space-x-4 mb-6">
                                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${activeItem.color} flex items-center justify-center`}>
                                                        <ActiveIcon className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-gray-900">{activeItem.title}</h2>
                                                        <p className={`font-semibold ${activeItem.textColor}`}>{activeItem.institution}</p>
                                                        {activeItem.city && (
                                                            <p className="flex items-center text-gray-600 text-sm mt-1">
                                                                <FaMapMarkerAlt className="w-4 h-4 mr-1 text-gray-500" />
                                                                {activeItem.city}
                                                            </p>
                                                        )}
                                                        <p className="text-gray-500 text-sm">{activeItem.type}</p>
                                                    </div>
                                                </div>
                                                <p className="text-gray-700 leading-relaxed mb-8 text-lg">{activeItem.description}</p>
                                                <div className="mb-8">
                                                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Technical Skills & Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {activeItem.skills.map((skill, index) => (
                                                            <div key={index} className={`${activeItem.bgColor} ${activeItem.textColor} px-3 py-1 rounded-full text-sm font-medium`}>
                                                                {skill}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-4 text-lg">Key Achievements</h4>
                                                    <div className="space-y-3">
                                                        {activeItem.achievements.map((achievement, index) => (
                                                            <div key={index} className="flex items-start space-x-3">
                                                                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 bg-gradient-to-r ${activeItem.color}`}></div>
                                                                <span className="text-gray-700 font-medium">{achievement}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Education;

