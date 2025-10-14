import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";

// --- SVG Icons ---
// Replaced react-icons with inline SVGs for reliability.
const FaEnvelope = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>;
const FaPhoneAlt = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>;
const FaMapMarkerAlt = ({ className }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>;

const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const formHandler = (data) => {
        if (!window.emailjs) {
            toast.error("❌ Email service is not ready. Please wait a moment and try again.", {
                position: "top-center",
                autoClose: 4000,
                theme: "dark",
            });
            return;
        }

        const serviceID = "service_njy5ycl"; // Replace with your EmailJS service ID
        const templateID = "template_91thf7h"; // Replace with your EmailJS template ID
        const publicKey = "GL--TgeNSruF5GBLt"; // Replace with your EmailJS public key

        window.emailjs.send(serviceID, templateID, data, publicKey)
            .then(() => {
                toast.success(`✅ Thanks, ${data.name}! Your message has been sent successfully.`, {
                    position: "top-center",
                    autoClose: 4000,
                    theme: "dark",
                });
                reset();
            })
            .catch(() => {
                toast.error("❌ Oops! Something went wrong. Please try again.", {
                    position: "top-center",
                    autoClose: 4000,
                    theme: "dark",
                });
            });
    };

    const ToastifyStyles = () => (
      <style>{`
        .Toastify__toast-container{z-index:9999;position:fixed;padding:4px;width:320px;box-sizing:border-box;color:#fff}.Toastify__toast-container--top-left{top:1em;left:1em}.Toastify__toast-container--top-center{top:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--top-right{top:1em;right:1em}.Toastify__toast-container--bottom-left{bottom:1em;left:1em}.Toastify__toast-container--bottom-center{bottom:1em;left:50%;transform:translateX(-50%)}.Toastify__toast-container--bottom-right{bottom:1em;right:1em}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;padding:0;left:0;margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:0;transform:translateX(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:0;transform:translateX(0)}.Toastify__toast-container--rtl{right:0;left:auto}}.Toastify__toast{position:relative;min-height:64px;box-sizing:border-box;margin-bottom:1rem;padding:8px;border-radius:4px;box-shadow:0 1px 10px 0 rgba(0,0,0,.1),0 2px 15px 0 rgba(0,0,0,.05);display:flex;justify-content:space-between;max-height:800px;overflow:hidden;font-family:sans-serif;cursor:pointer;direction:ltr}.Toastify__toast--rtl{direction:rtl}.Toastify__toast-body{margin:auto 0;flex:1 1 auto;padding:6px}.Toastify__toast-body>div:last-child{word-break:break-word}.Toastify__toast-icon{margin-inline-end:10px;width:20px;flex-shrink:0;display:flex;align-items:center}.Toastify--animate{animation-fill-mode:both;animation-duration:.7s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.7s}@media only screen and (max-width: 480px){.Toastify__toast{margin-bottom:0;border-radius:0}}.Toastify__toast-theme--dark{background:#121212;color:#fff}.Toastify__toast-theme--light{background:#fff;color:#121212}.Toastify__toast-theme--colored.Toastify__toast--default{background:#fff;color:#000}.Toastify__toast-theme--colored.Toastify__toast--info{background:#3498db}.Toastify__toast-theme--colored.Toastify__toast--success{background:#07bc0c}.Toastify__toast-theme--colored.Toastify__toast--warning{background:#f1c40f}.Toastify__toast-theme--colored.Toastify__toast--error{background:#e74c3c}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:5px;z-index:9999;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:auto;transform-origin:right}.Toastify__progress-bar-theme--light{background:#757575}.Toastify__progress-bar-theme--dark{background:#bbbbbb}.Toastify__progress-bar--default{background:linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55)}.Toastify__progress-bar--info{background:#3498db}.Toastify__progress-bar--success{background:#07bc0c}.Toastify__progress-bar--warning{background:#f1c40f}.Toastify__progress-bar--error{background:#e74c3c}.Toastify__close-button{color:#fff;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;align-self:flex-start}.Toastify__close-button--default{color:#000;opacity:.3}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutDown}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutUp}@keyframes Toastify__bounceInRight{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translate3d(0,0,0)}}@keyframes Toastify__bounceInLeft{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translate3d(0,0,0)}}@keyframes Toastify__bounceInUp{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}@keyframes Toastify__bounceInDown{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes Toastify__bounceOutUp{20%{opacity:1;transform:translate3d(0,-10px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes Toastify__bounceOutDown{20%{opacity:1;transform:translate3d(0,10px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__flipIn{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutDown}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutUp}@keyframes Toastify__slideInRight{from{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes Toastify__slideInLeft{from{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes Toastify__slideInUp{from{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes Toastify__slideInDown{from{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,0,0)}}@keyframes Toastify__slideOutRight{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(110%,0,0)}}@keyframes Toastify__slideOutLeft{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-110%,0,0)}}@keyframes Toastify__slideOutUp{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,110%,0)}}@keyframes Toastify__slideOutDown{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-110%,0)}}
      `}</style>
    );

    return (
        <React.Fragment>
            <ToastifyStyles />
            <section className="relative min-h-screen py-20 px-4 bg-slate-900 flex items-center justify-center overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 -z-10">
                    <motion.div
                        animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/50 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-900/50 rounded-full blur-3xl"
                    />
                </div>

                <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 relative z-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col justify-center space-y-8 text-white"
                    >
                        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Let's Connect
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            I’m actively seeking new opportunities and collaborations. Whether you have a project in mind or just want to say hello, my inbox is always open.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <FaEnvelope className="text-blue-400 text-xl" />, text: "parthgupta.it@gmail.com" },
                                { icon: <FaPhoneAlt className="text-green-400 text-xl" />, text: "+91 9519200791" },
                                { icon: <FaMapMarkerAlt className="text-red-400 text-xl" />, text: "Bhopal, India" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="p-3 bg-slate-800/70 rounded-full border border-slate-700 group-hover:bg-blue-900/50 transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-slate-700"
                    >
                        <form onSubmit={handleSubmit(formHandler)} className="space-y-6">
                            {[
                                { name: "name", type: "text", placeholder: "Your Name", required: "Name is required" },
                                { name: "email", type: "email", placeholder: "Your Email", required: "Email is required" },
                                { name: "mobileNumber", type: "text", placeholder: "Your Mobile Number", required: "Mobile number is required", pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit mobile number" } },
                                { name: "message", type: "textarea", placeholder: "Your Message", required: "Message is required" },
                            ].map((field, index) => (
                                <motion.div
                                    key={field.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                    className="relative"
                                >
                                    {field.type === "textarea" ? (
                                        <textarea
                                            {...register(field.name, { required: field.required })}
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border-2 border-slate-600 text-white focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-all duration-300 resize-none h-32"
                                        />
                                    ) : (
                                        <input
                                            {...register(field.name, { required: field.required, pattern: field.pattern })}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border-2 border-slate-600 text-white focus:outline-none focus:border-blue-500 focus:bg-slate-700 transition-all duration-300"
                                        />
                                    )}
                                    {errors[field.name] && <p className="text-red-400 text-sm mt-1">{errors[field.name].message}</p>}
                                </motion.div>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/20"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
                <ToastContainer />
            </section>
        </React.Fragment>
    );
};

export default Contact;

