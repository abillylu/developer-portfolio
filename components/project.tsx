interface description {
	heading: string;
	description: string;
}

interface Project {
	code: string;
	title: string;
	image: string;
	duration: {
		start: string;
		end: string;
	};
	category: string;
	completed: boolean;
	summary: string;
	descriptions: description[];
	links: {
		type: string;
		url: string;
	}[];
	tags: string[];
	technologies: string[];
}

export const Project = ({ selectedProject }: { selectedProject: Project }) => {
	return (
		<div>
			{selectedProject.descriptions.map(
				(description: { heading: string; description: string }, index: number) => {
					return (
						<div key={index}>
							<h2 className="font-bold">{description.heading}</h2>
							<p>{description.description}</p>
						</div>
					);
				},
			)}
		</div>
	);
};

export default Project;
