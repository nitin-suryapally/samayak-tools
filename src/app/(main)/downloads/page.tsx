import Link from "next/link";
import { AiOutlineDownload } from "react-icons/ai";

const pdfFiles = [
  { name: "Product Catalog 2024", href: "/pdfs/product-catalog-2024.pdf" },
  { name: "Pricing Guide", href: "/pdfs/pricing-guide.pdf" },
  { name: "User Manual", href: "/pdfs/user-manual.pdf" },
  { name: "Safety Instructions", href: "/pdfs/safety-instructions.pdf" },
  // Add more as needed
];

export default function DownloadPage() {
  return (
    <section className="max-w-5xl mx-auto p-6 md:p-12">
      <h1 className="text-3xl font-extrabold text-center mb-12">Download PDFs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pdfFiles.map(({ name, href }) => (
          <Link
            key={href}
            href={href}
            download
            className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 hover:border-black transition-shadow shadow-sm hover:shadow-lg cursor-pointer"
          >
            <AiOutlineDownload className="w-12 h-12 mb-4 text-black" />
            <span className="text-center font-semibold text-lg">{name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
