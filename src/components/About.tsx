import { GraduationCap, Award, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Education & Background
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  B.Tech in Information Technology
                </h3>
                <p className="text-lg text-slate-700 mb-2">
                  Sri Eshwar College of Engineering
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-slate-600">CGPA: 8.12</p>
                  <p className="text-slate-600 font-semibold">2023 - 2027</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-3">
                <Award className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">HSC</h4>
                  <p className="text-slate-700">Sri Vaiyapuri Vidyalaya Mat. Hr.School</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-slate-600">90.5%</p>
                <p className="text-slate-600">2022-2023</p>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-3 mb-3">
                <Award className="w-5 h-5 text-blue-500 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-slate-900">SSLC</h4>
                  <p className="text-slate-700">Sri Vaiyapuri Vidyalaya Mat. Hr.School</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-slate-600">PASS</p>
                <p className="text-slate-600">2020-2021</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-white/10 rounded-lg">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">About Me</h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm a passionate full-stack developer specializing in the MERN stack with hands-on experience in building
                  production-ready web applications. My journey includes developing innovative IoT solutions and creating
                  scalable systems that solve real-world problems. With a strong foundation in data structures, algorithms,
                  and object-oriented programming, I continuously push myself to learn and implement cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
