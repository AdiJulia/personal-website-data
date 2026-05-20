import DataTools from "../data/DataTools";
import Toolscard from "./Toolscard";

export default function Tools() {
  return (
    <div className="mt-2 mb-10 bg-white shadow-lg shadow-gray-50 border border-gray-200 rounded-2xl sm:p-4 p-2">
      <div className="pl-2">
        <div className="mt-4 flex flex-wrap gap-3">
          {DataTools.map((tools, index) => (
            <Toolscard
              key={index}
              image={tools.image}
              className="w-8 h-8"
              title={tools.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
