"use client";
import { useState } from "react";
import {
  Search,
  Grid,
  List,
  Tag,
  Bookmark,
  Share2,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categories = [
    "All",
    "Digital Wellness",
    "Mental Health",
    "Productivity",
    "Tech Balance",
    "Mindfulness",
    "Well-being",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Well-being in 2025",
      excerpt:
        "Explore how emerging technologies are shaping our relationship with digital wellness and what it means for our future.",
      category: "Digital Wellness",
      image:
        "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&auto=format&fit=crop",
      author: {
        name: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
        role: "Digital Wellness Expert",
      },
      date: "Feb 10, 2025",
      readTime: "8 min read",
      tags: ["Technology", "Wellness", "Future Trends"],
    },
    {
      id: 2,
      title: "Digital Minimalism: A Path to Mindful Technology Use",
      excerpt:
        "Discover how embracing digital minimalism can transform your relationship with technology and improve your overall well-being.",
      category: "Digital Wellness",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop",
      author: {
        name: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop",
        role: "Digital Wellness Expert",
      },
      date: "February 8, 2025",
      readTime: "8 min read",
      tags: ["Digital Minimalism", "Wellness", "Productivity"],
      slug: "digital-minimalism-path-mindful-technology",
    },
  ];

  const filteredPosts = blogPosts
    .filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((post) =>
      selectedCategory === "All" ? true : post.category === selectedCategory
    );

  return (
    <main className="py-12 min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="relative py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Unplugwell Blog
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Discover insights and strategies for maintaining digital wellness
              in today's connected world.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-purple-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white/20"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-purple-200" />
            </div>
          </div>
        </div>
      </section>
      <section className="sticky top-16 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="md:hidden w-full">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg"
              >
                <span>Categories</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCategoryOpen && (
                <div className="mt-2 space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsCategoryOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
              </select>

              <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded ${
                    view === "grid"
                      ? "bg-white dark:bg-gray-600 shadow"
                      : "hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded ${
                    view === "list"
                      ? "bg-white dark:bg-gray-600 shadow"
                      : "hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-8"
          }
        >
          {filteredPosts.map((post) => (
            <Link
              href={`/blog/${post.slug || post.id}`}
              key={post.id}
              className="block h-full"
            >
              <article
                className={`h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  view === "list" ? "md:flex-row" : ""
                }`}
              >
                <div
                  className={`relative ${
                    view === "list" ? "md:w-1/3 h-48 md:h-auto" : "h-48"
                  }`}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-purple-600 dark:text-purple-400 text-sm font-medium">
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div
                  className={`p-6 flex flex-col flex-1 ${
                    view === "list" ? "md:w-2/3" : ""
                  }`}
                >
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-600 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">
                        <Share2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
