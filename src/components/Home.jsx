import { useEffect, useState, useRef } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const currentIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isTypingRef = useRef(true);
  const timeoutRef = useRef(null);

  const paragraphs = [
    "A MERN Stack Developer,",
    "A Full Stack WebDeveloper,",
    "An avid learner."
  ];

  useEffect(() => {
    const type = () => {
      if (charIndexRef.current <= paragraphs[currentIndexRef.current].length) {
        setDisplayText(paragraphs[currentIndexRef.current].substring(0, charIndexRef.current));
        charIndexRef.current++;
        timeoutRef.current = setTimeout(type, 100);
      } else {
        isTypingRef.current = false;
        timeoutRef.current = setTimeout(erase, 1500);
      }
    };

    const erase = () => {
      if (charIndexRef.current > 0) {
        setDisplayText(paragraphs[currentIndexRef.current].substring(0, charIndexRef.current - 1));
        charIndexRef.current--;
        timeoutRef.current = setTimeout(erase, 40);
      } else {
        isTypingRef.current = true;
        currentIndexRef.current = (currentIndexRef.current + 1) % paragraphs.length;
        timeoutRef.current = setTimeout(type, 200);
      }
    };

    // Start the animation
    timeoutRef.current = setTimeout(type, 500);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="mt-[60px] bg-[#033e65] flex flex-col justify-evenly items-center h-[85vh] min-h-[60vh] text-center text-[#a9cdee]">
      <h1 className="text-5xl font-bold mb-4">Hello, I am Ranjit Acharya.</h1>
      <div id="typing-text" className="font-bold mb-4" style={{ height: '3rem' , fontSize: '1.6rem' }}>
        {displayText}
        <span className="animate-pulse">|</span>
      </div>
      <h3 className="mx-10 text-lg">
        As a Full Stack Developer, I handle both the front-end and back-end aspects of web development. This
        includes designing user interfaces that are intuitive and writing server-side logic that ensures smooth
        performance.
      </h3>
    </section>
  );
};

export default Home;