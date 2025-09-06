import React from 'react';

const projects = [
  {
    name: "Smart Palika",
    img: "img/smart_preview.png",
    link: "https://smart-palika.onrender.com/",
    code: "https://github.com/acharyaranjit10/Smart-Palika",
    desc: "Civic complaint portal for local municipalities in Nepal.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    name: "Vastra Vatika",
    img: "img/vastra_preview.png",
    link: "https://vastra-vatika-delta.vercel.app/",
    code: "https://github.com/acharyaranjit10/vastra-vatika",
    desc: "E-commerce clothing store for Nepali ethnic wear.",
    tech: ["React", "Tailwind", "MongoDB"],
  },
  {
    name: "Weather App",
    img: "img/weather_preview.png",
    link: "https://weather-app-gamma-ruddy-97.vercel.app/",
    code: "https://github.com/acharyaranjit10/weather-app",
    desc: "Real-time weather app using OpenWeather API.",
    tech: ["React", "Tailwind", "API"],
  },
  {
    name: "Matrix Calculator",
    img: "img/matrix_preview1.png",
    link: "https://ranjit-matrix-calculator.vercel.app/",
    code: "https://github.com/acharyaranjit10/matrix-calculator",
    desc: "Do matrix operations from basic to advanced easily.",
    tech: ["React", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#033e65] py-12 px-4 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold relative inline-block pb-1">
          Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] h-[3px] bg-orange-400"></span>
        </h2>
        <p className="mt-2 text-[#d0e6fb] text-sm">
          Some selected works built with modern tools.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#022c47] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-[#d0e6fb] mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#054570] text-white text-xs px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-400 hover:bg-orange-500 text-black px-4 py-2 rounded font-semibold"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-orange-400 hover:bg-orange-500 hover:text-black text-orange-400 px-4 py-2 rounded font-semibold"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://github.com/acharyaranjit10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 hover:underline font-semibold"
        >
          View More Projects on GitHub →
        </a>
      </div>
    </section>
  );
};

export default Projects;
