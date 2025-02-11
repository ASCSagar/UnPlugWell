import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import TrendingPosts from '../components/TrendingPosts';
import LatestPosts from '../components/LatestPosts';
import Categories from '../components/Categories';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrendingPosts />
        <LatestPosts />
        <Categories />
        <Newsletter />
      </main>
        <Footer />
    </>
  );
}