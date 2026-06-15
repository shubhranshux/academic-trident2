import React, { useState, useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { FadeInUp } from '../utils/animations';
import {
  Home, ChevronRight, ChevronDown, ChevronLeft, ArrowRight, BookOpen, Award,
  FlaskConical, Cpu, Users, GraduationCap, Lightbulb, Monitor, BrainCircuit,
  Trophy, Rocket, Code2, Shield, Layers, FileText, Beaker, BarChart3,
  ExternalLink, Microscope
} from 'lucide-react';
import { getDepartment } from '../data/departmentData';

// Map icon strings to Lucide components
const ICONS = {
  Home, ChevronRight, ChevronDown, ChevronLeft, ArrowRight, BookOpen, Award,
  FlaskConical, Cpu, Users, GraduationCap, Lightbulb, Monitor, BrainCircuit,
  Trophy, Rocket, Code2, Shield, Layers, FileText, Beaker, BarChart3,
  ExternalLink, Microscope
};

/* ══════════════════════════════════════════════
   Accordion Item Component
   ══════════════════════════════════════════════ */
function AccordionItem({  title, seats, details, sections, isOpen, onClick , theme }) {
  return (
    <div className="border border-[#E8E2D9] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left group transition-colors duration-300 hover:bg-[#FDFBF7]"
      >
        <div className="flex-1 pr-4">
          <h4 className={`text-[16px] font-bold ${theme.primary} group-hover:text-[#283B91] transition-colors leading-snug`}>
            {title}
          </h4>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? '${theme.bgPrimary} text-white rotate-180' : 'bg-[#F0EBE3] ${theme.secondary}'}`}>
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-0">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest ${theme.secondary} bg-[#F5EDE3] px-3 py-1 rounded-full`}>
              <GraduationCap size={13} /> {seats}
            </span>
            {details && <span className="text-[12px] font-bold text-[#A59381] uppercase tracking-widest">{details}</span>}
          </div>
          {sections ? (
            <div className="flex flex-col gap-4">
              {sections.map((sec, idx) => (
                <div key={idx}>
                  {sec.heading && <h5 className="font-bold text-[#1A1A1A] text-[14px] mb-1.5">{sec.heading}</h5>}
                  <p className="text-[14px] text-[#5c5855] leading-[1.8] whitespace-pre-line">{sec.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[14px] text-[#5c5855] leading-[1.8]">{details}</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   Hackathon Event Card
   ══════════════════════════════════════════════ */
function EventCard({  event, index , theme }) {
  return (
    <FadeInUp delay={index * 80}>
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-[#EFE7DF]/60 transition-all duration-500 hover:-translate-y-1">
        <div className="relative h-52 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <span className={`absolute top-4 left-4 ${theme.bgPrimary} text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg`}>
            {event.tag}
          </span>
        </div>
        <div className="p-5">
          <h4 className={`text-[15px] font-bold text-[#1A1A1A] leading-snug mb-2 group-${theme.hoverTextPrimary} transition-colors line-clamp-2`}>
            {event.title}
          </h4>
          <p className="text-[13px] text-[#6B6560] leading-relaxed line-clamp-3">
            {event.description}
          </p>
        </div>
      </div>
    </FadeInUp>
  );
}

/* ══════════════════════════════════════════════
   Club Card
   ══════════════════════════════════════════════ */
function ClubCard({  club, isOpen, onClick , theme }) {
  const Icon = ICONS[club.icon] || Code2;
  return (
    <div className="border border-[#E8E2D9] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md bg-white">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5 text-left group transition-colors duration-300 hover:bg-[#FDFBF7]"
      >
        <div className="flex items-center gap-4 flex-1 pr-4">
          <div className={`w-10 h-10 rounded-lg ${club.bg} flex items-center justify-center shrink-0`}>
            <Icon size={20} className={club.color} />
          </div>
          <h4 className={`text-[16px] font-bold transition-colors leading-snug ${club.color}`}>
            {club.name}
          </h4>
        </div>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? '${theme.bgPrimary} text-white rotate-180' : 'bg-[#F0EBE3] ${theme.secondary}'}`}>
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-0 md:pl-20">
          <p className="text-[14px] text-[#5c5855] leading-relaxed mb-4 whitespace-pre-line">{club.description}</p>
          {club.links && club.links.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-5">
              {club.links.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 bg-[#F0F4FA] ${theme.primary} font-bold text-[13px] rounded-lg border ${theme.borderPrimary10} ${theme.hoverBgPrimary} hover:text-white transition-all duration-300 shadow-sm hover:shadow-md group`}
                >
                  {link.label}
                  <ExternalLink size={14} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   Sidebar Component (Desktop)
   ══════════════════════════════════════════════ */
function Sidebar({  activeSection, data, slug , theme }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

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
            const isActive = activeSection === item.id;
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
   MAIN PAGE COMPONENT
   ══════════════════════════════════════════════ */
export default function SchoolOfComputingPage() {
  const { slug, subpage, detail } = useParams();
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


  const [openProgramme, setOpenProgramme] = useState(0);
  const [openClub, setOpenClub] = useState(-1);
  const [openLab, setOpenLab] = useState(-1);
  const [activeOverviewTab, setActiveOverviewTab] = useState(0);

  const activeSection = subpage || 'overview';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, subpage]);

  if (!data) {
    return <Navigate to="/" />;
  }

  // Redirect bare /:slug to /:slug/overview
  if (!subpage) {
    return <Navigate to={`/${slug}/overview`} replace />;
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
            {activeSection === 'overview' && (
              <>
                <ChevronRight size={12} />
                <span className={`${theme.accent} font-bold`}>Department Overview</span>
              </>
            )}
            {activeSection !== 'overview' && (
              <>
                <ChevronRight size={12} />
                {detail ? (
                  <>
                    <Link to={`/${slug}/${activeSection}`} className="hover:text-white transition-colors">
                      {data.sidebar.items.find(i => i.id === activeSection)?.label || activeSection.replace('-', ' ')}
                    </Link>
                    <ChevronRight size={12} />
                    <span className={`${theme.accent} font-bold`}>{detail.replace('-', ' ')}</span>
                  </>
                ) : (
                  <span className={`${theme.accent} font-bold`}>
                    {data.sidebar.items.find(i => i.id === activeSection)?.label || activeSection.replace('-', ' ')}
                  </span>
                )}
              </>
            )}
          </nav>

          <FadeInUp>
            <h1 className="font-serif text-[42px] md:text-[64px] lg:text-[76px] font-black text-white leading-[1.05] tracking-tight mb-6">
              {data.hero.titleLine1}<br/>
              <span className={`${theme.accent}`}>{data.hero.titleLine2}</span>
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
          <Sidebar activeSection={activeSection} data={data} slug={slug} theme={theme} />

          {/* Main Content */}
          <div className="flex-1 min-w-0">

            {/* Page Title */}
            <FadeInUp>
              <div className="flex items-center gap-3 mb-10">
                <div className={`w-12 h-12 rounded-xl ${theme.bgPrimary10} flex items-center justify-center`}>
                  {(() => {
                    const currentItem = data.sidebar.items.find(i => i.id === activeSection);
                    const Icon = ICONS[currentItem?.icon] || BookOpen;
                    return <Icon size={22} className={`${theme.primary}`} />;
                  })()}
                </div>
                <h2 className="font-serif text-[32px] md:text-[40px] font-black text-[#212529] leading-tight">
                  {data.sidebar.items.find(i => i.id === activeSection)?.label || activeSection}
                </h2>
              </div>
            </FadeInUp>

            {/* QUESTION BANK */}
            {activeSection === 'question-bank' && data.questionBank ? (
              <FadeInUp delay={100}>
                {detail ? (() => {
                  const yearData = data.questionBank.years.find(y => y.id === detail);
                  if (!yearData) return <Navigate to={`/${slug}/${activeSection}`} replace />;
                  
                  return (
                    <div className="bg-white rounded-3xl border border-[#EFE7DF]/60 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                      {/* Decorative background blob */}
                      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#1B4D8E]/5 to-[#C84B31]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                      
                      {/* Header with Back Button */}
                      <div className="flex items-center gap-5 mb-10 relative z-10">
                        <Link 
                          to={`/${slug}/${activeSection}`} 
                          className={`w-12 h-12 rounded-full bg-[#F8F9FA] border border-[#EFE7DF] ${theme.primary} flex items-center justify-center ${theme.hoverBgPrimary} hover:text-white hover:${theme.borderPrimary} transition-all duration-300 shadow-sm hover:shadow-md`}
                        >
                          <ChevronLeft size={22} strokeWidth={2.5} />
                        </Link>
                        <div>
                          <h3 className={`font-serif text-[32px] md:text-[36px] font-black ${theme.primary} uppercase tracking-wide leading-tight`}>
                            {yearData.label} 
                          </h3>
                          <p className="text-[#A59381] font-medium text-[15px] mt-1">Select a subject to view previous questions</p>
                        </div>
                      </div>

                      {/* Subjects Grid */}
                      {yearData.subjects && yearData.subjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                          {yearData.subjects.map((subject, idx) => (
                            <a
                              key={idx}
                              href={subject.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`group flex flex-col justify-between p-7 rounded-2xl bg-[#F8F9FA] border border-[#EFE7DF]/80 hover:bg-white hover:shadow-[0_12px_40px_rgba(27,77,142,0.08)] hover:${theme.borderPrimary}/30 transition-all duration-300 transform hover:-translate-y-1.5`}
                            >
                              <div className="flex items-start justify-between mb-6">
                                <div className={`w-14 h-14 rounded-2xl ${theme.bgPrimary}/5 ${theme.primary} flex items-center justify-center group-${theme.hoverBgPrimary} group-hover:text-white transition-colors duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]`}>
                                  <FileText size={26} strokeWidth={1.5} />
                                </div>
                                <div className="w-9 h-9 rounded-full bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                  <ArrowRight size={18} strokeWidth={2.5} />
                                </div>
                              </div>
                              <h4 className={`font-bold text-[16px] text-[#212529] uppercase tracking-wider leading-snug group-${theme.hoverTextPrimary} transition-colors duration-300`}>
                                {subject.name}
                              </h4>
                            </a>
                          ))}
                        </div>
                      ) : (
                        <div className="py-16 flex flex-col items-center justify-center text-center bg-[#F8F9FA] rounded-2xl border-2 border-dashed border-[#EFE7DF] relative z-10">
                          <BookOpen size={56} className="text-[#A59381]/40 mb-5" strokeWidth={1.5} />
                          <h4 className="text-[20px] font-bold text-[#3E3A36] mb-2">Subjects Coming Soon</h4>
                          <p className="text-[#A59381] text-[15px] max-w-md">The question bank repository for {yearData.label} is currently being updated by the department.</p>
                        </div>
                      )}
                    </div>
                  );
                })() : (
                  <div className="bg-white rounded-xl border border-[#EFE7DF]/60 p-8 md:p-12 shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                    {/* Year Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                      {data.questionBank.years.map((year, idx) => (
                        <Link
                          key={idx}
                          to={`/${slug}/${activeSection}/${year.id}`}
                          className={`${year.color} text-white font-bold text-[14px] px-8 py-3 rounded-md shadow-sm hover:opacity-90 transition-opacity`}
                        >
                          {year.label}
                        </Link>
                      ))}
                    </div>

                    {/* Previous Semester Questions */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="relative">
                        <div className="bg-[#C84B31] text-white font-black text-[13px] px-6 py-3 shadow-md relative flex items-center justify-center rounded-l-md"
                          style={{ clipPath: 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)', paddingRight: '2.5rem' }}>
                          CLICK HERE →
                        </div>
                      </div>
                      <a
                        href={data.questionBank.previousSemester.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#3A3A3A] text-white font-bold text-[14px] px-6 py-3 rounded-md shadow-md hover:bg-[#2A2A2A] transition-colors flex items-center gap-2.5"
                      >
                        <FileText size={16} className="opacity-80" />
                        {data.questionBank.previousSemester.label}
                      </a>
                    </div>
                  </div>
                )}
              </FadeInUp>

            /* SYLLABUS */
            ) : activeSection === 'syllabus' && data.syllabus ? (
              <FadeInUp delay={100}>
                <div className="bg-white rounded-3xl border border-[#EFE7DF]/60 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#1B4D8E]/5 to-[#73A5C6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col gap-12">
                    {data.syllabus.map((programSection, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="h-[1px] flex-1 bg-[#EFE7DF]"></div>
                          <h4 className={`font-bold ${theme.primary} text-[15px] tracking-[0.2em] uppercase`}>{programSection.program}</h4>
                          <div className="h-[1px] flex-1 bg-[#EFE7DF]"></div>
                        </div>

                        <div className="flex flex-col gap-6">
                          {programSection.years.map((year, yIdx) => (
                            <div key={yIdx} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EFE7DF]/40 last:border-0 last:pb-0">
                              <h5 className={`font-serif text-[18px] font-bold ${theme.primary} uppercase tracking-wide`}>
                                {year.title}
                              </h5>
                              <div className="flex flex-wrap gap-3 md:justify-end">
                                {year.buttons.map((btn, bIdx) => (
                                  <a
                                    key={bIdx}
                                    href={btn.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#73A5C6] text-white text-[12px] font-bold uppercase tracking-wider px-6 py-3 rounded-md hover:bg-[#5C8FB2] hover:-translate-y-0.5 transition-all duration-300 shadow-sm text-center"
                                  >
                                    {btn.label}
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInUp>


            /* FACULTIES */
            ) : activeSection === 'faculties' && data.faculties ? (
              <FadeInUp delay={100}>
                <div className="bg-white rounded-2xl border border-[#EFE7DF]/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className={`${theme.bgPrimary} text-white`}>
                          <th className={`py-4 px-6 font-bold text-[13px] uppercase tracking-wider border-b ${theme.borderPrimary} whitespace-nowrap`}>Sl. No.</th>
                          <th className={`py-4 px-6 font-bold text-[13px] uppercase tracking-wider border-b ${theme.borderPrimary} whitespace-nowrap`}>Name</th>
                          <th className={`py-4 px-6 font-bold text-[13px] uppercase tracking-wider border-b ${theme.borderPrimary} whitespace-nowrap`}>Designation</th>
                          <th className={`py-4 px-6 font-bold text-[13px] uppercase tracking-wider border-b ${theme.borderPrimary} whitespace-nowrap`}>Date of Joining</th>
                          <th className={`py-4 px-6 font-bold text-[13px] uppercase tracking-wider border-b ${theme.borderPrimary} whitespace-nowrap`}>Qualification</th>
                          <th className={`py-4 px-6 font-bold text-[13px] uppercase tracking-wider border-b ${theme.borderPrimary} whitespace-nowrap`}>BPUT ID</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#EFE7DF]/60">
                        {data.faculties.map((faculty, idx) => (
                          <tr key={idx} className="hover:bg-[#F8F9FA] transition-colors duration-200">
                            <td className="py-4 px-6 text-[14px] text-[#6B6560] font-medium">{idx + 1}</td>
                            <td className="py-4 px-6 text-[15px] text-[#212529] font-bold">{faculty.name}</td>
                            <td className="py-4 px-6 text-[14px] text-[#6B6560]">{faculty.designation}</td>
                            <td className="py-4 px-6 text-[14px] text-[#6B6560]">{faculty.joining}</td>
                            <td className="py-4 px-6 text-[14px] text-[#6B6560]">{faculty.qualification}</td>
                            <td className={`py-4 px-6 text-[14px] ${theme.primary} font-medium`}>{faculty.bputId}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeInUp>
            /* LABORATORIES */
            ) : activeSection === 'laboratories' && data.laboratories ? (
              <FadeInUp delay={100}>
                <div className="bg-white rounded-2xl border border-[#EFE7DF]/60 p-6 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
                  <div className="flex flex-col gap-2">
                    {data.laboratories.map((lab, idx) => {
                      const isOpen = openLab === idx;
                      return (
                        <div key={idx} className="overflow-hidden transition-all duration-300">
                          <button
                            onClick={() => setOpenLab(isOpen ? -1 : idx)}
                            className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors rounded-lg group border ${isOpen ? 'bg-[#F0F4FA] ${theme.borderPrimary10}' : 'bg-[#F8F9FA] border-transparent hover:bg-[#F0F4FA]'}`}
                          >
                            <h4 className={`text-[15px] font-bold ${theme.primary} group-hover:text-[#283B91] transition-colors`}>{lab.name}</h4>
                            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45 ${theme.primary}' : 'text-[#A59381]'}`}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                              </svg>
                            </div>
                          </button>
                          <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'max-h-[3000px] opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}>
                            <div className="px-6 pb-6 pt-4 text-[#6B6560] text-[14px] leading-relaxed flex flex-col gap-6 border-t border-[#EFE7DF]/60 mt-2">
                              {/* Simple description fallback */}
                              {lab.description && <p>{lab.description}</p>}
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Equipments */}
                                {lab.equipments && (
                                  <div>
                                    <h5 className={`${theme.primary} font-bold mb-3 flex items-center gap-2`}>
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                                      Equipments / Configurations
                                    </h5>
                                    <ul className="space-y-2">
                                      {lab.equipments.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                          <span className={`${theme.primary} mt-1`}>•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {/* Software */}
                                {lab.software && (
                                  <div>
                                    <h5 className={`${theme.primary} font-bold mb-3 flex items-center gap-2`}>
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                      Software Used
                                    </h5>
                                    <ul className="space-y-2">
                                      {lab.software.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                          <span className={`${theme.primary} mt-1`}>•</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>

                              {/* Experiments */}
                              {lab.experiments && (
                                <div>
                                  <h5 className={`${theme.primary} font-bold mb-4 flex items-center gap-2 border-b border-[#EFE7DF] pb-2`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                    List of Experiments
                                  </h5>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {lab.experiments.map((expSet, i) => (
                                      <div key={i} className={`bg-[#F8F9FA] p-5 rounded-xl border border-[#EFE7DF] hover:${theme.borderPrimary}/30 transition-colors ${!expSet.set ? 'col-span-1 md:col-span-2' : ''}`}>
                                        {expSet.set && <h6 className={`font-bold ${theme.primary} mb-3 text-[13px] uppercase tracking-wider`}>{expSet.set}</h6>}
                                        <ul className="space-y-2 text-[13px]">
                                          {expSet.list.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                              <span className={`font-medium ${theme.primary}/60 min-w-[16px]`}>{j + 1}.</span>
                                              <span>{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Images */}
                              {lab.images && (
                                <div>
                                  <h5 className={`${theme.primary} font-bold mb-4 flex items-center gap-2 border-b border-[#EFE7DF] pb-2`}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                    Gallery
                                  </h5>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {lab.images.map((img, i) => (
                                      <div key={i} className="overflow-hidden rounded-xl border border-[#EFE7DF]">
                                        <img src={img} alt={`Lab Image ${i+1}`} className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </FadeInUp>


            /* EVENTS */
            ) : activeSection === 'events' && data.events && data.events.length > 0 ? (
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {data.events.map((event, idx) => (
                    <EventCard theme={theme} key={idx} event={event} index={idx} />
                  ))}
                </div>
                {data.eventsLink && (
                  <FadeInUp delay={300}>
                    <div className="flex justify-center">
                      <a
                        href={data.eventsLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-3 ${theme.bgPrimary} text-white font-bold text-[13px] uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#283B91] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
                      >
                        <FileText size={18} className="opacity-80" />
                        {data.eventsLink.label}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </FadeInUp>
                )}
              </div>

            /* INNOVATION / PRODUCT DEV */
            ) : activeSection === 'product-dev' && data.productDev ? (
              <FadeInUp delay={100}>
                <div className="bg-gradient-to-br from-[#1B4D8E] to-[#283B91] rounded-2xl p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                  <div className={`absolute bottom-0 left-0 w-48 h-48 ${theme.bgAccent}/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none`} />
                  <div className="relative z-10">
                    <h3 className="font-serif text-[26px] font-bold mb-6">{data.productDev.title}</h3>
                    {data.productDev.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-white/85 text-[16px] leading-[1.9] mb-6 max-w-3xl">{p}</p>
                    ))}
                    <div className="flex flex-wrap gap-4 mt-8">
                      {data.productDev.stats.map((s) => (
                        <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-6 py-4 min-w-[130px]">
                          <div className={`text-[26px] font-black ${theme.accent} leading-none`}>{s.stat}</div>
                          <div className="text-[11px] font-bold uppercase tracking-widest text-white/60 mt-1.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                    {data.productDev.exploreLink && (
                      <div className="mt-10">
                        <a 
                          href={data.productDev.exploreLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`inline-flex items-center gap-2 ${theme.bgAccent} text-[#1A1A1A] font-bold text-[13px] uppercase tracking-widest px-8 py-3.5 rounded-xl hover:bg-white ${theme.hoverTextPrimary} transition-all duration-300 shadow-lg group`}
                        >
                          Explore more
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </FadeInUp>

            /* FACULTY INNOVATION */
            ) : activeSection === 'innovation' && data.facultyInnovation ? (
              <FadeInUp delay={100}>
                <div className="bg-white rounded-2xl border border-[#EFE7DF]/60 p-8 md:p-10 shadow-sm">
                  <h3 className={`font-serif text-[26px] font-bold mb-6 ${theme.primary}`}>{data.facultyInnovation.title}</h3>
                  {data.facultyInnovation.paragraphs.map((p, idx) => (
                    <p key={idx} className="text-[#3E3A36] text-[17px] leading-[1.9] mb-6 font-medium">
                      {p}
                    </p>
                  ))}
                  
                  {data.facultyInnovation.exploreLink && (
                    <div className="mt-10 flex justify-center">
                      <a 
                        href={data.facultyInnovation.exploreLink.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`inline-flex items-center gap-3 ${theme.bgPrimary} text-white font-bold text-[13px] uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#283B91] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
                      >
                        <FileText size={18} className="opacity-80" />
                        {data.facultyInnovation.exploreLink.label}
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </FadeInUp>

            /* CLUBS / STUDENT CHAPTERS */
            ) : activeSection === 'clubs' && data.clubs ? (
              <>
                <FadeInUp delay={100}>
                  <p className="text-[#3E3A36] text-[17px] leading-[1.9] mb-8 font-medium max-w-3xl">
                    {data.clubs.description}
                  </p>
                </FadeInUp>
                <FadeInUp delay={200}>
                  <div className="flex flex-col gap-4">
                    {data.clubs.items.map((club, idx) => (
                      <ClubCard
                        key={idx}
                        club={club}
                        isOpen={openClub === idx}
                        onClick={() => setOpenClub(openClub === idx ? -1 : idx)}
                      />
                    ))}
                  </div>
                </FadeInUp>
              </>

            /* PUBLICATIONS & PATENTS */
            ) : activeSection === 'publications' && data.publications ? (
              <>
                {data.publications.description && (
                  <FadeInUp delay={100}>
                    <p className="text-[#3E3A36] text-[17px] leading-[1.9] mb-8 font-medium max-w-3xl whitespace-pre-line">
                      {data.publications.description}
                    </p>
                  </FadeInUp>
                )}
                <FadeInUp delay={200}>
                  <div className="flex flex-col gap-4">
                    {data.publications.items.map((item, idx) => (
                      <ClubCard
                        key={idx}
                        club={item}
                        isOpen={openClub === idx}
                        onClick={() => setOpenClub(openClub === idx ? -1 : idx)}
                      />
                    ))}
                  </div>
                </FadeInUp>
              </>

            /* PLACEMENT */
            ) : activeSection === 'placement' && data.placement ? (
              <FadeInUp delay={100}>
                <div className="bg-white rounded-2xl border border-[#EFE7DF]/60 p-8 md:p-10 shadow-sm">
                  <p className="text-[#3E3A36] text-[17px] leading-[1.9] mb-6 font-medium">
                    {data.placement.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {data.placement.stats.map((item) => (
                      <div key={item.label} className={`bg-gradient-to-br ${item.color} rounded-xl p-5 text-white text-center`}>
                        <div className="text-[28px] font-black leading-none">{item.value}</div>
                        <div className="text-[10px] font-bold uppercase tracking-widest mt-2 opacity-80">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {data.placement.buttons && (
                    <div className="mt-12 mb-8 border-t border-[#EFE7DF] pt-8">
                      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        {data.placement.buttons.map((btn, idx) => (
                          <a
                            key={idx}
                            href={btn.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#4187C4] text-white font-bold text-[14px] px-8 py-2.5 rounded shadow hover:bg-[#326f9f] transition-colors"
                          >
                            {btn.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-8 flex justify-center">
                    <a
                      href={data.placement.ctaHref}
                      className={`inline-flex items-center gap-3 ${theme.bgPrimary} text-white font-bold text-[13px] uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-[#283B91] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5`}
                    >
                      {data.placement.ctaLabel}
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </FadeInUp>

            /* COMING SOON — Placeholder for pages not yet built */
            ) : (
              <FadeInUp delay={100}>
                <div className="bg-white rounded-2xl border border-[#EFE7DF]/60 p-12 md:p-16 shadow-sm text-center">
                  <div className="w-20 h-20 rounded-2xl bg-[#F0F4FA] flex items-center justify-center mx-auto mb-6">
                    <Rocket size={32} className={`${theme.primary}`} />
                  </div>
                  <h3 className="font-serif text-[28px] font-black text-[#212529] mb-3">
                    Coming Soon
                  </h3>
                  <p className="text-[#6B6560] text-[16px] leading-relaxed max-w-md mx-auto">
                    This page is currently being updated with the latest content. Please check back soon.
                  </p>
                </div>
              </FadeInUp>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
