type Props = {
  title: string;
  desc: string[];
  iconColor: string;
};

export default function CustomizableCard({ title, desc, iconColor }: Props) {
  const color =
    iconColor === "red"
      ? "bg-red-100 text-red-500"
      : iconColor === "black"
      ? "bg-black text-white"
      : "bg-gray-900 text-white";

  return (
    <div className="w-full max-w-xl">
      <div className="flex items-center gap-3 mb-4">
        <span className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8" />
          </svg>
        </span>
        <h4 className="font-black text-xl">{title}</h4>
      </div>
      {desc.map((p, i) => (
        <p key={i} className="text-gray-800 text-base mb-3">
          {p}
        </p>
      ))}
    </div>
  );
}
