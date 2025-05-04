import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PoetryPage from './pages/PoetryPage'; // New poetry page component

function App() {
  return (
    <Router>
      <div className="App flex flex-col max-w-full overflow-x-hidden">
        <Navbar />
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
          <Route path="/poetry" element={<PoetryPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;