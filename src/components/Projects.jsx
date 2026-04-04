import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
const projects = [
  {
    title: 'RENTARO – Car Rental Web Application',
    date: 'Mar 2025',
    description:
      'Developed a full-stack MERN car rental platform with real-time booking, authentication, and admin dashboard. Implemented REST APIs, secure login, and seamless frontend-backend integration to ensure smooth user experience and scalability.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://github.com/GowthamkIT/FULLSTACK_RENTARO'
  },
  {
    title: 'TrackZone – Geofencing Attendance System',
    date: 'Jan 2025',
    description:
      'Built a secure attendance tracking system using GPS-based geofencing and authentication. Integrated real-time data handling with backend APIs and improved accuracy and reliability through testing and optimization.',
    tech: ['React', 'Node.js', 'MongoDB', 'GPS API']
  },
  {
    title: 'Personal Portfolio Website',
    date: 'Apr 2025',
    description:
      'Designed and developed a premium portfolio showcasing projects and skills with modern UI/UX, smooth animations, and responsive design. Integrated GitHub projects and optimized performance for better user experience.',
    tech: ['React', 'Framer Motion', 'CSS', 'JavaScript'],
    link: 'https://your-portfolio-link.com'
  },
  {
    title: 'Citizen Feedback on Road Maintenance System',
    date: 'Feb 2025',
    description:
      'Developed a citizen reporting platform for road issues with location and image upload support. Built an admin dashboard for complaint tracking, prioritization, and resolution with map-based visualization and analytics.',
    tech: ['Flask', 'MongoDB', 'JavaScript', 'Maps API'],
    link: 'https://github.com/your-road-project-link'
  }
];
export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: '#FAF7F2',
        position: 'relative',
        padding: '120px 0'
      }}
    >
      {/* Noise texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
        }}
      />

      {/* Container */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 64px' }}>

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{
            fontFamily: 'Cormorant Garamond',
            fontStyle: 'italic',
            color: '#C9A84C',
            fontSize: '14px'
          }}>
            — 003
          </span>

          <h2
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: '56px',
              fontWeight: 300,
              color: '#1A1814',
              marginTop: '12px'
            }}
          >
            Selected Work
          </h2>

          {/* Gold line */}
          <motion.div
            style={{
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              marginTop: '24px'
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* PROJECT GRID */}
        <div
          style={{
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px'
          }}
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(201,168,76,0.2)',
                backdropFilter: 'blur(12px)',
                padding: '32px',
                position: 'relative'
              }}
            >
              {/* Corner ornament */}
              <div style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 30,
                height: 30,
                borderTop: '1px solid #C9A84C',
                borderRight: '1px solid #C9A84C',
                opacity: 0.2
              }}/>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond',
                  fontSize: '28px',
                  color: '#1A1814',
                  marginBottom: '10px'
                }}
              >
                {p.title}
              </h3>

              {/* Date */}
              <p style={{
                fontSize: '12px',
                letterSpacing: '0.12em',
                color: '#6B6560',
                marginBottom: '16px'
              }}>
                {p.date}
              </p>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: '#6B6560',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                {p.description}
              </p>

              {/* Tech */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      border: '1px solid rgba(201,168,76,0.4)',
                      padding: '6px 12px',
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#8B6914'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    marginTop: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    color: '#6B6560',
                    textDecoration: 'none'
                  }}
                >
                  View Project <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}