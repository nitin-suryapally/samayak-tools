import Image, { StaticImageData } from "next/image";

export default function MachineCard({ imgSrc, name }: { imgSrc: StaticImageData; name: string }) {
  return (
    <div className="flex flex-col items-center w-full md:w-1/3 px-3">
      <div className="mb-5 flex items-center justify-center max-w-full max-h-64 md:max-h-80 w-full">
        <div className="rounded-xl flex items-center justify-center shadow-inner w-full h-full">
          <Image
            src={imgSrc}
            alt={name}
            width={300}  // Increased image size values
            height={300}
            className="object-contain"
            draggable={false}
          />
        </div>
      </div>
      <span className="text-white text-lg md:text-xl mb-6 text-center">
        {name}
      </span>
    </div>
  );
}
