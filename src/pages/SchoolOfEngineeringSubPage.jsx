import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '../utils/animations';
import {
  Home, ChevronRight, BookOpen, Users,
  Beaker, FileText, ArrowRight, Cog,
  GraduationCap, Award, Layers, ExternalLink
} from 'lucide-react';
import { getDepartment } from '../data/departmentData';

const ICONS = {
  Home, BookOpen, Users, Beaker, FileText, ArrowRight, Cog, GraduationCap, Award, Layers
};

/* ══════════════════════════════════════════════
   PREMIUM SIDEBAR — Glassmorphism + Gradient
   ══════════════════════════════════════════════ */
function EngineeringSidebar({ data, slug, activeSection, theme }) {
  return (
    <aside className="hidden xl:block sticky top-[100px] self-start w-[280px] shrink-0 z-20 h-[calc(100vh-120px)]">
      <div className="h-full flex flex-col">
        {/* Department Title */}
        <div className="relative mb-6 pb-5 border-b border-[#C0392B]/20">
          <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C0392B] via-[#E74C3C] to-transparent rounded-full"></div>
          <h3 className="text-[#C0392B] text-[15px] font-black uppercase tracking-[0.2em] whitespace-pre-line leading-snug pl-2">
            {data.sidebar.heading || 'DEPARTMENT'}
          </h3>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col gap-1.5">
          {data.sidebar.items.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = ICONS[item.icon] || Cog;
            const targetUrl = `/${slug}/${item.id}`;

            return (
              <Link
                key={item.id}
                to={targetUrl}
                className={`group relative w-full flex items-center gap-3 px-4 py-3 text-left text-[13px] font-bold transition-all duration-300 rounded-xl overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-white shadow-lg shadow-[#C0392B]/25'
                    : 'text-[#5D6D7E] hover:text-[#C0392B] hover:bg-[#C0392B]/5'
                }`}
              >
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"></div>
                )}
                <Icon size={16} className={`shrink-0 transition-colors relative z-10 ${isActive ? 'text-white' : 'text-[#95A5A6] group-hover:text-[#C0392B]'}`} />
                <span className="leading-tight relative z-10 uppercase tracking-wider">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Decorative Footer */}
        <div className="mt-auto pt-6 border-t border-[#C0392B]/10">
          <div className="flex items-center gap-2 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest">
            <div className="w-2 h-2 rounded-full bg-[#27AE60] animate-pulse"></div>
            School of Engineering
          </div>
        </div>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════
   MAIN OVERVIEW / HOME COMPONENT
   ══════════════════════════════════════════════ */
export default function SchoolOfEngineeringSubPage({ isHome, slug: propSlug }) {
  const params = useParams();
  const slug = propSlug || params.slug;
  const data = getDepartment(slug);
  const [activeTab, setActiveTab] = useState(0);
  const [activeInfoTab, setActiveInfoTab] = useState('vision');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <Navigate to="/" />;

  const theme = data.theme;
  const activeSection = 'overview';

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">

      {/* ───────── HERO: CINEMATIC SPLIT LAYOUT ───────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        {/* Full Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={data.hero.image}
            alt={data.hero.breadcrumb}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/80 to-[#1a1a2e]/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 via-transparent to-transparent"></div>
        </div>

        {/* Subtle animated grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 xl:px-12 pb-16 pt-40">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] font-medium text-white/50 mb-8 flex-wrap uppercase tracking-widest">
            <a href="https://trident.ac.in" className="flex items-center hover:text-white/80 transition-colors" title="Trident Home">
              <Home size={13} />
            </a>
            <ChevronRight size={10} className="text-white/30" />
            <Link to="/" className="hover:text-white/80 transition-colors">Academics</Link>
            <ChevronRight size={10} className="text-white/30" />
            <span className="text-[#E74C3C] font-bold">{data.hero.breadcrumb}</span>
          </nav>

          {/* Hero Content */}
          <FadeInUp>
            <span className="inline-block px-4 py-1.5 bg-[#C0392B] text-white font-bold text-[11px] tracking-[0.25em] uppercase mb-6 rounded-full">
              School of Engineering
            </span>
            <h1 className="text-[52px] md:text-[72px] lg:text-[90px] font-black text-white leading-[0.9] tracking-tight mb-8">
              {data.hero.titleLine1}<br/>
              <span className="bg-gradient-to-r from-[#E74C3C] via-[#F39C12] to-[#E67E22] bg-clip-text text-transparent">
                {data.hero.titleLine2}
              </span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={100}>
            <p className="text-white/60 text-[18px] md:text-[20px] max-w-2xl leading-relaxed font-medium mb-12">
              {data.hero.subtitle}
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
            <div className="flex flex-wrap gap-10">
              {data.hero.stats.map((s, i) => (
                <div key={s.label} className="relative">
                  <div className="text-[42px] font-black text-white leading-none">{s.value}</div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#E74C3C] mt-2">{s.label}</div>
                  {i < data.hero.stats.length - 1 && (
                    <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-px h-10 bg-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ───────── ACCENT STRIP ───────── */}
      <div className="h-1 bg-gradient-to-r from-[#C0392B] via-[#E74C3C] to-[#F39C12]"></div>

      {/* ───────── MAIN CONTENT WITH SIDEBAR ───────── */}
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-16 md:py-24">
        <div className="flex gap-12 items-start">

          {/* Sidebar */}
          <EngineeringSidebar data={data} slug={slug} activeSection={activeSection} theme={theme} />

          {/* Content */}
          <div className="flex-1 min-w-0">

            {/* ── ABOUT THE DEPARTMENT ── */}
            {isHome && data.overview && (
              <section className="mb-20">
                <FadeInUp>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C0392B] to-[#E74C3C] flex items-center justify-center shadow-lg shadow-[#C0392B]/20">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-[32px] md:text-[40px] font-black text-[#1a1a2e] leading-tight">
                        About the Department
                      </h2>
                      <div className="h-1 w-16 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] rounded-full mt-2"></div>
                    </div>
                  </div>
                </FadeInUp>

                {data.overview.paragraphs.map((p, idx) => (
                  <FadeInUp delay={100 + idx * 100} key={idx}>
                    {idx === 0 ? (
                      <p className="text-[#34495E] text-[18px] leading-[1.9] font-medium mb-8">
                        {p}
                      </p>
                    ) : (
                      <div className="relative pl-8 mb-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-[#C0392B] before:to-[#F39C12] before:rounded-full">
                        <p className="text-[#34495E] text-[17px] leading-[1.9] font-medium whitespace-pre-line">
                          {p}
                        </p>
                      </div>
                    )}
                  </FadeInUp>
                ))}
              </section>
            )}

            {/* ── INFO TABS (VISION, MISSION, PO, PEO, PSO, LO) ── */}
            {isHome && (data.overview.vision || data.overview.mission) && (
              <section className="mb-20">
                <FadeInUp>
                  <div className="flex flex-wrap border-b border-[#F0F0F0] mb-8 bg-[#FAFAFA]">
                    {['vision', 'mission', 'po', 'peo', 'pso', 'lo'].map((tabKey) => {
                      if (!data.overview[tabKey]) return null;
                      return (
                        <button
                          key={tabKey}
                          onClick={() => setActiveInfoTab(tabKey)}
                          className={`px-6 py-3 md:px-8 md:py-4 text-[13px] md:text-[14px] font-black uppercase tracking-widest transition-all duration-300 border-b-2 -mb-[1px] ${
                            activeInfoTab === tabKey
                              ? 'border-[#C0392B] text-[#C0392B] bg-white rounded-t-xl shadow-[0_-4px_10px_rgba(0,0,0,0.02)]'
                              : 'border-transparent text-[#95A5A6] hover:text-[#C0392B] hover:bg-black/[0.02]'
                          }`}
                        >
                          {tabKey}
                        </button>
                      );
                    })}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeInfoTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white p-8 md:p-12 rounded-b-2xl rounded-tr-2xl shadow-sm border border-[#F0F0F0]"
                    >
                      {activeInfoTab === 'vision' && (
                        <p className="text-[#34495E] text-[17px] md:text-[19px] leading-[1.9] font-medium border-l-4 border-[#C0392B] pl-6">
                          {data.overview.vision}
                        </p>
                      )}
                      {(['mission', 'po', 'peo', 'pso', 'lo'].includes(activeInfoTab)) && (
                        <ul className="space-y-5">
                          {Array.isArray(data.overview[activeInfoTab]) && data.overview[activeInfoTab].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-[#34495E] text-[16px] md:text-[18px] leading-[1.8] font-medium">
                              <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#C0392B] to-[#E74C3C] mt-2.5 shrink-0 shadow-sm"></div>
                              <span dangerouslySetInnerHTML={{ __html: item }} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </FadeInUp>
              </section>
            )}

            {/* ── PROGRAM TABS ── */}
            {data.overview?.tabs && data.overview.tabs.length > 0 && (
              <section className="mb-20">
                <FadeInUp>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E67E22] to-[#F39C12] flex items-center justify-center shadow-lg shadow-[#E67E22]/20">
                      <GraduationCap size={24} className="text-white" />
                    </div>
                    <h2 className="text-[32px] md:text-[40px] font-black text-[#1a1a2e] leading-tight">
                      Programs Offered
                    </h2>
                  </div>
                </FadeInUp>

                <FadeInUp delay={100}>
                  {/* Tab Buttons */}
                  <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-[#F0F0F0] rounded-2xl">
                    {data.overview.tabs.map((tab, idx) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(idx)}
                        className={`relative px-6 py-3.5 text-[13px] font-bold tracking-widest uppercase transition-all duration-300 rounded-xl ${
                          activeTab === idx
                            ? 'bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-white shadow-lg shadow-[#C0392B]/20'
                            : 'text-[#7F8C8D] hover:text-[#C0392B] hover:bg-white/60'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="flex flex-col lg:flex-row gap-10">
                        {/* Left: Program Title */}
                        <div className="lg:w-[35%] relative">
                          <div className="lg:sticky lg:top-[120px]">
                            <div className="text-[64px] font-black text-[#C0392B]/10 leading-none uppercase tracking-tight mb-2">
                              {String(activeTab + 1).padStart(2, '0')}
                            </div>
                            <h3 className="text-[28px] md:text-[36px] font-black text-[#1a1a2e] leading-tight mb-4">
                              {data.overview.tabs[activeTab].label}
                            </h3>
                            <div className="h-1 w-12 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] rounded-full mb-6"></div>
                            <p className="text-[#95A5A6] text-[14px] font-medium leading-relaxed">
                              Comprehensive program details and curriculum information for {data.overview.tabs[activeTab].label}.
                            </p>
                          </div>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:w-[65%]">
                          <div className="text-[#34495E] text-[16px] md:text-[17px] leading-[2] font-medium whitespace-pre-line">
                            {data.overview.tabs[activeTab].content}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </FadeInUp>
              </section>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
