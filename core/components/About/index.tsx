import { images } from "@/assets/images";
import Image from "next/image";

const About = () => {
  const { profilePic } = images;
  return (
    <section
      id="about"
      className="py-10 px-6 sm:px-10 md:px-20 lg:px-40 mx-auto text-white bg-[#010319]"
    >
      <h2 className="text-3xl font-bold text-center mb-6">About Me 💼</h2>
      <p className="text-lg font-light text-zinc-400 text-center mb-6">
        I&apos;m a passionate Full Stack Developer skilled in building scalable
        and dynamic applications using the MERN stack. I&apos;m always exploring new
        technologies to solve real-world problems.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6">
        <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gray-800 border-2 border-zinc-300 rounded-full overflow-hidden mb-6 sm:mb-0">
          <Image
            src={profilePic}
            alt={"siva krishna vegi"}
            height={300}
            width={300}
            className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>

        <div className="text-center sm:text-left sm:max-w-lg">
          <h3 className="text-xl font-semibold text-blue-400">Who I Am</h3>
          <p className="text-zinc-400 mt-4">
            I hold a Master&apos;s degree in Computer Applications (MCA) from Lovely
            Professional University. I specialize in MERN stack development,
            creating fast and scalable web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
