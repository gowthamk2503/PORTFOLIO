import { Code2, Database, Wrench, BookOpen, Trophy, Zap, Star, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'C++', 'Python', 'Java'],
    color: 'red',
    images: [
      { name: 'C', url: '/icons/c-original.svg' },
      { name: 'C++', url: '/icons/cplusplus-original.svg' },
      { name: 'Python', url: '/icons/python-original.svg' },
      { name: 'Java', url: '/icons/java-original.svg' }
    ]
  },
  {
    title: 'Frontend & Backend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Flutter', 'Node.js', 'Express.js'],
    color: 'orange',
    images: [
      { name: 'HTML', url: '/icons/html5-original.svg' },
      { name: 'CSS', url: '/icons/css3-original.svg' },
      { name: 'JavaScript', url: '/icons/javascript-original.svg' },
      { name: 'React', url: '/icons/react-original.svg' },
      { name: 'Node.js', url: '/icons/nodejs-original.svg' },
      { name: 'Express.js', url: '/icons/express-original.svg' },
      { name: 'Flutter', url: '/icons/flutter-original.svg' }
    ]
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Firebase'],
    color: 'yellow',
    images: [
      { name: 'MongoDB', url: '/icons/mongodb-original.svg' },
      { name: 'MySQL', url: '/icons/mysql-original.svg' },
      { name: 'Firebase', url: '/icons/firebase-plain.svg' }
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['VS Code', 'PyCharm', 'GitHub', 'Figma', 'Google Colab', 'Jupyter'],
    color: 'pink',
    images: [
      { name: 'VS Code', url: '/icons/vscode-original.svg' },
      { name: 'PyCharm', url: '/icons/pycharm-original.svg' },
      { name: 'GitHub', url: '/icons/github-original.svg' },
      { name: 'Figma', url: '/icons/figma-original.svg' },
      { name: 'Jupyter', url: '/icons/jupyter-original.svg' }
    ]
  },
  {
    title: 'Framework Core',
    icon: BookOpen,
    skills: ['DSA', 'OOP'],
    color: 'purple',
    images: []
  },
];

const colorClasses = {
  red: {
    bg: 'from-red-500 to-red-600',
    icon: 'bg-red-100 text-red-600',
    badge: 'bg-red-50 text-red-700 hover:bg-red-100',
    glow: 'rgba(239, 68, 68, 0.4)',
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    icon: 'bg-orange-100 text-orange-600',
    badge: 'bg-orange-50 text-orange-700 hover:bg-orange-100',
    glow: 'rgba(249, 115, 22, 0.4)',
  },
  yellow: {
    bg: 'from-yellow-500 to-yellow-600',
    icon: 'bg-yellow-100 text-yellow-600',
    badge: 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100',
    glow: 'rgba(234, 179, 8, 0.4)',
  },
  pink: {
    bg: 'from-pink-500 to-pink-600',
    icon: 'bg-pink-100 text-pink-600',
    badge: 'bg-pink-50 text-pink-700 hover:bg-pink-100',
    glow: 'rgba(236, 72, 153, 0.4)',
  },
  purple: {
    bg: 'from-purple-500 to-purple-600',
    icon: 'bg-purple-100 text-purple-600',
    badge: 'bg-purple-50 text-purple-700 hover:bg-purple-100',
    glow: 'rgba(168, 85, 247, 0.4)',
  },
};

