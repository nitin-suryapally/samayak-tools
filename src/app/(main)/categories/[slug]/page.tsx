// app/categories/[slug]/page.tsx
import type { Metadata } from "next";
import { categories, categoryDetailsData } from "@/data";
import CategoryProductSection from "@/components/CategoryProductSection";
import WaxPage from "@/components/WaxPage";
import AlloyPage from "@/components/AlloyPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  return { title: category ? `${category.name} - Categories` : "Category" };
}

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return <div>Category Not Found</div>;

  if (slug === "wax") return <WaxPage />;
  if (slug === "alloy") return <AlloyPage />;

  const data = categoryDetailsData[slug];
  if (!data) return <div>No product data found</div>;

  return <CategoryProductSection data={data} />;
}
