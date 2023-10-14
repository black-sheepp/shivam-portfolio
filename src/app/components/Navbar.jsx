import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const navlinks = [
	{
		title: "Qualification",
		path: "#qualification",
	},
	{
		title: "Skills",
		path: "#skills",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar = () => {
	return (
		<div className='fixed right-0 left-0 top-0 z-10 '>
			<div className='flex justify-center bg-black lg:justify-between  px-10 p-3'>
				<Link href={"/"} className='flex cursor-pointer hover:text-pink'>
					<Logo />
					<p className='self-center text-xl lg:text-2xl ml-4 font-bold'>Shivam&apos;s Portfolio</p>
				</Link>
				<div className=' hidden lg:flex'>
					<ul className='flex self-center text-lg'>
						{navlinks.map((link, index) => (
							<li key={index} className='mr-10 cursor-pointer hover:text-pink'>
								<Link href={link.path}> {link.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='h-1 bg-gradient-to-r from-pink via-cyan to-yellow'></div>
		</div>
	);
};

export default Navbar;
