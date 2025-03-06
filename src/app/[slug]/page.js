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
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default function BlogDetail({ params }) {
  return <BlogDetails slug={params.slug} />;
}
