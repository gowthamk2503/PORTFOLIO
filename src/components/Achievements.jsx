import { Trophy, Award, Medal, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const achievements = [
  {
    title: 'Pixel Pioneers (2025)',
    award: 'First Prize',
    description: 'National-Level Technical Debate at Nehru Institute of Engineering and Technology',
    prize: 'Cash Prize of ₹2000',
    icon: Trophy,
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'ProjectExpo (2024)',
    award: 'Second Prize',
    description: 'College-level Project Expo among 30 projects',
    icon: Medal,
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Astranova (2024)',
    award: 'Third Prize',
    description: 'Technical Quiz event hosted by Coimbatore Institute of Technology (CIT)',
    icon: Award,
    color: 'from-red-600 to-orange-600',
  },
  {
    title: 'SIH 2024',
    award: 'Top 50',
    description: 'College Level - Ranked in Top 50 out of 200+ teams for presenting a tech-driven solution',
    icon: Star,
    color: 'from-orange-500 to-red-500',
  },
];

const certifications = [
  {
    title: 'Mastering Data Structures and Algorithms',
    platform: 'Udemy',
    year: '2024',
    topics: 'Using C, C++ & Java',
  },
  {
    title: 'Complete CSS, JavaScript, and Python',
    platform: 'Udemy',
    year: '2024',
    topics: 'Full Course',
  },
  {
    title: 'AR & VR and Machine Learning Workshop',
    platform: 'CIT',
    year: '2024',
    topics: 'Certified Workshop',
  },
  {
    title: 'SQL (Basic, Intermediate)',
    platform: 'HackerRank',
    year: '2025',
    topics: 'Database Skills',
  },
  {
    title: 'Excel',
    platform: 'Udemy',
    year: '2025',
    topics: 'Data Analysis',
  },
];

export default function Achievements() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Generate red/orange particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 4,
    color: i % 2 === 0 ? 'from-red-500 to-orange-500' : 'from-orange-500 to-red-600'
  }));

  // Twinkling stars
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));

  const handleMouseMove = (e, cardIndex) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="achievements" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Red Accent Background on Right Side */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-red-600/20 via-transparent to-transparent"></div>
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
          <motion.div
            key={`star-${star.id}`}
            className="absolute rounded-full bg-gray-400"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              filter: 'blur(0.5px)'
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8]
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

      {/* Animated Red/Orange Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-r ${particle.color}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
            }}
            animate={{
              y: [0, -80, -160, -240],
              opacity: [0, 0.6, 0.6, 0],
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

      {/* Animated Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" style={{ zIndex: 1 }}>
        <motion.path
          d="M0,50 Q400,100 800,50 T1600,50"
          stroke="url(#gradient-achievements)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,150 Q400,200 800,150 T1600,150"
          stroke="url(#gradient-achievements)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.path
          d="M0,250 Q400,300 800,250 T1600,250"
          stroke="url(#gradient2-achievements)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient-achievements" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0"/>
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1"/>
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="gradient2-achievements" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
            <stop offset="50%" stopColor="#f97316" stopOpacity="1"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Gradient Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.05) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, 100, 0],
          scale: [1, 1.2, 1, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 16,
          ease: 'easeInOut'
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(234, 88, 12, 0.05) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, -100, 0],
          scale: [1, 1.1, 1, 1]
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

      {/* Floating decorative icons */}
      <motion.div
        className="absolute top-20 left-10 text-red-500 opacity-10"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Trophy className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-orange-500 opacity-10"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-20 h-20" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Trophy className="w-16 h-16 text-red-500 mx-auto" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements & Certifications
          </h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />

          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognition and continuous learning milestones
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Awards Section */}
          <motion.h3 
            className="text-3xl font-bold mb-8 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Awards & Recognitions
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <motion.div
                  key={index}
                  className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 overflow-hidden group border border-red-500/20 cursor-none"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Cursor Glow Effect */}
                  {hoveredCard === index && (
                    <motion.div
                      className="absolute pointer-events-none rounded-full"
                      style={{
                        left: mousePosition.x,
                        top: mousePosition.y,
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, rgba(239, 68, 68, 0) 70%)',
                        transform: 'translate(-50%, -50%)',
                        filter: 'blur(20px)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* Ripple Effect on Hover */}
                  {hoveredCard === index && (
                    <>
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-red-500/50"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.1, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-2xl border-2 border-orange-500/50"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.15, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                      />
                    </>
                  )}

                  <motion.div 
                    className={`h-1.5 bg-gradient-to-r ${achievement.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                  />

                  <div className="p-6 relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} shadow-lg relative overflow-hidden`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        {hoveredCard === index && (
                          <motion.div
                            className="absolute inset-0 bg-white/30 rounded-lg"
                            animate={{ opacity: [0, 0.5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                        <Icon className="w-6 h-6 text-white relative z-10" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                            {achievement.title}
                          </h4>
                        </div>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.award}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-2">
                      {achievement.description}
                    </p>

                    {achievement.prize && (
                      <motion.p 
                        className="text-orange-400 font-semibold"
                        animate={hoveredCard === index ? { scale: [1, 1.05, 1] } : {}}
                        transition={{ duration: 0.5, repeat: hoveredCard === index ? Infinity : 0 }}
                      >
                        {achievement.prize}
                      </motion.p>
                    )}
                  </div>

                  {/* Sparkle particles on hover */}
                  {hoveredCard === index && (
                    <>
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-red-400 rounded-full"
                          style={{
                            left: `${50 + Math.cos((i * Math.PI * 2) / 8) * 40}%`,
                            top: `${50 + Math.sin((i * Math.PI * 2) / 8) * 40}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <motion.h3 
            className="text-3xl font-bold mb-8 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Certifications
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 border border-red-500/20 cursor-none group overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="flex items-start justify-between mb-3 relative z-10">
                  <motion.div 
                    className="p-2 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg border border-red-500/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Award className="w-5 h-5 text-red-400" />
                  </motion.div>
                  <span className="text-xs font-semibold text-gray-400 bg-gray-700/50 px-2 py-1 rounded">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 leading-tight relative z-10 group-hover:text-red-400 transition-colors">
                  {cert.title}
                </h4>

                <p className="text-sm text-gray-300 mb-2 relative z-10">{cert.topics}</p>

                <p className="text-sm font-semibold text-red-400 relative z-10">
                  {cert.platform}
                </p>

                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
