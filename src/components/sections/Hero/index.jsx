import Button from "../../common/Button";

const Hero = () => {
  const games = [
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
    "https://www.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <img
          src="https://www.toornament.com/asset/logo/toornament/toornament-inverted.svg?677791064"
          alt="Toornament Logo"
          className="h-12 mx-auto mb-6"
        />
        <p className="text-white text-3xl md:text-3xl font-bold mb-20">
          Everything you need for esports competitions
        </p>

        {/* Game List */}
        <div className=" grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 gap-4 mb-12">
          {games.map((game, index) => (
            <img
              key={index}
              src={game}
              alt={`Game ${index + 1}`}
              className="w-full h-full object-cover rounded-sm border-1 border-transparent shadow-md hover:shadow-lg hover:border-[#009dff]"
            />
          ))}
        </div>

        {/* All Competitions Button */}
        <Button variant="outline">All competitions and games</Button>
      </div>
    </section>
  );
};

export default Hero;
