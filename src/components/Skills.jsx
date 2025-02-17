
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { SiVite, SiTailwindcss } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className='text-orange-500' /> },
  { name: 'CSS', icon: <FaCss3Alt className='text-blue-500' /> },
  { name: 'JavaScript', icon: <FaJs className='text-yellow-500' /> },
  { name: 'React', icon: <FaReact className='text-blue-400' /> },
  { name: 'Vite', icon: <SiVite className='text-purple-500' /> },
  { name: 'Tailwind', icon: <SiTailwindcss className='text-teal-400' /> },
];

export default function SkillsSection() {
  return (
    <div id='skills' className='py-24 text-start'>
      <h2 className='md:text-4xl text-3xl text-gray-700 font-medium mb-10 lg:pl-32 mx-4'>My Skills</h2>
      <p className='font-normal text-gray-700 text-xl mb-10 md:mb-20 lg:pl-32 mx-4'>
          Below is a summary of the places I studied
        </p>

      <h1 className="text-center font-normal text-gray-500 text-4xl md:text-6xl lg:text-7xl mb-20">
           Please do not measure your skills in <br /> percentages!
           </h1>
      <div className='flex flex-wrap justify-center gap-10'>
        {skills.map((skill) => (
         <div className='flex flex-col items-center justify-center bg-gray-800 p-4 rounded-full w-44 h-44 shadow-lg hover:scale-125 ease-out duration-500'>
          <div className='text-4xl'>{skill.icon}</div>
            <span className='mt-2 text-xl text-white font-semibold'>{skill.name}</span>
         </div>
        ))}
      </div>
    </div>
  );
}
