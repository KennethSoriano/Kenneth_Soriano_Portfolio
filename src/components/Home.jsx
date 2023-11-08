import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Kenneth Soriano
        </h1>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        As a passionate Software Engineer, I bring a strong foundation in Electrical Engineering, offering a unique blend 
        of technical expertise and innovative problem-solving to the world of cutting-edge software development. My journey 
        started with a degree in Electrical Engineering from San Francisco State University, followed by a transformative experience 
        at Nucamp Coding Bootcamp, where I specialized in Full Stack Web and Mobile App Development.  This comprehensive program
         equipped me with proficiency in an array of technologies, including HTML, CSS, JavaScript, React, Node.js, AWS, SQL, Django, 
         MongoDB,and more. To further sharpen my skills, I am currently taking part in the Coachable program, 
         which through mentorship from experienced 
         SWEs, I'm enhancing my expertise in Python, object-oriented programming, unit testing, data structures, algorithms, and 
         scalable code design. 
        </p>
        <div>
          <Link to='work' smooth={true} duration={500}>          
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;