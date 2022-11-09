import { ProjectItem } from "./ProjectItem";
import * as data from "../data/data.json";
import { nanoid } from "nanoid";

export const Project = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.projects.map((project) => (
        <ProjectItem
          key={nanoid()}
          name={project.name}
          about={project.about}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};
