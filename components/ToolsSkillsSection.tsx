'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Generate static particle data
const generateParticles = () => {
  return Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: ((i * 41 + 19) % 100),
    top: ((i * 59 + 13) % 100),
    duration: 6 + ((i * 5) % 8),
    delay: (i * 0.7) % 4,
    opacity: 0.15 + ((i * 2) % 4) / 10,
  }));
};

const PARTICLES = generateParticles();

// Tools data structure - you can replace image paths with your own
const toolsData = [
  {
    category: 'Coding',
    icon: '💻',
    tools: [
      { name: 'VS Code', image: '/images/tools/vscode.png' },
      { name: 'Next.js', image: '/images/tools/nextjs.png' },
      { name: 'React', image: '/images/tools/react.png' },
      { name: 'Express.js', image: '/images/tools/expressjs.png' },
      { name: 'Node.js', image: '/images/tools/nodejs.png' },
      { name: 'MongoDB', image: '/images/tools/mongodb.png' },
      { name: 'Tailwind CSS', image: '/images/tools/tailwind.png' },
      { name: 'Git', image: '/images/tools/git.png' },
      { name: 'HTML', image: '/images/tools/html.png' },
      { name: 'CSS', image: '/images/tools/css.png' },
      { name: 'TypeScript', image: '/images/tools/typescript.png' },
      { name: 'JavaScript', image: '/images/tools/js.png' },
      { name: 'Bootstrap', image: '/images/tools/bootstrap.png' },
      { name: 'GSAP', image: '/images/tools/gsap.png' },
      { name: 'Cursor AI', image: '/images/tools/cursor.png' },
      { name: 'Claude AI', image: '/images/tools/claude.svg' },
    ],
  },
  {
    category: 'Video Editing',
    icon: '🎬',
    tools: [
      { name: 'Premiere Pro', image: '/images/tools/premiere.png' },
      { name: 'After Effects', image: '/images/tools/aftereffects.png' },
      { name: 'DaVinci Resolve', image: '/images/tools/davinci.png' },
      { name: 'CapCut', image: '/images/tools/capcut.png' },
      { name: 'Filmora', image: '/images/tools/filmora.png' },  
      { name: 'Eleven Labs', image: '/images/tools/11labs.svg' },
      { name: 'Runway ML', image: '/images/tools/runway.png' },
      { name: 'InVideo', image: '/images/tools/iv.svg' },
    ],
  },
  {
    category: 'Graphics Design',
    icon: '🎨',
    tools: [
      { name: 'Photoshop', image: '/images/tools/photoshop.png' },
      { name: 'Illustrator', image: '/images/tools/illustrator.png' },
      { name: 'Figma', image: '/images/tools/figma.png' },
      { name: 'Canva', image: '/images/tools/canva.png' },
      { name: 'Leonardo AI', image: '/images/tools/leonardo.svg' },
      { name: 'Runway AI', image: '/images/tools/runway.png' },
      { name: 'google gemini', image: '/images/tools/geminiai.png' },
    ],
  },
  {
    category: 'Social Media Marketing',
    icon: '📱',
    tools: [
      { name: 'Meta Business', image: '/images/tools/metabussiness.png' },
      { name: 'Google Analytics', image: '/images/tools/ga.png' },
      { name: 'Facebook Ads', image: '/images/tools/fbads.png' },
      { name: 'Google Ads', image: '/images/tools/googleads.png' },
      { name: 'linkedin Ads', image: '/images/tools/linkedin.png' },
      { name: 'Brevo', image: '/images/tools/brevo.svg' },
      { name: 'SEO' , image: '/images/tools/seo.png'},
      { name: 'Semrush', image: '/images/tools/semrush.png' },
    ],
  },
  {
    category: 'Productivity',
    icon: '⚙️',
    tools: [
    { name: 'Notion', image: '/images/tools/notion.png' },
    { name: 'miro', image: '/images/tools/miro.svg' },
    { name: 'G Workspace', image: '/images/tools/googleworkspace.png' },
    { name: 'Chatgpt', image: '/images/tools/chatgpt.png' },
    { name: 'Gemini ai', image: '/images/tools/geminiai.png' },
    { name: 'Claude ai', image: '/images/tools/claude.svg' },
    { name: 'Perplexity ai', image: '/images/tools/perplexity.png' },
    { name: 'Github Copilot', image: '/images/tools/githubcopilot.svg' },
    { name: 'Many more...', image: '/images/tools/more.png' }
    ],
  }
];

export default function ToolsSkillsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0"></div>
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>

        {/* Floating particles */}
        {isMounted && (
          <div className="absolute inset-0">
            {PARTICLES.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `floatSlow ${particle.duration}s linear infinite`,
                  animationDelay: `${particle.delay}s`,
                  opacity: particle.opacity,
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent"></div>
            <span className="text-purple-400 text-sm font-mono tracking-widest uppercase">
              My Arsenal
            </span>
            <div className="w-12 h-px bg-linear-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tools & 
            <span className="relative inline-block ml-4">
              <span className="bg-linear-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technologies
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-blue-400 via-purple-500 to-pink-500"></div>
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            A comprehensive collection of professional tools and software I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-12 overflow-x-auto p-2">
          {toolsData.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`
                relative px-6 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2
                ${activeCategory === index
                  ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white scale-105' 
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }
              `}
            >
              <div className="mr-2">{category.icon}</div>
              <div>{category.category}</div>
              {activeCategory === index && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="relative">
          {toolsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`
                transition-all duration-500
                ${activeCategory === categoryIndex 
                  ? 'opacity-100 block' 
                  : 'opacity-0 hidden'
                }
              `}
            >
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={toolIndex}
                    className="group relative"
                    style={{
                      animation: activeCategory === categoryIndex ? `fadeInUp 0.5s ease-out ${toolIndex * 0.1}s both` : 'none'
                    }}
                  >
                    {/* Tool Card */}
                    <div className="relative bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-1 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                       
                        {/* Uncomment below and remove above div when you add images */}
                        <Image
                          src={tool.image}
                          alt={tool.name}
                          layout="fill"
                          objectFit="contain"
                          className="p-4"
                        />
                      </div>

                      {/* Tool Name */}
                      <h3 className="text-center text-white font-semibold text-lg">
                        {tool.name}
                      </h3>

                      {/* Corner accents */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-400/0 group-hover:border-purple-400 transition-all duration-300"></div>
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-blue-400/0 group-hover:border-blue-400 transition-all duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-blue-400/0 group-hover:border-blue-400 transition-all duration-300"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-400/0 group-hover:border-purple-400 transition-all duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '40+', label: 'Tools worked with' },
            { number: '50+', label: 'Projects done'},
            { number: '2+', label: 'Years Experience'},
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="relative bg-linear-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center group hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(8px);
          }
          50% {
            transform: translateY(-8px) translateX(-8px);
          }
          75% {
            transform: translateY(-20px) translateX(4px);
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