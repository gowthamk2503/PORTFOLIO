import { Briefcase, Calendar } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'NextGen Data Engineering Internship',
    date: 'Jul 2025',
    description:
      'Worked on scalable data pipelines using Spark, Kafka, and Airflow. Improved workflow efficiency and contributed to reliable data processing systems.',
    skills: ['Spark', 'Kafka', 'Airflow', 'PySpark']
  },
  {
    title: 'MERN Stack Internship',
    date: 'Feb 2025',
    description:
      'Developed full-stack applications using MongoDB, Express, React, and Node.js. Integrated REST APIs and built responsive UI components following Agile practices.',
    skills: ['MongoDB', 'Express', 'React', 'Node.js']
  }
];
export default function Experience() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="experience"
      ref={ref}
      style={{
        background: '#FAF7F2',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      {/* SUBTLE GOLD BACKGROUND */}
      <motion.div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.1), transparent)',
          filter: 'blur(80px)',
          top: '-100px',
          right: '-100px',
          y
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.08), transparent)',
          filter: 'blur(80px)',
          bottom: '-100px',
          left: '-100px',
          y: useTransform(scrollYProgress, [0, 1], [0, -120])
        }}
      />

      {/* NOISE */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.025,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
      }}/>

      {/* WATERMARK */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-40px',
          fontSize: '260px',
          fontFamily: 'Cormorant Garamond',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.08)',
          y
        }}
      >
        EXP
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span style={{
            fontFamily: 'Cormorant Garamond',
            fontStyle: 'italic',
            color: '#C9A84C'
          }}>
            — 004
          </span>

          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '56px',
            fontWeight: 300,
            color: '#1A1814'
          }}>
            Experience
          </h2>

          <motion.div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
              marginTop: '20px'
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(201,168,76,0.2)',
                backdropFilter: 'blur(12px)',
                padding: '32px',
                position: 'relative'
              }}
            >

              {/* CORNER DETAIL */}
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

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Briefcase size={18} color="#C9A84C" />

                <h3 style={{
                  fontFamily: 'Cormorant Garamond',
                  fontSize: '26px',
                  color: '#1A1814'
                }}>
                  {exp.title}
                </h3>
              </div>

              <p style={{
                fontSize: '12px',
                letterSpacing: '0.12em',
                color: '#6B6560',
                margin: '6px 0 16px'
              }}>
                {exp.date}
              </p>

              <p style={{
                color: '#6B6560',
                lineHeight: 1.7,
                marginBottom: '16px'
              }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.skills.map((skill, i) => (
                  <span key={i} style={chip}>
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

const chip = {
  border: '1px solid #C9A84C',
  padding: '6px 12px',
  fontSize: '11px',
  textTransform: 'uppercase',
  color: '#8B6914'
};