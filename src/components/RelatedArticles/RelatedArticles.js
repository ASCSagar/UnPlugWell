import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import moment from "moment";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function RelatedArticles({ relatedBlogs, loading }) {
  return (
    relatedBlogs.length > 0 && (
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
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {relatedBlogs.map((blog, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/${blog.slug}`}>
                    <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
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
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                            {moment(blog.published_at)
                              .startOf("hour")
                              .fromNow()}
                          </span>
                          <button className="text-purple-600 dark:text-purple-400">
                            Read More
                          </button>
                        </div>
                      </div>
                    </article>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center text-gray-600 dark:text-gray-400">
              No Blogs Available.
            </div>
          )}
        </div>
      </section>
    )
  );
}
