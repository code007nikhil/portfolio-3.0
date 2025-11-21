'use client';

import { useState, useEffect } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  // Generate random stars on mount
  useEffect(() => {
    const generatedStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2,
      duration: 3 + Math.random() * 4,
    }));
    setStars(generatedStars);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Space background with gradient */}
      <div className="absolute inset-0">
        {/* Animated stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Launch Into Contact
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Ready to explore something amazing? Send me a message and let's create the future together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information - Futuristic Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">
              Connection Hub
            </h3>

            {/* Email Card */}
            <div className="backdrop-blur-md bg-slate-800/60 border border-slate-600 rounded-xl p-6 hover:border-slate-500 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-white" />
                <h4 className="font-semibold text-white">Email</h4>
              </div>
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-gray-300 transition-colors text-lg break-all"
              >
                thakurniks23943@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="backdrop-blur-md bg-slate-800/60 border border-slate-600 rounded-xl p-6 hover:border-slate-500 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-white" />
                <h4 className="font-semibold text-white">Phone</h4>
              </div>
              <a
                href="tel:+1234567890"
                className="text-white hover:text-gray-300 transition-colors text-lg"
              >
                +91 7018323943
              </a>
            </div>

            {/* Location Card */}
            <div className="backdrop-blur-md bg-slate-800/60 border border-slate-600 rounded-xl p-6 hover:border-slate-500 hover:bg-slate-700/60 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-white" />
                <h4 className="font-semibold text-white">Location</h4>
              </div>
              <p className="text-gray-300">Shimla, Himachal Pradesh, India</p>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-semibold text-white mb-4 text-sm tracking-widest uppercase">Follow The Signal</h4>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://github.com/code007nikhil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 backdrop-blur-md bg-slate-700 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-600 hover:border-slate-500 hover:shadow-lg transition-all duration-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nikhil-thakur00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 backdrop-blur-md bg-slate-700 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-600 hover:border-slate-500 hover:shadow-lg transition-all duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/nikhil.thakur_00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 backdrop-blur-md bg-slate-700 border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-600 hover:border-slate-500 hover:shadow-lg transition-all duration-300"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Futuristic */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-md bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-slate-500 focus:bg-slate-700/60 focus:shadow-lg transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-md bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-slate-500 focus:bg-slate-700/60 focus:shadow-lg transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Field */}
              <div className="group">
                <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                  Project Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 backdrop-blur-md bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-slate-500 focus:bg-slate-700/60 focus:shadow-lg transition-all duration-300"
                  placeholder="Web Development Project"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 backdrop-blur-md bg-slate-800/60 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-slate-500 focus:bg-slate-700/60 focus:shadow-lg transition-all duration-300 resize-none"
                  placeholder="Tell me about your vision..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 mt-6 font-bold text-lg tracking-wider uppercase rounded-lg bg-slate-700 hover:bg-slate-600 text-white border border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                Send Message
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 backdrop-blur-md bg-green-500/20 border border-green-400/60 rounded-lg animate-in fade-in-50">
                  <p className="text-green-200 font-semibold flex items-center gap-2">
                    <span className="text-xl">✓</span>
                    Message transmitted successfully! Standing by for response.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
