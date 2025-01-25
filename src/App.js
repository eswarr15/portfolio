import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Github from './components/Github';
import Contact from './components/Contact';
import Achievements from "./components/Achievements";
import { useEffect } from 'react';
import ScrollProgress from './components/common/ScrollProgress';
import BackToTop from './components/common/BackToTop';

// Create a separate component for the routes
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/github" element={<Github />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    // Update the title and favicon
    document.title = "MTD | Backend Engineer";
    
    // Update favicon color based on system theme
    const updateFaviconColor = (e) => {
      const favicon = document.querySelector('link[rel="icon"]');
      if (favicon) {
        const svg = `
          <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:#60A5FA;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
              </linearGradient>
            </defs>
            <text x="256" y="300" 
              fill="url(#grad)" 
              font-family="Arial" 
              font-weight="bold" 
              font-size="200"
              text-anchor="middle"
              dominant-baseline="middle"
              style="letter-spacing: -10px;">
              MTD
            </text>
          </svg>
        `;
        
        const encodedSvg = encodeURIComponent(svg);
        favicon.href = `data:image/svg+xml,${encodedSvg}`;
      }
    };

    // Initial update
    updateFaviconColor();

    // Update on system theme change
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Use addEventListener instead of addListener
    mediaQuery.addEventListener('change', updateFaviconColor);

    // Cleanup
    return () => {
      // Use removeEventListener instead of removeListener
      mediaQuery.removeEventListener('change', updateFaviconColor);
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollProgress />
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-800">
          <Navbar />
          <main className="pt-16">
            <AnimatedRoutes />
          </main>
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;