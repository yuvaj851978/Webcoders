import { useEffect, useState } from 'react';
import { Building2, Dumbbell, Home, Zap, Globe, Shield } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('services');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const industries = [
    {
      icon: Building2,
      title: 'Hotels & Resorts',
      description: 'Beautiful booking systems, galleries, and guest management portals',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Dumbbell,
      title: 'Gyms & Fitness',
      description: 'Membership portals, class schedules, and trainer booking systems',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Home,
      title: 'Rentals & Real Estate',
      description: 'Property listings, virtual tours, and booking management',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance',
    },
    {
      icon: Globe,
      title: 'Fully Responsive',
      description: 'Perfect on all devices and screen sizes',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security standards',
    },
  ];

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={i}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose WebStudios?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div
                  key={i}
                  className="text-center transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-blue-100">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
