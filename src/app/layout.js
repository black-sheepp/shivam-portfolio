import "./globals.css";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const jost = Jost({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "Shivam's Portfolio",
	description: "Created by Shivam K Gupta",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/favicon.ico' />
			</head>
			<body className={`${inter.className} ${jost.className}`}>{children}</body>
		</html>
	);
}
