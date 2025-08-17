import React, { } from "react";
import { useForm } from "react-hook-form";


const Contact = () => {

   const { register, handleSubmit, reset, formState: { errors }, } = useForm()

   const formHandler = (data) => {
       const existingData = JSON.parse(localStorage.getItem("contactFormData")) || [];

      const updatedData = [...existingData, data]

      localStorage.setItem("contactFormData", JSON.stringify(updatedData))
      reset()
   }

   return (
      <section className="min-h-screen bg-gray-900 flex items-center justify-center py-10 px-4">
         <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">

            <h2 className="text-3xl font-bold text-white text-center mb-8">
               Contact Me

            </h2>
            <form onSubmit={handleSubmit(formHandler)} className="space-y-6">

               <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  <input {...register("name", { required: "Name is Required" })}
                     type="text"
                     placeholder="Enter your name"
                     className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}
               </div>

               {/* Email */}
               <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input {...register("email", { required: "Email is Required" })}
                     type="email"
                     placeholder="Enter your email"
                     className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
               </div>

               {/* Contact Number */}
               <div className="mb-4">
                  <label className="block mb-1 font-medium text-gray-300">
                     Mobile Number
                  </label>
                  <input
                     type="text"
                     placeholder="Enter Your Mobile"
                     {...register("mobileNumber", {
                        required: "Mobile number is required",
                        pattern: {
                           value: /^[0-9]{10}$/,
                           message: "Enter a valid 10-digit mobile number",
                        },
                     })}
                     className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.mobileNumber && (
                     <p className="text-red-500 text-sm">
                        {errors.mobileNumber.message}
                     </p>
                  )}
               </div>

               {/* City */}
               <div>
                  <label className="block text-gray-300 mb-2">City</label>
                  <input {...register("city", { required: "City is Required" })}
                     type="text"
                     placeholder="Enter your city"
                     className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.city && (<p className="text-red-500 text-sm">{errors.city.message}</p>)}
               </div>

               {/* Submit Button */}
               <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300"
               >
                  Submit
               </button>
            </form>
         </div>
      </section>
   );
};

export default Contact;
