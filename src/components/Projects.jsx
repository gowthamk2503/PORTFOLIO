import { ExternalLink, Calendar, Sparkles, Zap, Cpu, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';


const projects = [
  {
    title: 'RENTARO – Car Rental Management System',
    date: 'Mar 2025',
    description: 'Full-stack web-based car rental management system providing seamless car rental services to customers and management functionalities for admins.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Login API'],
    gradient: 'from-red-500 to-orange-500',
    icon: Code2,
    link: 'https://github.com/GowthamkIT/FULLSTACK_RENTARO'
  },
  {
    title: 'TrackZone – Advanced Geofencing Attendance Tracker',
    date: 'Jan 2025',
    description: 'Advanced attendance tracking system with GPS geofencing and fingerprint authentication APIs to ensure secure and reliable employee attendance management.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GPS API', 'Fingerprint Auth'],
    gradient: 'from-orange-500 to-red-600',
    icon: Zap,
  },
  {
    title: 'Air Guard – Car Toxic Gas Detection System',
    date: 'Sep 2024',
    description: 'IoT-based system to detect harmful gases like Benzene from heated car interiors and automatically activate the AC system as an exhaust fan for occupant safety.',
    tech: ['ESP8266', 'MQ-135 Gas Sensor', 'Arduino IDE', 'Firebase'],
    gradient: 'from-red-600 to-orange-600',
    icon: Cpu,
  },
  {
    title: 'Food Order Billing System',
    date: 'Aug 2024',
    description: 'Console-based Food Order Billing System to automate restaurant billing operations, managing food items, customer orders, and generating detailed bills.',
    tech: ['Java', 'JavaFX', 'MySQL', 'IntelliJ IDEA'],
    gradient: 'from-orange-500 to-red-500',
    icon: Sparkles,
    link: 'https://github.com/GowthamkIT/JAVA_PROJECT_FOOD_ORDER_BILL_SYSTEM'
  },
];


export default function Projects() {
  // Generate background particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
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


  return (
    <section id="projects" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
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


      {/* Animated Red/Orange Particles Background */}
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
              boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)',
            }}
            animate={{
              y: [0, -80, -160, -240],
              opacity: [0, 0.6, 0.6, 0],
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
          stroke="url(#gradient-projects)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M0,150 Q400,200 800,150 T1600,150"
          stroke="url(#gradient-projects)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.path
          d="M0,250 Q400,300 800,250 T1600,250"
          stroke="url(#gradient2-projects)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        />
        <defs>
          <linearGradient id="gradient-projects" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0"/>
            <stop offset="50%" stopColor="#ef4444" stopOpacity="1"/>
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
          </linearGradient>
          <linearGradient id="gradient2-projects" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0"/>
            <stop offset="50%" stopColor="#f97316" stopOpacity="1"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>


      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full z-0"
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
        className="absolute bottom-20 left-0 w-[600px] h-[600px] rounded-full z-0"
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


      {/* Floating decorative shapes */}
      <motion.div
        className="absolute top-32 left-10 text-red-500 opacity-10"
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
        <Code2 className="w-20 h-20" />
      </motion.div>


      <motion.div
        className="absolute bottom-32 right-10 text-orange-500 opacity-10"
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
        <Cpu className="w-24 h-24" />
      </motion.div>


      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Title Section */}
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
            <Sparkles className="w-16 h-16 text-red-500 mx-auto" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            A showcase of my work spanning full-stack web development, IoT solutions, and enterprise applications
          </motion.p>
        </motion.div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 overflow-hidden border border-red-500/20 cursor-none"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
              >
                {/* Animated gradient top bar */}
                <motion.div 
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />


                {/* Animated background pattern */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-5"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <IconComponent className="w-full h-full text-red-500" />
                </motion.div>


                {/* Hover glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />


                <div className="p-8 relative z-10">
                  {/* Title and Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-3 flex-1">
                      <motion.div
                        className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-orange-500 transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>
                    {project.link ? (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 45 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                        aria-label="View on GitHub"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 cursor-pointer" />
                      </motion.a>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="ml-2"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-400 opacity-30 flex-shrink-0" />
                      </motion.div>
                    )}
                  </div>


                  {/* Date */}
                  <motion.div 
                    className="flex items-center gap-2 text-gray-400 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{project.date}</span>
                  </motion.div>


                  {/* Description */}
                  <motion.p 
                    className="text-gray-300 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {project.description}
                  </motion.p>


                  {/* Tech Stack Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-900/50 backdrop-blur-sm text-gray-200 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white border border-red-500/30 transition-all duration-300 cursor-none"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.7 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>


                {/* Bottom gradient shine effect */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>


        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:shadow-red-500/50 transition-all duration-300 cursor-none"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
