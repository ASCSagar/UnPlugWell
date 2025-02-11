"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Clock,
  ArrowRight,
  ChevronRight,
  Heart,
  BookOpen,
} from "lucide-react";
import axios from "axios";
import moment from "moment";

const TrendingBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [trendingBlogs, setTrendingBlogs] = useState([]);

  useEffect(() => {
    const fetchTrendingBlogs = async () => {
      try {
        const response = await axios.get(
          "https://unplugwell.com/blog/api/posts/"
        );
        setTrendingBlogs(response.data.results);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingBlogs();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-4">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Trending Now
              </span>
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
        {loading ? (
          <div className="flex justify-center items-center ">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingBlogs.length > 0 &&
              trendingBlogs?.map((post, index) => (
                <article
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                  style={{ height: "500px" }}
                >
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={post.featured_image}
                      alt={post.image_alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-white/90 dark:bg-gray-900/90 text-purple-600 dark:text-purple-400 text-sm font-medium rounded-full shadow-lg">
                        {post.category.name}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline decoration-2 decoration-purple-400/30"
                      >
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full border-2 border-purple-100 dark:border-purple-900 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold">
                        {post.author.full_name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author.full_name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {moment(post.published_at).format("ll")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4 text-pink-500" />
                          234
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-blue-500" />
                          1532
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {moment(post.published_at).startOf("hour").fromNow()}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-purple-600/0 transition-all duration-300 flex items-center justify-center group-hover:bg-purple-600/5">
                      <div className="transform transition-all duration-300 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100">
                        <Link
                          href={`/blog/${post.slug}`}
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
        )}
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

export default TrendingBlogs;
