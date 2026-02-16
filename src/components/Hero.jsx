import { Code2, Sparkles, ArrowDown, Mouse } from "lucide-react";
import { useMemo } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Pre-defined bubble configurations for consistency
const BUBBLE_CONFIGS = [
  { width: 400, height: 400, left: 10, top: 20, delay: 0, duration: 15 },
  { width: 350, height: 350, left: 70, top: 60, delay: 2, duration: 18 },
  { width: 300, height: 300, left: 30, top: 70, delay: 4, duration: 20 },
  { width: 450, height: 450, left: 80, top: 10, delay: 1, duration: 16 },
  { width: 320, height: 320, left: 50, top: 40, delay: 3, duration: 14 },
  { width: 380, height: 380, left: 20, top: 50, delay: 5, duration: 17 },
  { width: 280, height: 280, left: 60, top: 30, delay: 2.5, duration: 19 },
  { width: 420, height: 420, left: 40, top: 80, delay: 1.5, duration: 13 },
  { width: 360, height: 360, left: 90, top: 50, delay: 4.5, duration: 21 },
  { width: 340, height: 340, left: 15, top: 35, delay: 3.5, duration: 16 },
];

export default function Hero() {
  const [titleRef, isTitleVisible, getTitleStyle] = useScrollAnimation({ animation: 'fade-up', delay: 0, duration: 1000 });
  const [subtitleRef, isSubtitleVisible, getSubtitleStyle] = useScrollAnimation({ animation: 'fade-up', delay: 200, duration: 800 });
  const [descRef, isDescVisible, getDescStyle] = useScrollAnimation({ animation: 'fade-up', delay: 400, duration: 800 });
  const [ctaRef, isCtaVisible, getCtaStyle] = useScrollAnimation({ animation: 'fade-up', delay: 600, duration: 800 });
  const [statsRef, isStatsVisible, getStatsStyle] = useScrollAnimation({ animation: 'scale-up', delay: 800, duration: 800 });

  const bubbles = useMemo(() => 
    BUBBLE_CONFIGS.map((config, i) => ({
      id: i,
      ...config,
    }))
  , []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-30">
          {bubbles.map((b) => (
            <div
              key={b.id}
              className="absolute bg-blue-500 rounded-full animate-orb"
              style={{
                width: `${b.width}px`,
                height: `${b.height}px`,
                left: `${b.left}%`,
                top: `${b.top}%`,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.duration}s`,
                opacity: 0.08,
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main title */}
        <div ref={titleRef} style={getTitleStyle()} className={isTitleVisible ? 'animate-fade-up' : 'opacity-0'}>
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Code2 className="w-16 h-16 text-blue-400 animate-pulse" />
              <Sparkles className="w-8 h-8 text-yellow-400 -ml-3 -mt-6 absolute animate-bounce" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">
              WebStudios
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} style={getSubtitleStyle()} className={isSubtitleVisible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-2xl md:text-3xl text-blue-200 mb-4 font-semibold">
            Transforming Ideas Into Digital Excellence
          </p>
        </div>

        {/* Description */}
        <div ref={descRef} style={getDescStyle()} className={isDescVisible ? 'animate-fade-up' : 'opacity-0'}>
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Custom websites for Hotels • Gyms • Rentals • Businesses
            <br />
            <span className="text-blue-400 font-medium">
              Fully Customized • Feature-Rich • Production Ready
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} style={getCtaStyle()} className={isCtaVisible ? 'animate-fade-up' : 'opacity-0'}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 overflow-hidden"
            >
              <span className="relative z-10">Get Your Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#services"
              className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-lg backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Stats with staggered animation */}
        <div ref={statsRef} style={getStatsStyle()} className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 ${isStatsVisible ? 'animate-scale-up' : 'opacity-0'}`}>
          {[
            { num: "15+", label: "Projects Delivered", icon: "🚀" },
            { num: "100%", label: "Client Satisfaction", icon: "⭐" },
            { num: "24/7", label: "Support Available", icon: "💬" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.num}
              </div>
              <div className="text-gray-300">{stat.label}</div>
              <div className="text-2xl mt-2">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-scroll-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <Mouse className="w-8 h-8 mb-2" />
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
