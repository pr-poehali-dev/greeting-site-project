import React from "react";
import Icon from "@/components/ui/icon";

const WarriorsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Icon name="Shield" size={48} className="text-red-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-800">
              Благодарность Защитникам
            </h2>
          </div>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Отдельная благодарность и низкий поклон нашим воинам. Особая
              благодарность тем, кто сейчас находится на передовой, защищая наши
              рубежи и обеспечивая мир и безопасность.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ваша отвага и самоотверженность — пример для подражания и источник
              нашей общей силы. Мы гордимся нашими предками, которые отстояли
              свободу и независимость Родины.
            </p>

            <div className="flex items-center space-x-4 text-red-600 font-semibold">
              <Icon name="Heart" size={24} />
              <span>С глубоким уважением и благодарностью</span>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-6xl mb-4">🎖️</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Герои России
              </h3>
              <p className="text-gray-600">
                Ваше мужество и преданность — основа нашей силы и единства
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarriorsSection;
