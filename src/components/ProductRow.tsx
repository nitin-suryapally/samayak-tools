import Image from "next/image";

type Props = {
  image: string;
  title: string;
  desc: string;
  index: number;
  categoryName: string;
};

export default function ProductRow({ image, title, desc, index, categoryName }: Props) {
  const even = index % 2 === 0; // row 0 = even => text left, image right on md+

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
      {/* Text */}
      <div className={`${even ? "md:order-1" : "md:order-2"} order-2`}>
        <div className="max-w-xl">
          <span className="uppercase text-xs tracking-wider text-red-400 font-semibold">Features</span>
          <h3 className="text-2xl md:text-3xl font-black mt-1 mb-3">{title}</h3>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">{desc}</p>
        </div>
      </div>

      {/* Image */}
      <div className={`${even ? "md:order-2" : "md:order-1"} order-1`}>
        <div className="w-full max-w-xl aspect-square bg-black/5 rounded-lg overflow-hidden mx-auto">
          <Image
            src={image}
            alt={`${categoryName} - ${title}`}
            width={900}
            height={900}
            className="w-full h-full object-cover"
            priority={index < 2}
          />
        </div>
      </div>
    </div>
  );
}
