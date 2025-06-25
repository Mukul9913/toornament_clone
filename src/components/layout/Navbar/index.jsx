import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentDateTime = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }); // 12:01 AM IST, Thursday, June 26, 2025

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const playerOptions = [
    { name: "Play", path: "/play", description: "Thousands of tournaments every week, on all the best games, for all playing levels" },
    { name: "Help Center", path: "/help" },
    { name: "Community Discord", path: "/discord" },
    { name: "Blog", path: "/blog" },
  ];

  const organizerOptions = [
    { name: "Organizer Software", path: "/organizer", description: "Free online software to manage your gaming competitions" },
    { name: "Tournament Boost", path: "/boost", description: "Advanced organizer's features for your tournament" },
    { name: "Professional Circuit", path: "/circuit", description: "Upgrade your competition project and manage circuits" },
    { name: "White-label Platform", path: "/white-label", description: "Customizable gaming platform on your domain name" },
    { name: "Developer API", path: "/api", description: "Create your own custom projects for your game or community" },
    { name: "Pricing", path: "/pricing" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Blog", path: "/blog" },
    { name: "Help Center", path: "/help" },
    { name: "Developer Doc", path: "/dev-doc" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="py-4  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
        {/* Logo and Links */}
        <div className="flex items-center space-x-6">
          <img
            src="https://www.toornament.com/media/8253243463000877227/original"
            alt="Toornament Logo"
            className="h-10"
          />
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <a
                href="#players"
                className="hover:text-blue-400 transition py-2"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
              >
                For Players and Teams
              </a>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 rounded-lg shadow-xl mt-2 w-48 z-10">
                {playerOptions.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    className="block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                  >
                    {option.name}
                    {option.description && <span className="block text-xs text-gray-400">{option.description}</span>}
                  </Link>
                ))}
              </div>
            </div>
            <div className="relative group">
              <a
                href="#organizers"
                className="hover:text-blue-400 transition py-2"
                aria-haspopup="true"
                aria-expanded={isMenuOpen}
              >
                For Tournament Organizers
              </a>
              <div className="absolute hidden group-hover:block bg-gray-800 text-white p-2 rounded-lg shadow-xl mt-2 w-64 z-10">
                {organizerOptions.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    className="block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                  >
                    {option.name}
                    {option.description && <span className="block text-xs text-gray-400">{option.description}</span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/play">
            <Button variant="outline" className="text-sm py-2 px-4">
              Play
            </Button>
          </Link>
          <Link to="/organize">
            <Button variant="outline" className="text-sm py-2 px-4">
              Organize
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white p-4 mt-2 rounded-lg shadow-xl absolute w-full z-20">
          <div className="space-y-2">
            <div>
              <a
                href="#players"
                className="block py-2 hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                For Players and Teams
              </a>
              {playerOptions.map((option) => (
                <Link
                  key={option.name}
                  to={option.path}
                  className="block pl-4 py-1 text-sm hover:bg-gray-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {option.name}
                  {option.description && <span className="block text-xs text-gray-400">{option.description}</span>}
                </Link>
              ))}
            </div>
            <div>
              <a
                href="#organizers"
                className="block py-2 hover:text-blue-400 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                For Tournament Organizers
              </a>
              {organizerOptions.map((option) => (
                <Link
                  key={option.name}
                  to={option.path}
                  className="block pl-4 py-1 text-sm hover:bg-gray-700 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {option.name}
                  {option.description && <span className="block text-xs text-gray-400">{option.description}</span>}
                </Link>
              ))}
            </div>
          </div>
          <div className="text-xs text-gray-400 mt-4">
            Last updated: {currentDateTime}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;