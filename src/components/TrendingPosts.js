'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TrendingUp, Clock, ArrowRight, ChevronRight, Heart, BookOpen } from 'lucide-react';

const TrendingPosts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('trending-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const trendingPosts = [
    {
      id: 1,
      title: "Digital Detox: A 7-Day Plan to Reset Your Mind",
      excerpt: "Transform your relationship with technology through our scientifically-backed approach.",
      category: "Wellness",
      readTime: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&auto=format&fit=crop",
      authorName: "Sarah Johnson",
      authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
      date: "Feb 8, 2025",
      likes: 234,
      reads: 1543
    },
    {
      id: 2,
      title: "Mindful Social Media: Breaking the Scroll Cycle",
      excerpt: "Learn powerful techniques to stay connected without feeling overwhelmed.",
      category: "Mental Health",
      readTime: "6 min read",
      imageUrl: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop",
      authorName: "Michael Chen",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
      date: "Feb 7, 2025",
      likes: 189,
      reads: 1232
    },
    {
      id: 3,
      title: "The Art of Digital Minimalism in 2025",
      excerpt: "Discover how to create a clutter-free digital life in today's connected world.",
      category: "Productivity",
      readTime: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
      authorName: "Emma Davis",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
      date: "Feb 6, 2025",
      likes: 156,
      reads: 987
    }
  ];

  return (
    <section 
      id="trending-section"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div 
          className={`flex flex-col md:flex-row items-center justify-between mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">Trending Now</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent">
              Most Popular Articles
            </h3>
          </div>
          <Link 
            href="/blog"
            className="group hidden md:flex items-center gap-2 px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPosts.map((post, index) => (
            <article 
              key={post.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-white/90 dark:bg-gray-900/90 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <Link href={`/blog/${post.id}`} className="hover:underline decoration-2 decoration-purple-400/30">
                    {post.title}
                  </Link>
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={post.authorImage} 
                    alt={post.authorName}
                    className="w-10 h-10 rounded-full border-2 border-purple-100 dark:border-purple-900"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.authorName}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="h-4 w-4 text-pink-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      {post.reads}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div 
                  className={`absolute inset-0 bg-purple-600/0 transition-all duration-300 flex items-center justify-center ${
                    hoveredId === post.id ? 'bg-purple-600/5' : ''
                  }`}
                >
                  <div 
                    className={`transform transition-all duration-300 ${
                      hoveredId === post.id ? 'scale-100' : 'scale-90'
                    } opacity-0 group-hover:opacity-100`}
                  >
                    <Link 
                      href={`/blog/${post.id}`}
                      className="hidden md:flex items-center gap-2 px-6 py-3 bg-white/90 dark:bg-gray-900/90 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-white dark:hover:bg-gray-900 transition-colors"
                    >
                      Read Article
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingPosts;