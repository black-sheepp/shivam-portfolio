"use client";
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";

const HeadMessage = () => {
	return (
		<section>
			<div className='grid grid-cols-1 mt-10 lg:grid-cols-12'>
				<div className='col-span-4 flex justify-center mb-4 mt-4'>
					<Image
						className='w-80 h-80 rounded-[20px] lg:w-120 h-120 '
						src={"/images/pp.png"}
						alt="Shivam's Porfolio Image"
						width={"450"}
						height={"450"}
					/>
				</div>
				<div className='col-span-8 flex flex-col justify-center m-4 lg:mx-4'>
					<h1 className='text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow via-cyan to-pink lg:text-5xl'>
						Hello &#x1F44B;, I&apos;m Shivam K Gupta
					</h1>
					<p className='text-xl my-3 text-grey'>
						&quot;I excel in full-stack development with expertise in Express.js, React, MongoDB, and Node.js for building robust web applications.&quot;
					</p>
					<div className="my-6">
						<p className="">
							{" "}
							<span className="text-3xl">I build </span>{" "}
							<span className="text-pink">
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
			</div>
		</section>
	);
};

export default HeadMessage;
