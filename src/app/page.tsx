import CommunityStorySection from "@/components/community-story-section";
import FeaturedProductsSection from "@/components/featured-products-section";
import FindPartsSection from "@/components/find-parts-section";
import HeroSection from "@/components/hero-section";
import NewReleasesSection from "@/components/new-releases-section";
import ShopByCategorySection from "@/components/shop-by-category-section";

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
