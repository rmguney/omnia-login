import React from 'react';
import { Mail, Phone } from 'lucide-react';
import b2Logo from '../assets/b2logo.png';
import coolPartner from '../assets/cool-partner.svg';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-[25%] p-8 flex flex-col bg-[#070F2A] bg-opacity-80 transition duration-300 shadow-lg">
      <div className="max-w-md mx-auto w-full flex flex-col items-center justify-center flex-grow gap-4 lg:gap-10">
        {/* Logo */}
        <a className="lg:mb-8" href="https://www.b2cargo.com/">
          <img src={b2Logo} alt="B2 CARGO" className="w-full mx-auto max-w-[90%]" />
        </a>
        
        {/* Continue Button */}
        <div className="flex items-center hover:text-orange-600 text-white cursor-pointer transition duration-300">
          <a href="https://www.b2cargo.com/" className="text-xl font-bold">
            Kurumsal Siteye Devam Edin
          </a>
          <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto hidden lg:block">
        <div className="flex items-center max-w-md mx-auto justify-between">
          <img src={coolPartner} alt="Cool Partner" className="w-28 h-28" />
          <div className="text-white space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+90 212 640 70 26</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>info@b2cargo.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;