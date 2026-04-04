import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const achievements = [
  {
    title: 'Pixel Pioneers',
    award: 'First Prize',
    desc: 'National-level technical debate',
  },
  {
    title: 'Project Expo',
    award: 'Second Prize',
    desc: 'Top 2 among 30+ projects',
  },
  {
    title: 'Astranova',
    award: 'Third Prize',
    desc: 'Technical quiz competition',
  },
  {
    title: 'SIH',
    award: 'Top 50',
    desc: 'Top 50 out of 200+ teams',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const canvasRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  /* ---------------- NETWORK ANIMATION ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let particles = [];
    const PARTICLE_COUNT = 80;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // LINES
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.strokeStyle = `rgba(201,168,76,${0.18 - dist / 700})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // DOT
        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(201,168,76,0.8)';
        ctx.fill();

        // MOVE
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;

        if (particles[i].x < 0 || particles[i].x > canvas.width) particles[i].vx *= -1;
        if (particles[i].y < 0 || particles[i].y > canvas.height) particles[i].vy *= -1;
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section
      id="achievements"
      ref={ref}
      style={{
        background: '#FAF7F2',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* 🔥 NETWORK CANVAS */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0
        }}
      />

      {/* GOLD ORB BACKGROUND */}
      <motion.div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.1), transparent)',
          filter: 'blur(80px)',
          top: '-100px',
          left: '-100px',
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
          right: '-100px',
          y: useTransform(scrollYProgress, [0, 1], [0, -120])
        }}
      />

      {/* NOISE */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.025,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
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
        AWARDS
      </motion.div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 64px', position: 'relative', zIndex: 10 }}>

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
            — 006
          </span>

          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '56px',
            fontWeight: 300,
            color: '#1A1814',
            marginTop: '10px'
          }}>
            Achievements
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

        {/* GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginTop: '60px'
        }}>
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(201,168,76,0.2)',
                backdropFilter: 'blur(12px)',
                padding: '28px',
                position: 'relative'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 10,
                left: 10,
                width: 30,
                height: 30,
                borderTop: '1px solid #C9A84C',
                borderLeft: '1px solid #C9A84C',
                opacity: 0.2
              }}/>

              <h3 style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: '26px',
                color: '#1A1814'
              }}>
                {a.title}
              </h3>

              <p style={{
                color: '#C9A84C',
                fontStyle: 'italic',
                margin: '6px 0'
              }}>
                {a.award}
              </p>

              <p style={{
                color: '#6B6560',
                fontSize: '14px'
              }}>
                {a.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}