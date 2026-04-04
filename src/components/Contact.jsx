import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: '#FAF7F2',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated GOLD GRADIENT ORB */}
      <motion.div
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.12), transparent)',
          filter: 'blur(80px)',
          top: '-100px',
          left: '-100px',
          zIndex: 0,
          y
        }}
      />

      {/* SECOND ORB */}
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
          zIndex: 0,
          y: useTransform(scrollYProgress, [0, 1], [0, -150])
        }}
      />

      {/* NOISE TEXTURE */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")"
        }}
      />

      {/* WATERMARK */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-40px',
          right: '-40px',
          fontSize: '280px',
          fontFamily: 'Cormorant Garamond',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(201,168,76,0.08)',
          pointerEvents: 'none',
          y
        }}
      >
        CONTACT
      </motion.div>

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 64px',
          position: 'relative',
          zIndex: 10
        }}
      >
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
            — 005
          </span>

          <h2 style={{
            fontFamily: 'Cormorant Garamond',
            fontSize: '56px',
            fontWeight: 300,
            color: '#1A1814',
            marginTop: '10px'
          }}>
            Let's Talk
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

        {/* CONTENT */}
        <div style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px'
        }}>

          {/* LEFT */}
          <div>
            <p style={{
              color: '#6B6560',
              fontSize: '16px',
              lineHeight: 1.8
            }}>
              Have a project in mind or want to collaborate?
              Let’s build something meaningful together.
            </p>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(201,168,76,0.2)',
              backdropFilter: 'blur(12px)',
              padding: '32px'
            }}
          >
            <input placeholder="Name" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <textarea placeholder="Message" rows={4} style={inputStyle} />

            <button style={btnStyle}>
              Send Message
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px',
  marginBottom: '14px',
  border: '1px solid rgba(201,168,76,0.3)',
  background: 'transparent',
  outline: 'none'
};

const btnStyle = {
  marginTop: '10px',
  padding: '14px 28px',
  background: '#1A1814',
  color: '#FAF7F2',
  border: 'none',
  cursor: 'pointer'
};