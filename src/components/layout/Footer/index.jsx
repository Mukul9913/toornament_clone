import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Logo & Socials */}
          <div>
            <img
              className="w-32 mb-5"
              src="https://www.toornament.com/asset/logo/toornament/toornament-inverted.svg?677791064"
              alt="Toornament Logo"
            />
            <p className="text-lg">
              Everything you need for esports competitions
            </p>
            <p className="text-sm mt-2 text-[#a7abbe]">
              © 2025 Toornament - All Rights Reserved
            </p>

            {/* Social Icons */}
            <div className="flex justify-center mt-8">
              <ul className="generic-nav flex space-x-4">
                {[
                  "facebook",
                  "twitter",
                  "instagram",
                  "linkedin",
                  "youtube",
                ].map((name, i) => (
                  <li key={i}>
                    <a
                      href={`https://${name}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-10 h-10"
                     
                    >
                      <img
                        src={`https://www.toornament.com/media/8554095373522624512/original`}
                        alt={name}
                        className="w-5 h-5 grayscale transition duration-300 group-hover:grayscale-0 group-hover:brightness-0 group-hover:invert"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h3 className="text-sm text-[#a7abbe] font-semibold mb-4">
              Features & Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#organizer"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Organizer Software
                </Link>
              </li>
              <li>
                <Link
                  to="#boost"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Tournament Boost
                </Link>
              </li>
              <li>
                <Link
                  to="#circuit"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Professional Circuit
                </Link>
              </li>
              <li>
                <Link
                  to="#white-label"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  White-label Platform
                </Link>
              </li>
              <li>
                <Link
                  to="#api"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Developer API
                </Link>
              </li>
              <li>
                <Link
                  to="#pricing"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 (Duplicate on purpose) */}
          <div>
            <h3 className="text-sm text-[#a7abbe] font-semibold mb-4">
              Features & Products
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#organizer"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Organizer Software
                </Link>
              </li>
              <li>
                <Link
                  to="#boost"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Tournament Boost
                </Link>
              </li>
              <li>
                <Link
                  to="#circuit"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Professional Circuit
                </Link>
              </li>
              <li>
                <Link
                  to="#white-label"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  White-label Platform
                </Link>
              </li>
              <li>
                <Link
                  to="#api"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Developer API
                </Link>
              </li>
              <li>
                <Link
                  to="#pricing"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-sm text-[#a7abbe] font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#blog"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#help"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="#dev-docs"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Developer Doc
                </Link>
              </li>
              <li>
                <Link
                  to="#terms"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  to="#privacy"
                  className="text-[#a7abbe] hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
