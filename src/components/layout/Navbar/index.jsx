import { Link } from "react-router-dom";
import Button from "../../common/Button";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-9">
          <img
            src="https://www.toornament.com/media/8253243463000877227/original"
            alt="Toornament Logo"
            className="h-10"
          />
          <a
            href="#players"
            className="hover:text-blue-400 transition text-white"
          >
            For Players and Teams
          </a>
          <a
            href="#organizers"
            className="hover:text-blue-400 transition text-white"
          >
            For Tournament Organizers
          </a>
        </div>
        <div className="space-x-4">
          <Button variant="outline">Play</Button>
          <Button variant="outline">Organize</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
