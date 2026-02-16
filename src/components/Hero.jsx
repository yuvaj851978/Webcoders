import { Code2, Sparkles } from "lucide-react";
import { useMemo } from "react";

export default function Hero() {
  const bubbles = useMemo(() =>
    Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      width:  300 + 50,
      height:  300 + 50,
      left:  100,
      top:  100,
      delay:  5,
      duration:  10 + 10,
    }))
  , []);


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          {bubbles.map((b) => (
            <div
              key={b.id}
              className="absolute bg-blue-500 rounded-full animate-float"
              style={{
                width: `${b.width}px`,
                height: `${b.height}px`,
                left: `${b.left}%`,
                top: `${b.top}%`,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.duration}s`,
                opacity: 0.05,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <Code2 className="w-16 h-16 text-blue-400 animate-pulse" />
            <Sparkles className="w-8 h-8 text-yellow-400 -ml-3 -mt-6 animate-bounce" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-text-shimmer bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent bg-[length:200%_auto]">
            WebStudios
          </h1>

          <p className="text-2xl md:text-3xl text-blue-200 mb-4 animate-fade-in-up animation-delay-200">
            Transforming Ideas Into Digital Excellence
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Custom websites for Hotels • Gyms • Rentals • Businesses
            <br />
            <span className="text-blue-400">
              Fully Customized • Feature-Rich • Production Ready
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <a
              href="#pricing"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
            >
              Get Your Quote
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-lg backdrop-blur-sm border border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-800">
          {[
            { num: "15+", label: "Projects Delivered" },
            { num: "100%", label: "Client Satisfaction" },
            { num: "24/7", label: "Support Available" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">
                {stat.num}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
