'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState('web');
  const projectsRef = useRef<HTMLDivElement>(null);

  // Web Development Projects
  const webProjects = [
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

  // Video Editing Projects
  const videoProjects = [
    {
      id: 101,
      title: 'GetMedJob Quick Overview',
      caption: 'A concise promotional video highlighting the key features and benefits of the GetMedJob platform.',
      thumbnail: '/images/video1.png',
      link: 'https://youtu.be/VRMnyZQvZAU?si=Xv9TOJqJWws7qJW7',
      duration: '1:20'
    },
    {
      id: 102,
      title: 'Getmedjob campus Ambassador Promo',
      caption: 'An engaging video promoting the GetMedJob Campus Ambassador program, showcasing opportunities and incentives for students.',
      thumbnail: '/images/video2.png',
      link: 'https://youtube.com/watch?v=examplehttps://youtu.be/fS6nxBDVif8?si=LEKb4FpOAykmIEBk',
      duration: '0:40'
    },
    {
      id: 103,
      title: 'GetMedJob Campus Ambassador Info Video',
      caption: 'An informative video detailing the roles, responsibilities, and benefits of being a GetMedJob Campus Ambassador.',
      thumbnail: '/images/video3.png',
      link: 'https://youtu.be/0q4ZbCh3Vb0?si=iLpFysO_yAGgoNGH',
      duration: '0:46'
    },
    {
      id: 104,
      title: 'AI Charater and Voiceover Video',
      caption: 'A creative video featuring an AI-generated character delivering a voiceover on a specific topic or message.',
      thumbnail: '/images/video4.png',
      link: 'https://youtu.be/TlJLsu0BVWU?si=AU7sOGJzBQtfPbGw',
      duration: '1:05'
    },
    {
      id: 105,
      title: 'Public Asking Video',
      caption: 'A video showcasing asking public random questions and capturing their spontaneous reactions and answers.',
      thumbnail: '/images/video5.png',
      link: 'https://youtube.com/shorts/dftScb1qjEw?si=CwyqgR_CigMtBkql',
      duration: '1:00'
    },
    {
      id: 106,
      title: 'Instagram Reels Videos',
      caption: 'A hort, engaging Instagram Reels videos created for social media marketing and audience engagement.',
      thumbnail: '/images/video6.png',
      link: 'https://www.instagram.com/reel/DR7GLDQgcjp/?igsh=b2NjcWZyNmU5b2xz',
      duration: '0:30'
    },
    {
      id: 107,
      title: 'Instagram hook videos',
      caption: 'A short, engaging Instagram hook videos created for social media marketing and audience engagement.',
      thumbnail: '/images/video7.png',
      link: 'https://www.instagram.com/reel/DR4chc9AVsu/?igsh=dnpxZ3hxMXJsZWJr',
      duration: '0:30'
    },
    {
      id: 108,
      title: 'AI voice over Reel video',
      caption: 'An Instagram Reel video featuring AI-generated voiceover content for creative storytelling.',
      thumbnail: '/images/video8.png',
      link: 'https://www.instagram.com/reel/DRyn3KJikeG/?igsh=cjkwamJqZ29mcTJp',
      duration: '0:30'
    }

  ];

  // Graphics Projects
  const graphicsProjects = [
    {
      id: 201,
      title: 'Logo design aurora',
      description: 'logo design with vibrant colors and modern aesthetics representing the aurora theme.',
      image: '/images/graphics1.png'
    },
    {
      id: 202,
      title: 'Logo Design speedx',
      description: 'Custom logo design for sports brand.',
      image: '/images/graphics2.png'
    },
    {
      id: 203,
      title: 'Logo Design for bakery brand',
      description: 'Creative logo design for a bakery business.',
      image: '/images/graphics3.png'
    },
    {
      id: 204,
      title: 'Logo Design i.e crazy edits',
      description: 'Unique logo design for a creative editing brand.',
      image: '/images/graphics4.png'
    },
    {
      id: 205,
      title: 'Logo Design for Travel Company Losttribe',
      description: 'Professional logo design for a travel and adventure company.',
      image: '/images/graphics5.png'
    },
    {
      id: 206,
      title: 'Logo Design of Dairy Brand Himalayan Bliss',
      description: 'Professional logo design for a dairy brand.',
      image: '/images/graphics6.png'
    },
    {
      id: 207,
      title: 'Graphic of Bolero Camper Car',
      description: 'Detailed graphic illustration of a Bolero Camper vehicle.',
      image: '/images/graphics7.png'
    },
    {
      id: 208,
      title: 'Graphic of Auto Rickshaw',
      description: 'Detailed graphic illustration of an Auto Rickshaw vehicle.',
      image: '/images/graphics8.png'
    },
    {
      id: 209,
      title: 'Cyber truck Graphic Design',
      description: 'Cyber truck graphic design with futuristic elements.',
      image: '/images/graphics9.png'
    }
  ];

  // UI/UX Design Projects
  const uiuxProjects = [
    {
      id: 301,
      title: 'E-Commerce App UI',
      description: 'Modern e-commerce application interface with intuitive navigation and beautiful product showcase.',
      image: '/images/uiux1.png'
    },
  ];

  const tabs = [
    { id: 'web', label: 'Web Development', icon: '💻' },
    { id: 'video', label: 'Video Editing', icon: '🎬' },
    { id: 'graphics', label: 'Graphics Design', icon: '🎨' },
    // { id: 'uiux', label: 'UI/UX Design', icon: '✨' }
  ];

  const getActiveProjects = () => {
    switch (activeTab) {
      case 'video':
        return videoProjects;
      case 'graphics':
        return graphicsProjects;
      case 'uiux':
        return uiuxProjects;
      default:
        return webProjects;
    }
  };

  useEffect(() => {
    if (projectsRef.current) {
      const cards = gsap.utils.toArray(projectsRef.current.children) as HTMLElement[];
      gsap.from(cards, {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }
  }, [activeTab]);

  const activeProjects = getActiveProjects();

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
            `,
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        ></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-blue-400 text-sm font-mono tracking-wider">
              &lt;projects/&gt;
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Featured <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcase of my recent work across multiple creative disciplines
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-16 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-2 sm:gap-3 md:gap-4 flex-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                  activeTab === tab.id
                    ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-slate-800/50 text-gray-400 hover:text-white border border-slate-600/50 hover:border-slate-500'
                }`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                {activeTab === tab.id && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Dynamic based on tab */}
        <div ref={projectsRef} className={`grid gap-8 ${
          activeTab === 'video' ? 'md:grid-cols-2 lg:grid-cols-3' :
          activeTab === 'graphics' ? 'md:grid-cols-2 lg:grid-cols-2' :
          activeTab === 'uiux' ? 'md:grid-cols-2 lg:grid-cols-2' :
          'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {activeTab === 'web' && webProjects.map((project, index) => (
            <WebProjectCard key={project.id} project={project} index={index} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
          ))}
          {activeTab === 'video' && videoProjects.map((project, index) => (
            <VideoProjectCard key={project.id} project={project} index={index} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
          ))}
          {activeTab === 'graphics' && graphicsProjects.map((project, index) => (
            <GraphicsProjectCard key={project.id} project={project} index={index} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
          ))}
          {activeTab === 'uiux' && uiuxProjects.map((project, index) => (
            <UIUXProjectCard key={project.id} project={project} index={index} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
          ))}
        </div>
      </div>

      <style jsx>{`
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

// Web Development Project Card
function WebProjectCard({ project, index, hoveredProject, setHoveredProject }: any) {
  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="relative transform transition-all duration-500 hover:-translate-y-4">
        <div className={`absolute -inset-1 bg-linear-to-r ${project.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>

        <div className="relative bg-linear-to-br from-gray-900 to-black border border-blue-500/30 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-blue-500/60 transition-all duration-500">
          <div className={`relative h-48 bg-linear-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                  transform: hoveredProject === project.id ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
                  transition: 'transform 0.5s ease-out'
                }}
              ></div>
            </div>

            <Image 
              src={project.image} 
              alt={project.title}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative p-6">
            <div className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500 to-transparent transform transition-all duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}></div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech: string, i: number) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-full text-xs font-medium backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
                  style={{
                    animation: hoveredProject === project.id ? 'pulse 1s ease-in-out infinite' : 'none',
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                className="group/btn flex-1 relative px-4 py-2.5 bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Project
                  <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 border border-blue-500/50 text-blue-400 text-sm font-semibold rounded-lg hover:bg-blue-500/10 transition-all hover:scale-105 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-400 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 scale-110' : 'opacity-0'}`}></div>
            <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-400 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 scale-110' : 'opacity-0'}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Video Project Card
function VideoProjectCard({ project, index, hoveredProject, setHoveredProject }: any) {
  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="relative transform transition-all duration-500 hover:-translate-y-4">
        <div className="absolute -inset-1 bg-linear-to-r from-red-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="relative bg-linear-to-br from-gray-900 to-black border border-red-500/30 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-red-500/60 transition-all duration-500">
          <div className="relative h-48 bg-black flex items-center justify-center overflow-hidden group">
            <Image 
              src={project.thumbnail} 
              alt={project.title}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
              {project.duration}
            </div>
          </div>

          <div className="relative p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed line-clamp-2">
              {project.caption}
            </p>

            <button
              onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
              className="group/btn w-full relative px-4 py-2.5 bg-linear-to-r from-red-500 to-pink-600 text-white text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Watch Now
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-red-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Graphics Project Card
function GraphicsProjectCard({ project, index, hoveredProject, setHoveredProject }: any) {
  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="relative transform transition-all duration-500 hover:-translate-y-4">
        <div className="absolute -inset-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="relative bg-linear-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-purple-500/60 transition-all duration-500">
          <div className="relative h-56 bg-black flex items-center justify-center overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              width={300}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <button
              onClick={() => window.open(project.image, '_blank', 'noopener,noreferrer')}
              className="group/btn w-full relative px-4 py-2.5 bg-linear-to-r from-purple-500 to-pink-600 text-white text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Design
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// UI/UX Project Card
function UIUXProjectCard({ project, index, hoveredProject, setHoveredProject }: any) {
  return (
    <div
      className="group relative"
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      style={{
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: `${index * 0.1}s`,
        opacity: 0
      }}
    >
      <div className="relative transform transition-all duration-500 hover:-translate-y-4">
        <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="relative bg-linear-to-br from-gray-900 to-black border border-cyan-500/30 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-cyan-500/60 transition-all duration-500">
          <div className="relative h-56 bg-black flex items-center justify-center overflow-hidden">
            <Image 
              src={project.image} 
              alt={project.title}
              width={300}
              height={250}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          <div className="relative p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {project.description}
            </p>

            <button
              onClick={() => window.open(project.image, '_blank', 'noopener,noreferrer')}
              className="group/btn w-full relative px-4 py-2.5 bg-linear-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Design
                <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
