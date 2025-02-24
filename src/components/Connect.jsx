import React from "react";
import { Mail, Phone } from "lucide-react";

const Connect = () => {
  return (
    <div className="bg-white text-black w-full flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-semibold text-center mb-6">Connect with Me</h1>


      <div className=" bg-gray-100 p-6 shadow-xl rounded-2xl text-center max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-pink-900 mb-5">Contact Info</h2>

        <a
          href="mailto:rednammadhavi@gmail.com"
          className="flex items-center justify-center gap-3 text-lg text-black font-medium hover:text-pink-800 transition-all duration-200 mb-4"
        >
          <Mail size={24} className="text-pink-900" />
          rednammadhavi@gmail.com
        </a>

        <a
          href="tel:+91 9100736575"
          className="flex items-center justify-center gap-3 text-lg text-black font-medium hover:text-pink-800 transition-all duration-200"
        >
          <Phone size={24} className="text-pink-900" />
          +91 9100736575
        </a>
      </div>
    </div>
  );
};

export default Connect;
