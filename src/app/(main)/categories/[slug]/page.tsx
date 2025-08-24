import { categories, categoryDetailsData } from "@/data";
import CategoryProductSection from "@/components/CategoryProductSection";
import type { Metadata } from "next";

// Correctly await params in generateMetadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; // Await the promise here
  const category = categories.find(c => c.slug === slug);

  return {
    title: category ? `${category.name} - Categories` : "Category",
  };
}

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

// Correctly await params in the Page component
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await the promise here
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return <div>Category Not Found</div>;
  }

  if (category.slug === "wax") {
    return <div>Wax Page</div>;
  }

  if (category.slug === "alloy") {
    return <div>Alloy Page</div>;
  }

  const data = categoryDetailsData[category.slug];

  if (!data) {
    return <div>No product data found</div>;
  }

  return <CategoryProductSection data={data} />;
}
