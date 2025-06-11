import React from "react";
import Icon from "@/components/ui/icon";

const UnitySection = () => {
  const territories = [
    { name: "ЛНР", icon: "🏛️" },
    { name: "ДНР", icon: "🏛️" },
    { name: "Запорожская область", icon: "🌾" },
    { name: "Херсонская область", icon: "🌊" },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Icon name="Users" size={48} className="text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">
              Единство Территорий
            </h2>
          </div>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Хочу поздравить жителей новых территорий! Сегодня мы отмечаем
            праздник в непростое время, когда наша страна сталкивается с новыми
            вызовами и испытаниями. Но именно в такие моменты проявляется
            истинный характер россиян — стойкость, мужество и непоколебимая вера
            в лучшее будущее.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {territories.map((territory, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{territory.icon}</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {territory.name}
              </h3>
              <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 mb-8">
          <img
            src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=2070"
            alt="Карта России"
            className="rounded-lg shadow-lg w-full max-w-4xl mx-auto h-64 object-cover"
          />
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <Icon name="Map" size={20} className="text-blue-600" />
            <span className="text-gray-800 font-semibold">
              Одна страна — одна судьба
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitySection;
