import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '../utils/animations';
import {
  Home, ChevronRight, BookOpen, Users,
  Beaker, FileText, ArrowRight, Cog,
  GraduationCap, Award, Layers,
  Dna, Activity, Microscope
} from 'lucide-react';
import { getDepartment } from '../data/departmentData';

const ICONS = {
  Home, BookOpen, Users, Beaker, FileText, ArrowRight, Cog, GraduationCap, Award, Layers,
  Dna, Activity, Microscope
};

/* ══════════════════════════════════════════════
   CUSTOM BIOTECH STYLES (Organic, Glassmorphism)
   ══════════════════════════════════════════════ */
const biotechStyles = `
  .biotech-bg {
    background: radial-gradient(circle at top left, #e0f2f1 0%, #f1f8e9 50%, #e8f5e9 100%);
  }

  .glass-card-biotech {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(0, 150, 136, 0.05);
  }

  .blob-shape-1 {
    position: absolute;
    width: 600px;
    height: 600px;
    background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(0, 150, 136, 0.1));
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: morph1 15s ease-in-out infinite alternate;
    z-index: 0;
  }

  .blob-shape-2 {
    position: absolute;
    width: 450px;
    height: 450px;
    background: linear-gradient(135deg, rgba(0, 188, 212, 0.1), rgba(38, 166, 154, 0.1));
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation: morph2 20s ease-in-out infinite alternate;
    z-index: 0;
  }

  @keyframes morph1 {
    0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0, 0) rotate(0deg); }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(50px, 50px) rotate(15deg); }
  }

  @keyframes morph2 {
    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0, 0) rotate(0deg); }
    100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(-40px, -60px) rotate(-15deg); }
  }

  .cell-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: radial-gradient(rgba(0,150,136,0.3) 2px, transparent 2px), radial-gradient(rgba(76,175,80,0.3) 2px, transparent 2px);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
    pointer-events: none;
    z-index: 1;
  }
`;

/* ══════════════════════════════════════════════
   CUSTOM SIDEBAR
   ══════════════════════════════════════════════ */
