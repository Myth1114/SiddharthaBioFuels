import HeroSection from "../../components/product/HeroSection";
import TransformationStory from "../../components/process/TransformationStory";
import IndustrySelector from "../../components/industries/IndustrySelector/IndustrySelector";
import ProductPreview from "../../components/product/ProductPreview";
import EnquiryCTA from "../../components/forms/EnquiryCTA";
import SEO from "../../components/seo/SEO";
import { seo } from "../../data/seo";

function Home() {
  return (
    <>
      <SEO {...seo.home} />
      <HeroSection />
      <TransformationStory />
      <ProductPreview />
      <IndustrySelector />
      <EnquiryCTA />
    </>
  );
}

export default Home;
