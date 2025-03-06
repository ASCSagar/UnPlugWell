export const generateMetadata = async ({ params }) => {
  try {
    const response = await fetch(
      `https://unplugwell.com/blog/api/category-slug/?site_domain=unplugwell.com&category_slug=${params?.slug}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch category data");
    }

    const category = await response.json();

    return {
      title: category[0].meta_title,
      description: category[0].meta_description,
    };
  } catch (error) {
    console.log("error", error);
  }
};

import CategoriesBlogs from "@/components/Categories/CategoriesBlogs";

export default function CategoryDetails({ params }) {
  return <CategoriesBlogs slug={params.slug} />;
}
