import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PoetryPage from './pages/PoetryPage';
import { useEffect, useState } from 'react';

// Floating Action Buttons Component
const FloatingButtons = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed left-0 top-1/4 z-50 flex flex-col items-start space-y-1 transition-all duration-500 ${isScrolled ? 'opacity-80' : 'opacity-100'}`}>
      {/* CV Button */}
      <a
        href="/Ranjit-Acharya-CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#224f7c] text-white font-semibold pl-2 pr-4 py-2 rounded-r-2xl shadow-lg transition-all duration-300 hover:translate-x-2 hover:bg-[#2c63a0] hover:shadow-xl"
      >
        <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full mr-2 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-sm">My CV</span>
      </a>

      {/* LinkedIn Button */}
      <a
        href="https://www.linkedin.com/in/ranjit-acharya10/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#0077B5] text-white font-semibold pl-2 pr-4 py-2 rounded-r-2xl shadow-lg transition-all duration-300 hover:translate-x-2 hover:bg-[#00669c] hover:shadow-xl"
      >
        <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full mr-2 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </div>
        <span className="text-sm">LinkedIn</span>
      </a>

      {/* GitHub Button */}
      <a
        href="https://github.com/acharyaranjit10"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-[#333] text-white font-semibold pl-2 pr-4 py-2 rounded-r-2xl shadow-lg transition-all duration-300 hover:translate-x-2 hover:bg-[#24292e] hover:shadow-xl"
      >
        <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full mr-2 group-hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <span className="text-sm">GitHub</span>
      </a>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App flex flex-col max-w-full overflow-x-hidden">
        <Navbar />
        <FloatingButtons />
        <Routes>
          {/* Default Portfolio Route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <div className="line h-1 w-full bg-[#224f7c]"></div>
                <Skills />
                <div className="line h-1 w-full bg-[#224f7c]"></div>
                <About />
                <div className="line h-1 w-full bg-[#224f7c]"></div>
                <Projects />
                <div className="line h-1 w-full bg-[#224f7c]"></div>
                <Contact />
              </>
            }
          />
          {/* Poetry Page Route */}
          {/* <Route path="/poetry" element={<PoetryPage />} /> */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;