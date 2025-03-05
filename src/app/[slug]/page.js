export const generateMetadata = async ({ params }) => {
  try {
    const response = await fetch(
      `https://unplugwell.com/blog/api/post/${params?.slug}/`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const blog = await response.json();

    return {
      title: blog.meta_title,
      description: blog.meta_description,
    };
  } catch (error) {
    console.log("error", error);
  }
};

import BlogDetails from "@/components/BlogDetails/BlogDetails";

export default function BlogDetail({ params }) {
  return <BlogDetails slug={params.slug} />;
}
