'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsScrollSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'Losttribe Website',
      description: 'built a modern, responsive website for Losttribe, featuring trekking and adventure tours with seamless booking and stunning visuals.',
      technologies: ['react.js', 'tailwind css', 'framer motion', 'node.js', 'express.js'],
      link: 'https://www.losttribe.in/',
      github: '',
      image: '/images/losttribe.png',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 2,
      title: 'Mock Test Website',
      description: 'website for students to practice mock tests, they can create test in excel sheet and by using sheet url tests can be taken. ',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/Mock-test/',
      github: 'https://github.com/code007nikhil/Mock-test',
      image: '/images/mocktest.png',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Dairy Brand Website',
      description: 'A modern and responsive website for a dairy brand, showcasing products, services, and customer testimonials.',
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js'],
      link: 'https://client-nine-mu-12.vercel.app/home',
      github: 'https://github.com/code007nikhil/client',
      image: '/images/himalayanbliss.png',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 4,
      title: 'hotel whatsaap booking website',
      description: 'A hotel booking website that allows users to book rooms via WhatsApp for a seamless experience.',
      technologies: ['React.js', 'Tailwind CSS', 'TypeScript'],
      link: 'https://dream-destination-camps.vercel.app/',
      github: 'https://github.com/code007nikhil/Dream-Destination-Camps',
      image: '/images/dreamdestination.png',
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 5,
      title: 'Weather webapp',
      description: 'A web application that provides real-time weather updates and forecasts for any location worldwide.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/weather-app/',
      github: 'https://github.com/code007nikhil/weather-app',
      image: '/images/weatherapp.png',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 6,
      title: 'Ranjom Joke Generator',
      description: 'An entertaining web app that delivers random jokes to users, providing a quick laugh with each visit.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/random-joke/',
      github: 'https://github.com/code007nikhil/random-joke',
      image: '/images/randomjoke.png',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 7,
      title: 'image slider',
      description: 'A sleek and interactive image slider that allows users to navigate through a collection of images with smooth transitions.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/image-slider/',
      github: 'https://github.com/code007nikhil/image-slider',
      image: '/images/imageslider.png',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 8,
      title: 'Loader Animations',
      description: 'A visually appealing loader animations created using HTML and CSS to enhance user experience during content loading.',
      technologies: ['html', 'css'],
      link: 'https://code007nikhil.github.io/loader/',
      github: 'https://github.com/code007nikhil/loader',
      image: '/images/loader.png',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 9,
      title: 'Stop Watch webapp',
      description: 'A functional stopwatch web application that allows users to track elapsed time with start, stop, and reset features.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/stop-watch/',
      github: 'https://github.com/code007nikhil/stop-watch',
      image: '/images/stopwatch.png',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      id: 10,
      title: 'Guess the number game',
      description: 'An interactive number guessing game where users attempt to guess a randomly generated number within a specified range.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/guess-the-number/',
      github: 'https://github.com/code007nikhil/guess-the-number',
      image: '/images/guessthenumber.png',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 11,
      title: 'counter webapp',
      description: 'A simple counter web application that allows users to increment, decrement, and reset a numerical value.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/counter/',
      github: 'https://github.com/code007nikhil/counter',
      image: '/images/counter.png',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      id: 12,
      title: 'Review slider',
      description: 'An engaging review slider that showcases customer testimonials with smooth transitions and navigation controls.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/Riview-slider/',
      github: 'https://github.com/code007nikhil/Review-slider',
      image: '/images/reviewslider.png',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 13,
      title: 'Date and Time webapp',
      description: 'A web application that displays the current date and time, updating in real-time for user convenience.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/date-and-time/',
      github: 'https://github.com/code007nikhil/date-and-time',
      image: '/images/dateandtime.png',
      color: 'from-indigo-400 to-blue-600'
    },
    {
      id: 14,
      title: 'Colour find Game',
      description: 'An interactive color finding game that challenges users to identify and select specific colors from a palette.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/colour-find/',
      github: 'https://github.com/code007nikhil/colour-find',
      image: '/images/colourfind.png',
      color: 'from-red-400 to-yellow-600'
    },
    {
      id: 15,
      title: 'Mind Reader fun Game',
      description: 'A fun mind reader game that attempts to guess the number a user is thinking of through a series of questions.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/mind-read/',
      github: 'https://github.com/code007nikhil/mind-read',
      image: '/images/mindread.png',
      color: 'from-purple-400 to-pink-600'
    },
    {
      id: 16,
      title: 'Chess Timer',
      description: 'A chess timer application that allows players to track their time during a chess game with start, pause, and reset features.',
      technologies: ['html', 'css', 'javascript'],
      link: 'https://code007nikhil.github.io/chess-timer/',
      github: 'https://github.com/code007nikhil/chess-timer',
      image: '/images/chesstimer.png',
      color: 'from-indigo-400 to-blue-600'
    }
  ];

  useEffect(() => {
    
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
      gsap.from(scrollContainer.querySelectorAll('.project-scroll-card'), {
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
    <section id="projects" ref={containerRef} className="relative w-full min-h-screen bg-black overflow-hidden flex items-center py-20">
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

      <div className="relative z-10 w-full px-3 sm:px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-7xl mx-auto px-3 sm:px-0">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-xs sm:text-sm font-mono tracking-wider">
              &lt;projects/&gt;
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl">
            Explore my recent projects. Scroll horizontally to see all my work.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative overflow-hidden">
          <div ref={scrollContainerRef} className="flex gap-0">
            {/* Projects Cards Section */}
            <div className="flex gap-4 sm:gap-6 md:gap-12 lg:gap-16 px-3 sm:px-6 md:px-10 shrink-0" style={{ width: '100vw', display: 'flex', alignItems: 'center' }}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="project-scroll-card shrink-0 w-80 sm:w-96 h-full group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Card with gradient background */}
                  <div className={`relative w-full h-auto rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col bg-linear-to-br from-gray-900/50 to-black/50 border border-gray-700/50 hover:border-blue-500/50 backdrop-blur-sm`}>
                    {/* Project Image */}
                    <div className={`relative w-full h-32 bg-linear-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        width={300}
                        height={100}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col justify-between min-h-fit">
                      {/* Project number and title */}
                      <div className="mb-3">
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed mt-2 line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 my-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-linear-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/60 text-blue-200 rounded-full text-xs font-medium backdrop-blur-sm hover:from-blue-500/50 hover:to-purple-500/50 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => {
                            const url = project.link;
                            window.open(url, '_blank', 'noopener,noreferrer');
                          }}
                          className="flex-1 px-3 py-2 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-xs font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                        >
                          View Live
                        </button>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 bg-linear-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-xs font-semibold rounded-lg transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                          >
                            Code
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-400/50 rounded-tl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-400/50 rounded-br-lg"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop scroll hint */}
        <div className="hidden md:flex justify-center items-center gap-2 mt-12 text-gray-400 animate-pulse">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7m0 0l-7 7m7-7H6" />
          </svg>
          <span>Scroll to see all projects</span>
        </div>
      </div>

      <style jsx>{`
        .group:hover {
          z-index: 10;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}
