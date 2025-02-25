"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Clock,
  Calendar,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  Tag,
  Eye,
} from "lucide-react";
import moment from "moment";
import { motion } from "framer-motion";
import BlogTicker from "../RelatedArticles/BlogTicker";
import RelatedArticles from "../RelatedArticles/RelatedArticles";

export default function BlogDetails({ slug }) {
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [showTicker, setShowTicker] = useState(false);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const category = blog?.category?.name;

  useEffect(() => {
    if (!slug) return;
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://unplugwell.com/blog/api/post/${slug}/`
        );
        setBlog(response.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchBlog();
  }, [slug]);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      if (!category) return;
      try {
        const response = await axios.get(
          `https://unplugwell.com/blog/api/posts-category/?site_domain=unplugwell.com&category_name=${category}`
        );

        setRelatedBlogs(response.data.results);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTicker(true);
      } else {
        setShowTicker(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <main className="py-12 min-h-screen bg-white dark:bg-gray-900">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showTicker ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <BlogTicker relatedBlogs={relatedBlogs} />
      </div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full bg-purple-600 text-white font-medium">
                  {blog.category?.name}
                </span>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4" />
                  <span>{moment(blog?.published_at)?.format("ll")}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>
                    {moment(blog?.published_at)?.startOf("hour")?.fromNow()}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Eye className="h-4 w-4" />
                  <span>{blog.view_count} views</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {blog.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {blog.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-semibold">
                    {blog.author?.full_name?.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium">
                      {blog.author?.full_name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Author & Content Creator
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            {blog.featured_image && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src={blog.featured_image}
                  alt={blog.image_alt}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            )}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="prose prose-lg dark:prose-invert prose-headings:text-white prose-p:text-white max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 flex justify-end"
              >
                <button
                  onClick={handleGoBack}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blogs
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Share this article
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition-colors">
                    <Twitter className="h-6 w-6 mb-1" />
                    <span className="text-xs">Twitter</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20 transition-colors">
                    <Facebook className="h-6 w-6 mb-1" />
                    <span className="text-xs">Facebook</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors">
                    <Linkedin className="h-6 w-6 mb-1" />
                    <span className="text-xs">LinkedIn</span>
                  </button>
                </div>
              </motion.div>
              {blog.tags?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 dark:bg-gray-900/80 text-purple-600 dark:text-purple-400 text-sm font-medium hover:shadow-md transition-shadow"
                      >
                        <Tag className="h-3 w-3" />
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              {blog.author && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    About the Author
                  </h3>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white text-2xl font-semibold mb-3">
                      {blog.author.full_name.charAt(0)}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {blog.author.full_name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Content creator and specialist in well-being topics.
                      Passionate about helping people unplug and find balance in
                      their lives.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </aside>
        </div>
      </div>
      <div className="fixed bottom-8 left-8 z-50">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleGoBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition-colors shadow-lg"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <RelatedArticles loading={loading} relatedBlogs={relatedBlogs} />
      </motion.div>
    </main>
  );
}
