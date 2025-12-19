import React from 'react';
import extendedBio from '../../data/Bio';
import natureMe from '../../assets/nature shot.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 p-4">
      <div className='text-center my-10'>
          <h1 className='bg-gray-300 rounded-full px-4 py-2 text-lg font-medium text-gray-700 inline-block md:my-4'>About Me</h1>
      </div>
      <div className='flex items-center justify-center px-7 flex-col md:flex-row relative gap-8 md:items-start '>
        {/*Image Container*/}
        <div id = "my_image" className='flex flex-col justify-center items-center md:w-1/2 '>

          {/*Actual image box*/}
          <div className='bg-red-100  flex-col items-center justify-center relative'>
            {/*Actual Image Container*/}
            <div className='w-70 h-84 md:w-75 md:h-full flex items-center justify-center relative z-20'>             
              <div className='overflow-hidden border-6 border-white h-90 z-20'>
                <img src = {natureMe} 
              className='w-70 md:w-75'
              />
              </div>
              {/*under grey shadow*/}
              <div id = "bottom_grey" className=' absolute w-70 h-84 md:w-75 md:h-90 z-10 bg-gray-300 top-3 -left-3 md:top-6 md:-left-6'></div>
            </div>
          </div>
          
        </div>
        {/*Extended Bio*/}
        <div className=' relative md:w-1/2 '>
          <h2 className='font-semibold text-[24px] mb-4 '>
            Curious about me ?
          </h2>
          <p>{extendedBio}</p>
          <div>

          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
{/* <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">About Me</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 bg-gray-300 mx-auto mb-6 flex items-center justify-center">
              <span className="text-gray-600">Profile Photo</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a dedicated software developer with a passion for creating innovative 
              solutions and beautiful user experiences. My journey in technology started 
              several years ago, and I've been constantly learning and growing ever since.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in modern web technologies and enjoy working on both 
              frontend and backend development. When I'm not coding, you can find me 
              exploring new technologies, contributing to open source projects, or 
              sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-semibold text-black mb-2">Frontend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>React & TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2">Backend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Databases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}