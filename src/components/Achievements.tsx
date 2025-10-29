import { Trophy, Award, Medal, Star } from 'lucide-react';

const achievements = [
  {
    title: 'Pixel Pioneers (2025)',
    award: 'First Prize',
    description: 'National-Level Technical Debate at Nehru Institute of Engineering and Technology',
    prize: 'Cash Prize of ₹2000',
    icon: Trophy,
    color: 'from-yellow-400 to-orange-400',
  },
  {
    title: 'ProjectExpo (2024)',
    award: 'Second Prize',
    description: 'College-level Project Expo among 30 projects',
    icon: Medal,
    color: 'from-slate-400 to-slate-500',
  },
  {
    title: 'Astranova (2024)',
    award: 'Third Prize',
    description: 'Technical Quiz event hosted by Coimbatore Institute of Technology (CIT)',
    icon: Award,
    color: 'from-amber-600 to-amber-700',
  },
  {
    title: 'SIH 2024',
    award: 'Top 50',
    description: 'College Level - Ranked in Top 50 out of 200+ teams for presenting a tech-driven solution',
    icon: Star,
    color: 'from-blue-500 to-cyan-400',
  },
];

const certifications = [
  {
    title: 'Mastering Data Structures and Algorithms',
    platform: 'Udemy',
    year: '2024',
    topics: 'Using C, C++ & Java',
  },
  {
    title: 'Complete CSS, JavaScript, and Python',
    platform: 'Udemy',
    year: '2024',
    topics: 'Full Course',
  },
  {
    title: 'AR & VR and Machine Learning Workshop',
    platform: 'CIT',
    year: '2024',
    topics: 'Certified Workshop',
  },
  {
    title: 'SQL (Basic, Intermediate)',
    platform: 'HackerRank',
    year: '2025',
    topics: 'Database Skills',
  },
  {
    title: 'Excel',
    platform: 'Udemy',
    year: '2025',
    topics: 'Data Analysis',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Achievements & Certifications
        </h2>
        <p className="text-center text-slate-600 mb-16 max-w-2xl mx-auto">
          Recognition and continuous learning milestones
        </p>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-slate-900">Awards & Recognitions</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${achievement.color}`}></div>

                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-xl font-bold text-slate-900">{achievement.title}</h4>
                        </div>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.award}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 leading-relaxed mb-2">
                      {achievement.description}
                    </p>

                    {achievement.prize && (
                      <p className="text-emerald-600 font-semibold">
                        {achievement.prize}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <h3 className="text-3xl font-bold mb-8 text-slate-900">Certifications</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 bg-white px-2 py-1 rounded">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  {cert.title}
                </h4>

                <p className="text-sm text-slate-600 mb-2">{cert.topics}</p>

                <p className="text-sm font-semibold text-blue-600">
                  {cert.platform}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
