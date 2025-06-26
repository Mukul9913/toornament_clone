import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayersOpen, setIsPlayersOpen] = useState(false);
  const [isOrganizersOpen, setIsOrganizersOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePlayers = () => {
    setIsPlayersOpen(!isPlayersOpen);
    setIsOrganizersOpen(false); // Close organizers if players is clicked
  };

  const toggleOrganizers = () => {
    setIsOrganizersOpen(!isOrganizersOpen);
    setIsPlayersOpen(false); // Close players if organizers is clicked
  };

  const playerOptions = [
    {
      name: "Play",
      path: "/play",
      description:
        "Thousands of tournaments every week, on all the best games, for all playing levels",
    },
    { name: "Help Center", path: "/help" },
    { name: "Community Discord", path: "/discord" },
    { name: "Blog", path: "/blog" },
  ];

  const organizerOptions = [
    {
      name: "Organizer Software",
      path: "/organizer",
      description: "Free online software to manage your gaming competitions",
    },
    {
      name: "Tournament Boost",
      path: "/boost",
      description: "Advanced organizer's features for your tournament",
    },
    {
      name: "Professional Circuit",
      path: "/circuit",
      description: "Upgrade your competition project and manage circuits",
    },
    {
      name: "White-label Platform",
      path: "/white-label",
      description: "Customizable gaming platform on your domain name",
    },
    {
      name: "Developer API",
      path: "/api",
      description: "Create your own custom projects for your game or community",
    },
  ];

  const organizerLinks = [
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
          {/* Desktop and Mobile Navigation */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <a
                onClick={togglePlayers}
                className="hover:text-blue-400 transition py-2 cursor-pointer"
                aria-haspopup="true"
                aria-expanded={isPlayersOpen}
              >
                For Players and Teams
              </a>
              {isPlayersOpen && (
                <div className="absolute bg-gray-800 text-white p-2 rounded-lg shadow-xl mt-2 w-48 z-10">
                  {playerOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                      onClick={() => setIsPlayersOpen(false)}
                    >
                      {option.name}
                      {option.description && (
                        <span className="block text-xs text-gray-400">
                          {option.description}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative">
              <a
                onClick={toggleOrganizers}
                className="hover:text-blue-400 transition py-2 cursor-pointer"
                aria-haspopup="true"
                aria-expanded={isOrganizersOpen}
              >
                For Tournament Organizers
              </a>
              {isOrganizersOpen && (
                <div className="absolute bg-white text-black p-2 rounded-sm shadow-xl mt-2 w-120 z-11">
                  <div className="flex ">
                  <div>
                  {organizerOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="block px-4 py-2 text-sm hover:bg-blue-100 rounded"
                      onClick={() => setIsOrganizersOpen(false)}
                    >
                     <span className="text-lg  space-x-4 flex "> <img className="w-10 h-10" src="	https://www.toornament.com/media/8484946689683832832/original"/>
                     <div>
                      {option.name}
                      {option.description && (
                        <span className="block text-xs text-gray-400">
                          {option.description}
                        </span>
                      )}
                      </div>
                     </span>
                     
                    </Link>
                  ))}
                  </div>
                  <div>
                  {organizerLinks.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 rounded"
                      onClick={() => setIsOrganizersOpen(false)}
                    >
                      {option.name}
                      {option.description && (
                        <span className="block text-xs text-gray-400">
                          {option.description}
                        </span>
                      )}
                    </Link>
                  ))}
                  </div>
                </div>
                </div>
              )}
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
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
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
                onClick={togglePlayers}
                className="block py-2 hover:text-blue-400 transition"
              >
                For Players and Teams
              </a>
              {isPlayersOpen &&
                playerOptions.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    className="block pl-4 py-1 text-sm hover:bg-gray-700 rounded"
                    onClick={() => {
                      setIsPlayersOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {option.name}
                    {option.description && (
                      <span className="block text-xs text-gray-400">
                        {option.description}
                      </span>
                    )}
                  </Link>
                ))}
            </div>
            <div>
              <a
                onClick={toggleOrganizers}
                className="block py-2 hover:text-blue-400 transition"
              >
                For Tournament Organizers
              </a>
              {isOrganizersOpen &&
                organizerOptions.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    className="block pl-4 py-1 text-sm hover:bg-gray-700 rounded"
                    onClick={() => {
                      setIsOrganizersOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {option.name}
                    {option.description && (
                      <span className="block text-xs text-gray-400">
                        {option.description}
                      </span>
                    )}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
