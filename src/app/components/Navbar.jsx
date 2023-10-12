import React from "react";
import Logo from "./Logo";

const Navbar = () => {
	return (
			<div className='flex justify-center lg:justify-between border-b-4 border-b-[#FFDC51] px-10 p-2'>
				<div className='flex cursor-pointer hover:text-[#E721B6]'>
					<Logo />
					<p className="self-center text-2xl ml-4 font-bold">Shivam's Portfolio</p>
				</div>
				<div className=' hidden lg:flex'>
					<ul className='flex self-center text-lg'>
						<li className="mr-10 cursor-pointer hover:text-[#E721B6]">Skill</li>
						<li className="mr-10 cursor-pointer hover:text-[#E721B6]">Work</li>
						<li className="mr-10 cursor-pointer hover:text-[#E721B6]">About</li>
						<li className="mr-10 cursor-pointer hover:text-[#E721B6]">Contact</li>
					</ul>
				</div>
			</div>

	);
};

export default Navbar;
