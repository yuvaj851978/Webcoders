import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react";
import emailjs from 'emailjs-com';
import { useState } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function Contact() {
  const [headerRef, isHeaderVisible, getHeaderStyle] = useScrollAnimation({ animation: 'shoot-top', delay: 0, duration: 1000 });
  const [infoRef, isInfoVisible, getInfoStyle] = useScrollAnimation({ animation: 'shoot-left', delay: 100, duration: 800 });
  const [formRef, isFormVisible, getFormStyle] = useScrollAnimation({ animation: 'shoot-right', delay: 200, duration: 800 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_WebStudios',
        'template_contact',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'oYhT80ZqswwD3oWBP'
      );

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  return (
    <div id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - shoots from top */}
        <div ref={headerRef} style={getHeaderStyle()} className={isHeaderVisible ? 'animate-shoot-top' : 'opacity-0'}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help your business grow
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info - shoots from left */}
          <div ref={infoRef} style={getInfoStyle()} className={isInfoVisible ? 'animate-shoot-left' : 'opacity-0'}>
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">Call us to discuss your project</p>
                  <a
                    href="tel:+917400830534"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors mt-2 block hover:translate-x-2 transition-transform"
                  >
                    +91 74008 30534
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 group">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Raipur, India</p>
                  <p className="text-gray-500 mt-2">Available for projects worldwide</p>
                </div>
              </div>

              {/* Message CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="w-6 h-6" />
                  <h3 className="text-lg font-bold">Prefer messaging?</h3>
                </div>
                <p className="text-blue-100 text-sm">
                  Send us a message and we'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - shoots from right */}
          <div ref={formRef} style={getFormStyle()} className={isFormVisible ? 'animate-shoot-right' : 'opacity-0'}>
            {submitSuccess ? (
              <div className="bg-white rounded-2xl p-8 shadow-xl flex items-center justify-center min-h-96 animate-zoom-shoot">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all focus:shadow-lg"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all focus:shadow-lg"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all focus:shadow-lg resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
