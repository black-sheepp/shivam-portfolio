"use client"
import Image from "next/image";
import HeadMessage from "./components/HeadMessage";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import AlertNoty from "./components/AlertNoty";
import Qualification from "./components/Qualification";
import { useEffect } from "react";

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col bg-[#00000]'>
			{/* <AlertNoty/> */}
			<Navbar />
			<div className="">
				<HeadMessage />
				<Qualification />
				<Skills />
				<Projects />
				<AboutMe />
				<ContactMe />
			</div>
		</main>
	);
}
