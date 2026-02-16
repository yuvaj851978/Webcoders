import { useState } from "react";
import { Check, Plus, Minus, Send, X, Calculator, TrendingUp, Shield } from "lucide-react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const SERVICES_DATA = [
  {
    id: "web-basic",
    name: "Basic Website",
    description: "5-page responsive website",
    price: 20000,
    category: "website",
    is_active: true,
  },
  {
    id: "web-advanced",
    name: "Content Management",
    description: "CMS integration for easy content updates",
    price: 30000,
    category: "website",
    is_active: true,
  },
  {
    id: "web-booking",
    name: "Booking System",
    description: "Online booking and reservation system",
    price: 50000,
    category: "website",
    is_active: true,
  },
  {
    id: "web-ecommerce",
    name: "E-commerce Store",
    description: "Complete online store with payment integration",
    price: 80000,
    category: "website",
    is_active: true,
  },
  {
    id: "seo",
    name: "SEO Optimization",
    description: "Improve Google ranking",
    price: 5000,
    category: "marketing",
    is_active: true,
  },
  {
    id: "maintenance",
    name: "Monthly Maintenance",
    description: "Bug fixes & updates",
    price: 4000,
    category: "support",
    is_active: true,
  },
];

export default function PricingCalculator() {
  const [services] = useState(SERVICES_DATA.filter((s) => s.is_active));
  const [selectedServices, setSelectedServices] = useState(new Map());
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Dramatic shoot-in animations
  const [headerRef, isHeaderVisible, getHeaderStyle] = useScrollAnimation({ animation: 'shoot-top', delay: 0, duration: 1000 });
  const [servicesRef, isServicesVisible, getServicesStyle] = useScrollAnimation({ animation: 'shoot-left', delay: 100, duration: 800 });
  const [quoteRef, isQuoteVisible, getQuoteStyle] = useScrollAnimation({ animation: 'shoot-right', delay: 200, duration: 800 });

  const toggleService = (id) => {
    setSelectedServices((prev) => {
      const map = new Map(prev);
      map.has(id) ? map.delete(id) : map.set(id, 1);
      return map;
    });
  };

  const updateQuantity = (id, delta) => {
    setSelectedServices((prev) => {
      const map = new Map(prev);
      const qty = Math.max(1, (map.get(id) || 1) + delta);
      map.set(id, qty);
      return map;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    selectedServices.forEach((qty, id) => {
      const service = services.find((s) => s.id === id);
      if (service) total += service.price * qty;
    });
    return total;
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("QUOTE DATA", {
        customer: formData,
        services: Array.from(selectedServices.entries()),
        total: calculateTotal(),
      });

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setSelectedServices(new Map());
      setFormData({ name: "", email: "", phone: "", notes: "" });

      setTimeout(() => {
        setSubmitSuccess(false);
        setShowQuoteForm(false);
      }, 2500);
    }, 1200);
  };

  const groupedServices = services.reduce((acc, s) => {
    acc[s.category] = acc[s.category] || [];
    acc[s.category].push(s);
    return acc;
  }, {});

  const total = calculateTotal();

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'website': return Calculator;
      case 'marketing': return TrendingUp;
      case 'support': return Shield;
      default: return Calculator;
    }
  };

  return (
    <div id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - shoots from top */}
        <div ref={headerRef} style={getHeaderStyle()} className={isHeaderVisible ? 'animate-shoot-top' : 'opacity-0'}>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Build Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the services you need and get an instant quote for your project
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Services - shoots from left */}
          <div ref={servicesRef} style={getServicesStyle()} className={`lg:col-span-2 space-y-8 ${isServicesVisible ? 'animate-shoot-left' : 'opacity-0'}`}>
            {Object.entries(groupedServices).map(([category, items]) => {
              const Icon = getCategoryIcon(category);
              return (
                <div key={category} className="group">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <h3 className="text-2xl font-bold capitalize text-gray-900">
                      {category}
                    </h3>
                  </div>

                  {items.map((service) => {
                    const isSelected = selectedServices.has(service.id);
                    const quantity = selectedServices.get(service.id) || 1;

                    return (
                      <div
                        key={service.id}
                        onClick={() => toggleService(service.id)}
                        className={`p-5 mb-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                          isSelected
                            ? "border-blue-500 shadow-lg bg-blue-50/50 transform scale-[1.01]"
                            : "border-gray-200 hover:border-blue-300 hover:shadow-md bg-white"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                                isSelected
                                  ? "bg-blue-500 border-blue-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {isSelected && (
                                <Check className="w-4 h-4 text-white" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {service.name}
                              </h4>
                              <p className="text-gray-600 text-sm">
                                {service.description}
                              </p>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-xl font-bold text-blue-600">
                              ₹{service.price.toLocaleString("en-IN")}
                            </div>

                            {isSelected && (
                              <div
                                className="flex items-center gap-2 mt-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <button
                                  onClick={() => updateQuantity(service.id, -1)}
                                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="font-semibold w-6 text-center">{quantity}</span>
                                <button
                                  onClick={() => updateQuantity(service.id, 1)}
                                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {/* Quote Card - shoots from right */}
          <div ref={quoteRef} style={getQuoteStyle()} className={isQuoteVisible ? 'animate-shoot-right' : 'opacity-0'}>
            <div className="sticky top-6">
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calculator className="w-6 h-6" />
                  Your Quote
                </h3>

                {selectedServices.size === 0 ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-white/60" />
                    </div>
                    <p className="text-blue-200">
                      Select services to calculate
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
                      {Array.from(selectedServices.entries()).map(
                        ([id, qty]) => {
                          const s = services.find((x) => x.id === id);
                          return (
                            <div key={id} className="flex justify-between text-sm">
                              <span className="text-blue-100">{s?.name} × {qty}</span>
                              <span className="font-semibold">
                                ₹{(s?.price * qty).toLocaleString("en-IN")}
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>

                    <div className="border-t border-white/20 my-4 pt-4 flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-2xl">₹{total.toLocaleString("en-IN")}</span>
                    </div>

                    <button
                      onClick={() => setShowQuoteForm(true)}
                      className="w-full bg-white text-blue-700 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Send className="w-5 h-5" />
                      Request Quote
                    </button>
                  </>
                )}
              </div>

              {/* Trust badges */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-xs text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-shoot-top">
          <div className="bg-white p-8 rounded-2xl w-full max-w-md relative animate-zoom-shoot">
            <button
              onClick={() => setShowQuoteForm(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mt-4">
                  Quote Submitted!
                </h3>
                <p className="text-gray-600 mt-2">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Quote</h3>
                
                {["name", "email", "phone"].map((field) => (
                  <input
                    key={field}
                    required={field !== "phone"}
                    placeholder={field.toUpperCase()}
                    value={formData[field]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field]: e.target.value,
                      })
                    }
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                ))}
                <textarea
                  placeholder="Additional Notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notes: e.target.value,
                    })
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows={3}
                />
                <button
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
