export default function Certificationcard({ title, date, src, cd_id }) {
  return (
    <>
      <div className="flex justify-between items-start mt-6 mb-1">
        <p className="text-md text-gray-900 font-semibold">
          {title}
        </p>
        <p className="text-sm text-gray-500 font-semibold">{date}</p>
      </div>
      <p className="text-sm text-gray-800 mb-4">
        • Credential ID :{" "}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ds_blue hover:underline"
        >
          {cd_id}
        </a>
      </p>
    </>
  );
}
