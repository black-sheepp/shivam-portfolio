import { inView, motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const qualifications = [
	{
		institute: "National Institute of Technology, Warangal",
		degree: "Bachelor of Technology",
		stream: "Electronics & Comm. Engineering",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/nitw-logo.jpeg",
	},
	{
		institute: "Coding Ninjas",
		degree: "Front-End Development",
		stream: "HTML, CSS, JavaScript, ReactJs",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/coding-ninjas.avif",
	},
	{
		institute: "Coding Ninjas",
		degree: "Back-End Development",
		stream: "NodeJs, ExpressJs, MongoDB",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/coding-ninjas.avif",
	},
];

const Qualification = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true});
	return (
		<section className=' p-4 lg:px-28' id="qualification">
			<div>
				<h1 className='text-yellow text-4xl my-4'>Qualification</h1>
				<div className='grid grid-cols-1 xl:grid-cols-2'>
					{qualifications.map((qualification, index) => (
						<div key={index} className='flex align-middle ml-0 md:ml-8 my-2'>
							<Image
								src={qualification.thumbnail}
								width={100}
								height={100}
								alt='Image'
								className=' w-24 h-24 my-auto'
							/>
							<div className='flex flex-col justify-center align-middle h-36 md:h-24 ml-6'>
								<p className='text-xl md:text-2xl text-white'>{qualification.institute}</p>
								<div className='h-0.5 bg-green my-1'></div>
								<p className='text-sm md:text-lg text-cyan'>
									{qualification.stream} | {qualification.degree}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Qualification;
