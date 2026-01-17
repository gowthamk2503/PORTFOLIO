import { Github, Linkedin, Mail, Phone, Code2, Database, Server, Globe, Sparkles, Download } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const heroRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const particleY = useTransform(scrollYProgress, [0, 0.3], [-100, 1200]);
  const particleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.25, 0.3], [0, 1, 1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const techIcons = [
    { Icon: Code2, color: 'text-red-500', name: 'React' },
    { Icon: Database, color: 'text-orange-500', name: 'MongoDB' },
    { Icon: Server, color: 'text-red-400', name: 'Node.js' },
    { Icon: Globe, color: 'text-orange-400', name: 'Express' }
  ];

  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  const starParticles = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 6 + 3,
    delay: Math.random() * 4
  }));

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black cursor-none"
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Cursor Trail */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-red-500/50 rounded-full pointer-events-none z-[9998]"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Red Accent Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-red-600/20 via-transparent to-transparent"></div>
      </div>

      {/* Stellar Twinkling Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {starParticles.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-gray-400"
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.2, 1, 0.2]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Parallax Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" style={{ opacity: 0.05 }} viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <g>
            {[...Array(20)].map((_, idx) => (
              <line
                key={`v-${idx}`}
                x1={(idx/19)*800} x2={(idx/19)*800} y1={0} y2={600}
                stroke="#ef4444" strokeWidth="0.5"
              />
            ))}
            {[...Array(16)].map((_, idx) => (
              <line
                key={`h-${idx}`}
                x1={0} x2={800} y1={(idx/15)*600} y2={(idx/15)*600}
                stroke="#ef4444" strokeWidth="0.5"
              />
            ))}
          </g>
        </svg>
      </div>

      {/* Aurora Borealis Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-64 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(115deg, rgba(239,68,68,0.15) 30%, rgba(220,38,38,0.18) 73%, rgba(185,28,28,0.12) 100%)',
          mixBlendMode: 'screen',
          filter: "blur(12px)"
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          y: [0, 10, -20, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
      />

      {/* Space Particles */}
      <div className="absolute inset-0 overflow-hidden z-[2]">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-red-500 to-orange-600"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.sin(particle.id) * 50, Math.cos(particle.id) * 50, 0],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0.5]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Animated Code Matrix */}
      <div className="absolute inset-0 opacity-5 z-[3]">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-500 font-mono text-xs"
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 1, 0],
              y: ['0vh', '100vh'],
              x: `${Math.random() * 100}vw`
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            {`{${Math.random() > 0.5 ? 'React' : 'Node'}}`}
          </motion.div>
        ))}
      </div>

      {/* Shooting Comets */}
      {[...Array(3)].map((_, idx) => (
        <motion.div
          key={`comet-${idx}`}
          className="absolute"
          style={{
            left: `${20 + idx * 15}vw`,
            top: `${5 + idx * 20}vh`,
            width: '100px',
            height: '2px',
            zIndex: 10,
            pointerEvents: 'none',
            background: 'linear-gradient(90deg, #ef4444 0%, rgba(239,68,68,0.0) 100%)',
            borderRadius: '1px',
            opacity: 0.4,
            filter: 'blur(1px)'
          }}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: '60vw', opacity: [0, 0.8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 9 + idx * 3 }}
        />
      ))}

      {/* Floating Tech Stack Icons */}
      {techIcons.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`absolute z-10 ${tech.color}`}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
          }}
          animate={{
            x: [
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            ],
            y: [
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            ],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <tech.Icon className="w-12 h-12 opacity-10" />
        </motion.div>
      ))}

      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }}>
        <motion.path
          d="M0,50 Q400,100 800,50 T1600,50"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,150 Q400,200 800,150 T1600,150"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.path
          d="M0,250 Q400,300 800,250 T1600,250"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.05) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 80, 120, 0],
          scale: [1, 1.1, 1, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(234, 88, 12, 0.05) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 60, 0],
          y: [0, -60, -100, 0],
          scale: [1.1, 1, 1.15, 1.1]
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut'
        }}
      />

      {/* Geometric Shapes */}
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 z-0 pointer-events-none"
        style={{
          opacity: 0.10,
          filter: 'blur(1px)'
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          <polygon points="100,10 190,190 10,190" stroke="#ef4444" strokeWidth="8" fill="transparent" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-20 left-20 w-72 h-72 z-0 pointer-events-none"
        style={{
          opacity: 0.08,
          filter: 'blur(1px)'
        }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          <polygon points="100,10 173,50 173,150 100,190 27,150 27,50" stroke="#f97316" strokeWidth="6" fill="transparent" />
        </svg>
      </motion.div>

      {/* Scroll Sparkle */}
      {isScrolling && (
        <motion.div
          className="fixed right-16 z-50 pointer-events-none"
          style={{
            y: particleY,
            opacity: particleOpacity,
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 blur-3xl opacity-40 scale-[2]"
              style={{
                background: 'radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.4) 40%, transparent 70%)'
              }}
              animate={{
                scale: [2, 2.3, 2],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <Sparkles
                className="relative w-20 h-20 text-red-400"
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(239, 68, 68, 0.9)) drop-shadow(0 0 25px rgba(220, 38, 38, 0.6))',
                }}
                strokeWidth={1.5}
              />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 gap-12">
          
          {/* Center Content */}
          <motion.div
            className="max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              GOWTHAM K
            </motion.h1>

            <motion.p
              className="text-3xl md:text-4xl font-bold text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              B.Tech Information Technology student at Sri Eshwar College of Engineering,
              specializing in MERN stack development
            </motion.p>

            {/* Download Resume Button */}
            <motion.a
              href="/Gowtham_Resume_2025.pdf"
              download="Gowtham_K_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-medium rounded-md hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl mb-8 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>

            {/* Contact Info */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <a href="tel:7373692501" className="hover:text-red-400 transition-colors flex items-center gap-2 cursor-pointer">
                <Phone className="w-4 h-4" /> 7373692501
              </a>
              <a href="mailto:gowtham.k2023it@sece.ac.in" className="hover:text-red-400 transition-colors flex items-center gap-2 cursor-pointer">
                <Mail className="w-4 h-4" /> Email
              </a>
              <a href="https://github.com/GowthamkIT" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-2 cursor-pointer">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/gowtham-k-0577a131a" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors flex items-center gap-2 cursor-pointer">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 cursor-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-red-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
