import React from 'react';
import { DeliveryIcon, WarehouseIcon, ComputerIcon, UsersIcon, MobileIcon } from '../assets/icons.jsx';

const Dashboard = () => {
  const cards = [
    { title: 'Teslimat', description: '', url: 'http://onlineislemler.b2cargo.com:81/panel/home', icon: DeliveryIcon },
    { title: 'Depo', description: '', url: 'http://onlineislemler.b2cargo.com:81/panel/whouse', icon: WarehouseIcon },
    { title: 'İnteraktif Depo', description: '', url: 'https://b2interactive.vercel.app/', icon: ComputerIcon },
    { title: 'Personel', description: '', url: 'https://personel.b2cargo.com/', icon: UsersIcon },
    { title: 'Mobil', description: '', url: 'https://mobil.b2cargo.com/login', icon: MobileIcon },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-6 lg:p-10">
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 sm:mb-8 lg:mb-12 text-center leading-relaxed tracking-wide text-orange-500"
        style={{
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.7)',
        }}
      >
        Hoşgeldiniz!
        <br />
        <span
          className="text-white"
        >
          Hangi modülle devam etmek istersiniz?
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 w-full max-w-7xl">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            className="group p-4 sm:p-5 lg:p-6 bg-[#070F2A] hover:bg-opacity-60 bg-opacity-30 rounded-lg border-2 border-transparent hover:border-orange-600 transition-all duration-300 flex flex-col items-center justify-between transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col items-center">
              <card.icon
                className="w-10 h-10 sm:w-12 sm:h-12 group-hover:text-orange-500 text-white transition-colors duration-300"
                style={{
                  filter: 'drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.6))', 
                }}
              />
              <h2
                className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors duration-300 text-center"
                style={{
                  textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)',
                }}
              >
                {card.title}
              </h2>
            </div>
            <div className="mt-2 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
              <span
                className="mr-2 font-medium"
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
                }}
              >
                Giriş
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.6))', 
                }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
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
