import HeroSection from "../components/HeroSection";
import TrendingPosts from "../components/TrendingPosts";
import LatestPosts from "../components/LatestPosts";
import Categories from "../components/Categories";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrendingPosts />
      <LatestPosts />
      <Categories />
      <Newsletter />
    </>
  );
}
