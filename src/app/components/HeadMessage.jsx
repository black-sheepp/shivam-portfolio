import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const HeadMessage = () => {
	return (
		<section>
			<div className='grid grid-cols-1 mt-16 lg:grid-cols-12'>
				<div className='col-span-4 flex justify-center px-0'>
					<Image
						className='rounded-[30px] w-120 h-120'
						src={"/images/pp.png"}
						alt="Shivam's Porfolio Image"
						width={"450"}
						height={"450"}
					/>
				</div>
				<div className='col-span-8 flex flex-col justify-center m-4 lg:mx-14'>
					<h1 className='text-5xl font-extrabold mb-5'>Hello, I'm Shivam K Gupta</h1>
					<p className='text-lg mb-4'>
						I am a full-stack developer with expertise in a wide range of technologies. I specialize
						in building robust and dynamic web applications that encompass both the front-end and
						back-end aspects of development. Throughout my career, I have gained extensive experience
						in various areas of web development. I excel at designing and implementing APIs using
						Express.js, creating responsive and user-friendly interfaces with React, and managing data
						efficiently using MongoDB. I am well-versed in utilizing Node.js libraries and frameworks
						like Express to build scalable and high-performance server applications.
					</p>
					<div className=' flex'>
						<button className='bg-[#FFDC51] text-black p-2 mr-6'>Hire Me</button>
						<button className='bg-[#34D3EB] text-black p-2 mr-6'>Download CV</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeadMessage;
