import MainTimeline from "@/components/main-timeline";

const experienceTimeline = [
	{
		logo: "freelancer.svg",
		school: "Freelance",
		duration: {
			start: "October 2023",
			end: "Present",
		},
		link: null,
		program: "Software Developer",
		description: "",
	},
	{
		logo: "symph.svg",
		school: "Symph",
		duration: {
			start: "May 2023",
			end: "June 2023",
		},
		link: "https://www.symph.co",
		program: "Web and Mobile App Developer Intern",
		description: "",
	},
];

export const ExperiencePage = () => {
	return <MainTimeline timeline={experienceTimeline} />;
};

export default ExperiencePage;
