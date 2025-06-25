import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Hero from './components/sections/Hero';
import PlayersOrganizers from './components/sections/PlayersOrganizers';
import Features from './components/sections/Feature';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import "./App.css"

const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToSection />
      <div
        // className="bg-gradient-to-b from-gray-900 via-indigo-900 to-black min-h-screen"
        style={{
          backgroundImage: "url('https://www.toornament.com/media/8550864910285905920/original')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <PlayersOrganizers />
          <Features />
        </div>
        <Footer />
      </div>
    </Router>
  );
}


export default App;