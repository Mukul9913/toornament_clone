import React from "react";
import Button from "../../common/Button";

const Features = () => {
  const features = [
    {
      title: "Tournament Boost",
      description:
        "Unlock advanced organizer features for 1 tournament, once for all",
      icon: "https://www.toornament.com/media/8559703539012976640/original",
    },
    {
      title: "Professional Circuit",
      description:
        "Unlock all features for your competition project and manage circuits",
      icon: "https://www.toornament.com/media/8559703539012976640/original",
    },
    {
      title: "White-label Platform",
      description:
        "Your customizable gaming platform on your domain name for all your competitions",
      icon: "https://www.toornament.com/media/8559703539012976640/original",
    },
    {
      title: "Developer API",
      description:
        "Freely create your own custom projects for your game or for your community",
      icon: "https://www.toornament.com/media/8559703539012976640/original",
    },
  ];

  const trustedBy = [
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807491034882048/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550810689143226368/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550807148646449152/original", // Ubisoft
    "https://www.toornament.com/media/8550810689143226368/original", // Ubisoft
  ];

  return (
    <section
      id="features"
      className="py-16 bg-white relative"
      style={{
        backgroundImage: `url(https://www.toornament.com/media/8551245168584835072/original)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0"></div> {/* Overlay for readability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 ">
          Advanced Features and Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-90 px-5 py-6 rounded-sm border-1 border-transparent hover:border-1 hover:border-[#009dff] "
            >
              <img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-center text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-loose">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline">Compare products and pricing</Button>
        </div>
        <div className="mt-16 relative">
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-8">
              Trusted by
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {trustedBy.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-10 m-4 object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;