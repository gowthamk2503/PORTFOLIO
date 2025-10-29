import { Code2, Database, Wrench, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['C', 'C++', 'Python', 'Java'],
    color: 'blue',
  },
  {
    title: 'Frontend & Backend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Flutter (Basics)', 'Node.js', 'Express.js'],
    color: 'cyan',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Firebase'],
    color: 'emerald',
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: ['Visual Studio Code', 'PyCharm', 'GitHub', 'Figma', 'Google Colab', 'Jupyter'],
    color: 'orange',
  },
  {
    title: 'Framework Core',
    icon: BookOpen,
    skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOPS)'],
    color: 'purple',
  },
];

const colorClasses = {
  blue: {
    bg: 'from-blue-500 to-blue-600',
    icon: 'bg-blue-100 text-blue-600',
    badge: 'bg-blue-50 text-blue-700 hover:bg-blue-100',
  },
  cyan: {
    bg: 'from-cyan-500 to-cyan-600',
    icon: 'bg-cyan-100 text-cyan-600',
    badge: 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100',
  },
  emerald: {
    bg: 'from-emerald-500 to-emerald-600',
    icon: 'bg-emerald-100 text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100',
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    icon: 'bg-orange-100 text-orange-600',
    badge: 'bg-orange-50 text-orange-700 hover:bg-orange-100',
  },
  purple: {
    bg: 'from-violet-500 to-violet-600',
    icon: 'bg-violet-100 text-violet-600',
    badge: 'bg-violet-50 text-violet-700 hover:bg-violet-100',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Technical Skills
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          A comprehensive toolkit built through hands-on projects and continuous learning
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
              >
                <div className={`h-1 bg-gradient-to-r ${colors.bg}`}></div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 rounded-lg ${colors.icon}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${colors.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Coding Profiles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <h4 className="text-lg font-bold mb-2">LeetCode</h4>
                <p className="text-slate-300 mb-2">Contest Rating: 1422</p>
                <p className="text-slate-300">100+ Problems Solved</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
                <h4 className="text-lg font-bold mb-2">SkillRack</h4>
                <p className="text-slate-300">200+ Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
