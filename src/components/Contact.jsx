import { Mail, Phone, Github, Linkedin, Send, MapPin, Clock, MessageCircle, Sparkles, Star, Heart, Zap, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isHovering, setIsHovering] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'gowtham.k2023it@sece.ac.in'
      }
    ).then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSuccess(true);
        setIsError(false);
        setIsSending(false);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Email send error:', error.text);
        setIsError(true);
        setIsSuccess(false);
        setIsSending(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const floatingIcons = [
    { Icon: Sparkles, color: 'text-red-400', delay: 0 },
    { Icon: Star, color: 'text-orange-400', delay: 0.5 },
    { Icon: Heart, color: 'text-red-500', delay: 1 },
    { Icon: Zap, color: 'text-orange-500', delay: 1.5 },
  ];

  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2
  }));

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden cursor-none">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingIcons.map(({ Icon, color, delay }, index) => (
          <motion.div
            key={`float-${index}`}
            className={`absolute ${color}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon size={40} />
          </motion.div>
        ))}
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

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Let's Connect! 🚀
          </motion.h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-medium">
            Have a project in mind? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Side - Interactive Contact Cards */}
            <motion.div 
              className="lg:col-span-2 space-y-5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Email Card */}
              <motion.a
                href="mailto:gowtham.k2023it@sece.ac.in"
                className="block group cursor-none"
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering('email')}
                onHoverEnd={() => setIsHovering(null)}
              >
                <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-red-500/30 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"
                    animate={{
                      opacity: isHovering === 'email' ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative flex items-center gap-4">
                    <motion.div
                      className="p-4 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Mail className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-red-300 mb-1 font-bold">📧 Email Me</p>
                      <p className="font-bold text-white text-sm break-all">
                        gowtham.k2023it@sece.ac.in
                      </p>
                      <p className="text-xs text-gray-400 mt-2 font-medium">
                        I'll respond within 24 hours ⚡
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a
                href="tel:7373692501"
                className="block group cursor-none"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovering('phone')}
                onHoverEnd={() => setIsHovering(null)}
              >
                <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-orange-500/30 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"
                    animate={{
                      opacity: isHovering === 'phone' ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative flex items-center gap-4">
                    <motion.div
                      className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Phone className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-orange-300 mb-1 font-bold">📱 Call Me</p>
                      <p className="font-bold text-white text-lg">
                        +91 7373692501
                      </p>
                      <p className="text-xs text-gray-400 mt-2 font-medium">
                        Available Mon-Fri, 9AM-6PM 🕐
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>

              {/* Social Media Card */}
              <motion.div
                className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-orange-500/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-black mb-4 flex items-center gap-2 text-white">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  >
                    ⭐
                  </motion.span>
                  Let's Connect!
                </h4>
                <div className="flex gap-3">
                  <motion.a
                    href="https://github.com/GowthamkIT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-5 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl text-center group shadow-lg border border-red-500/20 cursor-none"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      whileHover={{ y: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                    >
                      <Github className="w-8 h-8 mx-auto mb-2 text-white" />
                      <p className="text-xs text-white font-bold">GitHub</p>
                    </motion.div>
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/gowtham-k-0577a131a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-5 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl text-center group shadow-lg cursor-none"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      whileHover={{ y: [-3, 3, -3] }}
                      transition={{ repeat: Infinity, duration: 0.5 }}
                    >
                      <Linkedin className="w-8 h-8 mx-auto mb-2 text-white" />
                      <p className="text-xs text-white font-bold">LinkedIn</p>
                    </motion.div>
                  </motion.a>
                </div>
              </motion.div>

              {/* Fun Fact Card */}
              <motion.div
                className="p-6 bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-red-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-6 h-6 text-orange-400" />
                  </motion.div>
                  <div>
                    <p className="text-sm font-bold text-orange-300 mb-1">⚡ Quick Response</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      I typically respond within 24 hours. For urgent matters, feel free to call directly!
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 md:p-10 bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-red-500/30 overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-orange-500/5"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-bold text-red-300 mb-2">Your Name</label>
                    <motion.input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-gray-700/60 text-white font-medium focus:border-red-500 border-2 border-transparent focus:outline-none transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-bold text-orange-300 mb-2">Your Email</label>
                    <motion.input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-5 py-4 rounded-2xl bg-gray-700/60 text-white font-medium focus:border-orange-500 border-2 border-transparent focus:outline-none transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-bold text-red-300 mb-2">Your Message</label>
                    <motion.textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-5 py-4 rounded-2xl bg-gray-700/60 text-white font-medium focus:border-red-500 border-2 border-transparent focus:outline-none transition-all duration-300 resize-none"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="relative w-full px-8 py-5 bg-gradient-to-r from-red-600 via-orange-600 to-red-600 rounded-2xl font-black text-xl text-white overflow-hidden shadow-2xl cursor-none"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(239, 68, 68, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    disabled={isSending}
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative flex items-center justify-center gap-3">
                      {isSending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-6 h-6 border-4 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-6 h-6" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

                {/* Success/Error Message UI */}
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-6 p-4 bg-green-700/40 backdrop-blur-sm rounded-2xl text-green-200 text-center font-bold border-2 border-green-500/50 flex items-center justify-center gap-3"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: 2 }}
                    >
                      ✅
                    </motion.div>
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mt-6 p-4 bg-red-700/40 backdrop-blur-sm rounded-2xl text-red-200 text-center font-bold border-2 border-red-500/50 flex items-center justify-center gap-3"
                  >
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.5, repeat: 2 }}
                    >
                      ❌
                    </motion.div>
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Footer Note */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-sm font-medium flex items-center justify-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💡
              </motion.span>
              Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
