import { Building2, Dumbbell, Home, Zap, Globe, Shield, Wrench, Layers } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Services() {
  // Dramatic shoot-in animations from different directions
  const [headerRef, isHeaderVisible, getHeaderStyle] = useScrollAnimation({ animation: 'shoot-top', delay: 0, duration: 1000 });
  const [card1Ref, isCard1Visible, getCard1Style] = useScrollAnimation({ animation: 'shoot-left', delay: 100, duration: 800 });
  const [card2Ref, isCard2Visible, getCard2Style] = useScrollAnimation({ animation: 'shoot-bottom', delay: 200, duration: 800 });
  const [card3Ref, isCard3Visible, getCard3Style] = useScrollAnimation({ animation: 'shoot-right', delay: 300, duration: 800 });
  const [processRef, isProcessVisible, getProcessStyle] = useScrollAnimation({ animation: 'zoom-shoot', delay: 400, duration: 1000 });
  const [featuresRef, isFeaturesVisible, getFeaturesStyle] = useScrollAnimation({ animation: 'wave', delay: 500, duration: 1200 });

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

  const developmentSteps = [
    { icon: Layers, title: 'Planning', desc: 'Requirements analysis & strategy' },
    { icon: Wrench, title: 'Development', desc: 'Clean code with modern tech' },
    { icon: Shield, title: 'Testing', desc: 'Rigorous QA & bug fixing' },
    { icon: Zap, title: 'Launch', desc: 'Deployment & optimization' },
  ];

  return (
    <div id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - shoots from top */}
        <div ref={headerRef} style={getHeaderStyle()} className={isHeaderVisible ? 'animate-shoot-top' : 'opacity-0'}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              What We Do
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized solutions tailored to your business needs
            </p>
          </div>
        </div>

        {/* Industry Cards - different directions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Card 1 - shoots from left */}
          <div ref={card1Ref} style={getCard1Style()} className={isCard1Visible ? 'animate-shoot-left' : 'opacity-0'}>
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                Hotels & Resorts
              </h3>
              <p className="text-gray-600">
                Beautiful booking systems, galleries, and guest management portals
              </p>
            </div>
          </div>

          {/* Card 2 - shoots from bottom */}
          <div ref={card2Ref} style={getCard2Style()} className={isCard2Visible ? 'animate-shoot-bottom' : 'opacity-0'}>
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Gyms & Fitness
              </h3>
              <p className="text-gray-600">
                Membership portals, class schedules, and trainer booking systems
              </p>
            </div>
          </div>

          {/* Card 3 - shoots from right */}
          <div ref={card3Ref} style={getCard3Style()} className={isCard3Visible ? 'animate-shoot-right' : 'opacity-0'}>
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Rentals & Real Estate
              </h3>
              <p className="text-gray-600">
                Property listings, virtual tours, and booking management
              </p>
            </div>
          </div>
        </div>

        {/* Development Process - zoom shoot */}
        <div ref={processRef} style={getProcessStyle()} className={`mb-20 ${isProcessVisible ? 'animate-zoom-shoot' : 'opacity-0'}`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {developmentSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center transform group-hover:scale-125 group-hover:rotate-180 transition-all duration-500 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Us - wave reveal */}
        <div ref={featuresRef} style={getFeaturesStyle()} className={isFeaturesVisible ? 'animate-wave-reveal' : 'opacity-0'}>
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <h3 className="text-3xl font-bold text-white text-center mb-12 relative z-10">
              Why Choose WebStudios?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="text-center transform hover:scale-110 transition-transform duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-colors duration-300">
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
    </div>
  );
}