export default function Skills() {
  // Generate background particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 3,
    color: i % 5 === 0 ? 'from-red-400 to-orange-400' : 
           i % 5 === 1 ? 'from-orange-400 to-yellow-400' : 
           i % 5 === 2 ? 'from-yellow-400 to-red-400' : 
           i % 5 === 3 ? 'from-pink-400 to-red-400' :
           'from-purple-400 to-pink-400'
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
    <section id="skills" className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Right Side Red Overlay */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full bg-gradient-to-l from-red-600/20 via-transparent to-transparent pointer-events-none z-0" />

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

      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-r ${particle.color}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              boxShadow: '0 0 12px rgba(239, 68, 68, 0.5)',
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

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-20 left-0 w-[500px] h-[500px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, rgba(220, 38, 38, 0.05) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 80, -40, 0],
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
        className="absolute bottom-20 right-0 w-[600px] h-[600px] rounded-full z-0"
        style={{
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(234, 88, 12, 0.05) 100%)',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 40, 0],
          y: [0, -60, -100, 0],
          scale: [1, 1.15, 1, 1]
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: 'easeInOut'
        }}
      />

      {/* Floating decorative icons */}
      <motion.div
        className="absolute top-32 right-10 text-red-400 opacity-10"
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
        <Star className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 text-orange-400 opacity-10"
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
        <Zap className="w-24 h-24" />
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
            <Zap className="w-16 h-16 text-red-500 mx-auto" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Technical Skills
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
            A comprehensive toolkit built through hands-on projects and continuous learning
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color];

            return (
              <motion.div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-red-500/20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Animated gradient top bar */}
                <motion.div 
                  className={`h-1 bg-gradient-to-r ${colors.bg}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />

                {/* Animated background icon */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 opacity-5"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${colors.glow}, transparent)`
                  }}
                />

                <div className="p-6 relative z-10">
                  {/* Title and Icon */}
                  <motion.div 
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <motion.div 
                      className={`p-2 rounded-lg bg-gradient-to-br ${colors.bg} shadow-md`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </motion.div>

                  {/* Technology Icons Grid */}
                  {category.images.length > 0 && (
                    <motion.div 
                      className="flex flex-wrap gap-4 mb-6 justify-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      {category.images.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          className="relative group/tech"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.6 + techIndex * 0.08 }}
                          whileHover={{ scale: 1.2, y: -5 }}
                        >
                          <div className="relative w-12 h-12 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm rounded-lg p-2">
                            <motion.img
                              src={tech.url}
                              alt={tech.name}
                              className="w-full h-full object-contain filter drop-shadow-md"
                              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                            />
                            {/* Tooltip */}
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                              {tech.name}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {/* Skills Badges */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7 }}
                  >
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r ${colors.bg} text-white transition-all duration-300 cursor-pointer shadow-md`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.8 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Bottom gradient shine */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Coding Profiles Section - Enhanced */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 text-white shadow-2xl overflow-hidden border border-red-500/20">
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(239,68,68,0.1) 10px, rgba(239,68,68,0.1) 20px)',
                backgroundSize: '200% 200%'
              }}
            />

            {/* Floating trophy icon */}
            <motion.div
              className="absolute top-6 right-6 text-red-500/10"
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
              <Trophy className="w-24 h-24" />
            </motion.div>

            <motion.div
              className="flex items-center gap-3 mb-6 relative z-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="p-2 bg-red-500/20 backdrop-blur-sm rounded-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Trophy className="w-6 h-6 text-red-400" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold">Coding Profiles</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 border border-red-500/20 hover:border-red-500/40"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.h4 
                  className="text-xl font-bold mb-3 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Code2 className="w-5 h-5 text-red-400" />
                  LeetCode
                </motion.h4>
                <div className="space-y-2">
                  <motion.p 
                    className="text-gray-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400" />
                    Contest Rating: <span className="font-bold text-yellow-400">1422</span>
                  </motion.p>
                  <motion.p 
                    className="text-gray-300 flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    <Sparkles className="w-4 h-4 text-green-400" />
                    <span className="font-bold text-green-400">100+</span> Problems Solved
                  </motion.p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-900/70 transition-all duration-300 border border-orange-500/20 hover:border-orange-500/40"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <motion.h4 
                  className="text-xl font-bold mb-3 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Code2 className="w-5 h-5 text-orange-400" />
                  SkillRack
                </motion.h4>
                <motion.p 
                  className="text-gray-300 flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  <span className="font-bold text-orange-400">200+</span> Problems Solved
                </motion.p>
              </motion.div>
            </div>

            {/* Bottom gradient accent */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.9 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
