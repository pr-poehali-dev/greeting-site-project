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

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2070"
              alt="Военный мемориал"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarriorsSection;
