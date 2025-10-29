import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0ycy0yIC45LTIgMiAuOSAyIDIgMiAyLS45IDItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              GOWTHAM K
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Full Stack Developer | MERN Stack Specialist | IoT Enthusiast
            </p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
              B.Tech Information Technology student at Sri Eshwar College of Engineering with a passion for building scalable web applications and innovative IoT solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="tel:7373692501"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>7373692501</span>
            </a>
            <a
              href="mailto:gowtham.k2023it@sece.ac.in"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/gowthamk2023it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/gowthamk2023it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
