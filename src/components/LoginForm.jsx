import React from 'react';
import { useNavigate } from 'react-router-dom';
import omniaLogo from '../assets/omnia.png';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Giriş yapıldı");
    navigate('/dashboard');
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen pt-12">
      <div className="w-full max-w-md px-12 relative">
        {/* Mascot */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 translate-y-1/4">
          <div className="w-40 h-40 relative">
            <img src={omniaLogo} alt="Omnia Mascot" className="absolute -bottom-4 left-1/2 transform -translate-x-1/2" />
          </div>
        </div>

        {/* Login Form */}
        <div className="mt-24 text-center bg-[#070F2A] bg-opacity-80 shadow-lg px-6 rounded-sm">
          <h1 className="text-orange-600 text-4xl font-bold m-2 pt-8">OMNIA</h1>
          <p className="text-white mb-4">Online İşlemler</p>

          <form className="space-y-4">
            <div className="space-y-1 text-left">
              <label className="text-white text-sm">Kullanıcı Adı</label>
              <input 
                type="email" 
                placeholder="Kullanıcı adınızı yazın..." 
                className="w-full rounded-sm p-2 bg-orange-600 bg-opacity-0 border border-gray-500 hover:border-orange-600 transition duration-300 text-white"
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-white text-sm">Şifre</label>
              <input 
                type="password" 
                placeholder="****************" 
                className="w-full p-2 rounded-sm bg-orange-600 bg-opacity-0 border border-gray-500 hover:border-orange-600 transition duration-300 text-white"
              />
            </div>

            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="rounded-sm border-white text-orange-600 focus:ring-orange-600"
              />
              <label htmlFor="remember" className="ml-2 text-white text-sm hover:text-orange-600 transition duration-300">
                Beni Hatırla
              </label>
            </div>

            <button 
              type="button" 
              className="w-full bg-none hover:bg-orange-600 border border-orange-600 text-white py-2 rounded-sm transition-colors duration-300"
              onClick={handleLogin}
            >
              Giriş
            </button>

            <div className="text-center pb-4">
              <a href="#" className="text-white text-sm hover:text-orange-600 transition duration-300">
                Şifremi Unuttum
              </a>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-2 text-center text-xs text-orange-600 font-bold">
          Powered by Navis Kurumsal, brand of B2Group<br />
          All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default LoginForm;