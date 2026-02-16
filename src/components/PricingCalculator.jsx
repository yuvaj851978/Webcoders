import { useEffect, useState } from "react";
import { Check, Plus, Minus, Send } from "lucide-react";

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
    name: "Content Management ",
    description: "CMS integration for easy content updates",
    price: 30000,
    category: "website",
    is_active: true,
  },
  {
    id: "web-advanced",
    name: "Booking System",
    description: "Online booking and reservation system",
    price: 50000,
    category: "website",
    is_active: true,
  },
  {
    id: "web-advanced",
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
    category: "support" ,
    is_active: true,
  },
];

export default function PricingCalculator() {
  const [services, setServices] = useState([]);
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

  useEffect(() => {
    // Load local services
    setServices(SERVICES_DATA.filter((s) => s.is_active));
  }, []);

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

    // Simulate API delay
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

  return (
    <div id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* SERVICES */}
        <div className="lg:col-span-2 space-y-8">
          {Object.entries(groupedServices).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-2xl font-bold capitalize mb-4">
                {category}
              </h3>

              {items.map((service) => {
                const isSelected = selectedServices.has(service.id);
                const quantity = selectedServices.get(service.id) || 1;

                return (
                  <div
                    key={service.id}
                    onClick={() => toggleService(service.id)}
                    className={`p-6 mb-3 border-2 rounded-xl cursor-pointer ${
                      isSelected
                        ? "border-blue-500 shadow-lg"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex justify-between">
                      <div>
                        <div className="flex gap-3 items-center mb-2">
                          <div
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                ? "bg-blue-500 border-blue-500"
                                : "border-gray-300"
                            }`}
                          >
                            {isSelected && (
                              <Check className="w-4 h-4 text-white" />
                            )}
                          </div>
                          <h4 className="font-semibold">
                            {service.name}
                          </h4>
                        </div>
                        <p className="ml-9 text-gray-600">
                          {service.description}
                        </p>
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
                              onClick={() =>
                                updateQuantity(service.id, -1)
                              }
                              className="w-8 h-8 bg-gray-100 rounded-full"
                            >
                              <Minus size={16} />
                            </button>
                            <span>{quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(service.id, 1)
                              }
                              className="w-8 h-8 bg-gray-100 rounded-full"
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
          ))}
        </div>

        {/* QUOTE */}
        <div className="sticky top-6">
          <div className="bg-blue-700 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Your Quote</h3>

            {selectedServices.size === 0 ? (
              <p className="text-blue-200 text-center">
                Select services to calculate
              </p>
            ) : (
              <>
                {Array.from(selectedServices.entries()).map(
                  ([id, qty]) => {
                    const s = services.find((x) => x.id === id);
                    return (
                      <div key={id} className="flex justify-between text-sm">
                        <span>{s?.name} × {qty}</span>
                        <span>
                          ₹{(s?.price * qty).toLocaleString("en-IN")}
                        </span>
                      </div>
                    );
                  }
                )}

                <div className="border-t border-white/20 my-4 pt-4 flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>

                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="w-full bg-white text-blue-700 py-3 rounded-lg font-semibold"
                >
                  <Send className="inline mr-2" size={18} />
                  Request Quote
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-full max-w-md">
            {submitSuccess ? (
              <div className="text-center">
                <Check className="mx-auto text-green-600" size={40} />
                <h3 className="text-xl font-bold mt-4">
                  Quote Submitted
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-4">
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
                    className="w-full p-3 border rounded"
                  />
                ))}
                <textarea
                  placeholder="Notes"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      notes: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded"
                />
                <button
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
