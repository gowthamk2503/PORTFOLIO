import { useRef, useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Mail, Phone, Download, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// --- Constants ---
const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
`;

const SKILLS = [
  'React', 'Node.js', 'MongoDB',
  'Express', 'TypeScript', 'REST APIs'
];

const LINKS = [
  { icon: Phone,    label: 'Phone',    href: 'tel:7373692501',                                display: '7373 692 501' },
  { icon: Mail,     label: 'Email',    href: 'mailto:gowtham.k2023it@sece.ac.in',             display: 'Email' },
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/GowthamkIT',                 display: 'GitHub' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/gowtham-k-0577a131a', display: 'LinkedIn' },
];
export const HERO_CONTENT = {
  name: "Gowtham K",
  role: "Full Stack Developer",
  tagline: "Building scalable systems. Designing impactful experiences.",
  description:
    "Full Stack Developer specializing in MERN stack with experience in building scalable, user-centric web applications and real-world solutions.",
};

// --- GSnap Canvas Background ---
function GSnapBackground() {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });
  const ptsRef    = useRef([]);
  const rafRef    = useRef(null);

  const N             = 72;
  const CONNECT_DIST  = 130;
  const SNAP_DIST     = 60;
  const waveT         = useRef(0);

  const initParticles = useCallback((w, h) => {
    ptsRef.current = Array.from({ length: N }, () => {
      const depth = Math.random();
      return {
        x:     Math.random() * w,
        y:     Math.random() * h,
        vx:    (Math.random() - 0.5) * (0.15 + depth * 0.25),
        vy:    (Math.random() - 0.5) * (0.15 + depth * 0.25),
        r:     0.8 + depth * 2.2,
        alpha: 0.12 + depth * 0.55,
        depth,
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    initParticles(canvas.width, canvas.height);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 }; };
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    const draw = () => {
      const w = canvas.width, h = canvas.height;
      if (!w || !h) { rafRef.current = requestAnimationFrame(draw); return; }

      ctx.clearRect(0, 0, w, h);

      // Background fill
      ctx.fillStyle = '#FAF7F2';
      ctx.fillRect(0, 0, w, h);

      // Radial glow
      const rg = ctx.createRadialGradient(w * 0.62, h * 0.38, 0, w * 0.62, h * 0.38, w * 0.5);
      rg.addColorStop(0, 'rgba(201,168,76,0.07)');
      rg.addColorStop(1, 'rgba(250,247,242,0)');
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, w, h);

      // Sine wave streams
      waveT.current += 0.007;
      [[h * 0.48, 2.2, 28, 0.055], [h * 0.36, 4.1, 16, 0.035], [h * 0.62, 6.8, 10, 0.025]].forEach(
        ([yBase, freq, amp, al], idx) => {
          ctx.beginPath();
          for (let x = 0; x <= w; x += 2) {
            const y = yBase + Math.sin((x / w) * Math.PI * freq + waveT.current * (1 + idx * 0.3)) * amp;
            x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.strokeStyle = `rgba(201,168,76,${al})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      );

      const pts = ptsRef.current;
      const { x: mx, y: my } = mouseRef.current;

      // Update positions
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 90) { p.vx += (dx / d) * 0.04; p.vy += (dy / d) * 0.04; }
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 0.6) { p.vx = (p.vx / spd) * 0.6; p.vy = (p.vy / spd) * 0.6; }
      });

      // Connections (GSnap lines)
      const snapped = [];
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const isSnap = dist < SNAP_DIST;
            const t = 1 - dist / CONNECT_DIST;
            const depth = (a.depth + b.depth) * 0.5;
            ctx.strokeStyle = `rgba(201,168,76,${isSnap ? t * 0.55 : t * 0.18})`;
            ctx.lineWidth   = isSnap ? 0.8 + depth : 0.4;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            if (isSnap) snapped.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t });
          }
        }
      }

      // Snap midpoint dots
      snapped.forEach(s => {
        ctx.beginPath();
        ctx.arc((s.ax + s.bx) * 0.5, (s.ay + s.by) * 0.5, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${s.t * 0.7})`;
        ctx.fill();
      });

      // Particles
      pts.forEach(p => {
        if (p.depth > 0.65) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(201,168,76,0.04)';
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
        ctx.fill();
      });

      // Orbiting rings on 6 anchor nodes
      const step = Math.floor(N / 6);
      for (let k = 0; k < 6; k++) {
        const p = pts[k * step];
        ctx.strokeStyle = 'rgba(201,168,76,0.1)';
        ctx.lineWidth   = 0.5;
        [18, 32].forEach(r => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, r + Math.sin(waveT.current * 1.2 + k) * 4, 0, Math.PI * 2);
          ctx.stroke();
        });
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 0,
      }}
    />
  );
}

// --- Floating Skill Chips ---
function FloatingChips() {
  const ALL_CHIPS = [
    'React', 'Node.js', 'MongoDB', 'Express', 'TypeScript',
    'REST APIs', 'Git', 'HTML5', 'CSS3', 'JSON', 'Mongoose', 'Axios',
  ];

  const [positions, setPositions] = useState(() =>
    ALL_CHIPS.map(() => ({
      x:     50 + Math.random() * 70,   // percent
      y:     10 + Math.random() * 80,
      vx:    (Math.random() - 0.5) * 0.012,
      vy:    (Math.random() - 0.5) * 0.012,
      phase: Math.random() * Math.PI * 2,
      alpha: 0.25 + Math.random() * 0.35,
    }))
  );

  useEffect(() => {
    let rafId;
    const tick = () => {
      setPositions(prev =>
        prev.map(p => {
          let { x, y, vx, vy, phase, alpha } = p;
          phase += 0.013;
          x += vx + Math.sin(phase * 0.6) * 0.008;
          y += vy + Math.cos(phase * 0.5) * 0.005;
          if (x < 2  || x > 88) vx *= -1;
          if (y < 3  || y > 92) vy *= -1;
          const a = 0.2 + Math.sin(phase * 0.7) * 0.18;
          return { x, y, vx, vy, phase, alpha: Math.max(0.08, a) };
        })
      );
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {ALL_CHIPS.map((chip, i) => (
        <span
          key={chip}
          style={{
            position:      'absolute',
            left:          `${positions[i].x}%`,
            top:           `${positions[i].y}%`,
            opacity:       positions[i].alpha,
            border:        '1px solid rgba(201,168,76,0.55)',
            color:         'rgba(139,105,20,0.85)',
            fontFamily:    "'DM Sans', sans-serif",
            fontSize:       10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            padding:       '4px 10px',
            borderRadius:   2,
            whiteSpace:    'nowrap',
            pointerEvents: 'none',
            zIndex:         1,
          }}
        >
          {chip}
        </span>
      ))}
    </>
  );
}

// --- Main Hero Component ---
export default function Hero() {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredLink, setHoveredLink] = useState(null);
  const { scrollYProgress } = useScroll();

  const smoothY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 200]), {
    stiffness: 60,
    damping:   20,
  });

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{FONTS}</style>
      <style>{`
        :root {
          --cream:        #FAF7F2;
          --warm-white:   #F5F0E8;
          --gold:         #C9A84C;
          --gold-light:   #E8D5A3;
          --gold-dark:    #8B6914;
          --charcoal:     #1A1814;
          --stone:        #6B6560;
          --stone-light:  #A09A94;
          --border:       rgba(201,168,76,0.2);
          --border-strong:rgba(201,168,76,0.45);
        }
        * { cursor: none !important; box-sizing: border-box; }
        .hero-root { background: var(--cream); font-family: 'DM Sans', sans-serif; }
        .display-font { font-family: 'Cormorant Garamond', serif; }
        .gold-line { background: linear-gradient(90deg, transparent, var(--gold), transparent); height: 1px; }

        .title-main   { font-size: clamp(56px, 10vw, 112px); font-weight: 300; line-height: 0.9; letter-spacing: -0.01em; }
        .subtitle-main{ font-size: clamp(22px, 3vw, 36px); color: var(--stone); font-weight: 400; font-style: italic; line-height: 1.3; margin-bottom: 16px; }
        .desc-text    { font-size: 14px; color: var(--stone); line-height: 1.8; max-width: 400px; }
        .overline-text{ font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--stone-light); }
        .side-text    { writing-mode: vertical-rl; text-orientation: mixed; font-family: 'DM Sans', sans-serif; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--stone-light); }
        .number-tag   { font-family: 'Cormorant Garamond', serif; font-size: 11px; font-style: italic; color: var(--gold); }
        .watermark    { font-size: clamp(180px,28vw,360px); font-weight: 700; color: transparent; -webkit-text-stroke: 1px rgba(201,168,76,0.08); line-height: 0.85; z-index: 0; position: absolute; right: -20px; bottom: -20px; user-select: none; pointer-events: none; }

        .skill-chip {
          background: transparent; border: 1px solid var(--border-strong); color: var(--gold-dark);
          font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
          text-transform: uppercase; padding: 6px 14px; transition: all 0.3s ease; border-radius: 2px;
        }
        .skill-chip:hover { background: var(--gold); color: white; border-color: var(--gold); }

        .contact-link {
          display: flex; align-items: center; gap: 8px; color: var(--stone); text-decoration: none;
          font-size: 13px; letter-spacing: 0.03em; transition: color 0.25s ease; padding: 8px 0;
          border-bottom: 1px solid transparent;
        }
        .contact-link:hover { color: var(--charcoal); border-bottom-color: var(--gold); }

        .resume-btn {
          display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px;
          background: var(--charcoal); color: var(--cream); font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
          text-decoration: none; transition: all 0.35s ease; position: relative; overflow: hidden; border-radius: 2px;
        }
        .resume-btn::before { content: ''; position: absolute; inset: 0; background: var(--gold); transform: scaleX(0); transform-origin: left; transition: transform 0.35s ease; }
        .resume-btn:hover::before { transform: scaleX(1); }
        .resume-btn span, .resume-btn svg { position: relative; z-index: 1; }

        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: float-gentle 3s ease-in-out infinite; }
        .scroll-indicator { width: 1px; height: 40px; background: linear-gradient(to bottom, var(--gold), transparent); }

        .cursor-dot  { position: fixed; width: 8px; height: 8px; background: var(--gold); border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%,-50%); transition: transform 0.1s ease; }
        .cursor-ring { position: fixed; width: 32px; height: 32px; border: 1px solid rgba(201,168,76,0.5); border-radius: 50%; pointer-events: none; z-index: 9998; transform: translate(-50%,-50%); transition: all 0.18s ease; }

        @keyframes float-gentle { 0%,100%{transform:translateY(0)rotate(0deg)}50%{transform:translateY(-12px)rotate(1deg)} }
        @keyframes shimmer { 0%{background-position:-200% center}100%{background-position:200% center} }
        .shimmer-text { background: linear-gradient(90deg,var(--gold-dark) 25%,var(--gold) 50%,var(--gold-dark) 75%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          *,*::before,*::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
        }
      `}</style>

      {/* Custom Cursor */}
      <div className="cursor-dot"  style={{ left: mousePosition.x, top: mousePosition.y }} />
      <div className="cursor-ring" style={{
        left: mousePosition.x, top: mousePosition.y,
        transform: hoveredLink ? 'translate(-50%,-50%) scale(1.5)' : 'translate(-50%,-50%)',
      }} />

      {/* Main Section */}
      <section id="home" ref={heroRef} className="hero-root relative min-h-screen overflow-hidden">

        {/* ── GSnap Canvas Background ── */}
        <GSnapBackground />

        {/* ── Floating Chip Layer ── */}
        <FloatingChips />

        {/* Decorative Corner SVGs */}
        <div className="pointer-events-none absolute inset-0 opacity-20" style={{ zIndex: 2 }}>
          {[
            ['top-8 left-8',   'M0 60 L0 0 L60 0'],
            ['top-8 right-8',  'M60 60 L60 0 L0 0'],
            ['bottom-8 left-8','M0 0 L0 60 L60 60'],
            ['bottom-8 right-8','M60 0 L60 60 L0 60'],
          ].map(([cls, d], i) => (
            <svg key={i} className={`absolute ${cls}`} width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d={d} stroke="#C9A84C" strokeWidth="1" />
              <path d={d.replace(/0 /g,'10 ').replace(/60/g,'50')} stroke="#C9A84C" strokeWidth="0.5" />
            </svg>
          ))}
        </div>

        {/* Vertical Side Labels */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4">
          <div className="gold-line w-[1px] h-16" />
          <span className="side-text">Portfolio 2025</span>
          <div className="gold-line w-[1px] h-16" />
        </div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4">
          <div className="gold-line w-[1px] h-16" />
          <span className="side-text">MERN Stack</span>
          <div className="gold-line w-[1px] h-16" />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 container mx-auto px-16 min-h-screen flex flex-col justify-center max-w-[1100px]">

          {/* Top Bar */}
          <motion.div
            className="flex justify-between items-center pt-12 pb-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
          >
            <div className="display-font text-sm italic tracking-wide text-[var(--stone-light)]">
              B.Tech Information Technology
            </div>
            <div className="flex items-center gap-2">
              <div className="status-dot" />
              <span className="overline-text">Available for work</span>
            </div>
          </motion.div>

          <motion.div className="gold-line w-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: 'easeOut' }} />

          {/* Center Block */}
          <div className="flex-1 flex flex-col justify-center py-16 gap-10">

            {/* Name */}
            <div>
              <motion.span className="number-tag mb-3 block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                — 001
              </motion.span>
              <motion.h1
                className="display-font shimmer-text title-main"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              >
                Gowtham K
              </motion.h1>
            </div>

            {/* Tagline & Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                <p className="display-font subtitle-main">Full Stack Developer</p>
                <p className="desc-text">
                  Crafting elegant digital experiences with the MERN stack.
                  Sri Eshwar College of Engineering — building interfaces that matter.
                </p>
              </motion.div>
              <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                {SKILLS.map((skill, i) => (
                  <motion.span key={skill} className="skill-chip" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.07 }}>
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div className="gold-line w-full" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 1, ease: 'easeOut' }} />

            {/* Actions */}
            <motion.div
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
            >
              <a href="/Gowtham_Resume_2025.pdf" download="Gowtham_K_Resume.pdf" className="resume-btn">
                <Download size={15} />
                <span>Download Résumé</span>
                <ArrowUpRight size={14} />
              </a>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-link"
                    onMouseEnter={() => setHoveredLink(link.label)}
                    onMouseLeave={() => setHoveredLink(null)}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 + i * 0.08 }}
                  >
                    <link.icon size={13} className="text-[var(--gold)]" />
                    <span>{link.display}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="flex justify-between items-center pb-12 pt-4 border-t border-[var(--border)]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          >
            <span className="overline-text">Sri Eshwar College of Engineering</span>
            <div className="flex flex-col items-center gap-2">
              <span className="overline-text tracking-[0.18em] text-[10px]">Scroll</span>
              <motion.div
                className="scroll-indicator"
                animate={{ scaleY: [0, 1, 0], originY: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="display-font italic text-[13px] text-[var(--stone-light)]">
              gowtham.k2023it@sece.ac.in
            </span>
          </motion.div>
        </div>

        {/* Watermark */}
        <motion.div className="display-font watermark" style={{ y: smoothY }}>
          GK
        </motion.div>

      </section>
    </>
  );
}