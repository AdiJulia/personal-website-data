export default function Projectcard({ title, image, link, description, tags }) {
  return (
    <>
      <div className="bg-white shadow-lg shadow-gray-50 border border-gray-200 rounded-2xl transform transition-all duration-200 hover:shadow-lg">
        <a
          href={link}
          className="group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full mb-2 rounded-t-2xl border-0 border-gray-200"
            src={image}
            alt={title}
          />

          <div className="sm:px-4 px-2 sm:pb-4 pb-2">
            <p className="text-md text-gray-900 mb-1 mt-2 font-semibold group-hover:underline group-hover:underline-offset-4">
              {title}
            </p>

            <div className="mt-2">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-2.5 py-0.5 rounded-full text-sm font-sm bg-ds_blue_light text-ds_blue ring- mr-1 mb-1"
                >
                  {tag}
                </button>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-1 mt-2">{description}</p>

            <div className="flex items-center mt-1 text-sm border-ds_blue border-0 text-ds_blue py-0.5 pr-1">
              Visit Site
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3 ml-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}
