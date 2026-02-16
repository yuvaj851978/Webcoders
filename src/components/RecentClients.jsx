import { ExternalLink, Globe, Star } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import min from '../assets/60min.png';
import mmml from '../assets/mml.png';

export default function RecentClients() {
  const [headerRef, isHeaderVisible, getHeaderStyle] = useScrollAnimation({ animation: 'shoot-top', delay: 0, duration: 1000 });
  const [card1Ref, isCard1Visible, getCard1Style] = useScrollAnimation({ animation: 'shoot-left', delay: 100, duration: 800 });
  const [card2Ref, isCard2Visible, getCard2Style] = useScrollAnimation({ animation: 'shoot-right', delay: 200, duration: 800 });

  const clients = [
    {
      name: 'MMML Co.',
      description: 'Professional business website with modern design and corporate features',
      url: 'https://www.mmml.co.in/',
      category: 'Corporate',
      image: mmml,
      rating: 5,
    },
    {
      name: 'Fintellect',
      description: 'Financial wellness application with interactive tools and secure features',
      url: 'https://app.fintellect.co.in/60-mins-money-clarity',
      category: 'FinTech App',
      image: min,
      rating: 5,
    },
  ];

  return (
    <div id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 opacity-70" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-50 rounded-full translate-x-1/2 opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - shoots from top */}
        <div ref={headerRef} style={getHeaderStyle()} className={isHeaderVisible ? 'animate-shoot-top' : 'opacity-0'}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Our Work
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Recent Client Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcase of websites we've built for our clients
            </p>
          </div>
        </div>

        {/* Client Cards - shoot from left and right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 - shoots from left */}
          <div ref={card1Ref} style={getCard1Style()} className={isCard1Visible ? 'animate-shoot-left' : 'opacity-0'}>
            <a
              href={clients[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift block"
            >
              {/* Image container with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={clients[0].image}
                  alt={clients[0].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit Website</span>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-semibold rounded-full">
                    {clients[0].category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {clients[0].name}
                    </h3>
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(clients[0].rating)].map((_, starI) => (
                        <Star key={starI} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  {clients[0].description}
                </p>
              </div>

              {/* Hover border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors duration-300 pointer-events-none" />
            </a>
          </div>

          {/* Card 2 - shoots from right */}
          <div ref={card2Ref} style={getCard2Style()} className={isCard2Visible ? 'animate-shoot-right' : 'opacity-0'}>
            <a
              href={clients[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift block"
            >
              {/* Image container with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={clients[1].image}
                  alt={clients[1].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit Website</span>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-semibold rounded-full">
                    {clients[1].category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {clients[1].name}
                    </h3>
                    {/* Rating stars */}
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(clients[1].rating)].map((_, starI) => (
                        <Star key={starI} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  {clients[1].description}
                </p>
              </div>

              {/* Hover border glow effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/30 transition-colors duration-300 pointer-events-none" />
            </a>
          </div>
        </div>

        {/* View more CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of our work?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
          >
            <Globe className="w-5 h-5" />
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
}
