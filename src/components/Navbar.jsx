import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsActive(false);
  }, [location.pathname]);

  // Only track scroll on home page
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'skills', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const scrollPosition = window.scrollY + 100;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (id) => {
    setIsActive(false); // Close the mobile menu

    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${id}`;
    } else {
      // Normal smooth scroll behavior
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
          behavior: 'smooth'
        });
        setActiveSection(id);
      }
    }
  };

  // Determine active style
  const getActiveStyle = (item) => {
    if (item === 'poetry') {
      return location.pathname === '/poetry' ? 'text-orange-400' : 'text-white';
    }
    return location.pathname === '/' && activeSection === item ? 'text-orange-400' : 'text-white';
  };

  return (
    <header className="w-full bg-[#033e65] fixed top-0 z-[1000]">
      <nav className="navbar flex justify-between items-center p-4 text-white">
        <Link to="/" className="brand-title h-[50px] w-[170px]">
          <img src="/img/ok.png" alt="logo" className="h-full w-full" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="toggle-button md:hidden flex flex-col justify-between h-[21px] w-[30px] cursor-pointer"
          onClick={() => setIsActive(!isActive)}>
          <motion.span 
            animate={isActive ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            className="bar h-[3px] w-full bg-white rounded-[10px]"
          />
          <motion.span 
            animate={isActive ? { opacity: 0 } : { opacity: 1 }}
            className="bar h-[3px] w-full bg-white rounded-[10px]"
          />
          <motion.span 
            animate={isActive ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            className="bar h-[3px] w-full bg-white rounded-[10px]"
          />
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isActive ? 'flex' : 'hidden'} md:flex absolute md:static top-full left-0 w-full md:w-auto bg-[#032943] md:bg-transparent z-[999]`}>
          <ul className="flex flex-col md:flex-row w-full">
            {['home', 'skills', 'about', 'projects', 'contact'].map((item) => (
              <li key={item} className="text-center py-4 md:py-0 w-full md:w-auto md:mx-4">
                <a
                  href={`#${item}`}
                  className={`text-lg block px-4 py-2 relative group transition-all duration-300 ${getActiveStyle(item)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] ${
                    getActiveStyle(item) === 'text-white' ? 'bg-[#11a372]' : 'bg-transparent'
                  } group-hover:scale-x-100 scale-x-0 origin-left transition-all duration-300`} />
                </a>
              </li>
            ))}
            
            {/* Poetry Link */}
            <li className="text-center py-4 md:py-0 w-full md:w-auto md:mx-4">
              <Link
                to="/poetry"
                className={`text-lg block px-4 py-2 relative group transition-all duration-300 ${getActiveStyle('poetry')}`}
              >
                beingMe
                <span className={`absolute bottom-0 left-0 w-full h-[2px] ${
                  getActiveStyle('poetry') === 'text-white' ? 'bg-[#11a372]' : 'bg-transparent'
                } group-hover:scale-x-100 scale-x-0 origin-left transition-all duration-300`} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;