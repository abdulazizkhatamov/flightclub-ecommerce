import React from "react";
import HeroSection from "../../components/ui/sections/HeroSection.tsx";
import PromotedProductSection from "../../components/ui/sections/PromotedProductSection.tsx";
import NavigationSection from "../../components/ui/sections/NavigationSection.tsx";

const HomePage: React.FC = () => {
  return (
    <main className={"bg-[#F9F9F9]"}>
      <HeroSection />
      <PromotedProductSection title={"new releases"} />
      <PromotedProductSection title={"staff picks"} />
      <PromotedProductSection title={"top 20 picks"} />
      <PromotedProductSection title={"hoops eras"} />
      <NavigationSection title={"sneakers"} />
      <NavigationSection title={"brands"} />
    </main>
  );
};

export default HomePage;
