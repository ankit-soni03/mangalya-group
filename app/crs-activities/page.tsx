import { BottomImg } from "@/components/crs-activities/bottomImg";
import CSRInitiatives from "@/components/crs-activities/crsInitiatives";
import CSRSection from "@/components/crs-activities/crsSection";
import { CRSHeroSection } from "@/components/crs-activities/hero";

function page() {
  return (
    <div>
      <CRSHeroSection />
      <CSRSection />
      <CSRInitiatives />
      <BottomImg />
    </div>
  );
}

export default page;
