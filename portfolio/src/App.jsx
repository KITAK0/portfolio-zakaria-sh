import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WebRealizations from './components/WebRealizations';
import Contact from './components/Contact';

function HomePage() {
  return (
    <main className="pt-24">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <WebRealizations />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d10] text-[#f3f4f6] antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
