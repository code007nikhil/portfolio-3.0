'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Generate static particle data to avoid hydration errors
const generateParticles = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: ((i * 37 + 23) % 100),
    top: ((i * 53 + 17) % 100),
    duration: 5 + ((i * 7) % 10),
    delay: (i * 0.5) % 5,
    opacity: 0.2 + ((i * 3) % 5) / 10,
  }));
};

const PARTICLES = generateParticles();

export default function FuturisticSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 "></div>
        
        {/* Hexagon pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundSize: '60px 60px',
          }}
        ></div>
        {/* Floating particles */}
        {isMounted && (
          <div className="absolute inset-0">
            {PARTICLES.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `float ${particle.duration}s linear infinite`,
                  animationDelay: `${particle.delay}s`,
                  opacity: particle.opacity,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Decorative line */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-linear-to-r from-blue-400 to-transparent"></div>
            <span className="text-blue-400 text-sm font-mono tracking-widest uppercase">
              Innovation Awaits
            </span>
          </div>

          {/* Heading */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Crafting Digital
              <br />
              <span className="relative inline-block mt-2">
                <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Experiences
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse"></div>
              </span>
            </h2>
          </div>

          {/* Paragraph Text */}
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building cutting-edge web applications that blend stunning aesthetics with powerful functionality. Every project is an opportunity to push boundaries and create something extraordinary.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With a focus on modern design principles and scalable architecture, I deliver solutions that not only look beautiful but perform flawlessly. From concept to deployment, I bring ideas to life with precision and creativity.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's a sleek landing page, a complex web application, or an immersive user experience, I'm dedicated to crafting digital products that leave a lasting impression and drive real results.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center">
          {/* Outer glow ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 rounded-full border border-blue-500/20 animate-ping-slow"></div>
          </div>

          {/* Main image container */}
          <div
            className="relative w-80 h-80 md:w-96 md:h-96"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            {/* Glowing orb effect */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-40 animate-pulse"></div>

            {/* Image frame with holographic effect */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-blue-500/50 shadow-2xl shadow-blue-500/50 group">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10"></div>
              
              <Image
                src="/images/nikhil_thakur.jpg"
                alt="Futuristic Design"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-110 transition-transform duration-700"
              />

              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-blue-400"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-purple-400"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-pink-400"></div>
            </div>

            {/* Orbiting elements */}
            {isMounted && (
              <div className="absolute inset-0">
                {[0, 120, 240].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-blue-400 rounded-full"
                    style={{
                      left: '50%',
                      top: '50%',
                      animation: `orbit 8s linear infinite`,
                      animationDelay: `${i * 2.67}s`,
                    }}
                  ></div>
                ))}
              </div>
            )}
          </div>

          {/* Data streams */}
          <div className="absolute top-10 right-0 space-y-2 opacity-50">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-px bg-linear-to-r from-blue-400 to-transparent"
                style={{
                  width: `${80 + i * 20}px`,
                  animation: `pulse ${2 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}