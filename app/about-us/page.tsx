import AboutSection from "@/components/about-us/aboutSection";
import { HeroSection } from "@/components/about-us/hero";
import MangalyaWay from "@/components/about-us/mangalyaWay";

function page() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MangalyaWay />
    </div>
  );
}

export default page;
