import About from "./About";
import Skills from "./Skills";
import Sosmed from "./Sosmed";

export default function Sidepages() {
  return (
    <>
      {/* <div className="md:flex md:gap-0 max-w-7xl mx-auto"> */}
      <div className="md:flex-none md:w-96 sm:p-4 p-2 rounded-2xl bg-white shadow-lg shadow-gray-50 border border-gray-200">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="items-center">
            {" "}
            <img
              className="mb-4 mt-0 h-40 w-40 rounded-full lg:w-34 lg:h-34"
              style={{ objectFit: "cover" }}
              src="./adi square2.jpg"
              // src="./formal2.jpg"
            />
          </div>

          <p className="text-2xl font-semibold mb-1 text-gray-900">Hello!</p>
          <p className="text-2xl font-semibold mb-1 text-gray-900">
            I'm Adi Julia
          </p>
          <p className="text-md text-gray-900 mb-1">Data Analyst</p>

          <p className="flex text-sm text-gray-600">
            Based in Malang, Indonesia
          </p>

          {/* SOCIAL MEDIA */}
          <div className="flex text-gray-600 mt-4 mb-2 items-center gap-x-1">
            <Sosmed />
          </div>
        </div>

        {/* ABOUT */}
        <About />

        {/* SKILLS */}
        <Skills />
      </div>
    </>
  );
}
