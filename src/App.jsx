import { useState } from 'react';
import Hero  from './components/Hero';
import Services  from './components/Services';
import  PricingCalculator  from './components/PricingCalculator';
import RecentClients  from './components/RecentClients';
import Contact  from './components/Contact';
import Footer  from './components/Footer';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              WebStudios
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Services
              </a>
              <a
                href="#portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>

      <Hero />
      <Services />
      <RecentClients />
      <PricingCalculator />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
