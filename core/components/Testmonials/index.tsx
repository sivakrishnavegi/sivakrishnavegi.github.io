import React from "react";

const testimonials = [
    {
      id: 1,
      name: "Himanshu Yadav",
      role: "Software Engineer",
      testimonial:
        "I had the opportunity to work alongside Siva on an e-commerce project. His expertise in the MERN stack enabled us to implement a real-time order tracking system that greatly enhanced the platform's functionality. His problem-solving skills and ability to collaborate effectively were outstanding.",
      project: "Collaborated on an e-commerce platform with real-time order tracking and user authentication.",
    },
    {
      id: 2,
      name: "Nikhil Sharma",
      role: "Web Developer",
      testimonial:
        "Working with Siva on a job portal project was a pleasure. His proficiency in React and Node.js helped us create a dynamic, user-friendly platform with real-time notifications. Siva consistently delivered high-quality work and was a great team player throughout the project.",
      project: "Contributed to developing a job portal with real-time notifications and search features using React and Node.js.",
    },
    {
      id: 3,
      name: "Ravi Kumar",
      role: "Mobile Developer",
      testimonial:
        "Siva’s deep knowledge of React Native was crucial in building a mobile app that performed seamlessly across platforms. His attention to detail and dedication to delivering a smooth user experience made him an invaluable asset to the fitness tracking project we worked on together.",
      project: "Developed a cross-platform mobile app for tracking personal fitness data using React Native.",
    },
  ];
  
  

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 px-6 sm:px-10 md:px-20 lg:px-40 mx-auto text-white bg-[#010319]">
      <h2 className="text-3xl font-bold text-center mb-4">What Others Are Saying</h2>
      <p className="text-sm md:text-lg font-light mb-10 text-zinc-400 text-center">
        Here’s what some of my colleagues and clients have said about their experience working with me on various projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#10172A] p-6 rounded-lg shadow-md text-center"
          >
      
            <h3 className="text-xl font-semibold text-blue-400">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
            <p className="text-gray-300 mt-4">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
