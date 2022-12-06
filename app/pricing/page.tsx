import BottomHero from "./BottomHero";
import Hero from "./Hero";
import PriceComparison from "./PriceComparison";
import PricingSection from "./PricingSection";

const page = () => {
  return <>
          <Hero />
          <PricingSection />
          <PriceComparison />
          <BottomHero />
         </>;
};
export default page;
