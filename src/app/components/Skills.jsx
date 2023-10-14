import React from "react";
import { FcOk, FcReading } from "react-icons/fc";

const frontEnd = [
	{
		skill: "HTML",
		range: "95",
		certified: true,
	},
	{
		skill: "CSS",
		range: "75",
		certified: true,
	},
	{
		skill: "JavaScript",
		range: "70",
		certified: true,
	},
	{
		skill: "ReactJS",
		range: "75",
		certified: true,
	},
	{
		skill: "NextJS",
		range: "75",
		certified: false,
	},
	{
		skill: "TailwindCSS",
		range: "75",
		certified: false,
	},
];

const backEnd = [
	{
		skill: "NodeJs",
		range: "85",
		certified: true,
	},
	{
		skill: "ExpressJs",
		range: "75",
		certified: true,
	},
	{
		skill: "MongoDB",
		range: "70",
		certified: true,
	},
	{
		skill: "PassportJs",
		range: "80",
		certified: true,
	},
	{
		skill: "JWT Auth",
		range: "85",
		certified: true,
	},
	{
		skill: "WebSocket",
		range: "65",
		certified: true,
	},
];

const otherSkills = [
	{
		skill: "Java",
		range: "75",
		certified: true,
	},
	{
		skill: "C++",
		range: "60",
		certified: false,
	},
	{
		skill: "Data Structures & Algorithms",
		range: "65",
		certified: false,
	},
	{
		skill: "MS Office",
		range: "65",
		certified: true,
	},
];

function skillMeasures(range) {
	if (range >= 0 && range <= 50) {
		return "bg-redColor";
	} else if (range > 50 && range <= 60) {
		return "bg-orangeColor";
	} else if (range > 60 && range <= 70) {
		return "bg-yellowColor";
	} else if (range > 70 && range <= 84) {
		return "bg-lightGreenColor";
	} else if (range > 84 && range <= 100) {
		return "bg-brightGreenColor";
	} else {
		return "bg-cyan";
	}
}

const Skills = () => {
	return (
		<section className=' p-4 lg:px-28'>
			<div>
				<h1 className='text-yellow text-4xl my-4'>Skills</h1>
				<div className='flex flex-col lg:flex-row'>
					<div className='w-3/4 lg:w-1/2 mb-4'>
						<p className='text-pink text-2xl'>Front End</p>
						{frontEnd.map((title, index) => {
							return (
								<div className='pl-4' key={index}>
									<div className='flex align-middle'>
										<p className='text-white text-xl my-2'>{title.skill}</p>
										{title.certified ? (
											<div className="flex mt-4">
												<FcOk className="ml-3"/>
												<p className='ml-1 text-cyan text-sm align-middle'>
													Certified
												</p>
											</div>
										) : (
											<div className="flex mt-4">
												<FcReading className="ml-3"/>
												<p className='ml-1 text-orangeColor text-sm align-middle'>
													Learning
												</p>
											</div>
										)}
									</div>
									<div className='flex w-3/4 h-2 bg-greyDark rounded-full overflow-hidden'>
										<div
											className={`flex flex-col justify-center overflow-hidden ${skillMeasures(
												title.range
											)}`}
											role='progressbar'
											style={{ width: `${title.range}%` }}
											aria-valuenow={title.range}
											aria-valuemin={0}
											aria-valuemax={100}
										/>
									</div>
								</div>
							);
						})}
					</div>
					<div className='w-3/4 lg:w-1/2 mb-4'>
						<p className='text-pink text-2xl'>Back End</p>
						{backEnd.map((title, index) => {
							return (
								<div className='pl-4' key={index}>
									<div className='flex align-middle'>
										<p className='text-white text-xl my-2'>{title.skill}</p>
										{title.certified ? (
											<div className="flex mt-4">
												<FcOk className="ml-3"/>
												<p className='ml-1 text-cyan text-sm align-middle'>
													Certified
												</p>
											</div>
										) : (
											<div className="flex mt-4">
												<FcReading className="ml-3"/>
												<p className='ml-1 text-orangeColor text-sm align-middle'>
													Learning
												</p>
											</div>
										)}
									</div>
									<div className='flex w-3/4 h-2 bg-greyDark rounded-full overflow-hidden'>
										<div
											className={`flex flex-col justify-center overflow-hidden ${skillMeasures(
												title.range
											)}`}
											role='progressbar'
											style={{ width: `${title.range}%` }}
											aria-valuenow={title.range}
											aria-valuemin={0}
											aria-valuemax={100}
										/>
									</div>
								</div>
							);
						})}
					</div>
					<div className='w-3/4 lg:w-1/2 mb-4'>
						<p className='text-pink text-2xl'>Other</p>
						{otherSkills.map((title, index) => {
							return (
								<div className='pl-4' key={index}>
									<div className='flex align-middle'>
										<p className='text-white text-xl my-2'>{title.skill}</p>
										{title.certified ? (
											<div className="flex mt-4">
												<FcOk className="ml-3"/>
												<p className='ml-1 text-cyan text-sm align-middle'>
													Certified
												</p>
											</div>
										) : (
											<div className="flex mt-4">
												<FcReading className="ml-3"/>
												<p className='ml-1 text-orangeColor text-sm align-middle'>
													Learning
												</p>
											</div>
										)}
									</div>
									<div className='flex w-3/4 h-2 bg-greyDark rounded-full overflow-hidden'>
										<div
											className={`flex flex-col justify-center overflow-hidden ${skillMeasures(
												title.range
											)}`}
											role='progressbar'
											style={{ width: `${title.range}%` }}
											aria-valuenow={title.range}
											aria-valuemin={0}
											aria-valuemax={100}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
