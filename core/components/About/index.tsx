import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-6 sm:px-10 md:px-20 lg:px-40 mx-auto text-white bg-[#010319]"
    >
      <h2 className="text-3xl font-bold text-center mb-6">About Me 💼</h2>
      <p className="text-lg font-light text-zinc-400 text-center mb-6">
        I'm a passionate Full Stack Developer skilled in building scalable and dynamic applications using the MERN stack. I'm always exploring new technologies to solve real-world problems.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6">
        <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gray-800 border-2 border-zinc-300 rounded-full overflow-hidden mb-6 sm:mb-0">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQF6dzRimp5MdQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1667445429068?e=1743638400&v=beta&t=e0It3AMH6lunaA2CEiXlu8AISCtln9_VW64gjWzepFk" // Replace with your image URL
            alt="Profile"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="text-center sm:text-left sm:max-w-lg">
          <h3 className="text-xl font-semibold text-blue-400">Who I Am</h3>
          <p className="text-zinc-400 mt-4">
            I hold a Master's degree in Computer Applications (MCA) from Lovely Professional University. I specialize in MERN stack development, creating fast and scalable web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
