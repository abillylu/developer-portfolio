import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Developer Portfolio",
	description: "Billy A. Lu / abillylu's Developer Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-1000`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<div className="py-8 md:py-16 lg:py-24">
						<div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
							<div className="mb-10 md:text-center">
								<nav className="w-auto mb-10 flex">
									<div>
										<Navbar />
									</div>
									<div className="ml-auto">
										<ThemeToggle />
									</div>
								</nav>
							</div>
							{children}
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
