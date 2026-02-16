import ContactSection from "@/components/Home/contactSection";
import { AmenitiesSection } from "@/components/our-projects/mangalya-ophira/amenitiesSection";
import FloorPlanSection from "@/components/our-projects/mangalya-ophira/floorPlanSection";
import HeroSection from "@/components/our-projects/mangalya-ophira/hero";
import { MangalyaSection } from "@/components/our-projects/mangalya-ophira/mangalyaAnant";

function page() {
  return (
    <div>
      <HeroSection />
      <MangalyaSection />
      <FloorPlanSection />
      <AmenitiesSection />
      <ContactSection />
    </div>
  );
}

export default page;
