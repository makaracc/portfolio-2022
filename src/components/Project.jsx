import { ProjectItem } from './ProjectItem';
import * as data from '../data/data.json';
import { nanoid } from 'nanoid';

export const Project = () => {
	return (
		<div className="flex flex-col gap-4">
			{/* <h1>Projects</h1> */}
			<div className="flex flex-col items-start md:w-10/12">
				{data.new_projects.map((project) => (
					<ProjectItem
						key={nanoid()}
						name={project.name}
						about={project.about}
						image={project.image}
						link={project.link}
					/>
				))}
			</div>
			{/* <h1>Other Projects</h1>
			<div className="grid grid-cols-4 gap-4">
				{data.old_projects.map((project) => (
					<ProjectItem
						key={nanoid()}
						name={project.name}
						about={project.about}
						image={project.image}
						link={project.link}
					/>
				))}
			</div> */}
		</div>
	);
};
