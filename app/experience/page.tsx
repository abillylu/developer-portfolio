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

const educationTimeline = [
	{
		logo: "usc.svg",
		school: "University of San Carlos",
		duration: {
			start: "August 2019",
			end: "June 2023",
		},
		link: "https://usc.edu.ph",
		program: "Bachelor of Science in Computer Science",
		description: "",
	},
	{
		logo: "ciccebu.png",
		school: "Colegio de la Inmaculada Concepción - Cebu",
		duration: {
			start: "June 2015",
			end: "May 2019",
		},
		link: null,
		program:
			"Junior & Senior High School (Science, Technology, Engineering, and Mathematics Strand)",
		description: "",
	},
	{
		logo: "letran.png",
		school: "Letran De Davao Inc.",
		duration: {
			start: "June 2013",
			end: "March 2015",
		},
		link: null,
		program: "Junior High School",
		description: "",
	},
];

export default function ExperiencePage() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-20">
			<MainTimeline timeline={experienceTimeline} position={"left"} heading={"Experience"} />
			<MainTimeline timeline={educationTimeline} position={"right"} heading={"Education"} />
		</div>
	);
}
