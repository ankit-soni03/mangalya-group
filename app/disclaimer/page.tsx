import DisclaimerSection from "@/components/disclaimer/hero";
import LuxuryDeveloperEnergy from "@/components/disclaimer/luxuryDeveloperEnergy";
import StatutoryDisclosure from "@/components/disclaimer/statutoryDisclosure";
import WarrantyDisclaimerSection from "@/components/disclaimer/warrantyDisclaimerSection";
function page() {
  return (
    <div>
      <DisclaimerSection />
      <StatutoryDisclosure />
      <LuxuryDeveloperEnergy />
      <WarrantyDisclaimerSection />
    </div>
  );
}

export default page;
