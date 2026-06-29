import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, ChevronRight, ArrowRight, Zap, Wrench, Building2 } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

/* ── Cluster Data ── */
const CLUSTERS = [
  {
    title: "Electronics & Electrical",
    subtitle: "Powering the Connected World",
    description: "From semiconductor design to power systems, our electronics and electrical programs prepare students for the cutting edge of technology — VLSI circuits, telecom networks, and smart grid systems.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1920",
    color: "#6366F1",
    colorLight: "#818CF8",
    programs: [
      { name: "Electronics & Telecommunication Engineering", degrees: "B.Tech / M.Tech", href: "/electronics-and-telecommunication-engineering" },
      { name: "Electronics Engineering (VLSI Design)", degrees: "B.Tech / M.Tech", href: "/electronics-vlsi-design" },
      { name: "Electrical & Electronics Engineering", degrees: "B.Tech", href: "/electrical-and-electronics-engineering" },
      { name: "Electrical Engineering", degrees: "Diploma", href: "/diploma-electrical-engineering" },
    ]
  },
  {
    title: "Mechanical & Mobility",
    subtitle: "Engineering Motion & Manufacturing",
    description: "Our mechanical programs combine classical engineering with next-gen mobility. Students work hands-on with CNC, 3D printing, robotics, and electric vehicle technology in world-class workshops.",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1920",
    color: "#F97316",
    colorLight: "#FB923C",
    programs: [
      { name: "Mechanical Engineering", degrees: "B.Tech / Diploma", href: "/mechanical-engineering" },
      { name: "Electrical Vehicle Technology", degrees: "M.Tech", href: "/electrical-vehicle-technology-mtech" },
    ]
  },
  {
    title: "Civil & Infrastructure",
    subtitle: "Building the World We Live In",
    description: "From sustainable cities to earthquake-resistant structures, our civil programs focus on the infrastructure challenges of tomorrow. Specializations span environmental, structural, and industrial safety engineering.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920",
    color: "#10B981",
    colorLight: "#34D399",
    programs: [
      { name: "Civil Engineering", degrees: "B.Tech / Diploma", href: "/civil-engineering" },
      { name: "Structural Engineering", degrees: "M.Tech", href: "/structural-engineering-mtech" },
      { name: "Environmental Engineering", degrees: "M.Tech", href: "/environmental-engineering-mtech" },
      { name: "Energy & Environmental Engineering", degrees: "M.Tech", href: "/energy-and-environmental-engineering-mtech" },
      { name: "Industrial Safety Engineering", degrees: "M.Tech", href: "/industrial-safety-engineering-mtech" },
    ]
  }
];

