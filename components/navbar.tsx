import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

import Link from "next/link";

export const Navbar = () => {
	return (
		<div className="opacity-90 overflow-hidden">
			<Menubar className="bg-transparent border-none shadow-none">
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
			</Menubar>
		</div>
	);
};

export default Navbar;
