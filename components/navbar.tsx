import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="opacity-75 flex flex-col items-stretch overflow-hidden font-lg">
			<Menubar className="bg-transparent border-none shadow-none min-w-4xl gap-50">
				<MenubarMenu></MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={"/"}>Home</Link>
					</MenubarTrigger>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={"/projects"}>Projects</Link>
					</MenubarTrigger>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={"/experience"}>Experience</Link>
					</MenubarTrigger>
				</MenubarMenu>
				<MenubarMenu>
					<MenubarTrigger>
						<Link href={"/education"}>Education</Link>
					</MenubarTrigger>
				</MenubarMenu>
				<MenubarMenu>
					<ThemeToggle />
				</MenubarMenu>
			</Menubar>
		</div>
	);
};

export default Navbar;
