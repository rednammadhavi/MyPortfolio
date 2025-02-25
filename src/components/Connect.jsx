import React from "react";
import { Mail, Smartphone, MapPin } from "lucide-react";

const Connect = () => {
  return (
    <div className="bg-white text-black w-full flex flex-col items-center justify-center  p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-900">
        Connect with Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-center w-72 flex flex-col items-start">
          <Mail size={30} className="text-pink-900 mb-3" />
          <h2 className="text-xl font-semibold text-pink-900 mb-2">Email</h2>
          <a
            href="mailto:rednammadhavi@gmail.com"
            className="text-lg text-black font-medium hover:text-pink-800 transition-all duration-200"
          >
            rednammadhavi@gmail.com
          </a>
        </div>

        <div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-center w-72 flex flex-col items-start">
          <Smartphone size={30} className="text-pink-900 mb-3" />
          <h2 className="text-xl font-semibold text-pink-900 mb-2">Phone</h2>
          <a
            href="tel:+919100736575"
            className="text-lg text-black font-medium hover:text-pink-800 transition-all duration-200"
          >
            +91 9100736575
          </a>
        </div>

        <div className="bg-gray-100 p-6 shadow-xl rounded-2xl text-center w-72 flex flex-col items-start">
          <MapPin size={30} className="text-pink-900 mb-3" />
          <h2 className="text-xl font-semibold text-pink-900 mb-2">Location</h2>
          <a
            className="text-lg text-black font-medium hover:text-pink-800 transition-all duration-200 cursor-pointer"
          >
            Kakinada, India
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
