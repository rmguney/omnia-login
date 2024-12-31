import React from 'react';

const Dashboard = () => {
  const cards = [
    { title: 'Teslimat', description: '', url: 'http://onlineislemler.b2cargo.com:81/panel/home', icon: '🚚' },
    { title: 'Depo', description: '', url: 'http://onlineislemler.b2cargo.com:81/panel/whouse', icon: '📦' },
    { title: 'İnteraktif Depo', description: '', url: 'https://b2interactive.vercel.app/', icon: '🖥️' },
    { title: 'Personel', description: '', url: 'https://personel.b2cargo.com/', icon: '👥' },
    { title: 'Mobil', description: '', url: 'https://mobil.b2cargo.com/login', icon: '📱' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold  mb-8 text-center animate-fade-in-down">
      <span className="text-orange-600">Hoşgeldiniz! Hangi modülle devam etmek istersiniz?</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 w-full max-w-6xl">
        {cards.map((card, index) => (
          <a 
            key={index} 
            href={card.url}
            className="group p-6 bg-[#070F2A] bg-opacity-70 hover:bg-opacity-90 rounded-sm border-2 border-transparent hover:border-orange-600 transition duration-300 flex flex-col justify-between transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms`, maxWidth: '' }}
          >
            <div>
              <div className="text-4xl mb-4">{card.icon}</div>
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors duration-300">{card.title}</h2>
{/*               <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{card.description}</p>
 */}            </div>
            <div className="mt-4 flex items-center text-orange-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <span className="mr-2">Giriş</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </a>
        ))}
      </div>
      <a 
        href="/"
        className="mt-8 px-6 py-3 lg:w-1/4 text-center justify-center bg-[#070F2A] bg-opacity-70 hover:bg-opacity-100 hover:bg-orange-600 hover:scale-110 text-white rounded-sm flex items-center transition duration-300 transform  border border-orange-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
        Çıkış
      </a>
    </div>
  );
};

export default Dashboard;

