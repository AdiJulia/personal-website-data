import Image from "next/image";
import Sidepages from "./sidepages/Sidepages.js";
import Dashboard from "./dashboard/Dashboard.js";

export default function Home() {
  return (
    <>
      <div className="antialiased text-gray-900 bg-[#fcfcfc]">
        <div className="md:flex md:gap-0 max-w-7xl mx-auto">
          {/* Sidepage */}
          <div className="sm:p-4 p-2">
            <div className="sticky sm:top-10 top-8">
              <Sidepages />
            </div>
          </div>

          {/* Dashboard */}
          <div className="w-full pt-2">
            <div className="sm:p-4 p-2">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
