import React from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const formHandler = (data) => {
      const existingData =
         JSON.parse(localStorage.getItem("contactFormData")) || [];
      const updatedData = [...existingData, data];
      localStorage.setItem("contactFormData", JSON.stringify(updatedData));
      reset();
   };

   return (
      <section className="min-h-screen py-16 px-4 bg-gray-900 flex items-center justify-center">
         <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="flex flex-col justify-center space-y-6 text-white">
               <h2 className="text-4xl font-bold">Get in Touch</h2>
               <p className="text-gray-300">
                  I’m open to full-time opportunities, collaborations, and interesting
                  projects. Feel free to drop a message.
               </p>

               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <FaEnvelope className="text-blue-500 text-xl" />
                     <span>deepakthakur17756@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <FaPhoneAlt className="text-green-500 text-xl" />
                     <span>+91 8375919101</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <FaMapMarkerAlt className="text-red-500 text-xl" />
                     <span>New Delhi</span>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
               <form onSubmit={handleSubmit(formHandler)} className="space-y-5">
                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">Full Name</label>
                     <input
                        {...register("name", { required: "Name is Required" })}
                        type="text"
                        placeholder="Enter your name"
                        className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                     )}
                  </div>

                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">Email</label>
                     <input
                        {...register("email", { required: "Email is Required" })}
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                     )}
                  </div>

                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">Mobile Number</label>
                     <input
                        {...register("mobileNumber", {
                           required: "Mobile number is required",
                           pattern: {
                              value: /^[0-9]{10}$/,
                              message: "Enter a valid 10-digit mobile number",
                           },
                        })}
                        type="text"
                        placeholder="Enter Your Mobile"
                        className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.mobileNumber && (
                        <p className="text-red-500 text-sm">
                           {errors.mobileNumber.message}
                        </p>
                     )}
                  </div>

                  <div className="flex flex-col">
                     <label className="mb-1 text-gray-300 font-medium">City</label>
                     <input
                        {...register("city", { required: "City is Required" })}
                        type="text"
                        placeholder="Enter your city"
                        className="px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 transition"
                     />
                     {errors.city && (
                        <p className="text-red-500 text-sm">{errors.city.message}</p>
                     )}
                  </div>

                  <button
                     type="submit"
                     className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
