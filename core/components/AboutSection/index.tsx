/* eslint-disable react/no-unescaped-entities */
// components/Timeline.js

import { faGlobe, faGraduationCap, faLaptop, faLaptopCode, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Timeline = () => {
  const timelineEvents = [
    {
      year: 2015,
      title: 'XII (State Board)',
      institution: 'Sri Chaitanya, Visakhapatnam',
      score: '85%',
      description: 'Focused on science and biology.',
      icon: faGraduationCap, // FontAwesome icon for education
    },
    {
      year: 2018,
      title: 'BCA (Bachelor of Computer Applications)',
      institution: 'Lovely Professional University',
      cgpa: 'CGPA: 8.5/10',
      description: 'Strong foundation in coding and software development.',
      icon: faLaptopCode, // FontAwesome icon for coding
    },
    {
      year: 2020,
      title: 'MCA (Master of Computer Applications)',
      institution: 'Lovely Professional University',
      cgpa: 'CGPA: 8.2/10',
      description: 'Mastered advanced programming concepts.',
      icon: faLaptop, // FontAwesome icon for laptop/tech
    },
    {
      year: 'Jan 2020 - Aug 2020',
      title: 'Intern Full Stack Developer',
      institution: 'Click Labs Pvt Ltd',
      technologies: 'React JS, MongoDB, Node.js, Express.js',
      description: 'Hands-on experience in full-stack development.',
      icon: faUserTie, // FontAwesome icon for professional work
    },
    {
      year: 'Nov 2021 - Jan 2024',
      title: 'MERN Stack Developer',
      institution: 'Destm Technologies',
      technologies: 'MongoDB, Express.js, React JS, Node.js',
      description: 'Developed full-stack applications and APIs using the MERN stack.',
      icon: faLaptopCode, // FontAwesome icon for coding
    },
    {
      year: 'Feb 2024 - Present',
      title: 'Freelance Full Stack Developer',
      institution: 'Self-Employed',
      technologies: 'React JS, MongoDB, Next.js, Express.js, MERN Stack',
      description: 'Working on freelance projects involving full-stack development.',
      icon: faGlobe, // FontAwesome icon for freelance or global work
    },
  ];

  return (
    <section id="myJourney" className="py-10 px-6 sm:px-10 md:px-20 lg:px-40 mx-auto text-white bg-[#010319]">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">My Journey 🚀</h2>
      </div>

      {/* Short Description */}
      <div className="text-center mb-8">
        {/* // eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-xl text-gray-300">From a science enthusiast to a full-stack developer, my journey has been full of learning, coding, and growth. Here's a glimpse of my milestones 🚀</p>
      </div>

      {/* Timeline Events */}
      <div className="flex overflow-x-scroll space-x-6 py-4">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="flex-none bg-[#10172A] p-6 rounded-lg shadow-lg w-80"
          >
         

            {/* Year and Title */}
            <h3 className="text-xl font-semibold text-blue-400">{event.year}</h3>
            <h4 className="text-lg font-semibold text-gray-300 mt-2">{event.title}</h4>
            <p className="text-sm text-zinc-400 mt-2">{event.institution}</p>
           

            {/* Description */}
            <p className="text-sm text-zinc-400 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
