import React from "react";
import HeroSection from "@/components/HeroSection";
import WarriorsSection from "@/components/WarriorsSection";
import UnitySection from "@/components/UnitySection";
import AchievementsSection from "@/components/AchievementsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WarriorsSection />
      <UnitySection />
      <AchievementsSection />

      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-lg font-semibold">
          С Днем России! С праздником, который объединяет нас и делает нас
          сильнее! 🇷🇺
        </p>
        <p className="text-sm text-gray-300 mt-2">Ян Грибовский</p>
      </footer>
    </div>
  );
};

export default Index;
