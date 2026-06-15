import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '../utils/animations';
import {
  Home, ChevronRight, ChevronDown, ArrowRight, BookOpen, Award,
  FlaskConical, Cpu, Users, GraduationCap, Lightbulb, Monitor, BrainCircuit,
  Trophy, Rocket, Code2, Shield, Layers, FileText, Beaker, BarChart3,
  ExternalLink, Microscope, Plus, Minus
} from 'lucide-react';
import { getDepartment } from '../data/departmentData';

// Map icon strings to Lucide components
const ICONS = {
  Home, ChevronRight, ChevronDown, ArrowRight, BookOpen, Award,
  FlaskConical, Cpu, Users, GraduationCap, Lightbulb, Monitor, BrainCircuit,
  Trophy, Rocket, Code2, Shield, Layers, FileText, Beaker, BarChart3,
  ExternalLink, Microscope
};

/* ══════════════════════════════════════════════
   Sidebar Component
   ══════════════════════════════════════════════ */
function Sidebar({  data, slug, isHome , theme }) {
  return (
    <aside className="hidden xl:block sticky top-[100px] self-start w-[280px] shrink-0 z-20 h-[calc(100vh-120px)]">
      <div className="h-full flex flex-col pr-4">
        <div className={`py-3 mb-4 border-b-2 ${theme.borderPrimary10} shrink-0`}>
          <h3 className={`${theme.primary} text-[14px] font-black uppercase tracking-widest whitespace-pre-line`}>
            {data.sidebar.heading}
          </h3>
        </div>
        <nav className="py-1.5 flex-1 flex flex-col gap-1">
          {data.sidebar.items.map((item) => {
            const isActive = !isHome && item.id === 'overview';
            const Icon = ICONS[item.icon] || Code2;
            
            const commonClasses = `group w-full flex items-center gap-3 px-4 py-2.5 text-left text-[13px] font-bold transition-all duration-300 rounded-xl ${
              isActive
                ? `${theme.bgPrimary} text-white shadow-md ${theme.shadowPrimary20}`
                : `text-[#6B6560] ${theme.hoverTextPrimary} hover:bg-white hover:shadow-sm`
            }`;

            const isExternal = item.href && item.href.startsWith('http');
            if (isExternal) {
              return (
                <a key={item.id || item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={commonClasses}>
                  <Icon size={15} className={`shrink-0 transition-colors ${isActive ? 'text-white' : 'text-[#A59381] group-${theme.hoverTextPrimary}'}`} />
                  <span className="leading-tight">{item.label}</span>
                </a>
              );
            }

            const targetUrl = `/${slug}/${item.id}`;

            return (
              <Link
                key={item.id}
                to={targetUrl}
                className={commonClasses}
              >
                <Icon size={15} className={`shrink-0 transition-colors ${isActive ? 'text-white' : 'text-[#A59381] group-${theme.hoverTextPrimary}'}`} />
                <span className="leading-tight">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

/* ══════════════════════════════════════════════
   MAIN OVERVIEW/HOME COMPONENT
   ══════════════════════════════════════════════ */
export default function SchoolOfComputingSubPage({ isHome }) {
  const { slug } = useParams();
  const data = getDepartment(slug);
  const theme = data.theme || {
    primary: "text-[#1B4D8E]",
    bgPrimary: "bg-[#1B4D8E]",
    borderPrimary: "border-[#1B4D8E]",
    borderPrimary10: "border-[#1B4D8E]/10",
    bgPrimary10: "bg-[#1B4D8E]/10",
    hoverTextPrimary: "hover:text-[#1B4D8E]",
    hoverBgPrimary: "hover:bg-[#1B4D8E]",
    shadowPrimary20: "shadow-[#1B4D8E]/20",
    accent: "text-[#E5AA3E]",
    bgAccent: "bg-[#E5AA3E]",
    secondary: "text-[#7A5230]",
    gradient: "from-[#0d1b3e]/95 via-[#1a2660]/90 to-[#283B91]/80",
    btn: "bg-[#4884C6]",
    btnHover: "hover:bg-[#3A6AA0]",
  };


  const [activeTab, setActiveTab] = useState(0);
  const [openProgramme, setOpenProgramme] = useState(-1);
  const [openClub, setOpenClub] = useState(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      
      {/* ───────── HERO BANNER ───────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.hero.image} alt={data.hero.breadcrumb} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${theme.gradient}`} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12">
          <nav className="flex items-center gap-2 text-[12px] font-medium text-white/60 mb-10 flex-wrap uppercase">
            <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors">
              <Home size={13} /> Academics
            </Link>
            <ChevronRight size={12} />
            <span className="text-white/60">Departments</span>
            <ChevronRight size={12} />
            <Link to={`/${slug}`} className="hover:text-white transition-colors">{data.hero.breadcrumb}</Link>
            {!isHome && (
              <>
                <ChevronRight size={12} />
                <span className={`${theme.accent} font-bold`}>Department Overview</span>
              </>
            )}
          </nav>

          <FadeInUp>
            <h1 className="font-serif text-[42px] md:text-[64px] lg:text-[76px] font-black text-white leading-[1.05] tracking-tight mb-6">
              {isHome ? (
                <>
                  Department of <br/>
                  <span className={`${theme.accent}`}>{data.name}</span>
                </>
              ) : (
                <>
                  Department<br/>
                  <span className={`${theme.accent}`}>Overview</span>
                </>
              )}
            </h1>
          </FadeInUp>
          <FadeInUp delay={150}>
            <p className="text-white/80 text-[18px] md:text-[22px] max-w-3xl leading-relaxed font-medium">
              {data.hero.subtitle}
            </p>
          </FadeInUp>

          <FadeInUp delay={300}>
            <div className="flex flex-wrap gap-6 mt-12">
              {data.hero.stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 min-w-[140px]">
                  <div className="text-[28px] font-black text-white leading-none">{s.value}</div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-white/60 mt-1.5">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ───────── ACM / CTA BANNER ───────── */}
      {data.acmBanner && (
        <div className={`${theme.bgAccent} py-3`}>
          <div className="max-w-[1400px] mx-auto px-6 xl:px-12 flex items-center justify-center">
            <a href={data.acmBanner.href} className="flex items-center gap-3 text-[13px] font-extrabold text-[#1A1A1A] uppercase tracking-widest hover:text-white transition-colors">
              <Award size={18} />
              {data.acmBanner.text}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* ───────── MAIN CONTENT ───────── */}
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-16 md:py-24">
        <div className="flex gap-12">
          
          {/* Sidebar */}
          <Sidebar data={data} slug={slug} isHome={isHome} theme={theme} />

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            
            {/* Overview Paragraphs (Only on Home Page) */}
            {isHome && data.overview && (
              <section className="mb-12">
                <FadeInUp>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-12 h-12 rounded-xl ${theme.bgPrimary10} flex items-center justify-center`}>
                      <BookOpen size={22} className={`${theme.primary}`} />
                    </div>
                    <h2 className="font-serif text-[32px] md:text-[40px] font-black text-[#212529] leading-tight">
                      About the Department
                    </h2>
                  </div>
                </FadeInUp>

                <FadeInUp delay={100}>
                  <div className="prose prose-lg max-w-none">
                    {data.overview.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-[#3E3A36] text-[17px] leading-[1.9] mb-6 font-medium">
                        {p}
                      </p>
                    ))}
                  </div>
                </FadeInUp>
              </section>
            )}

            {/* ───────── TABS (Vision / Mission / PEO / PO / PSO / LO) (Only on Overview Page) ───────── */}
            {!isHome && data.overview?.tabs && (
              <FadeInUp delay={150}>
                <section className="mb-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      {/* Tab Buttons */}
                      <div className="flex flex-wrap gap-1 mb-6 bg-[#F0EBE3] rounded-xl p-1.5">
                        {data.overview.tabs.map((tab, idx) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(idx)}
                            className={`px-5 py-3 text-[13px] font-bold tracking-widest uppercase transition-all duration-300 rounded-lg ${
                              activeTab === idx
                                ? '${theme.bgPrimary} text-white shadow-md'
                                : '${theme.secondary} ${theme.hoverTextPrimary} hover:bg-white/60'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <div className="bg-white p-8 rounded-2xl border border-[#EFE7DF]/60 shadow-sm">
                        <h3 className={`text-[20px] font-bold ${theme.primary} mb-4 flex items-center gap-2`}>
                          <BookOpen size={18} />
                          {data.overview.tabs[activeTab].label}
                        </h3>
                        <div className="text-[#3E3A36] text-[15px] leading-[1.9] font-medium whitespace-pre-line">
                          {data.overview.tabs[activeTab].content}
                        </div>
                      </div>
                    </div>
                    
                    {/* Images */}
                    {data.overview.images && (
                      <div className="lg:w-[28%] shrink-0 flex flex-col gap-4">
                        {data.overview.images.map((img, idx) => (
                          <div key={idx} className="rounded-xl overflow-hidden shadow-sm border border-[#EFE7DF] group">
                            <img src={img} alt={`Department ${idx + 1}`} className="w-full h-[160px] object-cover group-hover:scale-105 transition-transform duration-500" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </section>
              </FadeInUp>
            )}

            {/* ───────── PROGRAMMES (Only on Home Page) ───────── */}
            {isHome && data.programmes && data.programmes.length > 0 && (
              <FadeInUp delay={200}>
                <section className="mb-12">
                  <div className="flex flex-col gap-4">
                    {data.programmes.map((prog, idx) => (
                      <div key={idx} className="bg-[#F8F9FA] border border-[#E8E2D9] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                        <button
                          onClick={() => setOpenProgramme(openProgramme === idx ? -1 : idx)}
                          className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors duration-300 ${openProgramme === idx ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                        >
                          <span className="text-[15px] font-bold text-[#3E3A36]">{idx + 1}. {prog.title}</span>
                          <span className={`${theme.primary} font-bold ml-4 transition-transform duration-300 ${openProgramme === idx ? 'rotate-180' : ''}`}>
                            <ChevronDown size={18}/>
                          </span>
                        </button>
                        <AnimatePresence>
                          {openProgramme === idx && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden bg-white"
                            >
                              <div className="px-6 pb-6 pt-4 border-t border-[#E8E2D9]/60">
                                {prog.sections.map((sec, i) => (
                                  <div key={i} className="mb-4 last:mb-0">
                                    {sec.heading && <h5 className={`font-bold ${theme.primary} mb-2`}>{sec.heading}</h5>}
                                    <p className="text-[#3E3A36] text-[14px] leading-relaxed whitespace-pre-line">{sec.text}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </section>
              </FadeInUp>
            )}

            {/* ───────── HOME CONTENT (R&D, Chapters, Innovation, Clubs) ───────── */}
            {isHome && data.homeContent && (
              <FadeInUp delay={300}>
                
                {/* Research & Development */}
                <section className="mb-12">
                  <h3 className={`text-[22px] font-bold ${theme.primary} mb-6`}>{data.homeContent.researchAndDev.heading}</h3>
                  <ul className="list-disc pl-5 space-y-4 text-[#3E3A36] text-[15px] leading-relaxed">
                    {data.homeContent.researchAndDev.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </section>

                {/* IEEE Button */}
                <div className="flex justify-center mb-12">
                  <a href={data.homeContent.ieeeBtn.href} className={`${theme.btn} ${theme.btnHover} text-white px-8 py-3 rounded text-[14px] font-semibold transition-colors`}>
                    {data.homeContent.ieeeBtn.label}
                  </a>
                </div>

                {/* Student Chapters */}
                <section className="mb-12">
                  <h3 className={`text-[20px] font-bold ${theme.primary} mb-4`}>{data.homeContent.studentChapters.heading}</h3>
                  <p className="text-[#3E3A36] text-[15px] leading-relaxed mb-6 whitespace-pre-line">
                    {data.homeContent.studentChapters.description}
                  </p>
                  <div className="space-y-6">
                    {data.homeContent.studentChapters.chapters.map((chap, idx) => (
                      <div key={idx}>
                        <h4 className="text-[15px] text-[#3E3A36] font-bold mb-1">{chap.title}</h4>
                        <p className="text-[#3E3A36] text-[14px] leading-relaxed">{chap.text}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ACM Button */}
                <div className="flex justify-center mb-12">
                  <a href={data.homeContent.studentChapters.acmBtn.href} target="_blank" rel="noopener noreferrer" className={`${theme.btn} ${theme.btnHover} text-white px-8 py-3 rounded text-[14px] font-semibold transition-colors`}>
                    {data.homeContent.studentChapters.acmBtn.label}
                  </a>
                </div>

                {/* Hackathon Events */}
                {data.events && (
                  <section className="mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {data.events.map((ev, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                          <img src={ev.image} alt="Hackathon Event" className="w-full h-[220px] object-cover rounded-md border border-gray-200 shadow-sm" />
                          <p className="text-[#3E3A36] text-[13px] leading-relaxed">{ev.description}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Innovation & Technology */}
                <section className="mb-12">
                  <h3 className={`text-[20px] font-bold ${theme.primary} mb-4`}>{data.homeContent.innovation.heading}</h3>
                  <div className="space-y-4">
                    {data.homeContent.innovation.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-[#3E3A36] text-[15px] leading-relaxed">{p}</p>
                    ))}
                  </div>
                </section>

                {/* Department Clubs Accordion */}
                <section className="mb-12">
                  <h3 className={`text-[20px] font-bold ${theme.primary} mb-4`}>{data.homeContent.clubsAccordionHeading}</h3>
                  <p className="text-[#3E3A36] text-[15px] leading-relaxed mb-6">{data.homeContent.clubsAccordionText}</p>
                  
                  <div className="flex flex-col gap-3">
                    {data.homeContent.clubsAccordionItems.map((clubName, idx) => {
                      const clubData = data.clubs?.items?.find(c => c.name === clubName);
                      return (
                        <div key={idx} className="bg-[#F8F9FA] border border-[#E8E2D9] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                          <button
                            onClick={() => setOpenClub(openClub === idx ? -1 : idx)}
                            className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors duration-300 ${openClub === idx ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
                          >
                            <span className="text-[15px] font-bold text-[#3E3A36]">{clubName}</span>
                            <span className={`${theme.primary} font-bold ml-4 transition-transform duration-300 ${openClub === idx ? 'rotate-180' : ''}`}>
                              <ChevronDown size={18}/>
                            </span>
                          </button>
                          <AnimatePresence>
                            {openClub === idx && clubData && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden bg-white"
                              >
                                <div className="px-5 pb-5 pt-4 border-t border-[#E8E2D9]/60">
                                  <p className="text-[#3E3A36] text-[14px] leading-relaxed whitespace-pre-line mb-6">
                                    {clubData.description}
                                  </p>
                                  {clubData.image && (
                                    <img src={clubData.image} alt={clubData.name} className="h-12 mb-6 object-contain" />
                                  )}
                                  {clubData.links && clubData.links.length > 0 && (
                                    <div className="flex flex-col gap-4">
                                      {clubData.links.map((link, lidx) => (
                                        <a 
                                          key={lidx} 
                                          href={link.url || link.href} 
                                          target="_blank" 
                                          rel="noopener noreferrer" 
                                          className={`${theme.primary} text-[15px] font-semibold hover:underline`}
                                        >
                                          {link.label}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </section>

              </FadeInUp>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
