"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  Clock,
  Bookmark,
  Share2,
  Tag,
} from "lucide-react";

const categories = [
  "All",
  "Tech Balance",
  "Mindfulness",
  "Productivity",
  "Well-being",
];

const posts = [
  {
    id: 1,
    title: "The Future of Digital Well-being in 2025",
    category: "Tech Balance",
    excerpt:
      "Explore how AI and technology will shape our digital wellness practices in the coming years.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
    authorName: "Alex Thompson",
    authorRole: "Tech Ethicist",
    authorImage:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop",
    date: "Feb 10, 2025",
    readTime: "7 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Mindful Tech: Finding Balance in a Connected World",
    category: "Mindfulness",
    excerpt:
      "Practical strategies for maintaining mindfulness in our increasingly digital lives.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
    authorName: "Maya Patel",
    authorRole: "Mindfulness Coach",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
    date: "Feb 9, 2025",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Digital Minimalism: A Beginner's Guide",
    category: "Productivity",
    excerpt:
      "Start your journey towards a more intentional relationship with technology.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop",
    authorName: "James Wilson",
    authorRole: "Digital Strategist",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop",
    date: "Feb 8, 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Creating Healthy Digital Boundaries",
    category: "Well-being",
    excerpt:
      "Learn how to set and maintain boundaries in your digital life for better mental health.",
    image:
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&auto=format&fit=crop",
    authorName: "Sarah Chen",
    authorRole: "Wellness Expert",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop",
    date: "Feb 7, 2025",
    readTime: "8 min read",
  },
];

const LatestPosts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("latest-posts");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const filteredPosts =
    currentCategory === "All"
      ? posts
      : posts.filter((post) => post.category === currentCategory);

  return (
    <section id="latest-posts" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-12 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our newest articles on digital wellness and mindful
            technology use
          </p>
        </div>
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 ${
            isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
          }`}
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                currentCategory === category
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <Tag className="h-3 w-3" />
                    {post.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Bookmark className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="relative p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
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
                        {post.authorRole}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-purple-600/0 opacity-0 group-hover:opacity-100 group-hover:bg-purple-600/5 transition-all duration-300">
                  <div className="absolute bottom-6 right-6">
                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
