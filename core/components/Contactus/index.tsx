import React from "react";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="getInTouch" className="py-3 pb-10 px-6 sm:px-10 md:px-20 lg:px-40 mx-auto text-white bg-[#010319] ">
      <h2 className="text-3xl font-bold text-center mb-4">Get in Touch 📞</h2>
      <p className="text-sm md:text-lg font-light mb-10 text-zinc-400 text-center">
        Feel free to reach out to me through any of the following channels. I would love to connect with you!
      </p>
      <div className="flex justify-center space-x-10">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/vsk-dev/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-400 transition duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg">
            <FaLinkedin size={30} />
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/+917696562188" // Replace with your WhatsApp number (e.g., wa.me/919876543210)
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-400 transition duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-green-500 text-white rounded-full shadow-lg">
            <FaWhatsapp size={30} />
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:sivakrishnavegi@yahoo.com" // Replace with your email address
          className="text-red-600 hover:text-red-400 transition duration-300"
        >
          <div className="w-16 h-16 flex items-center justify-center bg-red-500 text-white rounded-full shadow-lg">
            <FaEnvelope size={30} />
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
