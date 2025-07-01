import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDatabase, FaLeaf, FaCode, FaFigma } from 'react-icons/fa';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 className="text-6xl text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3 className="text-6xl text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-6xl text-yellow-500" /> },
  { name: 'React.js', icon: <FaReact className="text-6xl text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-6xl text-green-600" /> },
  { name: 'Express.js', icon: <FaNodeJs className="text-6xl text-gray-700" /> },
  { name: 'Java', icon: <FaJava className="text-6xl text-red-600" /> },
  { name: 'Spring Boot', icon: <FaLeaf className="text-6xl text-green-500" /> },
  { name: 'C++', icon: <FaCode className="text-6xl text-blue-700" /> },
  { name: 'JavaFX', icon: <FaJava className="text-6xl text-red-800" /> },
  { name: 'MySQL', icon: <FaDatabase className="text-6xl text-blue-700" /> },
  { name: 'MongoDB', icon: <FaDatabase className="text-6xl text-green-700" /> },
  { name: 'Git', icon: <FaGitAlt className="text-6xl text-orange-600" /> },
  { name: 'GitHub', icon: <FaGithub className="text-6xl text-gray-900" /> },
  { name: 'Figma', icon: <FaFigma className="text-6xl text-purple-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#E0F7FA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-12 border-t border-gray-300">
          <h2 className="text-3xl font-bold text-center">My Skills</h2>
          <p className="mt-2 text-lg text-center text-gray-600">
            Here are some of the technologies and tools I've worked with.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-800 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 