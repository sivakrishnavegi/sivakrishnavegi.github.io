import {
    FaAws,
    FaDatabase,
    FaGitAlt,
    FaGithub,
    FaGoogle,
    FaNodeJs,
    FaReact,
  } from "react-icons/fa"; // Import icons
  import { SiMui, SiShadcnui, SiTailwindcss } from "react-icons/si"; // TailwindCSS, MUI, React Native icons
  import { TbBrandReactNative } from "react-icons/tb";
  
  const techStack = [
    {
      name: "React",
      icon: <FaReact className="text-5xl text-blue-500 mb-4" />,
      description: "A powerful library for building dynamic user interfaces.",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-5xl text-green-500 mb-4" />,
      description: "A JavaScript runtime for building scalable server-side applications.",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase className="text-5xl text-green-700 mb-4" />,
      description: "A NoSQL database for storing data in a flexible, JSON-like format.",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-5xl text-orange-500 mb-4" />,
      description: "A version control system for tracking changes in code and collaborating with others.",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-5xl text-blue-400 mb-4" />,
      description: "A utility-first CSS framework for building modern, responsive web designs quickly.",
    },
    {
      name: "ShadCN",
      icon: <SiShadcnui className="text-5xl text-black mb-4" />,
      description: "A design system and UI component library for building custom components.",
    },
    {
      name: "Material UI (MUI)",
      icon: <SiMui className="text-5xl text-blue-600 mb-4" />,
      description: "A popular React UI framework for building rich user interfaces with Material Design.",
    },
    {
      name: "Jest",
      icon: <FaGithub className="text-5xl text-yellow-500 mb-4" />,
      description: "A testing framework for JavaScript, providing a simple and powerful testing environment.",
    },
    {
      name: "Enzyme",
      icon: <FaGithub className="text-5xl text-green-500 mb-4" />,
      description: "A testing utility for React that makes it easier to test your components' output and behavior.",
    },
    {
      name: "React Native (Expo)",
      icon: <TbBrandReactNative className="text-5xl text-blue-500 mb-4" />,
      description: "A framework for building native apps using React, with Expo providing a set of tools to streamline development.",
    },
    {
      name: "AWS",
      icon: <FaAws className="text-5xl text-orange-500 mb-4" />,
      description: "Amazon Web Services for cloud computing, offering scalable infrastructure solutions.",
    },
    {
      name: "Google Cloud",
      icon: <FaGoogle className="text-5xl text-blue-500 mb-4" />,
      description: "Google's cloud platform offering compute, storage, and machine learning services.",
    },
  ];
  
  const MyTechStack = () => {
    return (
      <div  id="myTechStack" className="w-full bg-[#010319] px-4">
        <div className="max-w-6xl mx-auto text-center py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Tech Stack
          </h2>
          <p className="text-sm md:text-lg  font-light mb-10 text-zinc-400">
            These are the few technologies I work with to create dynamic and scalable web and mobile applications. I'm constantly learning and adapting to new tools and frameworks.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg"
              >
                {tech.icon}
                <p className="text-white text-lg font-semibold mb-2">{tech.name}</p>
                <p className="text-white text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MyTechStack;
  