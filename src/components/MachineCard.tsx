import Image, { StaticImageData } from "next/image";

export default function MachineCard({
  imgSrc,
  name,
}: {
  imgSrc: StaticImageData;
  name: string;
}) {
  return (
    // Use flex-col to stack image and name vertically
    <div className="flex flex-col items-center w-full md:w-1/3 px-3">
      {/* Image container: flex-grow pushes the name to the bottom */}
      <div className="w-full flex-grow flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={name}
          width={300}
          height={300}
          className="object-contain max-h-64" // Set a max-height for consistency
          draggable={false}
        />
      </div>

      {/* Name container with margin-top for spacing */}
      <div className="mt-6 text-center">
        <span className="text-white text-lg md:text-xl font-medium">{name}</span>
      </div>
    </div>
  );
}
