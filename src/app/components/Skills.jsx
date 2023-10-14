import React from "react";

const frontEnd = [
	{
		skill: "HTML",
		range: "95%",
	},
	{
		skill: "CSS",
		range: "75%",
	},
	{
		skill: "JavaScript",
		range: "70%",
	},
	{
		skill: "ReactJS",
		range: "75%",
	},
	{
		skill: "NextJS",
		range: "75%",
	},
];

const backEnd = [
    {
        skill: "NodeJs",
        range: "85%",
    },
    {
        skill: "ExpressJs",
        range: "75%",
    },
    {
        skill: "MongoDB",
        range: "70%",
    },
    {
        skill: "PassportJs",
        range: "80%",
    },
    {
        skill: "JWT Auth",
        range: "85%",
    },
    {
        skill: "WebSocket",
        range: "65%",
    },
]
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
								<div className="pl-4">
									<p className='text-white text-xl my-2'>{title.skill}</p>
									<div className='flex w-3/4 h-2 bg-grey rounded-full overflow-hidden dark:bg-gray-700'>
										<div
											className='flex flex-col justify-center overflow-hidden bg-cyan'
											role='progressbar'
											style={{ width: `${title.range}` }}
											aria-valuenow={25}
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
								<div className="pl-4">
									<p className='text-white text-xl my-2'>{title.skill}</p>
									<div className='flex w-3/4 h-2 bg-grey rounded-full overflow-hidden dark:bg-gray-700'>
										<div
											className='flex flex-col justify-center overflow-hidden bg-cyan'
											role='progressbar'
											style={{ width: `${title.range}` }}
											aria-valuenow={25}
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
