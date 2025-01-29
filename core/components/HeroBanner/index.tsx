"use client"

import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { FaChevronDown } from "react-icons/fa"; // Importing the down arrow icon

const HeroBanner = () => {
  // Smooth scroll function
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("myJourney");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
   
  };

  const scrollToContactSection = () => {
    const nextSection = document.getElementById("getInTouch");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }}

    //data new snm
    const scrollToProjectsSection = () => {
      const nextSection = document.getElementById("projects");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }}

  return (
    <div id="home" className="min-h-screen pt-36 relative">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
     absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
       bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Good things take time
          </p>

          <TextGenerateEffect
            words="Transform your ideas into reality and rise like a phoenix 🔥"
            className="text-center text-[40px] md:text-5xl"
          />

          <p className="text-center md:tracking-wider font-thin mb-4 text-sm md:text-lg lg:text-xl">
            Hey there! 👋 I&apos;m Shiva, a passionate MERN Stack Developer
            based in Vizag.
            <br />
            <strong>Let&apos;s build something amazing together!</strong> 🚀
            Feel free to{" "}
            <button onClick={scrollToContactSection} className="text-blue-500 hover:underline">
              get in touch
            </button>{" "}
            and explore what we can create.
          </p>

          {/* Button Container */}
          <div className="flex space-x-4">
            <a href="#projects">
              <Button
                onClick={scrollToProjectsSection}
                variant={"outline"}
                className="text-blue-500 border-2 border-blue-500 px-6 py-3 rounded-md shadow-md hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Projects
              </Button>
            </a>
            <a href="#download-cv">
              <Button
                variant={"outline"}
                className="text-green-500 border-2 border-green-500 px-6 py-3 rounded-md shadow-md hover:bg-green-500 hover:text-white transition duration-300"
              >
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Down Arrow */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToNextSection}
      >
        <FaChevronDown className="text-blue-500 text-3xl" />
      </div>
    </div>
  );
};

export default HeroBanner;
