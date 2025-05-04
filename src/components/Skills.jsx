const skills = [
  { name: "HTML-5", img: "img/html-5.png" },
  { name: "CSS", img: "img/css-3.png" },
  { name: "JavaSript", img: "img/js.png" },
  { name: "Node.js", img: "img/node.png" },
  { name: "React.js", img: "img/react.png" },
  { name: "TailwindCSS", img: "img/tail.png" },
  { name: "Next.js", img: "img/next.png" },
  { name: "GitHub", img: "img/github.png" },
  { name: "MongoDB", img: "img/mongo.png" },
  { name: "MySQL", img: "img/sql.png" }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#033e65] flex flex-col justify-center items-center min-h-[80vh] text-center text-[#a9cdee]">
      <div className="head-cont bg-[#033e65] text-center text-white text-2xl pt-4 font-bold mb-10">
        <h1 className="relative inline-block pb-1">
          Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] h-[3px] bg-orange-400"></span>
        </h1>
      </div>
      
      <div className="flex flex-wrap justify-center items-center min-h-[40vh] w-full px-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="h-[150px] w-[calc(50%-1rem)] md:w-[150px] m-2 md:m-4 rounded-lg text-[#E4E6C3] text-xl font-bold text-center border border-transparent shadow-md transition-all duration-400 hover:shadow-lg hover:border-transparent hover:rounded-lg cursor-pointer"
          >
            <img 
              src={skill.img} 
              alt={skill.name} 
              className="p-2 h-[80%] w-full object-contain" 
            />
            <span className="text-sm md:text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;