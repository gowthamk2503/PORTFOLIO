import { GraduationCap, Award, Code, BookOpen, Sparkles, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  // Generate particles with red/orange colors
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
    color: i % 3 === 0 ? 'from-red-500 to-orange-500' : i % 3 === 1 ? 'from-orange-500 to-red-600' : 'from-red-400 to-orange-400'
  }));

  // Twinkling stars background
  const stars = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Red Accent Background on Right Side */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-red-600/20 via-transparent to-transparent"></div>
      </div>

      {/* Twinkling Stars Background */}
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

      {/* Animated Red Particles Background */}
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
              boxShadow: '0 0 15px rgba(239, 68, 68, 0.6)',
            }}
            animate={{
              y: [0, -100, -200, -300],
              opacity: [0, 0.8, 0.8, 0],
              scale: [0, 1.2, 1, 0.5]
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
          stroke="url(#gradient-about)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,150 Q400,200 800,150 T1600,150"
          stroke="url(#gradient-about)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.path
          d="M0,250 Q400,300 800,250 T1600,250"
          stroke="url(#gradient2-about)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient-about" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0"/>
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1"/>
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="gradient2-about" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
            <stop offset="50%" stopColor="#f97316" stopOpacity="1"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.05) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 60, 100, 0],
          scale: [1, 1.2, 1, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
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
          scale: [1, 1.15, 1, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut'
        }}
      />

      {/* Geometric Neon Shape - Triangle */}
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

      {/* Geometric Neon Shape - Hexagon */}
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
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-orange-500 opacity-10"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Lightbulb className="w-16 h-16" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Title with Icon */}
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
            <BookOpen className="w-16 h-16 text-red-500 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Background
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Main B.Tech Card */}
          <motion.div 
            className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 overflow-hidden border border-red-500/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 opacity-5"
              animate={{
                rotate: [0, 360]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <GraduationCap className="w-full h-full text-red-500" />
            </motion.div>

            <div className="flex items-start gap-4 relative z-10">
              <motion.div 
                className="p-4 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  B.Tech in Information Technology
                </motion.h3>
                <motion.p 
                  className="text-lg text-gray-300 mb-3 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Sri Eshwar College of Engineering
                </motion.p>
                <div className="flex flex-wrap gap-4 items-center">
                  <motion.div 
                    className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full shadow-md border border-red-500/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-gray-200 font-bold">CGPA: <span className="text-red-400">8.12</span></p>
                  </motion.div>
                  <motion.div 
                    className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full shadow-md border border-orange-500/30"
                    whileHover={{ scale: 1.1 }}
                  >
                    <p className="text-gray-200 font-semibold">2023 - 2027</p>
                  </motion.div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-500 rounded-full opacity-5"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* HSC and SSLC Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 border border-red-500/20 overflow-hidden"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-red-500 rounded-full opacity-5"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="flex items-start gap-3 mb-3 relative z-10">
                <motion.div
                  className="p-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold text-white">HSC</h4>
                  <p className="text-gray-300">Sri Vaiyapuri Vidyalaya Mat. Hr.School</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  90.5%
                </motion.span>
                <span className="text-gray-400 font-semibold">2022-2023</span>
              </div>
            </motion.div>

            <motion.div 
              className="relative bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 border border-orange-500/20 overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500 rounded-full opacity-5"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, -90, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="flex items-start gap-3 mb-3 relative z-10">
                <motion.div
                  className="p-2 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-bold text-white">SSLC</h4>
                  <p className="text-gray-300">Sri Vaiyapuri Vidyalaya Mat. Hr.School</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  PASS
                </motion.span>
                <span className="text-gray-400 font-semibold">2020-2021</span>
              </div>
            </motion.div>
          </div>

          {/* About Me Card */}
          <motion.div 
            className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl text-white shadow-2xl overflow-hidden border border-red-500/20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, y: -8 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-600/10"
              animate={{
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="absolute top-10 right-10 text-red-500/5 text-6xl font-mono"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {'</>'}
            </motion.div>

            <div className="flex items-start gap-4 mb-6 relative z-10">
              <motion.div 
                className="p-3 bg-red-500/10 backdrop-blur-sm rounded-lg shadow-lg border border-red-500/30"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="w-7 h-7 text-red-400" />
              </motion.div>
              <div>
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  About Me
                </motion.h3>
                <motion.p 
                  className="text-gray-300 leading-relaxed text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  I'm a passionate full-stack developer specializing in the <span className="text-red-400 font-semibold">MERN stack</span> with hands-on experience in building
                  production-ready web applications. My journey includes developing innovative <span className="text-orange-400 font-semibold">IoT solutions</span> and creating
                  scalable systems that solve real-world problems. With a strong foundation in <span className="text-red-300 font-semibold">data structures, algorithms,
                  and object-oriented programming</span>, I continuously push myself to learn and implement cutting-edge technologies.
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-2 mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  {['MERN Stack', 'IoT', 'DSA', 'OOP'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-red-500/10 backdrop-blur-sm rounded-full text-sm border border-red-500/30 text-gray-200"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgba(239, 68, 68, 0.5)' }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
