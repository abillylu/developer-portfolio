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
										{/* <p className="text-justify">{education.description}</p> */}
										{/* <p className="text-justify w-120"> */}
										<p>{education.description}</p>
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
