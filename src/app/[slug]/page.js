"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Clock,
  Calendar,
  Bookmark,
  Heart,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
  ArrowUp,
  MessageCircle,
  Tag,
} from "lucide-react";
import { useParams } from "next/navigation";
import moment from "moment";
import Link from "next/link";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
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
      } finally {
        console.log();
      }
    };

    fetchBlog();
  }, [slug]);

  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await axios.get(
          "https://unplugwell.com/blog/api/posts-latest/?site_domain=unplugwell.com"
        );
        const filteredBlogs = response.data.results.filter(
          (item) => item.category.name === category
        );

        const shuffledBlogs = filteredBlogs
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        setRelatedBlogs(shuffledBlogs);
      } catch (error) {
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedBlogs();
  }, [category]);

  return (
    <main className="py-12 min-h-screen bg-white dark:bg-gray-900">
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={blog.featured_image}
          alt={blog.image_alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2  rounded-full bg-purple-600 text-white text-xs sm:text-sm font-medium"
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
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              {blog.title}
            </h1>
            <p className="text-sm sm:text-lg text-purple-100 mb-6 sm:mb-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
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
          <article
            className="lg:col-span-7 order-1 lg:order-2 prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></article>
          <aside className="lg:col-span-2 order-3">
            <div className="sticky top-24 space-y-8">
              <div className="flex flex-col items-center gap-4">
                <button className="p-3 rounded-full transition-all bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  <Bookmark className="h-6 w-6" />
                </button>
                <button className="p-3 rounded-full transition-all bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400">
                  <Heart className="h-6 w-6" />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  1
                </span>
                <button className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <MessageCircle className="h-6 w-6" />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  24
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <button className="fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 hover:bg-purple-700 opacity-0 translate-y-10">
        <ArrowUp className="h-6 w-6" />
      </button>
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Related Articles
          </h2>
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : relatedBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedBlogs.map((blog, index) => (
                <article
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={blog.featured_image}
                      alt={blog.image_alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-purple-600 dark:hover:text-purple-400">
                      <Link href={`/${blog.slug}`}>{blog.title}</Link>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {moment(blog.published_at).startOf("hour").fromNow()}
                      </span>
                      <button className="text-purple-600 dark:text-purple-400 hover:underline">
                        Read More
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400">
              No Blogs Available..
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
