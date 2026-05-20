export default function Experiencecard({ title, date, company, descriptions }) {
  return (
    <>
      <div className="flex justify-between items-start mt-6 mb-1">
        <p className="text-md text-gray-900 font-semibold">{title}</p>
        <p className="text-sm text-gray-500 font-semibold">{date}</p>
      </div>
      <p className="text-sm text-gray-800 mb-4">{company}</p>
      {descriptions.map((desc, index) => (
        <p key={index} className="text-sm text-gray-600 mb-2">
          • {desc}
        </p>
      ))}
    </>
  );
}