/* ── Full-Bleed Cluster Section ── */
function ClusterSection({ cluster, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={cluster.image}
          alt={cluster.title}
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.2) saturate(0.6)' }}
        />
        {/* Color overlay */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(${isEven ? '135deg' : '225deg'}, ${cluster.color}CC 0%, ${cluster.color}40 40%, transparent 70%)`,
        }} />
        {/* Dark gradient for text readability */}
        <div className="absolute inset-0" style={{
          background: isEven
            ? 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)'
            : 'linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 flex items-center" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className={`flex flex-col lg:flex-row items-center gap-16 w-full ${isEven ? '' : 'lg:flex-row-reverse'}`}>
          
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <FadeInUp>
              <div className="inline-flex items-center gap-2" style={{
                padding: '8px 16px', borderRadius: '9999px',
                border: `1px solid ${cluster.colorLight}40`,
                backgroundColor: `${cluster.color}20`,
                marginBottom: '24px',
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: cluster.colorLight }} />
                <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: cluster.colorLight }}>
                  {cluster.programs.length} Programs
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={100}>
              <h2 className="font-serif" style={{
                fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900,
                color: 'white', lineHeight: 1.0, letterSpacing: '-0.03em',
                marginBottom: '12px',
              }}>
                {cluster.title}
              </h2>
            </FadeInUp>

            <FadeInUp delay={150}>
              <p style={{
                fontSize: '20px', fontWeight: 600, color: cluster.colorLight,
                marginBottom: '24px', letterSpacing: '-0.01em',
              }}>
                {cluster.subtitle}
              </p>
            </FadeInUp>

            <FadeInUp delay={200}>
              <p style={{
                fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8,
                fontWeight: 300, maxWidth: '500px', marginBottom: '40px',
              }}>
                {cluster.description}
              </p>
            </FadeInUp>
          </div>

          {/* Programs Side */}
          <div className="w-full lg:w-1/2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cluster.programs.map((prog, i) => (
                <FadeInUp key={i} delay={250 + i * 60}>
                  <Link
                    to={prog.href}
                    className="group"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '24px 28px', borderRadius: '16px',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      transition: 'all 0.35s ease',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${cluster.color}30`;
                      e.currentTarget.style.borderColor = `${cluster.colorLight}50`;
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div>
                      <div style={{
                        fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: cluster.colorLight,
                        marginBottom: '6px', opacity: 0.8,
                      }}>
                        {prog.degrees}
                      </div>
                      <div style={{ fontSize: '18px', fontWeight: 600, color: 'white', lineHeight: 1.3 }}>
                        {prog.name}
                      </div>
                    </div>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '50%',
                      backgroundColor: `${cluster.color}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: cluster.colorLight, flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}>
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </FadeInUp>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10" style={{
        background: 'linear-gradient(to top, #0B1120, transparent)',
      }} />
    </div>
  );
}


/* ── Main Page ── */
export default function SchoolOfEngineeringLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#0B1120' }}>
      
      {/* ═══════════════ HERO — FULL BLEED ═══════════════ */}
      <div className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: '100vh' }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
            alt="Engineering"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.15) saturate(0.5)' }}
          />
          {/* Colorful gradient overlay */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.15) 30%, transparent 60%, rgba(16,185,129,0.1) 100%)',
          }} />
        </div>

        {/* Colorful glowing orbs */}
        <div className="absolute" style={{ top: '15%', left: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div className="absolute" style={{ bottom: '20%', right: '10%', width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(249,115,22,0.12), transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div className="absolute" style={{ bottom: '10%', left: '40%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16,185,129,0.1), transparent 70%)', borderRadius: '50%', filter: 'blur(50px)' }} />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full" style={{ paddingTop: '160px', paddingBottom: '120px' }}>
          
          <nav className="flex items-center gap-2 flex-wrap" style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.4)', marginBottom: '60px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={12} /> Home
            </Link>
            <ChevronRight size={10} />
            <span style={{ color: 'rgba(165,180,252,1)', fontWeight: 700 }}>School of Engineering</span>
          </nav>

          <FadeInUp>
            <h1 className="font-serif" style={{
              fontSize: 'clamp(56px, 10vw, 140px)', fontWeight: 900,
              lineHeight: 0.9, letterSpacing: '-0.04em', color: 'white',
              marginBottom: '40px',
            }}>
              School of<br />
              <span style={{
                background: 'linear-gradient(to right, #A5B4FC, #C4B5FD, #F0ABFC)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Engineering</span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={150}>
            <p style={{
              fontSize: 'clamp(17px, 2vw, 24px)', maxWidth: '600px',
              lineHeight: 1.7, color: 'rgba(203,213,225,0.8)', fontWeight: 300,
              marginBottom: '48px',
            }}>
              Building the backbone of modern society through 11+ specializations spanning electronics, mechanical, and civil engineering.
            </p>
          </FadeInUp>

          <FadeInUp delay={250}>
            <div className="flex flex-wrap gap-8" style={{ paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { value: "11+", label: "Specializations" },
                { value: "20+", label: "Advanced Labs" },
                { value: "95%", label: "Placement Rate" },
                { value: "NBA", label: "Accredited" },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontSize: '40px', fontWeight: 200, color: 'white', lineHeight: 1, marginBottom: '6px', letterSpacing: '-0.02em' }}>{stat.value}</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(165,180,252,0.6)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '24px', height: '40px', borderRadius: '12px', border: '2px solid rgba(255,255,255,0.2)', display: 'flex', justifyContent: 'center', paddingTop: '8px' }}
          >
            <div style={{ width: '3px', height: '8px', borderRadius: '2px', backgroundColor: 'rgba(255,255,255,0.5)' }} />
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10" style={{ background: 'linear-gradient(to top, #0B1120, transparent)' }} />
      </div>

      {/* ═══════════════ FULL-BLEED CLUSTER SECTIONS ═══════════════ */}
      {CLUSTERS.map((cluster, idx) => (
        <ClusterSection key={idx} cluster={cluster} index={idx} />
      ))}

      {/* ═══════════════ CTA — FULL BLEED ═══════════════ */}
      <div className="relative overflow-hidden flex items-center justify-center" style={{ minHeight: '70vh' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #312E81 0%, #4338CA 50%, #6366F1 100%)' }} />
        <div className="absolute" style={{ top: '0', right: '0', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div className="absolute" style={{ bottom: '0', left: '0', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(236,72,153,0.15), transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }} />

        <div className="relative z-10 max-w-[800px] mx-auto px-6" style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '80px' }}>
          <FadeInUp>
            <h2 className="font-serif" style={{
              fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900,
              color: 'white', letterSpacing: '-0.02em', lineHeight: 1.1,
              marginBottom: '20px',
            }}>
              Ready to Build<br />the Future?
            </h2>
            <p style={{ color: 'rgba(165,180,252,0.7)', fontSize: '18px', maxWidth: '480px', margin: '0 auto 40px', lineHeight: 1.7, fontWeight: 300 }}>
              Join 2000+ students already enrolled across our engineering programs. Applications are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apply-now.tekkzy.com/" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '18px 40px', borderRadius: '9999px',
                backgroundColor: 'white', color: '#4338CA',
                fontWeight: 700, fontSize: '16px', textDecoration: 'none',
                transition: 'all 0.3s ease',
              }} className="hover:-translate-y-1 hover:shadow-xl">
                Apply Now <ArrowRight size={18} />
              </a>

            </div>
          </FadeInUp>
        </div>
      </div>

    </div>
  );
}
