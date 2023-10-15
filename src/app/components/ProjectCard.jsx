"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const ProjectCard = ({ projectName, description, technologies, gitHubRepository, thumbnail }) => {
	return (
		<div className='w-11/12 rounded-2xl border-solid border-2 border-white overflow-hidden shadow-lg'>
			<Image
				className='w-full object-fill h-[220px]'
				src={thumbnail}
				alt='Sunset in the mountains'
				width={"400"}
				height={"200"}
			/>
			<Link href={gitHubRepository} target='_blank'>
				<div className='px-6 py-2'>
					<div className='text-xl mb-2 text-pink'>{projectName}</div>
					<p className='text-grey text-base hidden lg:flex'>{description}</p>
				</div>
			</Link>

			<div className='px-6 pt-1 pb-2'>
				{technologies.map((tech, index) => (
					<button key={index} className='text-sm bg-[#ccff33] text-black px-3 py-1 rounded-2xl m-1 cursor-default'>
						{tech}
					</button>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
