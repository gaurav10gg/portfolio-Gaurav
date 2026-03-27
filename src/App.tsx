import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Stats from './sections/Stats';
import Education from './sections/Education';
import ShortProfile from './sections/ShortProfile';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Journey from './sections/Journey';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-dark-900 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"
              />
              <motion.p
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-green-400 font-mono text-lg"
              >
                Loading...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60]">
        <motion.div
          className="h-full bg-green-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation Indicator */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-2 
                    px-4 py-2 bg-dark-800/80 backdrop-blur-md rounded-full border border-white/10">
        <a href="#about" className="px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full">
          About
        </a>
        <a href="#projects" className="px-3 py-1 text-xs font-medium text-white/60 hover:text-white transition-colors">
          Projects
        </a>
        <a href="#contact" className="px-3 py-1 text-xs font-medium text-white/60 hover:text-white transition-colors">
          Contact
        </a>
      </div>

      <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
        <Header />
        
        <main>
          <Hero />
          <Stats />
          <Education />
          <ShortProfile />
          <Projects />
          <Experience />
          <Journey />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
