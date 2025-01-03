import React from 'react';
import { Mail, Phone, CreditCard, ArrowLeft } from 'lucide-react';
import b2Logo from '../assets/b2logo.png';
import coolPartner from '../assets/cool-partner.png';
import appStoreBadge from '../assets/apple.webp';
import playStoreBadge from '../assets/google.png';

const Sidebar = () => {
  return (
    <div className="w-full lg:w-[18%] p-4 flex flex-col bg-[#070F2A] bg-opacity-60 transition duration-300 shadow-lg">
      <div className="max-w-md mx-auto w-full flex flex-col items-center justify-center flex-grow gap-3">
        {/* Logo */}
        <a href="https://www.b2cargo.com/" className="lg:mb-8">
          <img src={b2Logo} alt="B2 CARGO" className="w-full mx-auto max-w-[90%]" />
        </a>

        {/* Continue Button */}
        <a 
          href="https://www.b2cargo.com/" 
          className="h-12 w-full text-sm bg-[#070F2A] bg-opacity-40 hover:bg-opacity-70 hover:text-orange-600 border border-transparent hover:border-orange-600 text-white py-2 rounded-lg transition-colors duration-300 text-center shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <ArrowLeft className="w-6 h-6 mr-2" />
          Kurumsal Site
        </a>

        {/* Online Ödeme */}
        <a 
          href="https://odeme.b2cargo.com/" 
          className="h-12 w-full text-sm bg-[#070F2A] bg-opacity-40 hover:bg-opacity-70 hover:text-orange-600 border border-transparent hover:border-orange-600 text-white py-2 rounded-lg transition-colors duration-300 text-center shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <CreditCard className="w-6 h-6 mr-2" />
          Online Ödeme
        </a>
        
        {/* Download App Section */}
        <div className="w-full space-y-1 lg:mt-5">
          <p className="text-white text-center text-sm lg:mt-4" style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)'}}>
            B2Cargo+ Mobil Uygulamamızı İndirin:
          </p>
          <div className="flex flex-row gap-2">
            <a 
              href="https://apps.apple.com/tr/app/b2cargo/id1564938924" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center hover:shadow-lg border border-transparent hover:border-orange-600 rounded-xl transition duration-300"
            >
              <img
                src={appStoreBadge}
                alt="App Store'dan İndir"
                className="rounded-xl shadow-sm"
              />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.b2cargoplus" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 flex items-center justify-center hover:shadow-lg border border-transparent hover:border-orange-600 rounded-xl transition duration-300"
            >
              <img
                src={playStoreBadge}
                alt="Google Play'den İndir"
                className="rounded-xl shadow-sm"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4">
        <div className="flex flex-col items-center max-w-md mx-auto justify-between gap-4">
          <img src={coolPartner} alt="Cool Partner" className="w-28 h-28" />
          <div className="text-white text-xs space-y-2 lg:mb-6">
            <div className="flex items-center justify-center gap-2 hover:text-orange-600 transition duration-300">
              <a href="https://www.b2cargo.com/iletisim">Şikayet, Öneri ve Yardım</a>
            </div>
            <div className="flex items-center gap-2 hover:text-orange-600 transition duration-300">
              <a href="mailto:info@b2cargo.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@b2cargo.com
              </a>
            </div>
            <div className="flex items-center gap-2 hover:text-orange-600 transition duration-300">
              <a href="tel:+902126407026" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +90 212 640 70 26
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