function BiotechSidebar({ data, activeSection }) {
  return (
    <aside className="hidden xl:block sticky top-[100px] self-start w-[280px] shrink-0 z-20 h-[calc(100vh-120px)]">
      <div className="h-full flex flex-col p-6 rounded-3xl glass-card-biotech relative overflow-hidden">
        
        {/* Subtle decorative DNA double helix icon faded in bg */}
        <Dna size={120} className="absolute -bottom-6 -right-6 text-[#009688]/10 -rotate-12 pointer-events-none" />

        <div className="relative mb-8 pb-4 border-b border-[#009688]/20 z-10">
          <h3 className="text-[#00796B] text-[16px] font-black uppercase tracking-[0.2em] whitespace-pre-line leading-snug">
            {data.sidebar.heading || 'BIOTECHNOLOGY\nENGINEERING'}
          </h3>
        </div>

        <nav className="flex-1 flex flex-col gap-2 z-10">
          {data.sidebar.items.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = ICONS[item.icon] || Microscope;
            const targetUrl = `/biotechnology-engineering/${item.id}`;

            return (
              <Link
                key={item.id}
                to={targetUrl}
                className={`group relative w-full flex items-center gap-4 px-5 py-3.5 text-left text-[14px] font-bold transition-all duration-300 rounded-2xl overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-[#009688] to-[#4CAF50] text-white shadow-lg shadow-[#009688]/30'
                    : 'text-[#455A64] hover:text-[#00796B] hover:bg-[#009688]/10'
                }`}
              >
                <Icon size={18} className={`shrink-0 transition-all duration-300 relative z-10 ${isActive ? 'text-white' : 'text-[#80CBC4] group-hover:text-[#00796B]'}`} />
                <span className="leading-tight relative z-10 uppercase tracking-widest">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════
   MAIN BIOTECHNOLOGY COMPONENT
   ══════════════════════════════════════════════ */
export default function BiotechnologyPage({ isHome }) {
  const params = useParams();
  const subpage = isHome ? 'home' : (params.subpage || 'overview');
  const data = getDepartment('biotechnology-engineering');
  const [activeProgramTab, setActiveProgramTab] = useState(0);
  const [expandedLab, setExpandedLab] = useState(null);
  const [activeVisionTab, setActiveVisionTab] = useState('vision');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subpage]);

  if (!data) return <Navigate to="/" />;

  const sectionLabel = isHome ? data.hero.breadcrumb : (data.sidebar.items.find(i => i.id === subpage)?.label || subpage.replace('-', ' '));

  const renderContent = () => {
    switch (subpage) {
      case 'home':
        return (
          <div className="space-y-16">
            <section className="glass-card-biotech p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#009688]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <FadeInUp>
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009688] to-[#4CAF50] flex items-center justify-center shadow-lg shadow-[#009688]/30">
                    <Microscope size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-[32px] md:text-[40px] font-black text-[#004D40] leading-tight">
                      About the Department
                    </h2>
                  </div>
                </div>
              </FadeInUp>

              <div className="relative z-10">
                {data.homeContent.paragraphs.map((p, idx) => (
                  <FadeInUp delay={100 + idx * 100} key={idx}>
                    {idx === 0 ? (
                      <p className="text-[#263238] text-[18px] md:text-[20px] leading-[1.8] font-medium mb-8">
                        {p}
                      </p>
                    ) : (
                      <div className="relative pl-6 md:pl-8 mb-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-[#009688] before:to-[#8BC34A] before:rounded-full">
                        <p className="text-[#37474F] text-[16px] md:text-[17px] leading-[1.9] font-medium whitespace-pre-line">
                          {p}
                        </p>
                      </div>
                    )}
                  </FadeInUp>
                ))}

                <FadeInUp delay={300}>
                  <div className="mt-10 glass-card-biotech p-8 rounded-2xl bg-white/40">
                    <h3 className="text-[20px] font-black text-[#004D40] mb-6 flex items-center gap-3">
                      <div className="w-8 h-1.5 bg-[#4CAF50] rounded-full"></div>
                      Salient Features
                    </h3>
                    <ul className="space-y-4">
                      {data.homeContent.salientFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#009688] to-[#4CAF50] mt-1.5 shrink-0"></div>
                          <p className="text-[#37474F] text-[15px] leading-[1.8] font-medium">{f}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
              </div>
            </section>
          </div>
        );

      case 'overview':
        return (
          <div className="space-y-16">
            <section className="glass-card-biotech p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <FadeInUp>
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009688] to-[#4CAF50] flex items-center justify-center shadow-lg shadow-[#009688]/30">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-[32px] md:text-[40px] font-black text-[#004D40] leading-tight">
                      Department Overview
                    </h2>
                  </div>
                </div>
              </FadeInUp>

              <div className="relative z-10 mb-12">
                {data.overview.paragraphs.map((p, idx) => (
                  <FadeInUp delay={100 + idx * 100} key={idx}>
                    {idx === 0 ? (
                      <p className="text-[#263238] text-[18px] md:text-[20px] leading-[1.8] font-medium mb-8">
                        {p}
                      </p>
                    ) : (
                      <div className="relative pl-6 md:pl-8 mb-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-[#009688] before:to-[#8BC34A] before:rounded-full">
                        <p className="text-[#37474F] text-[16px] md:text-[17px] leading-[1.9] font-medium whitespace-pre-line">
                          {p}
                        </p>
                      </div>
                    )}
                  </FadeInUp>
                ))}
              </div>

              <FadeInUp delay={300}>
                <div className="glass-card-biotech rounded-3xl overflow-hidden bg-white/40 border border-[#009688]/20">
                  <div className="flex border-b border-[#009688]/20">
                    <button 
                      onClick={() => setActiveVisionTab('vision')}
                      className={`flex-1 py-4 text-[13px] font-black uppercase tracking-widest transition-colors ${activeVisionTab === 'vision' ? 'bg-[#009688] text-white shadow-inner' : 'text-[#00796B] hover:bg-white/50'}`}
                    >
                      Vision
                    </button>
                    <button 
                      onClick={() => setActiveVisionTab('mission')}
                      className={`flex-1 py-4 text-[13px] font-black uppercase tracking-widest transition-colors border-l border-[#009688]/20 ${activeVisionTab === 'mission' ? 'bg-[#009688] text-white shadow-inner' : 'text-[#00796B] hover:bg-white/50'}`}
                    >
                      Mission
                    </button>
                  </div>
                  
                  <div className="p-8 md:p-10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeVisionTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {activeVisionTab === 'vision' ? (
                          <div className="flex items-start gap-6">
                            <Activity size={32} className="text-[#4CAF50] shrink-0 mt-1" />
                            <p className="text-[#004D40] text-[18px] md:text-[20px] leading-[1.8] font-bold">
                              {data.overview.vision}
                            </p>
                          </div>
                        ) : (
                          <ul className="space-y-4">
                            {data.overview.mission.map((m, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#009688] to-[#4CAF50] mt-2 shrink-0"></div>
                                <p className="text-[#37474F] text-[16px] leading-[1.8] font-medium">{m}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </FadeInUp>

              {/* Programs Tabs if any */}
              {data.overview?.tabs && data.overview.tabs.length > 0 && (
                <div className="mt-16">
                  <FadeInUp>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00BCD4] to-[#009688] flex items-center justify-center shadow-lg shadow-[#00BCD4]/30">
                        <GraduationCap size={24} className="text-white" />
                      </div>
                      <h2 className="text-[28px] md:text-[34px] font-black text-[#004D40] leading-tight">
                        Programs Offered
                      </h2>
                    </div>
                  </FadeInUp>

                  <FadeInUp delay={100}>
                    <div className="flex flex-wrap gap-2 mb-8 p-1.5 glass-card-biotech rounded-2xl w-fit bg-white/40 border border-[#009688]/20">
                      {data.overview.tabs.map((tab, idx) => (
                        <button
                          key={tab.id}
                          onClick={() => setActiveProgramTab(idx)}
                          className={`relative px-6 py-3.5 text-[13px] font-bold tracking-widest uppercase transition-all duration-300 rounded-xl ${
                            activeProgramTab === idx
                              ? 'bg-gradient-to-r from-[#009688] to-[#4CAF50] text-white shadow-lg shadow-[#009688]/30'
                              : 'text-[#00796B] hover:text-[#004D40] hover:bg-white/60'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeProgramTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="glass-card-biotech p-8 md:p-10 rounded-3xl bg-white/40 border border-[#009688]/20"
                      >
                        <h3 className="text-[24px] font-black text-[#004D40] mb-6">
                          {data.overview.tabs[activeProgramTab].label}
                        </h3>
                        <p className="text-[#37474F] text-[16px] md:text-[18px] leading-[2] font-medium whitespace-pre-line">
                          {data.overview.tabs[activeProgramTab].content}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </FadeInUp>
                </div>
              )}
            </section>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-12">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009688] to-[#4CAF50] flex items-center justify-center shadow-lg shadow-[#009688]/30">
                  <FileText size={24} className="text-white" />
                </div>
                <h2 className="text-[32px] md:text-[40px] font-black text-[#004D40] leading-tight">Syllabus</h2>
              </div>
            </FadeInUp>

            <FadeInUp delay={100}>
              <div className="glass-card-biotech p-8 md:p-12 rounded-3xl bg-white/70">
                <div className="border-b border-red-600 pb-3 mb-6">
                  <h3 className="text-[28px] font-serif text-[#1e4471] uppercase tracking-wide">Syllabus</h3>
                </div>
                
                <div className="flex flex-col">
                  {data.syllabus && data.syllabus.map((item, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 last:border-0 gap-4">
                      <div className="text-[15px] font-bold text-[#1e4471] uppercase tracking-widest">{item.title}</div>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-[#71b1ce] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#5a9bb8] transition-colors whitespace-nowrap shadow-sm">
                        {item.buttonText}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        );

      case 'faculty':
        return (
          <div className="space-y-12">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009688] to-[#4CAF50] flex items-center justify-center shadow-lg shadow-[#009688]/30">
                  <Users size={24} className="text-white" />
                </div>
                <h2 className="text-[32px] md:text-[40px] font-black text-[#004D40] leading-tight">Faculty</h2>
              </div>
            </FadeInUp>

            {data.faculties && data.faculties.length > 0 ? (
              <FadeInUp delay={100}>
                <div className="glass-card-biotech rounded-3xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="border-b border-[#009688]/20 bg-white/30">
                          <th className="py-5 px-6 text-[11px] font-bold text-[#00796B] uppercase tracking-widest">Name</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#00796B] uppercase tracking-widest">Designation</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#00796B] uppercase tracking-widest">Qualification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.faculties.map((member, idx) => (
                          <motion.tr 
                            key={idx} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="border-b border-white/40 last:border-0 hover:bg-white/50 transition-colors"
                          >
                            <td className="py-5 px-6 font-bold text-[#004D40] text-[15px]">{member.name}</td>
                            <td className="py-5 px-6 font-medium">
                              <span className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-full bg-[#009688]/10 text-[#00796B]">
                                {member.designation}
                              </span>
                            </td>
                            <td className="py-5 px-6 font-bold text-[#455A64] text-[14px]">{member.qualification}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeInUp>
            ) : (
              <FadeInUp delay={100}>
                <div className="glass-card-biotech p-12 rounded-3xl text-center">
                  <Users size={64} className="text-[#009688]/30 mx-auto mb-6" />
                  <h3 className="text-[24px] font-black text-[#004D40] mb-3">Faculty Roster</h3>
                  <p className="text-[#546E7A] text-[16px] font-medium">Faculty details are currently being updated.</p>
                </div>
              </FadeInUp>
            )}
          </div>
        );

      case 'laboratories':
        return (
          <div className="space-y-12">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#009688] to-[#4CAF50] flex items-center justify-center shadow-lg shadow-[#009688]/30">
                  <Beaker size={24} className="text-white" />
                </div>
                <h2 className="text-[32px] md:text-[40px] font-black text-[#004D40] leading-tight">Laboratories</h2>
              </div>
            </FadeInUp>

            <div className="space-y-6">
              {data.laboratories && data.laboratories.length > 0 ? (
                data.laboratories.map((lab, idx) => {
                  const isExpanded = expandedLab === idx;
                  return (
                    <FadeInUp key={idx} delay={idx * 80}>
                      <div className="glass-card-biotech rounded-3xl overflow-hidden transition-all duration-300">
                        <button 
                          onClick={() => setExpandedLab(isExpanded ? null : idx)}
                          className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white/40 transition-colors text-left group"
                        >
                          <div className="flex items-center gap-6">
                            <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#009688]/20 to-[#4CAF50]/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                              <Beaker size={24} className="text-[#00796B]" />
                            </div>
                            <div>
                              <h3 className="text-[20px] md:text-[24px] font-black text-[#004D40] leading-tight">
                                {lab.name}
                              </h3>
                            </div>
                          </div>
                          <div className={`shrink-0 w-12 h-12 rounded-full border-2 border-[#009688]/20 flex items-center justify-center transition-all duration-300 bg-white/50 ${isExpanded ? 'bg-[#009688] border-[#009688] rotate-45' : 'group-hover:border-[#009688]/60'}`}>
                            <span className={`text-[24px] font-medium leading-none ${isExpanded ? 'text-white' : 'text-[#00796B]'}`}>+</span>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-6 md:p-8 pt-0 border-t border-white/50 bg-white/20">
                                {lab.description && (
                                  <p className="text-[#37474F] text-[16px] leading-[1.9] font-medium mb-8">
                                    {lab.description}
                                  </p>
                                )}
                                
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                  {lab.experiments && lab.experiments.length > 0 && lab.experiments[0].list && (
                                    <div>
                                      <h4 className="text-[13px] font-black uppercase tracking-widest text-[#00796B] mb-6 flex items-center gap-3">
                                        <div className="w-8 h-1.5 bg-[#4CAF50] rounded-full"></div>
                                        Key Experiments
                                      </h4>
                                      <ul className="space-y-4">
                                        {lab.experiments[0].list.map((exp, i) => (
                                          <li key={i} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#009688] mt-2 shrink-0"></div>
                                            <p className="text-[#455A64] text-[15px] leading-[1.8] font-medium whitespace-pre-line">{exp}</p>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {lab.equipments && lab.equipments.length > 0 && (
                                    <div>
                                      <h4 className="text-[13px] font-black uppercase tracking-widest text-[#00796B] mb-6 flex items-center gap-3">
                                        <div className="w-8 h-1.5 bg-[#4CAF50] rounded-full"></div>
                                        Core Equipment
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {lab.equipments.map((item, i) => (
                                          <span key={i} className="px-4 py-2 bg-white/60 border border-white/80 text-[#00695C] text-[13px] font-bold rounded-xl shadow-sm">
                                            {item}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                {lab.images && lab.images.length > 0 && (
                                  <div className="mt-10">
                                    <h4 className="text-[13px] font-black uppercase tracking-widest text-[#00796B] mb-6 flex items-center gap-3">
                                      <div className="w-8 h-1.5 bg-[#4CAF50] rounded-full"></div>
                                      Gallery
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      {lab.images.map((img, i) => (
                                        <img key={i} src={img} alt={`${lab.name} facility ${i + 1}`} className="w-full h-auto rounded-2xl shadow-md border border-white/40" />
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </FadeInUp>
                  );
                })
              ) : (
                <FadeInUp delay={100}>
                  <div className="glass-card-biotech p-12 rounded-3xl text-center">
                    <Beaker size={64} className="text-[#009688]/30 mx-auto mb-6" />
                    <h3 className="text-[24px] font-black text-[#004D40] mb-3">Research Facilities</h3>
                    <p className="text-[#546E7A] text-[16px] font-medium">Laboratory details are currently being updated.</p>
                  </div>
                </FadeInUp>
              )}
            </div>
          </div>
        );

      default:
        return <Navigate to="/biotechnology-engineering" />;
    }
  };

  return (
    <div className="min-h-screen biotech-bg relative overflow-hidden font-sans">
      <style>{biotechStyles}</style>
      
      {/* Organic Background Elements */}
      <div className="blob-shape-1 top-[-10%] left-[-10%]"></div>
      <div className="blob-shape-2 bottom-[-10%] right-[-5%]"></div>
      <div className="cell-pattern"></div>

      {/* ───────── HERO SECTION ───────── */}
      <section className="relative pt-40 pb-24 z-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] font-bold text-[#00796B]/70 mb-8 flex-wrap uppercase tracking-widest">
            <a href="https://trident.ac.in" className="flex items-center hover:text-[#004D40] transition-colors" title="Trident Home">
              <Home size={14} />
            </a>
            <ChevronRight size={12} className="text-[#00796B]/40" />
            <Link to="/" className="hover:text-[#004D40] transition-colors">Academics</Link>
            <ChevronRight size={12} className="text-[#00796B]/40" />
            
            {!isHome ? (
              <>
                <Link to="/biotechnology-engineering" className="hover:text-[#004D40] transition-colors">{data.hero.breadcrumb}</Link>
                <ChevronRight size={12} className="text-[#00796B]/40" />
                <span className="text-[#004D40] font-black">{sectionLabel}</span>
              </>
            ) : (
              <span className="text-[#004D40] font-black">{sectionLabel}</span>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-[55%]">
              <FadeInUp>
                <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-black text-[#004D40] leading-[1.05] tracking-tight mb-8">
                  {data.hero.titleLine1} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009688] to-[#4CAF50]">
                    {data.hero.titleLine2}
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={100}>
                <p className="text-[#37474F] text-[18px] md:text-[22px] leading-[1.8] font-medium max-w-2xl mb-12">
                  Combining engineering principles with biological sciences to foster innovation in healthcare, agriculture, and sustainability.
                </p>
              </FadeInUp>

              <FadeInUp delay={200}>
                <div className="flex flex-wrap gap-4 md:gap-6">
                  {data.hero.stats.map((s, i) => (
                    <div key={s.label} className="glass-card-biotech px-6 py-5 rounded-2xl flex-1 min-w-[140px] text-center border-white/60">
                      <div className="text-[32px] md:text-[40px] font-black text-[#00695C] leading-none mb-2">{s.value}</div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#009688]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </FadeInUp>
            </div>

            {/* Right Images (Organic framing) */}
            <div className="w-full lg:w-[45%] relative hidden md:block">
              <FadeInUp delay={300}>
                <div className="relative w-full aspect-square">
                  {/* Decorative dashed circle */}
                  <div className="absolute inset-4 border-2 border-dashed border-[#009688]/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                  
                  {/* Main Image */}
                  <div className="absolute inset-8 rounded-full overflow-hidden border-8 border-white/60 shadow-2xl z-10 bg-[#e0f2f1]">
                    <img 
                      src={data.hero.image} 
                      alt="Biotechnology Lab" 
                      className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/40 to-transparent z-20 pointer-events-none"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-[10%] left-[5%] glass-card-biotech p-4 rounded-full z-20 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                    <Microscope size={28} className="text-[#009688]" />
                  </div>
                  <div className="absolute bottom-[15%] right-[5%] glass-card-biotech p-4 rounded-full z-20 shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <Activity size={28} className="text-[#4CAF50]" />
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── MAIN CONTENT ───────── */}
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          <div className="flex-1 min-w-0 w-full lg:w-[70%]">
            {renderContent()}
          </div>

          <div className="w-full lg:w-[30%] space-y-8 sticky top-[100px]">
            {/* The sidebar */}
            <BiotechSidebar data={data} activeSection={subpage} />

            {/* Images Stack for Overview/Home */}
            {(subpage === 'overview' || subpage === 'home') && data.overview.images && data.overview.images.length > 0 && (
              <FadeInUp delay={300}>
                <div className="space-y-4">
                  {data.overview.images.map((img, idx) => (
                    <div key={idx} className="rounded-3xl border-4 border-white/60 shadow-lg overflow-hidden glass-card-biotech">
                      <img src={img} alt={`Biotechnology Photo ${idx+1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </FadeInUp>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
