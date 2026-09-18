import CommunityStorySection from "@/components/sections/community-story/community-story-section";
import FeaturedProductsSection from "@/components/sections/featured-products/featured-products-section";
import FindPartsSection from "@/components/sections/find-parts/find-parts-section";
import HeroSection from "@/components/sections/hero/hero-section";
import NewReleasesSection from "@/components/sections/new-releases/new-releases-section";
import ShopByCategorySection from "@/components/sections/shop-by-category/shop-by-category-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ShopByCategorySection />
      <FeaturedProductsSection />
      <FindPartsSection />
      <NewReleasesSection />
      <CommunityStorySection />
    </main>
  );
}
