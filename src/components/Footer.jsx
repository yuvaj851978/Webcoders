import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Code2 } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Footer() {
  const [footerRef, isFooterVisible, getFooterStyle] = useScrollAnimation({ animation: 'shoot-top', delay: 0, duration: 1000 });
  const [colsRef, isColsVisible, getColsStyle] = useScrollAnimation({ animation: 'zoom-shoot', delay: 200, duration: 800 });
  const [bottomRef, isBottomVisible, getBottomStyle] = useScrollAnimation({ animation: 'shoot-bottom', delay: 400, duration: 600 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div ref={footerRef} style={getFooterStyle()} className={`max-w-7xl mx-auto px-6 relative z-10 ${isFooterVisible ? 'animate-shoot-top' : 'opacity-0'}`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                WebStudios
              </h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming ideas into digital excellence. Custom web solutions for businesses of all sizes.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Contact', href: '#contact' },
              ].map((link, i) => (
                <li key={i}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'E-commerce Solutions',
                'Booking Systems',
                'SEO Optimization',
                'Web Hosting',
              ].map((service, i) => (
                <li key={i} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">contact@WebStudios.com</span>
              </li>
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">Mumbai, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - zoom shoot */}
        <div ref={colsRef} style={getColsStyle()} className={`border-t border-white/10 pt-8 ${isColsVisible ? 'animate-zoom-shoot' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 WebStudios. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to top button - shoots from bottom */}
        <div ref={bottomRef} style={getBottomStyle()} className={`mt-8 flex justify-center ${isBottomVisible ? 'animate-shoot-bottom' : 'opacity-0'}`}>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-blue-500/50"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
