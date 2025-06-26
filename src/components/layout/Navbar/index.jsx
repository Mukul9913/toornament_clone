import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayersOpen, setIsPlayersOpen] = useState(false);
  const [isOrganizersOpen, setIsOrganizersOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsPlayersOpen(false);
    setIsOrganizersOpen(false);
  };

  const togglePlayers = () => {
    setIsPlayersOpen(!isPlayersOpen);
    setIsOrganizersOpen(false);
  };

  const toggleOrganizers = () => {
    setIsOrganizersOpen(!isOrganizersOpen);
    setIsPlayersOpen(false);
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
    <nav className="py-4 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-6">
            <img
              src="https://www.toornament.com/media/8253243463000877227/original"
              alt="Toornament Logo"
              className="h-10"
            />
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={togglePlayers}
                  className="hover:text-blue-400 transition py-2"
                  aria-haspopup="true"
                  aria-expanded={isPlayersOpen}
                >
                  For Players and Teams
                </button>
                {isPlayersOpen && (
                  <div className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-xl mt-2 w-64 z-11 left-0">
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
                <button
                  onClick={toggleOrganizers}
                  className="hover:text-blue-400 transition py-2"
                  aria-haspopup="true"
                  aria-expanded={isOrganizersOpen}
                >
                  For Tournament Organizers
                </button>
                {isOrganizersOpen && (
                  <div className="z-11 absolute bg-white text-black p-4 rounded-lg shadow-xl mt-2 w-[600px] left-0">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        {organizerOptions.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="block px-4 py-2 text-sm hover:bg-blue-100 rounded"
                            onClick={() => setIsOrganizersOpen(false)}
                          >
                            <div className="flex items-center space-x-4">
                              <img
                                className="w-8 h-8"
                                src="https://www.toornament.com/media/8484946689683832832/original"
                                alt="icon"
                              />
                              <div>
                                <span className="text-base">{option.name}</span>
                                {option.description && (
                                  <span className="block text-xs text-gray-500">
                                    {option.description}
                                  </span>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div>
                        {organizerLinks.map((option) => (
                          <Link
                            key={option.name}
                            to={option.path}
                            className="block px-4 py-2 text-sm hover:bg-gray-100 rounded"
                            onClick={() => setIsOrganizersOpen(false)}
                          >
                            {option.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Mobile Menu Button and Desktop Buttons */}
          <div className="flex items-center space-x-4">
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
            {/* Buttons visible on all screens */}
            <div className="flex items-center space-x-2">
              <Link to="/play">
                <Button variant="outline" className="text-sm py-1 px-3">
                  Play
                </Button>
              </Link>
              <Link to="/organize">
                <Button variant="outline" className="text-sm py-1 px-3">
                  Organize
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white p-4 mt-2 rounded-lg shadow-xl z-11">
            <div className="space-y-4">
              <div>
                <button
                  onClick={togglePlayers}
                  className="block py-2 hover:text-blue-400 transition w-full text-left"
                >
                  For Players and Teams
                </button>
                {isPlayersOpen && (
                  <div className="pl-4 space-y-2">
                    {playerOptions.map((option) => (
                      <Link
                        key={option.name}
                        to={option.path}
                        className="block py-1 text-sm hover:bg-gray-700 rounded"
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
                )}
              </div>
              <div>
                <button
                  onClick={toggleOrganizers}
                  className="block py-2 hover:text-blue-400 transition w-full text-left"
                >
                  For Tournament Organizers
                </button>
                {isOrganizersOpen && (
                  <div className="pl-4 space-y-2">
                    {organizerOptions.concat(organizerLinks).map((option) => (
                      <Link
                        key={option.name}
                        to={option.path}
                        className="block py-1 text-sm hover:bg-gray-700 rounded"
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
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  to="/play"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm py-2 px-4"
                >
                  Play
                </Link>
                <Link
                  to="/organize"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm py-2 px-4"
                >
                  Organize
mathbb

                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;