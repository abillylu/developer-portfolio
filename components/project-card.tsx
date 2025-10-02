import { Card, CardContent } from "@/components/ui/card";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { Badge } from "./ui/badge";

import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import technologies from "@/data/technologies.json";

import projects from "../data/projects.json";

import {
	BookMarked,
	BrainCircuit,
	Check,
	Clock,
	CodeXml,
	Earth,
	Gamepad2,
	Github,
	Globe,
	LaptopMinimal,
	Layers,
	NotebookText,
	PanelsTopLeft,
	RectangleEllipsis,
	ScanEye,
	Search,
	Signal,
	Smartphone,
	SquareChevronRight,
	SquareFunction,
	Tag,
	TextWrap,
} from "lucide-react";
import Link from "next/link";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const externalLinkIcons = {
	Website: <Globe />,
	GitHub: <Github />,
	IEEE: <BookMarked />,
	WIP: <RectangleEllipsis />,
};

type ExternalLinkIcons = typeof externalLinkIcons;

type ExternalLinkKeys = keyof ExternalLinkIcons;

const tagIcons = {
	Web: <Earth />,
	Fullstack: <Layers />,
	SPA: <PanelsTopLeft />,
	AI: <BrainCircuit />,
	"Computer Vision": <ScanEye />,
	Math: <SquareFunction />,
	Mobile: <Smartphone />,
	Console: <SquareChevronRight />,
	Game: <Gamepad2 />,
	Research: <Search />,
	ML: <BrainCircuit />,
	NLP: <TextWrap />,
	Desktop: <LaptopMinimal />,
};

type TagIcons = typeof tagIcons;

type TagKeys = keyof TagIcons;

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
	descriptions: {
		heading: string;
		description: string;
	}[];
	links: {
		type: string;
		url: string | null;
	}[];
	tags: string[];
	technologies: string[];
}

type Technologies = typeof technologies;

type TechnologyKeys = keyof Technologies;

export const ProjectCard = () => {
	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
			{projects["projects"].map((project: Project, index: number) => {
				return (
					<Card key={index} className="opacity-75 overflow-hidden">
						<CardContent>
							<div className="flex justify-center">
								<Image
									priority
									height={256}
									width={256}
									src={project.image}
									alt={project.title}
									style={{
										width: "100%",
										height: "auto",
									}}
									className="aspect-5/3 object-cover object-center border rounded-lg mb-2"
								/>
							</div>
							<p className="text-xl lg:text-lg tracking-tighter">{project.title}</p>
							<Separator />
							<div className="flex items-center">
								<div>
									<Badge variant={"secondary"}>
										<Clock />
										{project.duration.start} {`${project.duration.end === "Done" ? "" : " - " + project.duration.end}`}
									</Badge>
								</div>
								<div>
									{project.completed ? (
										<Badge className="rounded-full border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5">
											<Check /> Completed
										</Badge>
									) : (
										<Badge className="rounded-full border-none bg-red-600/10 text-red-600 focus-visible:ring-red-600/20 focus-visible:outline-none dark:bg-red-400/10 dark:text-red-400 dark:focus-visible:ring-red-400/40 [a&]:hover:bg-red-600/5 dark:[a&]:hover:bg-red-400/5">
											<Signal /> Work In Progress
										</Badge>
									)}
								</div>
							</div>
							<div className="inline-block p-2">
								<Popover>
									<PopoverTrigger>
										<Badge variant="outline" className="px-2 cursor-pointer">
											<NotebookText />
											Summary
										</Badge>
									</PopoverTrigger>
									<PopoverContent>{project.summary}</PopoverContent>
								</Popover>
							</div>
							<Separator />
							<Badge variant={"secondary"} className="mb-1">
								<CodeXml />
								External Links
							</Badge>
							<div className="m-1">
								{project.links.map((link, index) => {
									const key: ExternalLinkKeys = link.type as ExternalLinkKeys;

									return (
										<div key={index} className="inline">
											{link.url && (
												<>
													<Link
														href={link.url}
														rel="noopener noreferrer"
														target="_blank"
													>
														<Badge
															aria-disabled={
																key === "WIP" ? true : false
															}
														>
															{externalLinkIcons[key]}
															{link.type}
														</Badge>
													</Link>
												</>
											)}
										</div>
									);
								})}
							</div>
							<Separator />
							<Badge variant={"secondary"} className="mb-1">
								<Tag />
								Tags
							</Badge>
							<div className="mb-2">
								{project.tags.map((tag, index) => {
									const key: TagKeys = tag as TagKeys;

									return (
										<div key={index} className="inline pl-1">
											<Badge>
												{tagIcons[key]}
												{tag}
											</Badge>
										</div>
									);
								})}
							</div>
							<Separator />
							<div>
								<Badge variant={"secondary"} className="mb-1">
									<Layers />
									Tech Stack
								</Badge>
								<div className="gap-1 flex flex-items flex-wrap">
									{project.technologies.map((technology, index: number) => {
										const key: TechnologyKeys = technology as TechnologyKeys;
										return (
											<div key={index}>
												<Tooltip>
													<TooltipTrigger asChild>
														<Link
															href={
																technologies[key]
																	.url as keyof typeof technologies
															}
															rel="noopener noreferrer"
															target="_blank"
														>
															<Image
																className="w-[35] h-[35]"
																height={35}
																width={35}
																src={technologies[key].logo}
																alt={technologies[key].name}
															/>
														</Link>
													</TooltipTrigger>
													<TooltipContent>
														<p>{technologies[key].name}</p>
													</TooltipContent>
												</Tooltip>
											</div>
										);
									})}
								</div>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default ProjectCard;
