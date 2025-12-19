import React from 'react';
import myHeadshot from "../../assets/my headshot.png";
import javascriptIcon from "../../assets/icon-javscript.svg";
import typescriptIcon from "../../assets/icon-typescript.svg";
import reactIcon from "../../assets/icon-react.svg";
import nextjsIcon from "../../assets/icon-nextjs.svg";
import nodejsIcon from "../../assets/icon-nodejs.svg";
import expressIcon from "../../assets/icon-express.svg";
import postgresqlIcon from "../../assets/icon-postgresql.svg";
import sassIcon from "../../assets/icon-sass.svg";
import tailwindcssIcon from "../../assets/icon-tailwindcss.svg";
import figmaIcon from "../../assets/icon-figma.svg";
import gitIcon from "../../assets/icon-git.svg";
import javaIcon from "../../assets/java.png";
import pythonIcon from "../../assets/python.png";

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-25 flex flex-col items-center justify-around">
      <div className='md:flex md:flex-row-reverse md:items-center'>
        <div className="relative mb-12">
        {/*Actual image box*/}
          <div className='flex flex-col items-center justify-center relative'>
            {/*Actual Image Container*/}
            <div className='w-60 h-72 flex items-center justify-center relative z-20'>             
              <div className='overflow-hidden border-6 border-white h-72 z-20'>
                <img src = {myHeadshot} 
              className='w-70'
              />
              </div>
              {/*under grey shadow*/}
              <div id = "bottom_grey" className='w-65 h-67 absolute md:w-60 md:h-72 z-10 bg-gray-300 top-8 md:top-6 md:-right-6'></div>
            </div>
          </div>
      </div>
      <div className=" px-8 sm:px-6 lg:px-8 text-left ">
        <h1 className=" text-3xl md:text-6xl font-semibold text-black mb-6 ">
          Hi, I'm Ude Daniel
        </h1>
        <p className="text-base md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Computer science student and passionate developer focused on turning ideas into functional applications and amazing digital experiences.
           Explore my work and get to know more about my journey.
        </p>
      </div>
      </div>

     
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-200 px-6 py-2 rounded-full mb-8">
            <h2 className="text-lg font-medium text-gray-700">Skills/Interests</h2>
          </div>
          <p className="text-base md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-8 mb-16">
          {/* Row 1 */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={javascriptIcon} alt="JavaScript" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">JavaScript</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={typescriptIcon} alt="TypeScript" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">TypeScript</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={reactIcon} alt="React" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">React</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={nextjsIcon} alt="Next.js" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Next.js</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={nodejsIcon} alt="Node.js" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Node.js</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={expressIcon} alt="Express.js" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Express.js</span>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={postgresqlIcon} alt="PostgreSQL" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">PostgreSQL</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={sassIcon} alt="Sass/Scss" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Sass/Scss</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={tailwindcssIcon} alt="Tailwindcss" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Tailwindcss</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={figmaIcon} alt="Figma" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Figma</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={gitIcon} alt="Git" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Git</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={javaIcon} alt="Java" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Java</span>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 flex items-center justify-center">
              <img src={pythonIcon} alt="Python" className="w-12 h-12" />
            </div>
            <span className="text-sm text-gray-600">Python</span>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;