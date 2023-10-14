"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const ProjectCard = ({ projectName, description, technologies, gitHubRepository, thumbnail }) => {
	// const defaultImageSrc = "/images/pp.png";
	// let passImageSrc = "";

	// useEffect(() => {
	// 	if (thumbnail == "") {
	// 		passImageSrc = defaultImageSrc;
	// 	} else {
	// 		passImageSrc = thumbnail;
	// 	}
	// }, []);
	return (
		<Link href={gitHubRepository} target='_blank'>
			<div className=' rounded-2xl border-solid border-2 border-white overflow-hidden shadow-lg cursor-pointer'>
				<Image
					className='w-full object-cover h-[220px] rounded-2xl'
					src={thumbnail}
					alt='Sunset in the mountains'
					width={"400"}
					height={"200"}
				/>
				<div className='px-6 py-2'>
					<div className='text-xl mb-2 text-pink'>{projectName}</div>
					<p className='text-grey text-base'>{description}</p>
				</div>
				<div className='px-6 pt-1 pb-2'>
					{technologies.map((tech, index) => (
						<button className='text-sm bg-[#ccff33] text-black px-3 py-1 rounded-2xl m-1'>
							{tech}
						</button>
					))}
				</div>
			</div>
		</Link>
	);
};

export default ProjectCard;
