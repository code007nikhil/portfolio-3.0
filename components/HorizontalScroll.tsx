'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: 1,
      title: 'Full Stack Developer',
      description: 'Building modern web applications with React, Next.js, Node.js, and TypeScript. Passionate about clean code and scalable solutions.',
      icon: '',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      description: 'Crafting beautiful and intuitive user interfaces with Figma. Focused on creating delightful user experiences with attention to detail.',
      icon: '',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'social media management',
      description: 'Managing and growing social media presence across platforms. Skilled in content creation, scheduling, and audience engagement.',
      icon: '',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Problem Solver',
      description: 'Analyzing complex problems and developing efficient solutions. Strong foundation in data structures, algorithms, and optimization.',
      icon: '',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'Tech Enthusiast',
      description: 'Always learning new technologies and frameworks. Exploring the future of web development. Learning is a lifelong journey!',
      icon: '',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'Bussiness Mindset',
      description: 'Understanding client needs and delivering value-driven solutions. Experienced in collaborating with cross-functional teams to achieve business goals.',
      icon: '',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!container || !scrollContainer) return;

    // Calculate the horizontal scroll distance
    const parentWidth = scrollContainer.parentElement?.clientWidth || window.innerWidth;
    const scrollDistance = scrollContainer.scrollWidth - parentWidth;

    // Only animate if there's content to scroll
    if (scrollDistance > 0) {
      // Create horizontal scroll animation with pinning
      const scrollAnimation = gsap.to(scrollContainer, {
        x: -scrollDistance,
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${scrollDistance * 2.5}`,
          scrub: 1.5,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
        ease: 'none'
      });

      // Animate individual cards
      gsap.from(scrollContainer.querySelectorAll('.scroll-card'), {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-2 md:mb-16 max-w-7xl mx-auto">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-mono tracking-wider">
              &lt;about_me/&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            About <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-8xl">
            hey there! I'm Nikhil, a passionate developer and designer dedicated to crafting exceptional digital experiences. Here's a glimpse into what I bring to the table:
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative overflow-hidden">
          <div ref={scrollContainerRef} className="flex gap-0">
            {/* Skills Cards Section */}
            <div className="flex gap-8 md:gap-12 lg:gap-16 px-6 md:px-10 shrink-0" style={{ width: '100vw', display: 'flex', alignItems: 'center' }}>
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="scroll-card shrink-0 w-96 h-72 md:h-96 group"
                >
                  {/* Card with gradient background */}
                  <div className={`relative w-full h-full rounded-3xl p-8 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '30px 30px',
                        }}
                      ></div>
                    </div>

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      {/* Icon and number */}
                      <div className="flex items-start justify-between">
                        <div className="text-5xl font-bold text-white/20">
                          {String(section.id).padStart(2, '0')}
                        </div>
                        <div className="text-7xl">{section.icon}</div>
                      </div>

                      {/* Text content */}
                      <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                          {section.title}
                        </h3>
                        <p className="text-white/80 text-sm md:text-lg leading-relaxed">
                          {section.description}
                        </p>
                      </div>

                      {/* Bottom accent */}
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1 bg-white/50 group-hover:w-16 transition-all duration-300"></div>
                        <span className="text-white/60 text-sm">Explore</span>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/50 rounded-tl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/50 rounded-br-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Desktop scroll hint */}
        <div className="hidden md:flex justify-center items-center gap-2 mt-12 text-gray-400 animate-pulse">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H6" />
          </svg>
          <span>Scroll to see more</span>
        </div>
      </div>

      <style jsx>{`
        .group:hover {
          z-index: 10;
        }
      `}</style>
    </section>
  );
}
