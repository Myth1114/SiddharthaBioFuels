import HeroSection from "../../components/product/HeroSection";
import TransformationStory from "../../components/process/TransformationStory";
import IndustrySelector from "../../components/industries/IndustrySelector/IndustrySelector";
import ProductPreview from "../../components/product/ProductPreview";

function Home() {
  return (
    <>
      <HeroSection />
      <TransformationStory />
      <ProductPreview />
      <IndustrySelector />
    </>
  );
}

export default Home;
