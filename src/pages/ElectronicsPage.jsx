import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '../utils/animations';
import {
  Home, ChevronRight, BookOpen, Users,
  Cpu, FileText, ArrowRight, Zap,
  GraduationCap, Award, Radio, CircuitBoard
} from 'lucide-react';
import { getDepartment } from '../data/departmentData';

const ICONS = {
  Home, BookOpen, Users, Cpu, FileText, ArrowRight, Zap, GraduationCap, Award, Radio, CircuitBoard
};

/* ══════════════════════════════════════════════
   CUSTOM ELECTRONICS STYLES (Glassmorphism)
   ══════════════════════════════════════════════ */
const electronicsStyles = `
  .electronics-bg {
    background: radial-gradient(circle at top left, #f0f9ff 0%, #e0f2fe 50%, #e0e7ff 100%);
  }

  .glass-card-electronics {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 8px 32px 0 rgba(37, 99, 235, 0.05);
  }

  .blob-shape-1 {
    position: absolute;
    width: 600px;
    height: 600px;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(14, 165, 233, 0.1));
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation: morph1 15s ease-in-out infinite alternate;
    z-index: 0;
  }

  .blob-shape-2 {
    position: absolute;
    width: 450px;
    height: 450px;
    background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(56, 189, 248, 0.1));
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

  .circuit-pattern {
    position: absolute;
    inset: 0;
    opacity: 0.15;
    background-image: radial-gradient(rgba(37,99,235,0.3) 2px, transparent 2px), radial-gradient(rgba(14,165,233,0.3) 2px, transparent 2px);
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
    pointer-events: none;
    z-index: 1;
  }

  .sidebar-scroll {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(37, 99, 235, 0.2) transparent;
  }
  .sidebar-scroll::-webkit-scrollbar {
    width: 4px;
  }
  .sidebar-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .sidebar-scroll::-webkit-scrollbar-thumb {
    background: rgba(37, 99, 235, 0.2);
    border-radius: 4px;
  }
  .sidebar-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(37, 99, 235, 0.4);
  }
`;

/* ══════════════════════════════════════════════
   CUSTOM SIDEBAR
   ══════════════════════════════════════════════ */
