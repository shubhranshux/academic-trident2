import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from '../utils/animations';
import {
  Home, ChevronRight, BookOpen, Users,
  Beaker, FileText, ArrowRight, Cog,
  GraduationCap, Award, Layers, HardHat
} from 'lucide-react';
import { getDepartment } from '../data/departmentData';

const ICONS = {
  Home, BookOpen, Users, Beaker, FileText, ArrowRight, Cog, GraduationCap, Award, Layers, HardHat
};

/* ══════════════════════════════════════════════
   PREMIUM SIDEBAR — Same as SubPage for consistency
   ══════════════════════════════════════════════ */
function EngineeringSidebar({ data, slug, activeSection }) {
  return (
    <aside className="hidden xl:block sticky top-[100px] self-start w-[280px] shrink-0 z-20 h-[calc(100vh-120px)]">
      <div className="h-full flex flex-col">
        <div className="relative mb-6 pb-5 border-b border-[#C0392B]/20">
          <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C0392B] via-[#E74C3C] to-transparent rounded-full"></div>
          <h3 className="text-[#C0392B] text-[15px] font-black uppercase tracking-[0.2em] whitespace-pre-line leading-snug pl-2">
            {data.sidebar.heading || 'DEPARTMENT'}
          </h3>
        </div>

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
   MAIN SUBPAGE COMPONENT (Syllabus, Faculty, Labs)
   ══════════════════════════════════════════════ */
export default function SchoolOfEngineeringPage({ slug: propSlug }) {
  const params = useParams();
  const { subpage, detail } = params;
  const slug = propSlug || params.slug;
  const data = getDepartment(slug);
  const [expandedLab, setExpandedLab] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, subpage, detail]);

  if (!data) return <Navigate to="/" />;

  const theme = data.theme;
  const activeSection = subpage || 'overview';

  const sectionLabel = data.sidebar.items.find(i => i.id === activeSection)?.label || activeSection.replace('-', ' ');

  const renderContent = () => {
    switch (activeSection) {
      case 'syllabus':
        return (
          <div className="space-y-16">
            <FadeInUp>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C0392B] to-[#E74C3C] flex items-center justify-center shadow-lg shadow-[#C0392B]/20">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-black text-[#1a1a2e] leading-tight">Syllabus</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] rounded-full mt-2"></div>
                </div>
              </div>
            </FadeInUp>

            {Array.isArray(data.syllabus) ? (
              data.syllabus.map((year, idx) => (
                <FadeInUp key={idx} delay={idx * 80}>
                  <div className="group">
                    {/* Semester Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-[48px] font-black text-[#C0392B]/10 leading-none">
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-[22px] md:text-[28px] font-black text-[#1a1a2e] uppercase tracking-tight">
                        {year.semester}
                      </h3>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b-2 border-[#C0392B]/15">
                            <th className="pb-3 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest w-[15%]">Code</th>
                            <th className="pb-3 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest w-[55%]">Subject</th>
                            <th className="pb-3 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest w-[15%]">Credits</th>
                            <th className="pb-3 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest w-[15%]">Type</th>
                          </tr>
                        </thead>
                        <tbody>
                          {year.subjects.map((sub, sIdx) => (
                            <motion.tr
                              key={sIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: sIdx * 0.03 }}
                              className="border-b border-[#F0F0F0] last:border-0 hover:bg-[#C0392B]/[0.02] transition-colors group/row"
                            >
                              <td className="py-4 font-mono font-bold text-[#C0392B] text-[14px]">{sub.code}</td>
                              <td className="py-4 font-bold text-[#1a1a2e] text-[15px] group-hover/row:text-[#C0392B] transition-colors">{sub.name}</td>
                              <td className="py-4 font-medium text-[#95A5A6] text-[14px]">{sub.credits}</td>
                              <td className="py-4">
                                <span className={`inline-flex items-center px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${
                                  sub.type === 'Practical'
                                    ? 'bg-[#E67E22]/10 text-[#E67E22]'
                                    : 'bg-[#2C3E50]/8 text-[#2C3E50]'
                                }`}>
                                  {sub.type}
                                </span>
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </FadeInUp>
              ))
            ) : data.syllabus ? (
              <FadeInUp delay={100}>
                <div className="bg-white rounded-2xl shadow-sm border border-[#F0F0F0] p-6 md:p-10">
                  {/* Documents List */}
                  {data.syllabus.documents && (
                    <div className="divide-y divide-[#F0F0F0]">
                      {data.syllabus.documents.map((doc, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-start md:items-center justify-between py-6 first:pt-0 gap-4 group">
                          <h3 className="text-[#1a1a2e] text-[14px] md:text-[15px] font-black uppercase tracking-widest group-hover:text-[#67B2C7] transition-colors">{doc.title}</h3>
                          <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#67B2C7] hover:bg-[#529DB2] text-white text-[11px] font-bold uppercase tracking-widest rounded-lg transition-colors shrink-0 shadow-sm shadow-[#67B2C7]/30">
                            {doc.btnText}
                          </a>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Add-On Courses */}
                  {data.syllabus.addOnCourses && data.syllabus.addOnCourses.length > 0 && (
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 pt-6 border-t border-[#F0F0F0] gap-6">
                      <h3 className="text-[#1a1a2e] text-[14px] md:text-[15px] font-black uppercase tracking-widest shrink-0 w-full md:w-1/3">ADD-ON COURSES</h3>
                      <div className="flex flex-wrap gap-3 flex-1 justify-start md:justify-end">
                        {data.syllabus.addOnCourses.map((course, idx) => {
                          const isObj = typeof course === 'object';
                          const name = isObj ? course.name : course;
                          const url = isObj ? course.fileUrl : '#';
                          return (
                            <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#67B2C7] hover:bg-[#529DB2] text-white text-[12px] font-bold tracking-wider rounded-lg shadow-sm shadow-[#67B2C7]/30 transition-colors">
                              {name}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </FadeInUp>
            ) : null}
          </div>
        );

      case 'laboratories':
        return (
          <div>
            <FadeInUp>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#E67E22] to-[#F39C12] flex items-center justify-center shadow-lg shadow-[#E67E22]/20">
                  <Beaker size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-black text-[#1a1a2e] leading-tight">Laboratories</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#E67E22] to-[#F39C12] rounded-full mt-2"></div>
                </div>
              </div>
            </FadeInUp>

            <div className="space-y-4">
              {data.laboratories?.map((lab, idx) => {
                const isExpanded = expandedLab === idx;
                return (
                  <FadeInUp key={idx} delay={idx * 80}>
                    <div className="bg-white border border-[#F0F0F0] rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                      <button 
                        onClick={() => setExpandedLab(isExpanded ? null : idx)}
                        className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-[#FAFAFA] transition-colors text-left group"
                      >
                        <div className="flex items-center gap-6">
                          <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#E67E22]/10 to-[#F39C12]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Beaker size={24} className="text-[#E67E22]" />
                          </div>
                          <div>
                            <h3 className="text-[18px] md:text-[22px] font-black text-[#1a1a2e] group-hover:text-[#C0392B] transition-colors leading-tight">
                              {lab.name}
                            </h3>
                            {lab.description && (
                              <p className="text-[#95A5A6] text-[14px] mt-1 font-medium line-clamp-1">{lab.description}</p>
                            )}
                          </div>
                        </div>
                        <div className={`shrink-0 w-10 h-10 rounded-full border-2 border-[#F0F0F0] flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-[#C0392B] border-[#C0392B] rotate-45' : 'group-hover:border-[#E67E22]'}`}>
                          <span className={`text-[20px] font-medium leading-none ${isExpanded ? 'text-white' : 'text-[#95A5A6] group-hover:text-[#E67E22]'}`}>+</span>
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
                            <div className="p-6 md:p-8 pt-0 border-t border-[#F0F0F0] bg-[#FAFAFA]">
                              {lab.description && (
                                <p className="text-[#5D6D7E] text-[16px] leading-[1.9] font-medium mb-8">
                                  {lab.description}
                                </p>
                              )}
                              
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Experiment List */}
                                {lab.experimentList && lab.experimentList.length > 0 && (
                                  <div>
                                    <h4 className="text-[14px] font-black uppercase tracking-widest text-[#1a1a2e] mb-6 flex items-center gap-3">
                                      <div className="w-8 h-1 bg-[#C0392B] rounded-full"></div>
                                      Experiment List
                                    </h4>
                                    <ul className="space-y-4">
                                      {lab.experimentList.map((exp, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                          <div className="w-1.5 h-1.5 rounded-full bg-[#E67E22] mt-2 shrink-0"></div>
                                          <p className="text-[#34495E] text-[15px] leading-[1.8] font-medium whitespace-pre-line">{exp}</p>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {/* Equipment List */}
                                {lab.equipmentList && lab.equipmentList.length > 0 && (
                                  <div>
                                    <h4 className="text-[14px] font-black uppercase tracking-widest text-[#1a1a2e] mb-6 flex items-center gap-3">
                                      <div className="w-8 h-1 bg-[#C0392B] rounded-full"></div>
                                      Equipment List
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                      {lab.equipmentList.map((item, i) => (
                                        <span key={i} className="px-4 py-2 bg-white border border-[#F0F0F0] text-[#5D6D7E] text-[13px] font-bold rounded-lg shadow-sm">
                                          {item}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>
          </div>
        );

      case 'faculty':
        return (
          <div>
            <FadeInUp>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8E44AD] to-[#9B59B6] flex items-center justify-center shadow-lg shadow-[#8E44AD]/20">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-[32px] md:text-[40px] font-black text-[#1a1a2e] leading-tight">Faculty</h2>
                  <div className="h-1 w-16 bg-gradient-to-r from-[#8E44AD] to-[#9B59B6] rounded-full mt-2"></div>
                </div>
              </div>
            </FadeInUp>

            {data.faculty && data.faculty.length > 0 ? (
              <FadeInUp delay={100}>
                <div className="overflow-hidden bg-white border border-[#F0F0F0] rounded-2xl shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[800px]">
                      <thead>
                        <tr className="bg-[#FAFAFA] border-b-2 border-[#F0F0F0]">
                          <th className="py-5 px-6 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest">Sl. No.</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest">Name</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest">Designation</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest">Date of Joining</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest">Qualification</th>
                          <th className="py-5 px-6 text-[11px] font-bold text-[#95A5A6] uppercase tracking-widest">BPUT ID</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.faculty.map((member, idx) => (
                          <motion.tr 
                            key={idx} 
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.03 }}
                            className="border-b border-[#F0F0F0] last:border-0 hover:bg-[#FAFAFA] transition-colors group"
                          >
                            <td className="py-4 px-6 font-mono font-bold text-[#C0392B]/40 text-[13px]">{idx + 1}</td>
                            <td className="py-4 px-6 font-bold text-[#1a1a2e] text-[15px] group-hover:text-[#8E44AD] transition-colors">{member.name}</td>
                            <td className="py-4 px-6 font-medium text-[#5D6D7E] text-[14px]">
                              <span className={`inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full ${
                                member.designation.includes('HOD')
                                  ? 'bg-[#C0392B]/10 text-[#C0392B]'
                                  : member.designation.includes('Associate')
                                  ? 'bg-[#E67E22]/10 text-[#E67E22]'
                                  : 'bg-[#2C3E50]/5 text-[#2C3E50]'
                              }`}>
                                {member.designation}
                              </span>
                            </td>
                            <td className="py-4 px-6 font-medium text-[#95A5A6] text-[14px]">{member.doj}</td>
                            <td className="py-4 px-6 font-bold text-[#2C3E50] text-[13px]">{member.qualification}</td>
                            <td className="py-4 px-6 font-mono font-medium text-[#95A5A6] text-[13px]">{member.bputId}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </FadeInUp>
            ) : (
              <FadeInUp delay={100}>
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#2C3E50] p-10 md:p-14">
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="relative z-10">
                    <h3 className="text-[28px] md:text-[36px] font-black text-white mb-6 leading-tight">
                      Meet Our<br />
                      <span className="bg-gradient-to-r from-[#E74C3C] via-[#F39C12] to-[#E67E22] bg-clip-text text-transparent">
                        Expert Faculty
                      </span>
                    </h3>
                    <p className="text-white/60 text-[17px] leading-[1.9] font-medium max-w-2xl mb-10">
                      Our faculty members are experienced professionals and researchers dedicated to advancing civil engineering and mentoring the next generation of engineers.
                    </p>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#C0392B] to-[#E74C3C] text-white font-bold text-[13px] uppercase tracking-widest rounded-xl shadow-lg shadow-[#C0392B]/30 hover:shadow-xl hover:shadow-[#C0392B]/40 transition-all cursor-pointer">
                      Directory Coming Soon <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </FadeInUp>
            )}
          </div>
        );

      default:
        return (
          <FadeInUp>
            <div className="text-center py-20">
              <div className="text-[64px] font-black text-[#C0392B]/10 mb-4">404</div>
              <h2 className="text-[24px] font-bold text-[#1a1a2e] mb-2">Content being updated</h2>
              <p className="text-[#95A5A6] text-[16px] font-medium">Please check back later.</p>
            </div>
          </FadeInUp>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">

      {/* ───────── COMPACT HERO ───────── */}
      <section className="relative pt-36 md:pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#2C3E50] to-[#1a1a2e]"></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[12px] font-medium text-white/50 mb-6 flex-wrap uppercase tracking-widest">
            <a href="https://trident.ac.in" className="flex items-center hover:text-white/80 transition-colors" title="Trident Home">
              <Home size={13} />
            </a>
            <ChevronRight size={10} className="text-white/30" />
            <Link to="/" className="hover:text-white/80 transition-colors">Academics</Link>
            <ChevronRight size={10} className="text-white/30" />
            <Link to={`/${slug}`} className="hover:text-white/80 transition-colors">{data.hero.breadcrumb}</Link>
            <ChevronRight size={10} className="text-white/30" />
            <span className="text-[#E74C3C] font-bold">{sectionLabel}</span>
          </nav>

          <FadeInUp>
            <h1 className="text-[40px] md:text-[56px] font-black text-white leading-[0.95] tracking-tight">
              <span className="bg-gradient-to-r from-[#E74C3C] via-[#F39C12] to-[#E67E22] bg-clip-text text-transparent">
                {sectionLabel}
              </span>
            </h1>
            <p className="text-white/50 text-[16px] md:text-[18px] mt-4 max-w-xl font-medium">
              Explore the {sectionLabel.toLowerCase()} for {data.hero.breadcrumb}.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Accent strip */}
      <div className="h-1 bg-gradient-to-r from-[#C0392B] via-[#E74C3C] to-[#F39C12]"></div>

      {/* ───────── MAIN CONTENT ───────── */}
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-16 md:py-24">
        <div className="flex gap-12 items-start">
          <EngineeringSidebar data={data} slug={slug} activeSection={activeSection} />
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
