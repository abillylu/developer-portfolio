import MainTimeline from "@/components/main-timeline";

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

export const EducationPage = () => {
	return <MainTimeline timeline={educationTimeline} />;
};

export default EducationPage;
