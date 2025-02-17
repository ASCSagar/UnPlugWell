"use client";
import Link from "next/link";

const tickerStyles = `
  @keyframes ticker {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-ticker {
    animation: ticker 30s linear infinite;
  }

  .animate-ticker:hover {
    animation-play-state: paused;
  }

  .title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    cursor: pointer;
    color: black;
    text-decoration: none;
  }
`;

export default function Articles({ relatedBlogs }) {
  return (
    <div className="bg-gray-200 text-gray-800 py-2 overflow-hidden">
      <style>{tickerStyles}</style>
      <div className="flex animate-ticker">
        {relatedBlogs.concat(relatedBlogs).map((blog, index) => (
          <div key={index} className="flex items-center mx-4 whitespace-nowrap">
            <img
              src={blog.featured_image}
              alt={blog.image_alt}
              className="w-16 h-16 object-cover rounded-md"
            />
            <Link href={blog.slug} className="ml-2 font-bold w-60 title">
              {blog.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
