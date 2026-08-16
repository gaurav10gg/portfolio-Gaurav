import { useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Metrics from './sections/Metrics';
import Work from './sections/Work';
import Experience from './sections/Experience';
import Stack from './sections/Stack';
import Background from './sections/Background';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import BottomBar from './components/site/BottomBar';
import { useReveal } from './lib/useReveal';

const tabs = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  const [barOpen, setBarOpen] = useState(true);
  useReveal('home');

  return (
    <div className={`app${barOpen ? ' app--bar' : ''}`}>
      <a href="#top" className="skipLink">
        Skip to content
      </a>

      <Header />

      <main className="app__main">
        <Hero />

        <nav className="homeTabs" aria-label="Quick links">
          <div className="container homeTabs__row">
            {tabs.map((tab) => (
              <a key={tab.href} href={tab.href} className="homeTabs__tab">
                {tab.label}
              </a>
            ))}
          </div>
        </nav>

        <Metrics />
        <Work />
        <Experience />
        <Stack />
        <Background />
        <Contact />
      </main>

      <Footer />

      {barOpen && <BottomBar onDismiss={() => setBarOpen(false)} />}
    </div>
  );
}

export default App;
