import { useEffect, useState } from 'react';
import { ExternalLink, Globe } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation'
import min from '../assets/60min.png'
import mmml from '../assets/mml.png'
// import fintellect from  '../assets/fintellect.png'

export default function RecentClients() {
  const [isVisible, setIsVisible] = useState(false);
  const [ref] = useScrollAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const clients = [
    {
      name: 'MMML Co.',
      description: 'Professional business website with modern design and corporate features',
      url: 'https://www.mmml.co.in/',
      category: 'Corporate',
      image: mmml,
    },
    {
      name: 'Fintellect',
      description: 'Financial wellness application with interactive tools and secure features',
      url: 'https://app.fintellect.co.in/60-mins-money-clarity',
      category: 'FinTech App',
      image: min,
    },
    // {
    //   name: 'Fintellect',
    //   description: 'Financial wellness application with interactive tools and secure features',
    //   url: 'https://app.fintellect.co.in/',
    //   category: 'FinTech App',
    //   image: fintellect,
    // },
  ];

  return (
    <div id="portfolio"  ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Recent Client Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcase of websites we've built for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, i) => (
            <a
              key={i}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <ExternalLink className="w-5 h-5" />
                    <span>Visit Website</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {client.name}
                    </h3>
                    <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                      {client.category}
                    </span>
                  </div>
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-600">
                  {client.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
