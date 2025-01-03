import React from 'react';
import { DeliveryIcon, WarehouseIcon, ComputerIcon, UsersIcon, BoxIcon } from '../assets/icons.jsx';

const Dashboard = () => {
  const cards = [
    { title: 'Teslimat', description: '', url: 'http://onlineislemler.b2cargo.com:81/panel/home', icon: BoxIcon },
    { title: 'Depo', description: '', url: 'http://onlineislemler.b2cargo.com:81/panel/whouse', icon: WarehouseIcon },
    { title: 'Personel', description: '', url: 'http://onlineislemler.b2cargo.com:90/staffhome', icon: UsersIcon },
    { title: 'Kargo Dağıtım', description: '', url: 'https://mobil.b2cargo.com/login', icon: DeliveryIcon },
    { title: 'İnteraktif Depo', description: '', url: 'https://b2interactive.vercel.app/', icon: ComputerIcon },

  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-6 lg:p-10">
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 lg:mb-12 text-center leading-relaxed tracking-wide text-orange-500"
        style={{
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)',
        }}
      >
        Hoşgeldiniz {/* Kullanıcı adı*/}!
        <br />
        <span
          className="text-white"
        >
          Hangi modülle devam etmek istersiniz?
        </span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 w-full max-w-7xl">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            className="group p-4 lg:p-6 bg-[#070F2A] hover:bg-opacity-60 bg-opacity-30 rounded-lg border-2 border-transparent hover:border-orange-600 transition-all duration-300 flex flex-col items-center justify-between transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center">
              <card.icon
                className="w-12 h-12 group-hover:text-orange-500 text-white transition-colors duration-300"
                style={{
                  filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.6))', 
                }}
              />
              <span
                className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors duration-300 text-center"
                style={{
                  textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)',
                }}
              >
                {card.title}
              </span>
            </div>
          </a>
        ))}
      </div>
      <a
        href="/"
        className="group mt-8 sm:mt-12 px-6 sm:px-8 py-3 w-full sm:w-64 flex items-center justify-center transition duration-300 transform shadow-lg hover:shadow-xl hover:bg-orange-600 border border-orange-600 text-white rounded-md bg-[#070F2A] hover:bg-opacity-100 bg-opacity-30 font-semibold"
      >
        <span className="mr-2 font-medium"
                style={{
                  textShadow: '3px 3px 5px rgba(0, 0, 0, 0.7)',
                }}>Çıkış</span>
      </a>
    </div>
  );
};

export default Dashboard;
