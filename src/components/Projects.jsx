import { useState, useEffect } from 'react';

const projects = [
  { name: "Vastra Vatika", img: "img/logo.png", link: "https://vastravatika.vercel.app/" },
  { name: "Spotify Clone", img: "img/spotify.png", link: "https://spotify-clone-sand-chi.vercel.app/" },
  { name: "Weather", img: "img/weather.png", link: "https://weather-app-gamma-ruddy-97.vercel.app/" },
  { name: "Matrix-Calculator", img: "img/matrix.png", link: "https://ranjit-matrix-calculator.vercel.app/" },
  { name: "Hangman", img: "img/hangman.png", link: "https://hangman-ranjit.vercel.app/" },
  { name: "CV Builder", img: "img/cv-b.png", link: "https://cv-builder-ranjit.vercel.app/" },
  { name: "Password-Generator", img: "img/passgen.png", link: "https://react-pass-generator-orcin.vercel.app/" },
  { name: "Tic-Tac-Toe", img: "img/tic.png", link: "https://tic-tac-toe-rust-six.vercel.app/" },
  { name: "(React) Currency-Converter", img: "img/currReact.png", link: "https://react-currency-exchange-44mt.vercel.app/" },
  { name: "To-Do List", img: "img/todo.png", link: "https://to-do-list-coral-six.vercel.app/" },
  { name: "Calculator", img: "img/calc.png", link: "https://basic-calculator-amber.vercel.app/" },
  { name: "Rock-Paper-Scissors", img: "img/rps.png", link: "https://rock-paper-scissors-j45w.vercel.app/" },
  { name: "Currency-Converter", img: "img/curr.png", link: "https://currency-converter-one-khaki.vercel.app/" }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedProjects = (isMobile && !showAll) ? projects.slice(0, 6) : projects;

  return (
    <section id="projects" className="bg-[#033e65] flex flex-col justify-center items-center min-h-[60vh] text-center text-[#d0e6fb]">
      <div className="head-cont bg-[#033e65] text-center text-white text-2xl pt-4 font-bold mb-10">
        <h1 className="relative inline-block pb-1">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] h-[3px] bg-orange-400"></span>
        </h1>
      </div>
      
      <div className="flex flex-wrap justify-center items-center min-h-[40vh] w-full px-4 mb-4">
        {displayedProjects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="h-[150px] w-[calc(50%-1rem)] md:w-[150px] m-2 md:m-4 rounded-lg text-[#a9cdee] text-center transition-all duration-300 hover:scale-105 flex flex-col items-center"
          >
            <img 
              src={project.img} 
              alt={project.name} 
              className="h-[80%] w-full object-contain p-1" 
            />
            <span className="text-sm md:text-base px-1">{project.name}</span>
          </a>
        ))}
      </div>

      {isMobile && projects.length > 6 && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className=" mb-1 px-6 py-2  text-white rounded-lg hover:text-orange-300 transition-colors duration-300"
        >
          {showAll ? 'Show Less' : 'See More'}
        </button>
      )}
    </section>
  );
};

export default Projects;