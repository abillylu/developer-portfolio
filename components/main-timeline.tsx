"use client";

import {
	Timeline,
	TimelineDot,
	TimelineItem,
	TimelineContent,
	TimelineHeading,
	TimelineLine,
} from "@/components/ui/timeline";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, FolderClosed, Lightbulb, Medal, Newspaper } from "lucide-react";
import { Badge } from "./ui/badge";

import technologies from "@/data/technologies.json";

type Technologies = typeof technologies;

type TechnologyKeys = keyof Technologies;

import TechCarousel from "./tech-carousel";

interface ContentTimeline {
	logo: string;
	school: string;
	location: {
		text: string;
		url: string;
	};
	duration: {
		start: string;
		end?: string | null;
	};
	link?: string | null;
	program: string;
	level: string | null;
	description: string;
	projects: {
		title: string;
		logo: string;
		application: string;
		duration: {
			start: string;
			end: string;
		};
		link?: string | null;
	}[];
	header: string;
	skills: string[];
	technologies: string[];
}

type Position = "left" | "right" | null | undefined;

export const MainTimeline = ({
	timeline,
	position,
	heading,
}: {
	timeline: ContentTimeline[];
	position: Position;
	heading: string;
}) => {
	return (
		<div>
			{position == "right" ? (
				<div className="flex">
					<p className="md:ml-auto p-3 text-3xl">{heading}</p>
				</div>
			) : (
				<p className="p-3 text-3xl">{heading}</p>
			)}
			<Timeline positions={position}>
				{timeline.map((education: ContentTimeline, index: number) => {
					return (
						<TimelineItem status="default" key={education.school}>
							<TimelineHeading side={position == "right" ? "left" : "right"}>
								{education.duration.start} - {education.duration.end}
							</TimelineHeading>
							{index || education.duration.end !== "Present" ? (
								<>
									<TimelineDot status="done" />
									<TimelineLine done />
								</>
							) : (
								<>
									<TimelineDot status="current" />
									<TimelineLine />
								</>
							)}
							<TimelineContent
								side={position == "right" ? "left" : "right"}
								className="w-full"
							>
								<Card className="p-4 opacity-75 overflow-hidden">
									<div className="flex items-center">
										<Image
											src={education.logo}
											width={100}
											height={100}
											alt={education.school}
										/>
										<p className="px-2 text-lg">{education.school}</p>
										{education.link && (
											<Link
												href={education.link}
												rel="noopener noreferrer"
												target="_blank"
											>
												<ExternalLink />
											</Link>
										)}
									</div>
									<CardHeader>
										<CardTitle className="text-left">
											{education.program}
										</CardTitle>
									</CardHeader>
									<CardContent>
										{education.technologies.length > 0 && (
											<>
												<div className="flex">
													<Badge variant={"secondary"} className="mb-2">
														<Newspaper />
														{education.header}
													</Badge>
												</div>
												<p className="p-2 text-justify">
													{education.description}
												</p>
												{education.level && (
													<p className="p-2 text-justify">
														<Badge variant={"default"} className="mb-2">
															<Medal />
															{education.level}
														</Badge>
													</p>
												)}

												{education.projects?.length > 0 && (
													<>
														<div className="flex">
															<Badge
																variant={"secondary"}
																className="mb-2"
															>
																<FolderClosed />
																Projects
															</Badge>
														</div>
														{education.projects?.map(
															(project, index) => {
																return (
																	<Card
																		key={index}
																		className="mb-2 overflow-hidden"
																	>
																		<CardContent className="p-2">
																			<div className="flex items-center gap-2">
																				<Image
																					width={50}
																					height={50}
																					src={
																						project.logo
																					}
																					alt={
																						project.title
																					}
																				/>
																				<p key={index}>
																					{project.title}
																				</p>
																			</div>
																			<p>
																				{
																					project.application
																				}
																			</p>
																			<p>
																				{
																					project.duration
																						.start
																				}
																				{project.duration
																					.end === "Done"
																					? ""
																					: ` - ${project.duration.end}`}
																			</p>
																		</CardContent>
																	</Card>
																);
															},
														)}
													</>
												)}
												<div className="flex">
													<Badge variant={"secondary"} className="mb-2">
														<Lightbulb />
														Technologies Learned
													</Badge>
												</div>
											</>
										)}
										{education.technologies.length > 5 ? (
											<div
												className={
													education.technologies.length < 5
														? "flex justify-center"
														: ""
												}
											>
												<TechCarousel techStack={education.technologies} />
											</div>
										) : (
											<div className="gap-1 flex flex-items flex-wrap">
												{education.technologies.map(
													(technology, index: number) => {
														const key: TechnologyKeys =
															technology as TechnologyKeys;
														return (
															<div key={index}>
																<Image
																	height={35}
																	width={35}
																	className="w-[50] h-[50]"
																	src={technologies[key].logo}
																	alt={technologies[key].name}
																/>
															</div>
														);
													},
												)}
											</div>
										)}
									</CardContent>
									<CardFooter></CardFooter>
								</Card>
							</TimelineContent>
						</TimelineItem>
					);
				})}
				<TimelineItem>
					<TimelineDot status={"current"} />
				</TimelineItem>
			</Timeline>
		</div>
	);
};

export default MainTimeline;
