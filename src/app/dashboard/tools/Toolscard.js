export default function Toolscard({ image, title, alt }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-lg shadow-sm">
      <img src={image} className="w-8 h-8" />
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}
