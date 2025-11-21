'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-blue-500/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with Glitch Effect */}
            <a
              href="#home"
              className="relative text-2xl font-bold text-white group"
              onClick={() => handleNavClick('#home')}
            >
              <span className="relative z-10 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                &lt;NT/&gt;
              </span>
              <span className="absolute top-0 left-0 text-blue-400 opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ transform: 'translate(-2px, -2px)' }}>
                &lt;NT/&gt;
              </span>
              <span className="absolute top-0 left-0 text-pink-400 opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ transform: 'translate(2px, 2px)' }}>
                &lt;NT/&gt;
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative px-4 py-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span
                    className={`relative z-10 text-sm font-medium transition-colors ${
                      activeSection === link.href
                        ? 'text-blue-400'
                        : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
                      activeSection === link.href
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  ></span>

                  {/* Hover background */}
                  <span className="absolute inset-0 bg-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  
                  {/* Corner accents */}
                  {activeSection === link.href && (
                    <>
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400"></span>
                      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-purple-400"></span>
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-purple-400"></span>
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pink-400"></span>
                    </>
                  )}
                </a>
              ))}

              {/* Call and WhatsApp Buttons */}
              <div className="flex items-center gap-2 ml-4">
                <a
                  href="tel:+1234567890"
                  className="p-2.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/30 transition-all hover:scale-110 group"
                  aria-label="Call"
                >
                  <Phone className="w-4 h-4 group-hover:animate-pulse" />
                </a>
                
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 hover:shadow-lg hover:shadow-green-500/30 transition-all hover:scale-110 group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 group-hover:animate-pulse" />
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="px-6 py-2 bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                Hire Me
              </a>
            </div>

            {/* Futuristic Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`absolute w-6 h-0.5 bg-blue-400 transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  className={`w-6 h-0.5 bg-purple-400 transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute w-6 h-0.5 bg-pink-400 transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                ></span>
              </div>
              
              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-lg bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>

        {/* Scan line effect */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent"></div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-20 left-4 right-4 bg-linear-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-500 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            ></div>
          </div>

          <div className="relative p-8 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-6 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform ${
                  activeSection === link.href
                    ? 'bg-linear-to-r from-blue-500/20 to-purple-500/20 text-white border-l-4 border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/5 hover:translate-x-2'
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isOpen ? 'slideIn 0.5s ease-out forwards' : 'none',
                }}
              >
                <span className="flex items-center gap-3">
                  <span className="text-blue-400 text-sm font-mono">0{index + 1}</span>
                  {link.label}
                  {activeSection === link.href && (
                    <span className="ml-auto">
                      <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                    </span>
                  )}
                </span>
              </a>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 space-y-3">
              {/* Call and WhatsApp buttons */}
              <div className="flex gap-3">
                <a
                  href="tel:+1234567890"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Call</span>
                </a>
                
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg hover:bg-green-500/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
              
              <a
                href="#contact"
                onClick={() => handleNavClick('#contact')}
                className="block w-full px-6 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white text-center text-lg font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}