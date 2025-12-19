import React from 'react';
import { Phone, Copy, Github,  Figma, MailIcon, TwitterIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <section id="contact" className="bg-gray-50 pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className=" rounded-lg p-12 relative">
          
          
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-200 px-6 py-2 rounded-full mb-8">
              <h2 className="text-lg font-medium text-gray-700">Get in touch</h2>
            </div>
            <p className="text-[18px] md:text-3xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.
            </p>
          </div>

          
          <div className="space-y-6 mb-8">
            
            <div className="flex items-center justify-center space-x-3">
              
              <MailIcon className="w-6 h-6 text-gray-600" />
              <span className="text-base md:text-2xl font-semibold text-gray-900">
                danielude90@gmail.com
              </span>
              <button
                onClick={() => copyToClipboard('danielude90@gmail.com')}
                className="text-gray-500 hover:text-gray-700 active:scale-90 active:text-gray-800 transition-all duration-150 cursor-pointer"
                aria-label="Copy email"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>

            
            <div className="flex items-center justify-center space-x-4">
              <Phone className="w-6 h-6 text-gray-600" />
              <span className="text-base md:text-2xl font-semibold text-gray-900">
                +234 7013716408
              </span>
              <button
                onClick={() => copyToClipboard('+234 7013716408')}
                className="text-gray-500 hover:text-gray-700 active:scale-90 active:text-gray-800 transition-all duration-150 cursor-pointer"
                aria-label="Copy phone number"
              >
                <Copy className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              You may also find me on these platforms!
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/dude243485"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Twitter"
              >
                
                <TwitterIcon className="w-8 h-8" />
              </a>
              <a
                href="https://figma.com/@danielude"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Figma"
              >
                <Figma className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        
        
      </div>
      <div className="text-center mt-12 bg-white py-4 ">
          <p className="text-gray-500">
            &copy; 2025 | <span className="underline">coded</span> by Ude Daniel
          </p>
        </div>
    </section>
  );
};

export default Contact;