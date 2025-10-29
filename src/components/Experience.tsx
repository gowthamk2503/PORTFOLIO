import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'NEXTGEN DATA ENGINEERING',
    date: 'Jul 2025',
    description: 'Completed a hands-on internship focused on Spark, PySpark Streaming, Kafka, and Airflow for scalable data pipeline design and optimization.',
    skills: ['Spark', 'PySpark Streaming', 'Kafka', 'Airflow', 'Data Pipeline'],
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'MERN STACK',
    date: 'Feb 2025',
    description: 'Gained hands-on experience in full-stack development, building responsive UIs and RESTful APIs using MongoDB, Express.js, React, and Node.js.',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'RESTful APIs'],
    color: 'from-emerald-500 to-teal-400',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Experience
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Professional internships that shaped my technical expertise
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors">
                      <Briefcase className="w-6 h-6 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-500 mt-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.date}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
                    >
                      {skill}
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
