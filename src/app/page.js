import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  return (
    <div className="blob-container">
      <Hero />
      <TrendingBlogs />
      <LatestBlogs />
      <NewsLetter />
    </div>
  );
}
