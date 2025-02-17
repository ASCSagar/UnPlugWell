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
} from "lucide-react";
import { useParams } from "next/navigation";
import moment from "moment";
import BlogTicker from "@/components/RelatedArticles/BlogTicker";
import RelatedArticles from "@/components/RelatedArticles/RelatedArticles";

export default function BlogDetail() {
  const { slug } = useParams();
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

  return (
    <main className="py-12 min-h-screen bg-white dark:bg-gray-900">
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          showTicker ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <BlogTicker relatedBlogs={relatedBlogs} />
      </div>
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={blog.featured_image}
          alt={blog.image_alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-medium mt-2 sm:mt-4"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            Back to Blog
          </button>
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-8 sm:pb-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
              <span className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-purple-600 text-white text-xs sm:text-sm font-medium">
                {blog.category?.name}
              </span>
              <div className="flex items-center gap-1 sm:gap-2 text-purple-200 text-xs sm:text-sm">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{moment(blog.published_at).format("ll")}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 text-purple-200 text-xs sm:text-sm">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>
                  {moment(blog.published_at).startOf("hour").fromNow()}
                </span>
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {blog.title}
            </h1>
            <p className="text-sm md:text-lg text-purple-100 mb-6">
              {blog.excerpt}
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-purple-100 dark:border-purple-900 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold">
                {blog.author?.full_name.charAt(0)}
              </div>
              <div>
                <h3 className="text-white font-medium text-sm sm:text-base">
                  {blog.author?.full_name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <article
            className="lg:col-span-7 order-1 lg:order-2 prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Share this article
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button className="p-2 rounded-lg bg-[#1DA1F2] text-white hover:opacity-90">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-lg bg-[#1877F2] text-white hover:opacity-90">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="p-2 rounded-lg bg-[#0A66C2] text-white hover:opacity-90">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
              {blog.tags?.length > 0 && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 py-2 rounded-full bg-white/90 dark:bg-gray-900/90 text-purple-600 dark:text-purple-400 text-sm font-medium"
                      >
                        <Tag className="h-3 w-3" />
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>
      <RelatedArticles loading={loading} relatedBlogs={relatedBlogs} />
    </main>
  );
}
