import { images } from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import {
  FaAws,
  FaCss3Alt,
  FaDatabase,
  FaHtml5,
  FaJsSquare,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiRedux, SiReduxsaga, SiShadcnui, SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// Import image constants
const { FLICKSB2B, greenlyPulse, blogNextJs } = images;

// Define types for the skills and projects
interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  link?: string;
  image: StaticImageData | string;
  skills: Skill[];
}

// Array of projects with data
const projects: Project[] = [
  {
    id: 1,
    title: "Greenico Pulse",
    description:
      "An IoT-based mobile application built with React Native for monitoring and managing hydroponic farms. The app utilizes Native Notify for push notifications and integrates MongoDB and Express.js for data management.",
    techStack: "React Native, TailwindCSS, Native Notify, MongoDB, Express.js",
    image: greenlyPulse, // Replace with actual project image
    skills: [
      { name: "React Native", icon: <FaMobileAlt className="text-blue-500" /> },
      {
        name: "Native Notify",
        icon: <TbBrandReactNative className="text-green-500" />,
      },
      { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
      { name: "Tailwind Css", icon: <SiTailwindcss className="text-blue-500" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
    ],
  },
  {
    id: 2,
    title: "Flicksblog",
    description:
      "Flicksblog is a fashion and lifestyle blog that celebrates creativity, trends, and personal style. It provides engaging articles, expert styling tips, and inspiration for every occasion. From ethnic wear to everyday casuals, Flicksblog explores a variety of styles and helps readers stay updated with the latest fashion news.",
    techStack: "Next.js, MongoDB, Express.js, React, Node.js",
    link: "https://umsclone.vercel.app/",
    image: blogNextJs,
    skills: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Next.js", icon: <FaReact className="text-blue-500" /> },
    ],
  },

  {
    id: 3,
    title: "Flicksbee Apparel",
    description:
      "A B2B website built using the MERN stack with ShadCN UI components. Multiple roles for admins, vendors, and customers. Integrated Redux for state management.",
    techStack:
      "MERN Stack (MongoDB, Express.js, React, Node.js), ShadCN UI, Redux",
    link: "https://www.flicksbeeapparel.com/",
    image: FLICKSB2B,
    skills: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Next.js", icon: <FaReact className="text-blue-500" /> },
      { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> },
      { name: "Redux", icon: <SiRedux className="text-red-500" /> },
      { name: "ReduxSaga", icon: <SiReduxsaga className="text-blue-500" /> },
      { name: "Aws", icon: <FaAws className="text-green-500" /> },
      { name: "Shadcn", icon: <SiShadcnui className="text-white" /> },

    ],
  },
];

// Define the type for the MyProjects component props
const MyProjects: React.FC = () => {
  return (
    <section
      id="myProjects"
      className="py-10 px-6 sm:px-10 md:px-20 lg:px-40 mx-auto text-white bg-[#010319] min-h-screen"
    >
      <h2 className="text-3xl font-bold text-center mb-4">My Projects 💻</h2>
      <p className="text-sm md:text-lg text-center font-light mb-10 text-zinc-400">
        I build dynamic and scalable applications using the MERN stack (MongoDB,
        Express.js, React, Node.js), constantly learning new tools to enhance my
        skills.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects &&
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#10172A] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              {/* Project Image */}
              <div className="w-full mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={300}
                  width={300}
                  className="w-full h-64 object-contain rounded-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-semibold text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Tech Stack: {project.techStack}
                </p>

                {/* Skills Icons */}
                <div className="flex flex-wrap gap-4 mt-4">
                  {project.skills.slice(0, 8).map((skill, index) => (
                    <div key={index} className="flex items-center">
                      {skill.icon}
                      <span className="ml-2 text-gray-400">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline mt-4 block"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default MyProjects;
