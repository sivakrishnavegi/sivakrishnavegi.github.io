import HeroBanner from "@/core/components/HeroBanner";
import { FloatingNav } from "@/core/components/ui/FloatingNavbar";
import HomePageLayout from "@/core/layout/homepage";
import { navItems } from "@/data";
import React from "react";

const HomePageContainer = () => {
  return (
    <div>
      <HomePageLayout>
        <div className="relative flex justify-center items-center bg-black-100 flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems} />
            <HeroBanner />
          </div>
        </div>
      </HomePageLayout>
    </div>
  );
};

export default HomePageContainer;
