import axios from "axios";
import BlogDetails from "@/components/BlogDetails/BlogDetails";

export const generateMetadata = async ({ params }) => {
  try {
    const { data: blog } = await axios.get(
      `https://unplugwell.com/blog/api/post/${params?.slug}/`
    );
    return {
      title: blog.meta_title,
      description: blog.meta_description,
      openGraph: {
        title: blog.meta_title,
        description: blog.meta_description,
        images: [
          {
            url: blog.featured_image,
            alt: blog.image_alt || blog.meta_title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.meta_title,
        description: blog.meta_description,
        images: [blog.featured_image],
      },
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default function BlogDetail({ params }) {
  return <BlogDetails slug={params.slug} />;
}
