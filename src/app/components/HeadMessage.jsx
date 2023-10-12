import Image from "next/image";
import React from "react";

const HeadMessage = () => {
	return (
		<section>
			<div className='grid grid-cols-1 mt-5 lg:grid-cols-12'>
				<div className='col-span-7 flex flex-col justify-center ml-14'>
					<h1 className='text-6xl font-extrabold mb-5'>Hello, I'm Shivam K Gupta</h1>
					<p className='text-xl mb-4'>
						I am a full-stack developer with expertise in a wide range of technologies. I specialize
						in building robust and dynamic web applications that encompass both the front-end and
						back-end aspects of development. Throughout my career, I have gained extensive experience
						in various areas of web development. I excel at designing and implementing APIs using
						Express.js, creating responsive and user-friendly interfaces with React, and managing data
						efficiently using MongoDB. I am well-versed in utilizing Node.js
						libraries and frameworks like Express to build scalable and high-performance server
						applications.
					</p>
				</div>
				<div className='col-span-5 flex justify-center'>
					<Image
						className='rounded-[40px]'
						src={"/images/pp.png"}
						alt="Shivam's Porfolio Image"
						width={"400"}
						height={"400"}
					/>
				</div>
			</div>
		</section>
	);
};

export default HeadMessage;
