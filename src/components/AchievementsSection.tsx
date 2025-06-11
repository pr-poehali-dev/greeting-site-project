import React from "react";
import Icon from "@/components/ui/icon";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: "Rocket",
      title: "Космические достижения",
      desc: "Первые в космосе",
    },
    {
      icon: "Book",
      title: "Культурное наследие",
      desc: "Великая литература и искусство",
    },
    {
      icon: "Zap",
      title: "Научные открытия",
      desc: "Прорывы в науке и технологиях",
    },
    {
      icon: "Globe",
      title: "Географическое величие",
      desc: "Самая большая страна мира",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Великие Достижения России
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Сердечно поздравляю всех, кто своим трудом, талантом и преданностью
            вносит вклад в развитие и процветание России.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform"
            >
              <div className="bg-gradient-to-br from-blue-500 to-red-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow">
                <Icon
                  name={achievement.icon}
                  size={32}
                  className="text-white"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-600 text-sm">{achievement.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-lg p-8 text-white text-center">
          <Icon
            name="Star"
            size={48}
            className="mx-auto mb-4 text-yellow-300"
          />
          <h3 className="text-2xl font-bold mb-4">Светлое Будущее</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Пусть этот праздник станет символом новых свершений и побед,
            вдохновит нас на созидательный труд и укрепит нашу веру в светлое
            будущее России. Желаю всем крепкого здоровья, благополучия, мира и
            согласия в каждом доме!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
