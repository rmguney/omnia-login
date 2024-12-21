import React from 'react';
import { Mail, Phone } from 'lucide-react';
import coolPartner from '../assets/cool-partner.svg';

const MobileFooter = () => {
  return (
    <div className="mt-auto lg:hidden bg-[#070F2A] bg-opacity-50 p-6">
      <div className="flex items-center gap-8 max-w-md mx-auto">
        <img src={coolPartner} alt="Cool Partner" className="w-24 h-24" />
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
  );
};

export default MobileFooter;