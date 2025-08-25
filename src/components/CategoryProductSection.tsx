// components/CategoryProductSection.tsx
import ProductRow from "./ProductRow";
import CustomizableCard from "./CustomizableCard";
import { CategoryDetail } from "@/data";


type Props = { data: CategoryDetail };

export default function CategoryProductSection({ data }: Props) {
  if (!data) return <div className="text-center py-16">No product found</div>;

  const featureBlock = data.features?.[0];
  const items = featureBlock?.items ?? [];

  const rows = items.map((it, idx) => ({
    image: data.images[idx] ?? data.images[data.images.length - 1] ?? "/placeholders/category.jpg",
    title: it.label,
    desc: it.desc,
  }));

  return (
    <section className="max-w-7xl mx-auto px-3 py-12 flex flex-col gap-16 md:gap-24">
      <h1 className="text-2xl md:text-4xl font-black text-center">{data.name}</h1>

      {/* Product rows */}
      <div className="flex flex-col gap-16 md:gap-24">
        {rows.map((r, i) => (
          <ProductRow
            key={`${r.title}-${i}`}
            image={r.image}
            title={r.title}
            desc={r.desc}
            index={i}
            categoryName={data.name}
          />
        ))}
      </div>

      {/* Customizable blocks */}
      {data.customizable?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
          {data.customizable.map((c, i) => (
            <CustomizableCard key={i} {...c} />
          ))}
        </div>
      ) : null}

      {/* CTA */}
      <div className="w-full flex justify-center mt-8">
        <button className="bg-black text-white rounded px-8 py-3 hover:bg-gray-900 transition font-semibold text-lg shadow">
          To Enquire About The Product Contact Us
        </button>
      </div>
    </section>
  );
}
