import React, { useRef, useState, useEffect } from 'react';
import { GraduationCap, Code } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

/* Fonts */
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
`;

const SKILLS = ['MERN Stack', 'IoT', 'DSA', 'OOP'];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <style>{FONTS}</style>
      <style>{GLOBAL_STYLES}</style>

      <div className="cursor-dot" style={{ left: mousePos.x, top: mousePos.y }} />
      <div className="cursor-ring" style={{ left: mousePos.x, top: mousePos.y }} />

      <section ref={containerRef} className="about-root">
        <PremiumBackground scrollProgress={scrollYProgress} />

        <div className="container mx-auto px-6 relative z-10 max-w-[1100px]">
          <SectionHeader />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EducationCard />
            <ProfileCard />
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------------- BACKGROUND (NETWORK ANIMATION) ---------------- */
const PremiumBackground = ({ scrollProgress }) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let particles = [];
    const PARTICLE_COUNT = 90;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    particles = Array.from({ length: PARTICLE_COUNT }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // CONNECTION LINES
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.strokeStyle = `rgba(201,168,76,${0.2 - dist / 700})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // MOUSE INTERACTION
        const dx = particles[i].x - mouse.current.x;
        const dy = particles[i].y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.strokeStyle = 'rgba(201,168,76,0.3)';
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }

        // PARTICLE
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

  const yWatermark = useTransform(scrollProgress, [0, 1], [-50, 150]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      <div className="noise-overlay" />

      <motion.div
        className="display-font watermark"
        style={{ y: yWatermark }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        ABOUT
      </motion.div>
    </div>
  );
};

/* ---------------- UI ---------------- */
const SectionHeader = () => (
  <div className="text-center mb-20">
    <span className="display-font text-[var(--gold)]">— 002</span>
    <h2 className="display-font text-[56px] text-[var(--charcoal)]">About</h2>
    <div className="gold-line w-[200px] mx-auto mt-4" />
  </div>
);

const EducationCard = () => (
  <div className="luxury-card">
    <GraduationCap className="text-[var(--gold)] mb-4" />
    <h3 className="display-font text-2xl">B.Tech IT</h3>
    <p>Sri Eshwar College of Engineering</p>
    <div className="mt-4">
      <span className="skill-chip">CGPA: 8.12</span>
      <span className="skill-chip">2023–2027</span>
    </div>
  </div>
);

const ProfileCard = () => (
  <div className="luxury-card">
    <Code className="text-[var(--gold)] mb-4" />
    <h3 className="display-font text-2xl">Who I Am</h3>
    <p>
I’m a passionate Full Stack Developer focused on building scalable and meaningful digital products. 
I specialize in the MERN stack and have experience developing real-world applications such as geofencing systems, analytics dashboards, and responsive platforms. 

I enjoy combining clean code with modern UI/UX to create efficient and user-friendly solutions. 
I’m constantly exploring new technologies and improving my development workflow to deliver high-quality results.
     </p>
    <div className="mt-4">
      {SKILLS.map((s) => (
        <span key={s} className="skill-chip">{s}</span>
      ))}
    </div>
  </div>
);

/* ---------------- STYLES ---------------- */
const GLOBAL_STYLES = `
:root {
  --cream:#FAF7F2;
  --gold:#C9A84C;
  --charcoal:#1A1814;
}

.about-root {
  background:var(--cream);
  padding:140px 0;
  position:relative;
}

.luxury-card {
  padding:30px;
  border:1px solid rgba(201,168,76,0.3);
}

.skill-chip {
  border:1px solid var(--gold);
  padding:5px 10px;
  margin-right:5px;
}

.gold-line {
  height:1px;
  background:var(--gold);
}

.cursor-dot {
  position:fixed;
  width:6px;height:6px;
  background:var(--gold);
  border-radius:50%;
}

.cursor-ring {
  position:fixed;
  width:30px;height:30px;
  border:1px solid var(--gold);
  border-radius:50%;
}
`;