import { ProjectItem } from "./ProjectItem";
import * as data from "../data/data.json";
import { nanoid } from "nanoid";

export const Project = () => {
  return data.projects.map((project) => (
    <ProjectItem
      key={nanoid()}
      name={project.name}
      about={project.about}
      image={project.image}
      link={project.link}
    />
  ));
};
