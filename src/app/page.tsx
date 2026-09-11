import FeaturedProductsSection from "@/components/featured-products-section";
import FindPartsSection from "@/components/find-parts-section";
import HeroSection from "@/components/hero-section";
import ShopByCategorySection from "@/components/shop-by-category-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShopByCategorySection />
      <FeaturedProductsSection />
      <FindPartsSection />
    </main>
  );
}
