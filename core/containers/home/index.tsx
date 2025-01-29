import About from "@/core/components/About";
import AboutSection from "@/core/components/AboutSection";
import ContactUs from "@/core/components/Contactus";
import HeroBanner from "@/core/components/HeroBanner";
import MyProjects from "@/core/components/MyProjects";
import MyTechSTack from "@/core/components/MyTechStack";
import Testimonials from "@/core/components/Testmonials";
import { FloatingNav } from "@/core/components/ui/FloatingNavbar";
import HomePageLayout from "@/core/layout/homepage";
import { navItems } from "@/data";

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
          <div >
            <About />
            <AboutSection />
            <MyTechSTack />
            <MyProjects />
            <Testimonials />
            <ContactUs />
          </div>
      </HomePageLayout>
    </div>
  );
};

export default HomePageContainer;
