import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const navlinks = [
	{
		title: "Home",
		path: "/",
	},
	{
        title: "Skills",
		path: "/skills",
	},
	{
        title: "Projects",
		path: "/projects",
	},
    {
        title: "About",
        path: "/about",
    },
	{
		title: "Contact",
		path: "/contact",
	},
];

const Navbar = () => {
	return (
		<div className='flex justify-center fixed right-0 left-0 top-0 bg-black lg:justify-between border-b-4 border-b-[#FFDC51] px-10 p-3'>
			<Link href={"/"} className='flex cursor-pointer hover:text-pink'>
				<Logo />
				<p className='self-center text-2xl ml-4 font-bold'>Shivam&apos;s Portfolio</p>
			</Link>
			<div className=' hidden lg:flex'>
				<ul className='flex self-center text-lg'>
					{navlinks.map((link, index) => (
						<li key={index} className='mr-10 cursor-pointer hover:text-pink'>
							<Link href={link.path}> {link.title} </Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
