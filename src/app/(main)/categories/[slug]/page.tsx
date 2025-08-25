import { categories, categoryDetailsData } from "@/data";
import CategoryProductSection from "@/components/CategoryProductSection";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

// Correctly await params in generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  return {
    title: category ? `${category.name} - Categories` : "Category",
  };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

// Page
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return <div>Category Not Found</div>;
  }

  // Redirect for dedicated routes
  // if (slug === "Wax") redirect("/categories/Wax");
  if (slug === "alloy") redirect("/categories/alloys");

  const data = categoryDetailsData[slug];
  if (!data) return <div>No product data found</div>;

  return <CategoryProductSection data={data} />;
}
