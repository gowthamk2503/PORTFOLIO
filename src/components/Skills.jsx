import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming',
    skills: ['C', 'C++', 'Python', 'Java']
  },
  {
    title: 'Frontend & Backend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL', 'Firebase']
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'GitHub', 'Figma', 'Jupyter']
  },
  {
    title: 'Core',
    skills: ['DSA', 'OOP']
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: '#FAF7F2',
        padding: '120px 0',
        position: 'relative'
      }}
    >
      {/* Noise */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.025,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
      }}/>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 64px' }}>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span style={{
            fontFamily: 'Cormorant Garamond',
            fontStyle: 'italic',
            color: '#C9A84C'
          }}>
            — 002
          </span>

          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '56px',
            fontWeight: 300,
            color: '#1A1814',
            marginTop: '10px'
          }}>
            Expertise
          </h2>

          <motion.div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              marginTop: '20px'
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          marginTop: '60px'
        }}>
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(201,168,76,0.2)',
                backdropFilter: 'blur(12px)',
                padding: '24px'
              }}
            >
              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: '22px',
                marginBottom: '16px',
                color: '#1A1814'
              }}>
                {cat.title}
              </h3>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cat.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    style={{
                      border: '1px solid #C9A84C',
                      padding: '6px 12px',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#8B6914'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}