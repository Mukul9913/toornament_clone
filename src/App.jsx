import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import PlayersOrganizers from "./components/sections/PlayersOrganizers";
import Features from "./components/sections/Feature";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import { AppRoutes } from "./routes";
import ScrollToSection from "./components/common/ScrollToSection";
function App() {
  return (
    <Router>
      <ScrollToSection />
      <div
        // className="bg-gradient-to-b from-gray-900 via-indigo-900 to-black min-h-screen"
        style={{
          backgroundImage:
            "url('https://www.toornament.com/media/8550864910285905920/original')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // backgroundBlendMode: "overlay",
        }}
      >
        <div className="relative z-2">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
