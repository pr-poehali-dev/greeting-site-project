import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526397751294-331021109fbd?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            С Днём России! 🇷🇺
          </h1>
          <div className="w-32 h-1 bg-red-500 mx-auto mb-8"></div>
        </div>

        <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light animate-fade-in">
          С великим праздником! Этот день — символ единства, силы и
          несокрушимого духа нашего народа. Он напоминает нам о богатой истории,
          культурном наследии и великих достижениях России.
        </p>

        <div className="mt-12 flex justify-center items-center space-x-8">
          <div className="w-4 h-20 bg-white"></div>
          <div className="w-4 h-20 bg-blue-500"></div>
          <div className="w-4 h-20 bg-red-500"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
