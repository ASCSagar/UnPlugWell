"use client";
import { useEffect, useState } from "react";
import {
  Search,
  Grid,
  List,
  Tag,
  Bookmark,
  Share2,
  ChevronDown,
} from "lucide-react";
import axios from "axios";
import moment from "moment";
import Link from "next/link";

export default function Blog() {
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categories, setCategories] = useState(["All"]);
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://unplugwell.com/blog/api/posts/?site_domain=unplugwell.com&page=${page}`
        );
        if (page === 1) {
          setBlogs(response.data.results);
        } else {
          setBlogs((prev) => [...prev, ...response.data.results]);
        }
        setHasMore(response.data.next !== null);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://unplugwell.com/blog/api/get-categories/?site=unplugwell.com"
        );
        setCategories((prev) => [
          "All",
          ...response.data.results.map((category) => category.name),
        ]);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (blog) => blog.category.name === selectedCategory
      );
    }

    if (searchQuery) {
      filtered = filtered.filter((blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [selectedCategory, searchQuery, blogs]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

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
                className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 dark:text-gray-300 dark:bg-gray-700 rounded-lg"
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
                  {categories.map((category, index) => (
                    <button
                      key={index}
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
              {categories.map((category, index) => (
                <button
                  key={index}
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
              <div className="flex items-center gap-2 rounded-lg p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded ${
                    view === "grid"
                      ? "dark:text-gray-300 bg-white dark:bg-gray-600 shadow"
                      : "hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded ${
                    view === "list"
                      ? "dark:text-gray-300 bg-white dark:bg-gray-600 shadow"
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
        {loading ? (
          <div className="flex justify-center items-center ">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div>
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-8"
              }
            >
              {filteredBlogs.map((blog, index) => (
                <article 
                  key={index}
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
                      src={blog.featured_image}
                      alt={blog.image_alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-900/90 text-purple-600 dark:text-purple-400 text-sm font-medium">
                        <Tag className="h-3 w-3" />
                        {blog.category.name}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`p-6 flex flex-col flex-1 ${
                      view === "list" ? "md:w-2/3" : ""
                    }`}
                  >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400">
                      <Link href={`/${blog.slug}`}>{blog.title}</Link>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-sm text-gray-600 dark:text-gray-400"
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border-2 border-purple-100 dark:border-purple-900 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold">
                          {blog.author.full_name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {blog.author.full_name}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {moment(blog.published_at).format("ll")}
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
              ))}
            </div>
            {hasMore && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMore}
                  className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400">
            No Blogs Available For The {selectedCategory}.
          </div>
        )}
      </section>
    </main>
  );
}
