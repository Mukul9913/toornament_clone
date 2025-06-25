import React from "react";
import Button from "../../common/Button";

const PlayersOrganizers = () => {
  return (
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2">
        <div className="grid md:grid-cols-2 gap-30">
          {/* Players and Teams */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <img
                className="w-[50px]"
                src="https://www.toornament.com/media/8550787924606566400/original"
                alt="Players Icon"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50"; // Fallback if image fails
                }}
              />
            </div>
            <h2 className="text-3xl font-bold mb-6 mt-2 flex items-center justify-center">
              For Players and Teams
            </h2>
            <div className="flex flex-col items-center">
              <img
                src="https://www.toornament.com/media/8551889822921703424/original"
                alt="Players Tournaments"
                className="w-full rounded-sm h-full object-cover mb-4 border-1 border-transparent hover:border-blue-500 transition duration-300" // Adjusted height for better visibility
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x200"; // Fallback
                }}
              />
              <p className="text-lg mb-4 p-2 text-center">
                Thousands of tournaments every week, on all the best games, for
                all playing levels, all over the world
              </p>
              <Button>Explore tournaments</Button>
            </div>
          </div>

          {/* Tournament Organizers */}
          <div className="flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <img
                className="w-[50px] "
                src="https://www.toornament.com/media/8550787924606566400/original"
                alt="Organizers Icon"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/50"; // Fallback
                }}
              />
            </div>
            <h2 className="text-3xl font-bold mb-6 mt-2 flex items-center justify-center">
              For Tournament Organizers
            </h2>
            <div className="flex flex-col items-center">
              <img
                src="https://www.toornament.com/media/8551889822921703424/original"
                alt="Organizer Dashboard"
                className="w-full rounded-sm h-full object-cover mb-4 border-1 border-transparent hover:border-blue-500 transition duration-300" // Adjusted height
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/300x200"; // Fallback
                }}
              />
              <p className="text-lg mb-4 p-2 text-center">
                Easily manage all your tournaments and leagues whatever the game
                and the format with a wide choice of settings
              </p>
              <div className="flex justify-center space-x-4">
                <Button>Discover organizer software</Button>
                <Button variant="outline">Start organizing</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayersOrganizers;