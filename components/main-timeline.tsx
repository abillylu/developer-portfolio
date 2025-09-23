"use client";

import { useState, useEffect } from "react";

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
import { ExternalLink } from "lucide-react";

interface ContentTimeline {
	logo: string;
	school: string;
	duration: {
		start: string;
		end: string;
	};
	link: string | null;
	program: string;
	description: string;
}

export const MainTimeline = ({ timeline }: { timeline: ContentTimeline[] }) => {
	let getActiveBreakpoint = () => "xl";

	const [breakpoint, setBreakpoint] = useState(getActiveBreakpoint());

	const handleResize = () => {
		setBreakpoint(getActiveBreakpoint());
	};

	useEffect(() => {
		const testWindow = window;

		testWindow.addEventListener("resize", handleResize);

		getActiveBreakpoint = () => {
			if (testWindow.matchMedia("(min-width: 1280px)").matches) {
				return "xl";
			} else if (testWindow.matchMedia("(min-width: 1024px)").matches) {
				return "lg";
			} else if (testWindow.matchMedia("(min-width: 768px)").matches) {
				return "md";
			} else if (testWindow.matchMedia("(min-width: 640px)").matches) {
				return "sm";
			} else {
				return "default";
			}
		};
		return () => {
			testWindow.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div>
			<Timeline
				positions={
					breakpoint == "md" ||
					breakpoint == "sm" ||
					breakpoint == "default" ||
					breakpoint == "lg"
						? "left"
						: "center"
				}
			>
				{timeline.map((education: ContentTimeline, index: number) => {
					let side: "left" | "right" = index % 2 == 0 ? "left" : "right";
					if (
						breakpoint == "md" ||
						breakpoint == "sm" ||
						breakpoint == "default" ||
						breakpoint == "lg"
					) {
						side = "right";
					}

					return (
						<TimelineItem status="default" key={education.school}>
							<TimelineHeading side={side}>
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
							<TimelineContent side={side}>
								<Card className="w-120 p-4 opacity-75 relative flex flex-col justify-between overflow-hidden rounded-md border hover:shadow-md">
									<div className="flex items-center">
										<Image
											src={`/${education.logo}`}
											width={100}
											height={100}
											alt={education.school}
										/>
										<h1 className="px-2 text-lg">{education.school}</h1>
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
										<CardTitle>{education.program}</CardTitle>
									</CardHeader>
									<CardContent>
										{/* <p className="text-justify">{education.description}</p> */}
										{/* <p className="text-justify w-120"> */}
										<p className="text-justify">{education.description}</p>
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
