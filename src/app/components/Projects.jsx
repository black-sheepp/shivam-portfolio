import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
	{
		name: "ERS",
		description:
			"Created an ERS web app using MERN stack with secure authentication, a user-friendly interface, and a scalable MongoDB database for seamless feedback submission among colleagues.",
		technologies: [
			"NodeJs",
			"ExpressJS",
			"PassportJS",
			"MongoDB",
			"Mongoose",
			"EJS",
			"RestAPI",
			"Bootstrap",
			"CSS",
		],
		gitHubRepository: "https://github.com/black-sheepp/ERS",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/ers+(1).png",
	},
	{
		name: "ECommerce-Web-API",
		description:
			"Develop Node.js and Express.js API with JWT authentication for secure product editing and deletion. Implement structured edit requests and robust error handling for reliable product removal.",
		technologies: ["NodeJs", "ExpressJS", "JWT Auth", "MongoDB", "Mongoose", "RestAPI"],
		gitHubRepository: "https://github.com/black-sheepp/ECommerce-Web-API",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/restapi+(1).png",
	},
	{
		name: "HiveMind",
		description:
			"Created a secure Social Media platform with real-time chat, Google SignIn, and data protection using NodeJs, EJS, MongoDB, Redis, and web-sockets.",
		technologies: [
			"NodeJs",
			"ExpressJS",
			"PassportJS",
			"MongoDB",
			"Mongoose",
			"EJS",
			"RestAPI",
			"Bootstrap",
			"CSS",
			"Redis-Server",
			"Nodemailer",
			"Websocket",
		],
		gitHubRepository: "https://github.com/black-sheepp/HIveMind-2.0",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/hivemind+(1).png",
	},
	{
		name: "ChatSphere",
		description:
			"Feature-rich chat app using React.js and Next.js. It has advanced messaging features, responsive design, and Firebase integration for security and data management.",
		technologies: ["ReactJs", "NextJs", "CSS", "TailwindCSS", "Firebase", "Social Auth"],
		gitHubRepository: "https://github.com/black-sheepp/chat-sphere",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/chatsphere+(1).png",
	},
	{
		name: "TODO WebApp",
		description:
			"user-friendly Todo list app with ReactJS, featuring modular UI components, local storage for data retention, styled CSS with Tailwind, animations, and a reset button for enhanced usability.",
		technologies: ["ReactJs", "CSS", "TailwindCSS", "LocalStorage", "AnimateCSS"],
		gitHubRepository: "https://github.com/black-sheepp/todo-app-reactjs",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/todo+(1).png",
	},
	{
		name: "Dishpedia",
		description:
			"Web application developed using HTML, CSS, and JavaScript. Dishpedia fetches meal data from a database and returns detailed information about various dishes. Users can explore recipes, ingredients, and cooking instructions. ",
		technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "Fetch", "Ajax"],
		gitHubRepository: "https://github.com/black-sheepp/Dishpedia--The-MealDB-App",
		thumbnail: "https://shivam-nextjs.s3.ap-south-1.amazonaws.com/dishpedia+(1).png",
	},
];

const Projects = () => {
	return (
		<section className=' p-4 lg:px-28'>
			<div>
				<h1 className='text-yellow text-4xl my-4'>Projects</h1>
				<div className='grid mx-8 xl:grid-cols-3 gap-x-16 gap-y-10 lg:gap-x-4 md:grid-cols-2'>
					{projects.map((project, index) => (
						<ProjectCard key={index}
							projectName={project.name}
							description={project.description}
							technologies={project.technologies}
							gitHubRepository={project.gitHubRepository}
							thumbnail={project.thumbnail}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
