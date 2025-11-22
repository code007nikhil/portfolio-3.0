'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('journey');
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const horizontalScrollRef = useRef<HTMLDivElement>(null);

  const journey = [
    {
      year: '2022',
      title: 'The Beginning',
      description: 'Completed by graduation in Bsc Medical. But my passion was always coding and technology, so I started learning programming. I learn the basics of web development.',
      icon: '🚀',
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      year: '2022 - 2023',
      title: 'Backend Foundations',
      description: 'Dived into backend technologies and learned server-side programming.',
      icon: '⚙️',
      skills: ['Node.js', 'Express.js', 'Databases', 'APIs']
    },
    {
      year: '2023 beginning - 2023 mid',
      title: 'Full Stack Mastery',
      description: 'Mastered modern frameworks like React and Next.js and became a full-stack developer.',
      icon: '💎',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB']
    },
    {
      year: 'end 2023 - mid 2024',
      title: 'Learn Ui/UX Design & Video Editing',
      description: 'Expanded my skillset to include UI/UX design and video editing to create engaging user experiences and multimedia content. I explored tools like Photoshop,illustrator, Figma etc. for design and Adobe Premiere Pro, capcut, davinci resolve etc. for video editing.',
      icon: '🌟',
      skills: ['Figma', 'Adobe Photoshop', 'Adobe Premiere Pro', 'capcut', 'DaVinci Resolve', 'illustrator', 'After Effects']
    },
    {
      year: 'april 2024 - april 2025',
      title: 'Started Job at Futuranexus Pvt Ltd',
      description: 'Working as a Graphic designer and video editor. But still doing coding as a hobby and freelancing projects on the side. as the company is a startup, I get to wear multiple hats and contribute to various aspects of the business. I learned their about social media marketing, content creation, branding, and more. facebook ads, analytics etc. This experience has helped me develop a well-rounded skill set and a deeper understanding of how different functions within a company work together to achieve common goals.',
      icon: '🏢',
      skills: ['Graphic Design', 'Video Editing', 'Social Media Marketing', 'Content Creation', 'Branding']
      },
      {
        year: 'april 2025 - present',
        title: 'Founder & CTO of Losttribe',
        description: 'Started our own startup Losttribe, as i have also hoppy of exploring and traveling new places. Losttribe is a trekking and adventure company that offers guided treks, adventure tours, and outdoor experiences in some of the most beautiful and remote locations around the Himachal Pradesh. As the founder and CTO, I am responsible for overseeing the technical aspects of the company, including website development, online booking systems, and digital marketing strategies. I am also involved in planning and organizing treks and adventures, ensuring that our customers have safe and memorable experiences.',
        icon: '🌄',
        skills: ['Startup Management', 'Web Development', 'Digital Marketing', 'Adventure Planning', 'Customer Experience']
      }
  ];

  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'bootstrap', 'gsap', 'Vue.js', 'Redux'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'RESTful APIs', 'socket.io', 'Jwt-based Auth'],
    tools: ['Git', 'Docker', 'AWS', 'Figma', 'CI/CD', 'Linux']
  };

  const stats = [
    { label: 'Years Experience', value: '2+', icon: '' },
    { label: 'Projects Completed', value: '50+', icon: '' },
    { label: 'Happy Clients', value: '30+', icon: '' },
    { label: 'Code Commits', value: '5000+', icon: '' }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const horizontalScroll = horizontalScrollRef.current;

    if (!container || !horizontalScroll) return;

    // Horizontal journey scroll for desktop
    const scrollDistance = horizontalScroll.scrollWidth - window.innerWidth;

    const horizontalAnimation = gsap.to(horizontalScroll, {
      x: -scrollDistance,
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${scrollDistance * 2}`,
        scrub: 1.5,
        pin: true,
        markers: false,
        anticipatePin: 1,
      },
      ease: 'power2.inOut'
    });

    // Animate journey cards entrance
    gsap.from(horizontalScroll.querySelectorAll('.journey-card'), {
      opacity: 0,
      x: 100,
      stagger: 0.2,
      duration: 3,
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      horizontalAnimation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative min-h-screen py-0 bg-black overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        ></div>
      </div>

      {/* Space particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-mono tracking-wider">
              &lt;my-journey/&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            My <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From curious beginner to innovative developer - here's my story
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative bg-linear-to-br from-gray-900 to-black border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-all duration-300 hover:scale-105">
                <div className="absolute top-0 right-0 text-4xl opacity-100 transform translate-x-2 -translate-y-2">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-900/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-1">
            {[
              { id: 'journey', label: 'Journey', icon: '🛤️' },
              { id: 'skills', label: 'Skills', icon: '⚡' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{tab.icon}</span>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Journey Roadmap */}
        {activeTab === 'journey' && (
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>

            <div className="space-y-12">
              {journey.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center gap-8`}
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0
                  }}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="group relative bg-linear-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/60 transition-all duration-300 hover:scale-105">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="relative z-10">
                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <span className="text-3xl">{item.icon}</span>
                          <span className="text-blue-400 text-2xl font-bold">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 mb-4">{item.description}</p>
                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          {item.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400"></div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], catIndex) => (
              <div
                key={category}
                className="relative group"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${catIndex * 0.2}s`,
                  opacity: 0
                }}
              >
                <div className="relative bg-linear-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl p-6 h-full hover:border-blue-500/60 transition-all duration-300">
                  {/* Glow background */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-6 capitalize flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      {category}
                    </h3>
                    <div className="space-y-3">
                      {items.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="w-1 h-1 bg-purple-400 rounded-full group-hover/item:w-3 transition-all"></div>
                          <span className="text-gray-300 group-hover/item:text-white group-hover/item:translate-x-2 transition-all">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform"
            >
              Let's Work Together
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(50px) translateX(50px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}