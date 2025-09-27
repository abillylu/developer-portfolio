"use client";

import Image from "next/image";
import { TechCarousel } from "@/components/tech-carousel";

import { Card, CardContent } from "@/components/ui/card";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge";

const techStack: string[] = [
	"amazontextract",
	"betterauth",
	"bootstrap",
	"c",
	"chakraui",
	"cloudsql",
	"cpp",
	"cs",
	"css",
	"digitalocean",
	"drawio",
	"drizzle",
	"electron",
	"expressjs",
	"fasttext",
	"figma",
	"firebase",
	"flask",
	"flutterflow",
	"gensim",
	"git",
	"html",
	"insomnia",
	"java",
	"js",
	"jupyter",
	"jwt",
	"keras",
	"laravel",
	"laravelexcel",
	"latex",
	"livewire",
	"materialui",
	"mongodb",
	"mysql",
	"netlify",
	"nextjs",
	"nodejs",
	"numpy",
	"openai",
	"pandas",
	"php",
	"postgresql",
	"postman",
	"prisma",
	"python",
	"r",
	"react",
	"sequelize",
	"shadcn",
	"sqlite",
	"supabase",
	"tailwindcss",
	"tensorflow",
	"ts",
	"vercel",
	"vite",
	"vue",
	"xamarin",
	"xampp",
];

import Link from "next/link";
import { CircleQuestionMark, Cog, Phone } from "lucide-react";

const relatedLinks = [
	{
		icon: "./github.svg",
		name: "GitHub",
		link: "https://github.com/abillylu",
	},
	{
		icon: "./linkedin.svg",
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/billy-a-lu",
	},
	{
		icon: "./gmail.svg",
		name: "GMail (a.billy.lu@gmail.com)",
		link: "mailto:abillylu@gmail.com",
	},
	{
		icon: "./viber.svg",
		name: "Viber (+63 999 366 5493)",
		link: "viber://contact?number=%2B639993665493",
	},
	{
		icon: "./cv.svg",
		name: "CV",
		link: "./CV.pdf",
	},
	{
		icon: "./diploma.svg",
		name: "Diploma",
		link: "./Diploma.png",
	},
];

export default function Home() {
	// const shuffle = (arr: string[]) => {
	// 	for (let i = arr.length - 1; i > 0; i--) {
	// 		const j = Math.floor(Math.random() * (i + 1));
	// 		const k = arr[i];
	// 		arr[i] = arr[j];
	// 		arr[j] = k;
	// 	}
	// 	return arr;
	// };

	return (
		<div className="w-auto overflow-hidden">
			<div className="mb-4">
				<Card className="opacity-90 p-2 text-justify">
					<p className="font-sans p-10 scroll-m-20 text-4xl md:text-6xl text-center font-extrabold tracking-tight text-balance fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/20">
						<span className="bg-gradient-to-r from-blue-300 to-teal-300 via-purple-300 bg-clip-text text-transparent">
							BILLY A. LU: SOFTWARE DEVELOPER⚡
						</span>
					</p>
				</Card>
			</div>
			<div className="mb-4">
				<Card className="opacity-75 text-justify p-0">
					<Badge>
						<CircleQuestionMark /> About
					</Badge>

					<p className="text-1xl font-mono text-md font-weight-200 p-2">
						A Computer Science graduate with 2 years of experience in Software
						Development as a Freelancer, who has the knowledge and skills in{" "}
						<span className="text-[hsl(200,100%,60%)]">Fullstack Development</span>,{" "}
						<span className="bg-gradient-to-r from-pink-300 to-teal-300 via-purple-300 bg-clip-text text-transparent">
							Data Science
						</span>
						📊,{" "}
						<span className="bg-gradient-to-r from-violet-300 to-blue-300 via-gray-300 bg-clip-text text-transparent">
							Machine Learning
						</span>
						🤖, and{" "}
						<span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
							Aritifial Intelligence
						</span>
						✨. Always committed to master new technologies and paradigms, in order to
						consistently adapt and contribute to the dynamic fields of Information
						Technology and Artificial Intelligence.
					</p>
				</Card>
			</div>
			<div className="mb-4">
				<Card className="opacity-75 p-0">
					<Badge>
						<Cog /> Technologies Used
					</Badge>
					<CardContent>
						<TechCarousel techStack={techStack} />
					</CardContent>
				</Card>
			</div>
			<div className="mb-4">
				<Card className="opacity-75 p-0">
					<Badge>
						<Phone /> Contact
					</Badge>
					<CardContent>
						<div className="flex items-center flex-wrap">
							{relatedLinks.map((link) => {
								return (
									<div key={link.name}>
										<Tooltip>
											<TooltipTrigger asChild>
												<Link
													href={link.link}
													target="_blank"
													rel="noopener noreferrer"
												>
													<Image
														className="m-2 w-[50] h-[50]"
														height={50}
														width={50}
														src={link.icon}
														alt={link.name}
													/>
												</Link>
											</TooltipTrigger>
											<TooltipContent>
												<p>{link.name}</p>
											</TooltipContent>
										</Tooltip>
									</div>
								);
							})}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
