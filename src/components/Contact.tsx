import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Let's Connect
        </h2>
        <p className="text-center text-slate-300 mb-16 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or collaborations
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  Whether you have a question, want to collaborate on a project, or just want to say hi,
                  feel free to reach out. I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:gowtham.k2023it@sece.ac.in"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="font-semibold">gowtham.k2023it@sece.ac.in</p>
                  </div>
                </a>

                <a
                  href="tel:7373692501"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="font-semibold">+91 7373692501</p>
                  </div>
                </a>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4">Social Media</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/gowthamk2023it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/gowthamk2023it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-400">
              © 2025 Gowtham K. Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
