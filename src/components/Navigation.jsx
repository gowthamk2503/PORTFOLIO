import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        background: 'rgba(250,247,242,0.92)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201,168,76,0.15)'
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 64px',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* LOGO */}
        <div
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            fontSize: '20px',
            color: '#C9A84C'
          }}
        >
          GK
        </div>

        {/* LINKS */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {links.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');

            return (
              <motion.a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#6B6560',
                  position: 'relative',
                  textDecoration: 'none'
                }}
                whileHover={{ y: -1 }}
              >
                {link.label}

                {/* GOLD UNDERLINE */}
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: -4,
                    height: '1px',
                    width: isActive ? '100%' : '0%',
                    background: '#C9A84C',
                    transition: '0.3s ease'
                  }}
                  className="nav-underline"
                />

                {/* HOVER EFFECT */}
                <style>
                  {`
                    a:hover .nav-underline {
                      width: 100%;
                    }
                  `}
                </style>
              </motion.a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}