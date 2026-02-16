import FacilitiesEverydayLifeSection from "@/components/blogs/mangalya-novena-greens/facilitiesEverydayLifeSection";
import { NovenaHomeBlog } from "@/components/blogs/mangalya-novena-greens/hero";
import LocationSeamlessLiving from "@/components/blogs/mangalya-novena-greens/locationSeamlessLiving";
import MangalyaGroupAdvantage from "@/components/blogs/mangalya-novena-greens/mangalyaGroupAdvantage";
import ModernDesignNatureSection from "@/components/blogs/mangalya-novena-greens/modernDesignNatureSection";
import ReraFinanceFamilySection from "@/components/blogs/mangalya-novena-greens/reraFinanceFamilySection";

function page() {
  return (
    <div>
      <NovenaHomeBlog />
      <ModernDesignNatureSection />
      <FacilitiesEverydayLifeSection />
      <LocationSeamlessLiving />
      <MangalyaGroupAdvantage />
      <ReraFinanceFamilySection />
    </div>
  );
}

export default page;