function ElectronicsSidebar({ data, activeSection }) {
  return (
    <aside className="hidden xl:block sticky top-[100px] self-start w-[300px] shrink-0 z-20 h-[calc(100vh-120px)]">
      <div className="h-full flex flex-col p-5 rounded-3xl glass-card-electronics relative overflow-hidden">
        
        {/* Decorative icon faded in bg */}
        <CircuitBoard size={100} className="absolute -bottom-4 -right-4 text-[#2563eb]/8 -rotate-12 pointer-events-none" />

        <div className="relative mb-5 pb-3 border-b border-[#2563eb]/20 z-10">
          <h3 className="text-[#0369a1] text-[13px] font-black uppercase tracking-[0.15em] whitespace-pre-line leading-snug">
            {data.sidebar.heading || 'ELECTRONICS &\nTELECOMMUNICATION'}
          </h3>
        </div>

        <nav className="flex-1 min-h-0 flex flex-col gap-0.5 z-10 sidebar-scroll pr-1 pb-2">
          {data.sidebar.items.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = ICONS[item.icon] || Cpu;
            const targetUrl = `/electronics-and-telecommunication-engineering/${item.id}`;

            return (
              <Link
                key={item.id}
                to={targetUrl}
                className={`group relative w-full flex items-center gap-3 px-3.5 py-2.5 text-left text-[12px] font-semibold transition-all duration-300 rounded-xl overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-r from-[#2563eb] to-[#4f46e5] text-white shadow-md shadow-[#2563eb]/25'
                    : 'text-[#455A64] hover:text-[#0369a1] hover:bg-[#2563eb]/8'
                }`}
              >
                <Icon size={15} className={`shrink-0 transition-all duration-300 relative z-10 ${isActive ? 'text-white' : 'text-[#93c5fd] group-hover:text-[#0369a1]'}`} />
                <span className="leading-snug relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════
   MAIN ELECTRONICS COMPONENT
   ══════════════════════════════════════════════ */
export default function ElectronicsPage({ isHome }) {
  const params = useParams();
  const subpage = isHome ? 'home' : (params.subpage || 'overview');
  const data = getDepartment('electronics-and-telecommunication-engineering');
  const [activeProgramTab, setActiveProgramTab] = useState(0);
  const [expandedLab, setExpandedLab] = useState(null);
  const [activeVisionTab, setActiveVisionTab] = useState('vision');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subpage]);

  if (!data) return <Navigate to="/" />;

  const sectionLabel = isHome ? (data.hero?.breadcrumb || 'Home') : (data.sidebar.items.find(i => i.id === subpage)?.label || subpage.replace('-', ' '));

  const renderContent = () => {
    switch (subpage) {
      case 'home':
        return (
          <div className="space-y-16">
            <section className="glass-card-electronics p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#2563eb]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <FadeInUp>
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                    <CircuitBoard size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-[32px] md:text-[40px] font-black text-[#0c4a6e] leading-tight">
                      About the Department
                    </h2>
                  </div>
                </div>
              </FadeInUp>

              <div className="relative z-10">
                {data.homeContent?.paragraphs?.map((p, idx) => (
                  <FadeInUp delay={100 + idx * 100} key={idx}>
                    {idx === 0 ? (
                      <p className="text-[#263238] text-[18px] md:text-[20px] leading-[1.8] font-medium mb-8">
                        {p}
                      </p>
                    ) : (
                      <div className="relative pl-6 md:pl-8 mb-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-[#2563eb] before:to-[#38bdf8] before:rounded-full">
                        <p className="text-[#37474F] text-[16px] md:text-[17px] leading-[1.9] font-medium whitespace-pre-line">
                          {p}
                        </p>
                      </div>
                    )}
                  </FadeInUp>
                ))}

                {data.homeContent?.salientFeatures && (
                <FadeInUp delay={300}>
                  <div className="mt-10 glass-card-electronics p-8 rounded-2xl bg-white/40">
                    <h3 className="text-[20px] font-black text-[#0c4a6e] mb-6 flex items-center gap-3">
                      <div className="w-8 h-1.5 bg-[#4f46e5] rounded-full"></div>
                      Salient Features
                    </h3>
                    <ul className="space-y-4">
                      {data.homeContent.salientFeatures.map((f, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#2563eb] to-[#4f46e5] mt-1.5 shrink-0"></div>
                          <p className="text-[#37474F] text-[15px] leading-[1.8] font-medium">{f}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInUp>
                )}
              </div>
            </section>
          </div>
        );

      case 'overview':
        return (
          <div className="space-y-16">
            <section className="glass-card-electronics p-8 md:p-12 rounded-3xl relative overflow-hidden">
              <FadeInUp>
                <div className="flex items-center gap-4 mb-10 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                    <BookOpen size={24} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-[32px] md:text-[40px] font-black text-[#0c4a6e] leading-tight">
                      Department Overview
                    </h2>
                  </div>
                </div>
              </FadeInUp>

              <div className="relative z-10 mb-12">
                {data.overview?.paragraphs?.map((p, idx) => (
                  <FadeInUp delay={100 + idx * 100} key={idx}>
                    {idx === 0 ? (
                      <p className="text-[#263238] text-[18px] md:text-[20px] leading-[1.8] font-medium mb-8">
                        {p}
                      </p>
                    ) : (
                      <div className="relative pl-6 md:pl-8 mb-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-gradient-to-b before:from-[#2563eb] before:to-[#38bdf8] before:rounded-full">
                        <p className="text-[#37474F] text-[16px] md:text-[17px] leading-[1.9] font-medium whitespace-pre-line">
                          {p}
                        </p>
                      </div>
                    )}
                  </FadeInUp>
                ))}
              </div>

              <FadeInUp delay={300}>
                <div className="glass-card-electronics rounded-3xl overflow-hidden bg-white/40 border border-[#2563eb]/20">
                  <div className="flex border-b border-[#2563eb]/20">
                    <button 
                      onClick={() => setActiveVisionTab('vision')}
                      className={`flex-1 py-4 text-[13px] font-black uppercase tracking-widest transition-colors ${activeVisionTab === 'vision' ? 'bg-[#2563eb] text-white shadow-inner' : 'text-[#0369a1] hover:bg-white/50'}`}
                    >
                      Vision
                    </button>
                    <button 
                      onClick={() => setActiveVisionTab('mission')}
                      className={`flex-1 py-4 text-[13px] font-black uppercase tracking-widest transition-colors border-l border-[#2563eb]/20 ${activeVisionTab === 'mission' ? 'bg-[#2563eb] text-white shadow-inner' : 'text-[#0369a1] hover:bg-white/50'}`}
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
                            <Radio size={32} className="text-[#4f46e5] shrink-0 mt-1" />
                            <p className="text-[#0c4a6e] text-[18px] md:text-[20px] leading-[1.8] font-bold">
                              {data.overview.vision}
                            </p>
                          </div>
                        ) : (
                          <ul className="space-y-4">
                            {data.overview.mission.map((m, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#2563eb] to-[#4f46e5] mt-2 shrink-0"></div>
                                <p className="text-[#37474F] text-[16px] leading-[1.8] font-medium">{m.text || m}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </FadeInUp>
            </section>
          </div>
        );

      case 'syllabus':
        return (
          <div className="space-y-12">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                  <FileText size={24} className="text-white" />
                </div>
                <h2 className="text-[32px] md:text-[40px] font-black text-[#0c4a6e] leading-tight">Syllabus</h2>
              </div>
            </FadeInUp>

            <FadeInUp delay={100}>
              <div className="glass-card-electronics p-8 md:p-12 rounded-3xl bg-white/70">
                <div className="border-b border-[#2563eb]/20 pb-3 mb-6">
                  <h3 className="text-[28px] font-serif text-[#0c4a6e] uppercase tracking-wide">Syllabus</h3>
                </div>
                
                <div className="flex flex-col">
                  {data.syllabus && data.syllabus.map((item, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 border-b border-gray-200 last:border-0 gap-4">
                      <div className="text-[15px] font-bold text-[#0c4a6e] uppercase tracking-widest">{item.title}</div>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-[#2563eb] text-white text-[11px] font-bold uppercase tracking-widest rounded-sm hover:bg-[#1d4ed8] transition-colors whitespace-nowrap shadow-sm">
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                  <Users size={24} className="text-white" />
                </div>
                <h2 className="text-[32px] md:text-[40px] font-black text-[#0c4a6e] leading-tight">Faculty</h2>
              </div>
            </FadeInUp>

            {data.faculty && data.faculty.length > 0 ? (
              <FadeInUp delay={100}>
                <div className="glass-card-electronics rounded-3xl overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="border-b border-[#2563eb]/20 bg-white/30">
                          <th className="py-5 px-6 text-[11px] font-bold text-[#0369a1] uppercase tracking-widest">Name</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#0369a1] uppercase tracking-widest">Designation</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#0369a1] uppercase tracking-widest">Qualification</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.faculty.map((member, idx) => (
                          <motion.tr 
                            key={idx} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="border-b border-white/40 last:border-0 hover:bg-white/50 transition-colors"
                          >
                            <td className="py-5 px-6 font-bold text-[#0c4a6e] text-[15px]">{member.name}</td>
                            <td className="py-5 px-6 font-medium">
                              <span className="inline-flex items-center px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest rounded-full bg-[#2563eb]/10 text-[#0369a1]">
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
                <div className="glass-card-electronics p-12 rounded-3xl text-center">
                  <Users size={64} className="text-[#2563eb]/30 mx-auto mb-6" />
                  <h3 className="text-[24px] font-black text-[#0c4a6e] mb-3">Faculty Roster</h3>
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
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563eb] to-[#4f46e5] flex items-center justify-center shadow-lg shadow-[#2563eb]/30">
                  <Cpu size={24} className="text-white" />
                </div>
                <h2 className="text-[32px] md:text-[40px] font-black text-[#0c4a6e] leading-tight">Laboratories</h2>
              </div>
            </FadeInUp>

            <div className="space-y-6">
              {data.laboratories && data.laboratories.length > 0 ? (
                data.laboratories.map((lab, idx) => {
                  const isExpanded = expandedLab === idx;
                  return (
                    <FadeInUp key={idx} delay={idx * 80}>
                      <div className="glass-card-electronics rounded-3xl overflow-hidden transition-all duration-300">
                        <button 
                          onClick={() => setExpandedLab(isExpanded ? null : idx)}
                          className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-white/40 transition-colors text-left group"
                        >
                          <div className="flex items-center gap-6">
                            <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-[#2563eb]/20 to-[#4f46e5]/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                              <Cpu size={24} className="text-[#0369a1]" />
                            </div>
                            <div>
                              <h3 className="text-[20px] md:text-[24px] font-black text-[#0c4a6e] leading-tight">
                                {lab.name}
                              </h3>
                            </div>
                          </div>
                          <div className={`shrink-0 w-12 h-12 rounded-full border-2 border-[#2563eb]/20 flex items-center justify-center transition-all duration-300 bg-white/50 ${isExpanded ? 'bg-[#2563eb] border-[#2563eb] rotate-45' : 'group-hover:border-[#2563eb]/60'}`}>
                            <span className={`text-[24px] font-medium leading-none ${isExpanded ? 'text-white' : 'text-[#0369a1]'}`}>+</span>
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
                                  {lab.keyExperiments && lab.keyExperiments.length > 0 && (
                                    <div>
                                      <h4 className="text-[13px] font-black uppercase tracking-widest text-[#0369a1] mb-6 flex items-center gap-3">
                                        <div className="w-8 h-1.5 bg-[#4f46e5] rounded-full"></div>
                                        Key Experiments
                                      </h4>
                                      <ul className="space-y-4">
                                        {lab.keyExperiments.map((exp, i) => (
                                          <li key={i} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#2563eb] mt-2 shrink-0"></div>
                                            <p className="text-[#455A64] text-[15px] leading-[1.8] font-medium whitespace-pre-line">{exp}</p>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {lab.equipments && lab.equipments.length > 0 && (
                                    <div>
                                      <h4 className="text-[13px] font-black uppercase tracking-widest text-[#0369a1] mb-6 flex items-center gap-3">
                                        <div className="w-8 h-1.5 bg-[#4f46e5] rounded-full"></div>
                                        Core Equipment
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {lab.equipments.map((item, i) => (
                                          <span key={i} className="px-4 py-2 bg-white/60 border border-white/80 text-[#0284c7] text-[13px] font-bold rounded-xl shadow-sm">
                                            {item}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                {lab.images && lab.images.length > 0 && (
                                  <div className="mt-10">
                                    <h4 className="text-[13px] font-black uppercase tracking-widest text-[#0369a1] mb-6 flex items-center gap-3">
                                      <div className="w-8 h-1.5 bg-[#4f46e5] rounded-full"></div>
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
                  <div className="glass-card-electronics p-12 rounded-3xl text-center">
                    <Cpu size={64} className="text-[#2563eb]/30 mx-auto mb-6" />
                    <h3 className="text-[24px] font-black text-[#0c4a6e] mb-3">Research Facilities</h3>
                    <p className="text-[#546E7A] text-[16px] font-medium">Laboratory details are currently being updated.</p>
                  </div>
                </FadeInUp>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-16">
            <section className="glass-card-electronics p-8 md:p-12 rounded-3xl relative overflow-hidden">
               <h2 className="text-[32px] md:text-[40px] font-black text-[#0c4a6e] leading-tight">Content Coming Soon</h2>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen electronics-bg relative overflow-hidden font-sans">
      <style>{electronicsStyles}</style>
      
      {/* Background Elements */}
      <div className="blob-shape-1 top-[-10%] left-[-10%]"></div>
      <div className="blob-shape-2 bottom-[-10%] right-[-5%]"></div>
      <div className="circuit-pattern"></div>

      {/* ───────── HERO SECTION ───────── */}
      <section className="relative pt-40 pb-24 z-10">
        <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] font-bold text-[#0369a1]/70 mb-8 flex-wrap uppercase tracking-widest">
            <a href="https://trident.ac.in" className="flex items-center hover:text-[#0c4a6e] transition-colors" title="Trident Home">
              <Home size={14} />
            </a>
            <ChevronRight size={12} className="text-[#0369a1]/40" />
            <Link to="/" className="hover:text-[#0c4a6e] transition-colors">Academics</Link>
            <ChevronRight size={12} className="text-[#0369a1]/40" />
            
            {!isHome ? (
              <>
                <Link to="/electronics-and-telecommunication-engineering" className="hover:text-[#0c4a6e] transition-colors">Electronics & Telecommunication</Link>
                <ChevronRight size={12} className="text-[#0369a1]/40" />
                <span className="text-[#0c4a6e] font-black">{sectionLabel}</span>
              </>
            ) : (
              <span className="text-[#0c4a6e] font-black">{sectionLabel}</span>
            )}
          </nav>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-[55%]">
              <FadeInUp>
                <h1 className="text-[52px] md:text-[72px] lg:text-[84px] font-black text-[#0c4a6e] leading-[1.05] tracking-tight mb-8">
                  Electronics &<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#4f46e5]">
                    Telecommunication
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={100}>
                <p className="text-[#37474F] text-[18px] md:text-[22px] leading-[1.8] font-medium max-w-2xl mb-12">
                  Driving the future of communication, embedded systems, and VLSI design with industry-aligned education and cutting-edge research.
                </p>
              </FadeInUp>

              <FadeInUp delay={200}>
                <div className="flex flex-wrap gap-4 md:gap-6">
                    <div className="glass-card-electronics px-6 py-5 rounded-2xl flex-1 min-w-[140px] text-center border-white/60">
                      <div className="text-[32px] md:text-[40px] font-black text-[#0284c7] leading-none mb-2">120</div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2563eb]">B.Tech Intake</div>
                    </div>
                    <div className="glass-card-electronics px-6 py-5 rounded-2xl flex-1 min-w-[140px] text-center border-white/60">
                      <div className="text-[32px] md:text-[40px] font-black text-[#0284c7] leading-none mb-2">₹99.5L</div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#2563eb]">Research Grants</div>
                    </div>
                </div>
              </FadeInUp>
            </div>

            {/* Right Images */}
            <div className="w-full lg:w-[45%] relative hidden md:block">
              <FadeInUp delay={300}>
                <div className="relative w-full aspect-square">
                  {/* Decorative dashed circle */}
                  <div className="absolute inset-4 border-2 border-dashed border-[#2563eb]/30 rounded-full animate-[spin_60s_linear_infinite]"></div>
                  
                  {/* Main Image */}
                  <div className="absolute inset-8 rounded-full overflow-hidden border-8 border-white/60 shadow-2xl z-10 bg-[#e0f2fe]">
                    <img 
                      src={data.heroImage} 
                      alt="Electronics Lab" 
                      className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-1000 relative z-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 to-transparent z-20 pointer-events-none"></div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-[10%] left-[5%] glass-card-electronics p-4 rounded-full z-20 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                    <Cpu size={28} className="text-[#2563eb]" />
                  </div>
                  <div className="absolute bottom-[15%] right-[5%] glass-card-electronics p-4 rounded-full z-20 shadow-lg animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                    <Zap size={28} className="text-[#4f46e5]" />
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
            <ElectronicsSidebar data={data} activeSection={subpage} />
          </div>
        </div>
      </div>
    </div>
  );
}
