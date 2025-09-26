import MainTimeline from "@/components/main-timeline";

const experienceTimeline = [
	{
		logo: "freelancer.svg",
		school: "Freelance",
		location: {
			text: "",
			url: "",
		},
		duration: {
			start: "October 2023",
			end: "Present",
		},
		program: "Software Developer",
		level: null,
		description:
			"Learning modern technologies and applying digital transformations to local businesses to help enhance their business process. Communicating with end users and project management is also done when developing these solutions.",
		projects: [
			{
				title: "Agreflow",
				logo: "./agresource-inc-logo.png",
				application: "Information Management System",
				duration: {
					start: "June 2025",
					end: "Present",
				},
				link: null,
			},
			{
				title: "TCB-MSTSC-DMS",
				logo: "./tcb-mstsc-dms-icon.png",
				application: "Document Management System",
				duration: {
					start: "January",
					end: "May 2025",
				},
				link: null,
			},
			{
				title: "MTIC-SSA",
				logo: "./mticssa-icon.png",
				application: "Single Page Application",
				duration: {
					start: "October 2024",
					end: "Done",
				},
				link: null,
			},
			{
				title: "Project Management Simulation Tool (PAMST)",
				logo: "./pamst-logo.png",
				application: "Web Application",
				duration: {
					start: "October 2023",
					end: "June 2024",
				},
				link: null,
			},
		],
		header: "Role Description",
		skills: [],
		technologies: [
			"laravelexcel",
			"digitalocean",
			"tailwindcss",
			"ts",
			"expressjs",
			"sequelize",
			"electron",
			"nextjs",
			"materialui",
			"postgresql",
			"betterauth",
			"shadcn",
			"chakraui",
			"supabase",
		],
	},
	{
		logo: "symph.svg",
		school: "Symph",
		location: {
			text: "",
			url: "",
		},
		duration: {
			start: "May 2023",
			end: "June 2023",
		},
		link: "https://www.symph.co",
		program: "Web and Mobile App Developer Intern",
		level: null,
		description:
			"Observing, learning, and working with Symph developers, designers, and a project manager, on Symph web and mobile app development projects.",
		projects: [
			{
				title: "QuickGrade",
				logo: "./quickgrade-icon.svg",
				application: "Web Application",
				duration: {
					start: "April",
					end: "May 2023",
				},
				link: null,
			},
		],
		header: "Role Description",
		skills: [],
		technologies: ["flutterflow", "openai", "amazontextract", "flask"],
	},
];

const educationTimeline = [
	{
		logo: "usc.svg",
		school: "University of San Carlos",
		location: {
			text: "",
			url: "",
		},
		duration: {
			start: "August 2019",
			end: "June 2023",
		},
		link: "https://usc.edu.ph",
		program: "College",
		level: "GWA 1.70",
		description: "Graduated with a Bachelor of Science degree in Computer Science.",
		projects: [],
		header: "Educational Attainment",
		skills: ["Data Structures and Algorithms, Web/Mobile/App Development, Database Design"],
		technologies: [
			"c",
			"html",
			"css",
			"js",
			"figma",
			"drawio",
			"php",
			"mysql",
			"xampp",
			"laravel",
			"livewire",
			"bootstrap",
			"git",
			"github",
			"react",
			"vue",
			"cs",
			"xamarin",
			"firebase",
			"python",
			"jupyter",
			"servicenow",
			"r",
			"latex",
		],
	},
	{
		logo: "ciccebu.png",
		school: "Colegio de la Inmaculada Concepción - Cebu",
		location: {
			text: "",
			url: "",
		},
		duration: {
			start: "June 2015",
			end: "May 2019",
		},
		link: null,
		program: "Junior & Senior High School",
		level: "With Honors",
		description:
			"Graduated from the STEM (Science, Technology, Engineering, and Mathematics) academic track.",
		projects: [],
		header: "Educational Attainment",
		skills: ["Pseudocode", "Flowchart Design", "Programming Fundamentals"],
		technologies: ["java"],
	},
	{
		logo: "letran.png",
		school: "Letran De Davao Inc.",
		location: {
			text: "",
			url: "",
		},
		duration: {
			start: "June 2013",
			end: "March 2015",
		},
		link: null,
		program: "Junior High School",
		level: null,
		description: "",
		projects: [],
		header: "Technical Experience",
		skills: [],
		technologies: [],
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
