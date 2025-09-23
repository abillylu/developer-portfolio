import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Image from "next/image";
import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";

import technologies from "@/data/technologies.json";

type Technologies = typeof technologies;

type TechnologyKeys = keyof Technologies;

export const TechCarousel = ({ techStack }: { techStack: string[] }) => {
	useEmblaCarousel.globalOptions = { loop: true };
	return (
		<div>
			<Carousel
				className="inherit"
				plugins={[
					AutoScroll({
						speed: 1,
						startDelay: 0.5,
						stopOnInteraction: false,
					}),
				]}
			>
				<CarouselContent>
					{techStack.map((technology: string) => {
						const key: TechnologyKeys = technology as TechnologyKeys;

						return (
							<CarouselItem
								key={technology}
								className={`m-0 p-0 basis-1/${techStack.length - 6}`}
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<div className="max-height-1/20 p-1 flex items-center cursor-pointer">
											<Image
												height={50}
												width={50}
												src={technologies[key].logo}
												alt={technologies[key].name}
												className="w-[50] h-[50]"
											/>
										</div>
									</TooltipTrigger>
									<TooltipContent>
										<p>{technologies[key].name}</p>
									</TooltipContent>
								</Tooltip>
							</CarouselItem>
						);
					})}
				</CarouselContent>
			</Carousel>
		</div>
	);
};

export default TechCarousel;
