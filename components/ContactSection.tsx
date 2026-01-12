'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2,
      duration: 3 + Math.random() * 4,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-slate-900">
      {/* Space background */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: Math.random() * 0.5 + 0.3,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-8xl mx-auto px-6 z-10 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
          Launch Into Contact
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Ready to explore something amazing? Send me a message and let's create the future together.
        </p>

        {/* Contact Icons */}
        <div className="flex gap-6 justify-center mb-12">
          <a
            href="mailto:thakurniks23943@gmail.com"
            className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            title="Email"
          >
            <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-slate-600 transition-all duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Email</span>
          </a>

          <a
            href="tel:+917018323943"
            className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            title="Phone"
          >
            <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-slate-600 transition-all duration-300">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Call</span>
          </a>

          <a
            href="https://www.google.com/maps/place/Shimla,+Himachal+Pradesh"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
            title="Location"
          >
            <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-slate-700 group-hover:border-slate-600 transition-all duration-300">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">Location</span>
          </a>
        </div>
      </div>
    </section>
  );
}