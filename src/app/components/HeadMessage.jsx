"use client";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";
import AccountNotify from "./AccountNotify";
import { motion } from "framer-motion";

const headMessage = {
	message: "Hello 👋🏻, I'm Shivam K Gupta",
	objective: `"I excel in the realm of full-stack development, where my expertise shines in Express.js, React, MongoDB, and Node.js. This combination of technologies empowers me to craft powerful and resilient web applications that meet diverse user demands. With a deep understanding of these tools, I thrive in developing innovative and user-centric solutions that have a significant impact in the digital landscape."`,
};

const HeadMessage = () => {
	return (
		<section>
			<motion.div
			initial={{opacity:0, scale:0.5}}
			animate={{opacity:1, scale:1}}
			transition={{duration:1}}
			className='flex flex-col justify-center m-4 lg:flex-row'>
				<div
					
					className='mx-16 mt-8 flex justify-center flex-col lg:px-auto'>
					<Image
						className='w-80 h-80 rounded-[20px] m-auto'
						src={"/images/pp.png"}
						alt="Shivam's Porfolio Image"
						width={"450"}
						height={"450"}
					/>
					<AccountNotify />
				</div>
				<div className=' flex flex-col justify-center m-4 xl:mx-8'>
					<h1 className='text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow via-cyan to-pink lg:text-5xl'>
						{headMessage.message}
					</h1>
					<p className='text-lg my-3 text-grey text-justify'>{headMessage.objective}</p>
					<div className='my-6'>
						<p className=''>
							{" "}
							<span className='text-3xl'>I do </span>{" "}
							<span className='text-pink'>
								<TypeAnimation
									sequence={[
										// Same substring at the start will only be typed out once, initially
										"UI/UX Design",
										1000, // wait 1s before replacing "Mice" with "Hamsters"
										"Front-End Development",
										1000,
										"Back-End Development",
										1000,
										"Freelance Project",
										1000,
									]}
									wrapper='span'
									speed={50}
									style={{ fontSize: "2rem", display: "inline-block" }}
									repeat={Infinity}
								/>{" "}
							</span>
						</p>
					</div>
					<div className=' flex'>
						<button className='bg-[#FFDC51] text-black p-2 mr-6 hover:bg-white'>Hire Me</button>
						<button className='bg-[#34D3EB] text-black p-2 mr-6 hover:bg-white'>Download CV</button>
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default HeadMessage;
