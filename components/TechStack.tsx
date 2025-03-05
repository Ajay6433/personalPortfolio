import Image from "next/image";
import iconsData from "../icons.json";

const TechStack = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 justify-items-center">
      {iconsData.map((icon) => (
        <div key={icon.id} className="relative group text-center">
          {/* Desktop Icon */}
          <span className="hidden md:block p-4">
            <Image
              src={icon.src}
              alt={icon.name}
              width={120}
              height={120}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </span>

          {/* Mobile Icon */}
          <span className="md:hidden block p-3">
            <Image
              src={icon.src}
              alt={icon.name}
              width={80}
              height={80}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-sm mt-2">{icon.name}</p>
          </span>

          {/* Enhanced Tooltip */}
          <span className="absolute top-24 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm font-semibold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
