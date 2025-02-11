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
} from "lucide-react";
import { useParams } from "next/navigation";
import moment from "moment";

export default function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});

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
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
          <article className="lg:col-span-7 order-1 lg:order-2 prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 max-w-none">
            <h2 id="introduction">Introduction</h2>
            <p>
              As we navigate the increasingly digital landscape of 2025, the
              concept of digital well-being has evolved beyond simple screen
              time management. This article explores the intricate relationship
              between technology and mental health, offering insights into
              maintaining balance in our connected world.
            </p>
            <h2 id="impact">The Impact of Technology</h2>
            <p>
              The pervasive nature of technology in our daily lives has created
              both opportunities and challenges for mental health. While digital
              tools have made mental health resources more accessible than ever,
              they've also introduced new stressors and potential pitfalls.
            </p>
            <h2 id="strategies">Key Strategies</h2>
            <p>
              Developing effective strategies for digital wellness requires a
              nuanced understanding of how technology affects our mental state.
              Here are some key approaches to maintaining balance:
            </p>
            <ul>
              <li>Setting intentional boundaries with technology</li>
              <li>Practicing digital mindfulness</li>
              <li>Creating tech-free zones and times</li>
              <li>Utilizing wellness-focused apps mindfully</li>
            </ul>
            <h2 id="future">Looking to the Future</h2>
            <p>
              As technology continues to evolve, so too must our approaches to
              digital well-being. The future holds both challenges and
              opportunities for maintaining mental health in an increasingly
              connected world.
            </p>
          </article>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <article
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      index + 1
                    }?w=800&auto=format&fit=crop`}
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
                    A brief excerpt from another interesting article that
                    relates to this topic...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      5 min read
                    </span>
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
    </main>
  );
}
