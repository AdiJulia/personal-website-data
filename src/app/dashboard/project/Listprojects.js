import Projects from "../data/Projects";
import Projectcard from "./Projectcard";

export default function Listprojects() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {Projects.map((project, index) => (
        <Projectcard
          key={index}
          title={project.title}
          image={project.image}
          link={project.link}
          description={project.description}
          tags={project.tags}
        />
      ))}
    </div>
  );
}