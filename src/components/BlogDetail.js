'use client';

import { useState, useEffect } from 'react';
import { 
  Clock, 
  Calendar, 
  Share2, 
  Bookmark, 
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  ArrowLeft,
  ArrowUp,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';

const BlogDetail = ({ slug }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(128);
  const [hasLiked, setHasLiked] = useState(false);

  // Sample blog data
  const blog = {
    title: "The Future of Digital Well-being: Balancing Technology and Mental Health in 2025",
    excerpt: "An in-depth exploration of how emerging technologies are reshaping our approach to digital wellness and mental health.",
    coverImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop",
    author: {
      name: "Dr. Sarah Johnson",
      role: "Digital Wellness Expert",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
      bio: "Dr. Sarah Johnson is a leading expert in digital wellness with over 10 years of experience studying the intersection of technology and mental health."
    },
    publishDate: "February 10, 2025",
    readTime: "8 min read",
    category: "Digital Wellness",
    tags: ["Mental Health", "Technology", "Wellness", "Future Trends"],
  };

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('h2[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = (platform) => {
    // Implement share functionality
    console.log(`Sharing on ${platform}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // Show toast notification
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50"
      >
        <div 
          className="h-full bg-purple-600"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8">
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Blog
          </button>
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium">
                {blog.category}
              </span>
              <div className="flex items-center gap-2 text-purple-200">
                <Calendar className="h-4 w-4" />
                <span>{blog.publishDate}</span>
              </div>
              <div className="flex items-center gap-2 text-purple-200">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {blog.title}
            </h1>
            
            <p className="text-xl text-purple-100 mb-8">
              {blog.excerpt}
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <img
                src={blog.author.avatar}
                alt={blog.author.name}
                className="w-12 h-12 rounded-full border-2 border-purple-400"
              />
              <div>
                <h3 className="text-white font-medium">{blog.author.name}</h3>
                <p className="text-purple-200">{blog.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {['introduction', 'impact', 'strategies', 'future'].map((section) => (
                    <a
                      key={section}
                      href={`#${section}`}
                      className={`block py-2 px-4 rounded-lg text-sm transition-colors ${
                        activeSection === section
                          ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Share Widget */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Share this article
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 rounded-lg bg-[#1DA1F2] text-white hover:opacity-90"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 rounded-lg bg-[#1877F2] text-white hover:opacity-90"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 rounded-lg bg-[#0A66C2] text-white hover:opacity-90"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-7 order-1 lg:order-2 prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 max-w-none">
            <h2 id="introduction">Introduction</h2>
            <p>
              As we navigate the increasingly digital landscape of 2025, the concept of digital well-being has evolved beyond simple screen time management. This article explores the intricate relationship between technology and mental health, offering insights into maintaining balance in our connected world.
            </p>

            <h2 id="impact">The Impact of Technology</h2>
            <p>
              The pervasive nature of technology in our daily lives has created both opportunities and challenges for mental health. While digital tools have made mental health resources more accessible than ever, they've also introduced new stressors and potential pitfalls.
            </p>

            <h2 id="strategies">Key Strategies</h2>
            <p>
              Developing effective strategies for digital wellness requires a nuanced understanding of how technology affects our mental state. Here are some key approaches to maintaining balance:
            </p>
            <ul>
              <li>Setting intentional boundaries with technology</li>
              <li>Practicing digital mindfulness</li>
              <li>Creating tech-free zones and times</li>
              <li>Utilizing wellness-focused apps mindfully</li>
            </ul>

            <h2 id="future">Looking to the Future</h2>
            <p>
              As technology continues to evolve, so too must our approaches to digital well-being. The future holds both challenges and opportunities for maintaining mental health in an increasingly connected world.
            </p>
          </article>

          {/* Author Bio and Actions */}
          <aside className="lg:col-span-2 order-3">
            <div className="sticky top-24 space-y-8">
              {/* Engagement Actions */}
              <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-3 rounded-full transition-all ${
                    isBookmarked
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Bookmark className="h-6 w-6" />
                </button>

                <button 
                  onClick={() => {
                    setHasLiked(!hasLiked);
                    setLikeCount(hasLiked ? likeCount - 1 : likeCount + 1);
                  }}
                  className={`p-3 rounded-full transition-all ${
                    hasLiked
                      ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <Heart className="h-6 w-6" />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {likeCount}
                </span>

                <button 
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  <MessageCircle className="h-6 w-6" />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  24
                </span>
              </div>

              {/* Author Bio */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <div className="text-center mb-4">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {blog.author.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {blog.author.role}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {blog.author.bio}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowUp className="h-6 w-6" />
      </button>

      {/* Related Articles Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={`https://images.unsplash.com/photo-${index + 1}?w=800&auto=format&fit=crop`}
                    alt="Related article"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400">
                    Another Interesting Article Title
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief excerpt from another interesting article that relates to this topic...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">5 min read</span>
                    <button className="text-purple-600 dark:text-purple-400 hover:underline">
                      Read More
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-purple-100 mb-8">
              Subscribe to our newsletter for more insights on digital wellness and mindful technology use.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-full bg-white/10 text-white placeholder-purple-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Discussion
          </h2>
          
          {/* Comment Form */}
          <div className="max-w-3xl mb-12">
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop"
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-grow">
                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                />
                <div className="mt-4 flex justify-end">
                  <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="max-w-3xl space-y-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={`https://images.unsplash.com/photo-${index}?w=100&auto=format&fit=crop`}
                  alt="Commenter"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          John Doe
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          2 hours ago
                        </p>
                      </div>
                      <button className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                        •••
                      </button>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      Great article! I especially appreciated the insights on digital mindfulness.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-2 ml-4">
                    <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      Reply
                    </button>
                    <button className="text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                      Like
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetail;