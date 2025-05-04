import React from 'react';

const About = () => {
  const education = [
    {
      year: "2005 - 2019",
      degree: "Secondary Level Degree",
      description: "Passed Secondary level Examination (SEE) from Shikshyalaya Nepal School with a result of 3.7 GPA."
    },
    {
      year: "2020 - 2022",
      degree: "High School Degree",
      description: "Graduated from High School with a GPA of 3.85 from Cosmic International Academy."
    },
    {
      year: "2022 - Present",
      degree: "Bachelors Degree",
      description: "Currently pursuing Bachelors degree in BSc.CSIT from Amrit Science Campus, Tribhuwan University (IOST)."
    }
  ];

  return (
    <section id="about" className="min-h-[70vh] py-[35px] px-[10%] bg-[#033e65]">
<div className="head-cont bg-[#033e65] text-center  text-2xl pt-4 font-bold mb-10">
  <h1 className="relative inline-block pb-1 text-white"> {/* pb-1 for spacing */}
    About Me
    <span 
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] h-[3px] bg-orange-400"
    ></span>
  </h1>
</div>
      
      <main className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Education Section */}
        <section className="col">
          <div className="pl-[30px] pb-5">
            <h2 className="font-helvetica text-[#2ac732]">EDUCATION</h2>
          </div>

          <div className="pl-[30px] border-l-2 border-[#bababa]">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="relative p-5 border border-white bg-[#103a63] cursor-pointer transition-all duration-400 mb-5 hover:shadow-lg hover:border-transparent hover:rounded-lg group"
              >
                <h4 className="text-orange-400">{edu.year}</h4>
                <h3 className="text-xl py-2 font-helvetica text-white">{edu.degree}</h3>
                <p className="text-[#a9cdee] leading-6">{edu.description}</p>
                <div className="absolute w-4 h-4 rounded-full bg-[#11a372] border-2 border-white right-[calc(100%+22px)] top-0"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="col md:mt-0 mt-8">
          <div className="pl-[30px] pb-5">
            <h2 className="font-helvetica text-[#2ac732]">EXPERIENCE</h2>
          </div>

          <div className="pl-[30px] border-l-2 border-[#bababa]">
            <div className="relative p-5 border border-white bg-[#103a63] cursor-pointer transition-all duration-400 mb-5 hover:shadow-lg hover:border-transparent hover:rounded-lg group">
              <h2 className="text-xl py-2 font-helvetica text-white">Seeking for Internships currently.</h2>
              <div className="absolute w-4 h-4 rounded-full bg-[#11a372] border-2 border-white right-[calc(100%+22px)] top-0"></div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export default About;