'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

interface FlipState {
  isFlipped: boolean;
}

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFlipped, setIsFlipped] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    // GSAP Animations on mount 
    const tl = gsap.timeline();

    // Animate title with stagger
    tl.from(titleRef.current, {
      duration: 3,
      opacity: 0,
      y: 50,
      ease: 'power3.out',
    }, 0)
      .from(descRef.current, {
        duration: 1,
        opacity: 0,
        y: 30,
        ease: 'power3.out',
      }, 0.3);
    // Animate image
    tl.from(imageRef.current, {
      duration: 1.2,
      opacity: 0,
      scale: 0.8,
      ease: 'back.out(1.7)',
    }, 0);

    // Continuous floating animation for image
    gsap.to(imageRef.current, {
      duration: 6,
      y: 30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Rotating rings animation
    if (ringsRef.current) {
      const rings = Array.from(ringsRef.current.children);
      gsap.to(rings[0], {
        duration: 20,
        rotation: 360,
        repeat: -1,
        ease: 'none',
      });

      gsap.to(rings[1], {
        duration: 15,
        rotation: -360,
        repeat: -1,
        ease: 'none',
      });

      gsap.to(rings[2], {
        duration: 25,
        rotation: 360,
        repeat: -1,
        ease: 'none',
      });
    }

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 via-purple-900/20 to-black"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl pt-25 pb-30 mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left space-y-6">
          <div className="inline-block">
            <span className="text-blue-400 text-sm font-mono tracking-wider">
              &lt;developer/&gt;
            </span>
          </div>
          <div ref={titleRef}>
            <h1 className="text-5xl mb-10 md:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Nikhil Thakur
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500"></span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Bussiness Enthusiast | Full Stack Web Developer | UI/UX Designer | Social Media Marketer
            </p>
          </div>


          <p className="text-lg text-gray-400 leading-relaxed max-w-xl" ref={descRef}>
            Hi! I’m a web developer, UI/UX designer, and social media marketer with a passion for helping businesses grow. I focus on simple, clean, and effective digital solutions that people enjoy using.
          </p>

          <div ref={buttonsRef} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 pt-6">
            {[
              { href: "https://github.com/code007nikhil", icon: 'github' },
              { href: "https://www.linkedin.com/in/nikhil-thakur00/", icon: 'linkedin' },
              { href: "https://www.instagram.com/nikhil.thakur_00/", icon: 'instagram' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-blue-400 transition-colors relative"
              >
                {item.icon}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Image with Creative Design */}
        <div className="relative flex items-center justify-center">
          {/* Rotating Rings */}
          <div ref={ringsRef} className="absolute w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full"></div>
            <div className="absolute inset-4 border-2 border-purple-500/30 rounded-full"></div>
            <div className="absolute inset-8 border-2 border-pink-500/30 rounded-full"></div>
          </div>

          {/* Image Container with Parallax */}
          <div
            ref={imageRef}
            className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-200"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-50 animate-pulse"></div>

            {/* Image Frame */}
            <div
              ref={imageFrameRef}
              className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-blue-500/50 shadow-2xl shadow-blue-500/50 cursor-pointer"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
            >
              {/* Front Image */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
                style={{
                  opacity: isFlipped ? 0 : 0.5,
                  transition: 'opacity 0.6s ease-in-out',
                }}
              >
                <Image
                  src="/images/hacker.jpeg"
                  alt="Nikhil Thakur"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Back Image */}
              <div
                className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden"
                style={{
                  opacity: isFlipped ? 0.5 : 0,
                  transition: 'opacity 0.6s ease-in-out',
                }}
              >
                <Image
                  src="/images/nikhil.png"
                  alt="Nikhil Thakur - Back"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-blue-400"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-purple-400"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-purple-400"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-pink-400"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-5 w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(50px) translateX(50px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        [style*="perspective"] {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}