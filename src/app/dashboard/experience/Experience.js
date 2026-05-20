import DataExperience from "../data/DataExperience";
import ExperienceCard from "./Experiencecard";

export default function Experience() {
  return (
    <>
      <div className="mt-2 mb-10 bg-white shadow-lg shadow-gray-50 border border-gray-200 rounded-2xl sm:p-4 p-2">
        <div className="pl-2">
          {DataExperience.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              date={exp.date}
              company={exp.company}
              descriptions={exp.descriptions}
            />
          ))}
        </div>
      </div>
    </>
  );
}
