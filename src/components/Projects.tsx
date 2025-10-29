import { ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'RENTARO – Car Rental Management System',
    date: 'Mar 2025',
    description: 'Full-stack web-based car rental management system providing seamless car rental services to customers and management functionalities for admins.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Google Login API'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'TrackZone – Advanced Geofencing Attendance Tracker',
    date: 'Jan 2025',
    description: 'Advanced attendance tracking system with GPS geofencing and fingerprint authentication APIs to ensure secure and reliable employee attendance management.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'GPS API', 'Fingerprint Auth'],
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Air Guard – Car Toxic Gas Detection System',
    date: 'Sep 2024',
    description: 'IoT-based system to detect harmful gases like Benzene from heated car interiors and automatically activate the AC system as an exhaust fan for occupant safety.',
    tech: ['ESP8266', 'MQ-135 Gas Sensor', 'Arduino IDE', 'Firebase'],
    gradient: 'from-orange-500 to-red-400',
  },
  {
    title: 'Food Order Billing System',
    date: 'Aug 2024',
    description: 'Console-based Food Order Billing System to automate restaurant billing operations, managing food items, customer orders, and generating detailed bills.',
    tech: ['Java', 'JavaFX', 'MySQL', 'IntelliJ IDEA'],
    gradient: 'from-purple-500 to-pink-400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Featured Projects
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          A showcase of my work spanning full-stack web development, IoT solutions, and enterprise applications
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" />
                </div>

                <div className="flex items-center gap-2 text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{project.date}</span>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
