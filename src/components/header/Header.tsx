import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];



  useEffect(() => {
    const handleScroll = () => {
        const sections = navItems.map(item => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 100; 

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  {/*download logic*/}
  const downloadCV = () => {
    try {
      
      const link = document.createElement('a');
      link.href = '/downloads/Daniel Ude CV.pdf';
      link.download = 'Daniel_Ude_CV.pdf'; 
      link.target = '_blank'; 
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log('CV download initiated');
    } catch (error) {
      console.error('Error downloading CV:', error);
      window.open('/downloads/Daniel Ude CV.pdf', '_blank');
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="shrink-0">
              <button 
                onClick={() => scrollToSection('home')}
                className="cursor-pointer text-xl font-semibold text-black hover:opacity-80 transition-opacity"
              >
                &lt;DNI /&gt;
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`cursor-pointer text-black transition-all duration-200 ${
                      activeSection === item.id
                        ? 'font-semibold border-b-2 border-black'
                        : 'font-normal hover:font-medium'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Desktop Download CV Button */}
              <button
                onClick={downloadCV}
                className="cursor-pointer bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 active:scale-95 active:bg-gray-700 transition-all duration-150"
              >
                Download CV
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="cursor-pointer md:hidden text-black p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed min-h-screen inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-white shadow-lg border-b border-gray-200">
            <div className="px-6 py-8 space-y-6">
              
              <nav className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer block w-full text-left text-lg text-gray-600 hover:text-gray-900 transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>



              {/* Download CV Button */}
              <button
                onClick={downloadCV}
                className="cursor-pointer w-full bg-gray-900 text-white py-3 px-6 rounded-full text-center font-medium hover:bg-gray-800 active:scale-95 active:bg-gray-700 transition-all duration-150"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;