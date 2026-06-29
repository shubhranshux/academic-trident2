import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Globe, BookOpen, FileText, Database, Library, MonitorPlay, Lightbulb, Download } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const OPEN_ACCESS_LINKS = [
  { title: 'E-Books', icon: BookOpen, id: 'e-books' },
  { title: 'E-Dissertations and Theses', icon: FileText, id: 'e-theses' },
  { title: 'E-Databases', icon: Database, id: 'e-databases' },
  { title: 'E-Journals', icon: Library, id: 'e-journals' },
  { title: 'Open Coursewares', icon: MonitorPlay, id: 'open-coursewares' },
  { title: 'Patent Database', icon: Lightbulb, id: 'patent-database' },
  { title: 'Freewares', icon: Download, id: 'freewares' },
];

const EBOOKS_SOURCES = [
  { name: 'Directory of Open Book Access', short: 'doab', url: 'https://www.doabooks.org/', color: 'text-orange-500' },
  { name: 'Springer Open Books', short: 'SpringerOpen', url: 'https://www.springeropen.com/books', color: 'text-blue-600' },
  { name: 'Hathi Trust Digital Library', short: 'HATHI TRUST', url: 'https://www.hathitrust.org/', color: 'text-orange-600' },
  { name: 'INTECH Open Access', short: 'INTECH', url: 'https://www.intechopen.com/', color: 'text-sky-700' },
  { name: 'OAPEN Open Access', short: 'oapen', url: 'https://oapen.org/', color: 'text-red-500' },
  { name: 'Project Gutenberg', short: 'Gutenberg', url: 'https://www.gutenberg.org/', color: 'text-stone-700' }
];

const THESES_SOURCES = [
  { name: 'PQDT (Proquest Dissertation & Theses)', short: 'PQDT Open', url: 'https://pqdtopen.proquest.com/', color: 'text-sky-500' },
  { name: 'The DART - Europe (DART-Europe E-Theses Portal)', short: 'DART', url: 'https://www.dart-europe.org/', color: 'text-purple-600' },
  { name: 'OATD (Open Access Theses & Dissertation)', short: 'OATD', url: 'https://oatd.org/', color: 'text-orange-500' },
  { name: 'Opentheses.org', short: 'openthesis', url: 'http://www.openthesis.org/', color: 'text-slate-600' }
];

const JOURNALS_SOURCES = [
  { name: 'Acta Technica Corviniensis', short: 'ACTA', color: 'text-red-500' },
  { name: 'Advances in Electrical and Electronic Engineering', short: 'AEEE', color: 'text-blue-600' },
  { name: 'Annals of the Faculty of Engineering Hunedoara', short: 'Annals', color: 'text-[#1a2352]' },
  { name: 'Archives of Materials Science and Engineering', short: 'Archives', color: 'text-[#8B6E66]' },
  
  { name: 'Brain. Broad Research in Artificial Intelligence', short: 'BRAIN', color: 'text-rose-700' },
  { name: 'CFD Letters', short: 'CFD', color: 'text-orange-700' },
  { name: 'Canadian Journal of Learning and Technology', short: 'CJLT', color: 'text-sky-600' },
  { name: 'Crosstalk : Journal of Defense Software Engineering', short: 'Crosstalk', color: 'text-slate-700' },
  
  { name: 'Elektrika : Journal of Electrical Engineering', short: 'ELEKTRIKA', color: 'text-[#1a2352]' },
  { name: 'First Monday', short: 'fi@st', color: 'text-black' },
  { name: 'Engineering Education', short: 'Academy', color: 'text-amber-500' },
  { name: 'Intl. Journal of Advanced Electronics and Communication', short: 'IJAECS', color: 'text-blue-500' },
  
  { name: 'Indian Journal of Engineering & Materials Sciences', short: 'IJEMS', color: 'text-stone-600' },
  { name: 'International Journal of Advanced Information Technology', short: 'IJAIT', color: 'text-teal-500' },
  { name: 'JIDEG : Journal of Industrial Design and Engineering Graphics', short: 'SORGING', color: 'text-slate-800' },
  { name: 'Journal of Mechanical Engineering and Technology', short: 'JMET', color: 'text-green-600' },
  
  { name: 'Latin American Journal of Solids and Structure', short: 'LAJSS', color: 'text-blue-700' },
  { name: 'Scientific Drilling', short: 'IODP', color: 'text-[#1a2352]' },
  { name: 'Transactions on Electrical and Electronic Materials', short: 'TEEM', color: 'text-orange-600' }
];

const DATABASES_SOURCES = [
  { name: 'Bioline International', short: 'Bioline', url: 'http://www.bioline.org.br/', color: 'text-green-700' },
  { name: 'Biomed-Central(STM)', short: 'BioMed', url: 'https://www.biomedcentral.com/', color: 'text-blue-600' },
  { name: 'Public Library of Science (PLOS)', short: 'PLOS', url: 'https://plos.org/', color: 'text-red-600' },
  { name: 'Indian Journals', short: 'IndianJournals', url: 'http://www.indianjournals.com/', color: 'text-[#1a2352]' }
];

const COURSEWARES_SOURCES = [
  { name: 'Alison', short: 'ALISON', url: 'http://alison.com', color: 'text-blue-800' },
  { name: 'Academic Earth', short: 'EARTH', url: 'http://academicearth.org/online-college-courses/', color: 'text-teal-600' },
  { name: 'MOOCs-List', short: 'MoocList', url: 'http://www.mooc-list.com/', color: 'text-slate-500' },
  { name: 'Swayam', short: 'swayam', url: 'https://swayam.gov.in/', color: 'text-sky-500' },
  { name: 'NPTEL', short: 'NPTEL', url: 'http://nptel.ac.in/', color: 'text-amber-600' },
  { name: 'Open Culture', short: 'Culture', url: 'http://www.openculture.com/freeonlinecourses', color: 'text-purple-600' },
  { name: 'OCW Consortium', short: 'OCW', url: 'http://www.ocwconsortium.org/', color: 'text-slate-700' },
  { name: 'A-VIEW (Amrita Virtual Interactive e-Learning World)', short: 'A-VIEW', url: 'http://aview.in/', color: 'text-orange-500', category: 'Indian University' },
  { name: 'MIT Open Course Ware', short: 'MIT OCW', url: 'http://ocw.mit.edu/courses/', color: 'text-red-700', category: 'Foreign University' },
  { name: 'Stanford School of Engineering', short: 'Stanford', url: 'https://see.stanford.edu/Course', color: 'text-red-800', category: 'Foreign University' },
  { name: 'Webcast.berkeley online courses', short: 'Berkeley', url: 'http://webcast.berkeley.edu/', color: 'text-blue-900', category: 'Foreign University' }
];

const PATENT_SOURCES = [
  { name: 'Indian Patent Database', short: 'PFC', url: '#', color: 'text-orange-600' },
  { name: 'European Patent Database', short: 'EPO', url: '#', color: 'text-blue-700' },
  { name: 'Deutschen patent- und Markenamtes', short: 'DPMA', url: '#', color: 'text-slate-800' },
  { name: 'Australia Patents', short: 'IP Australia', url: '#', color: 'text-sky-600' }
];

export default function OpenAccessPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Premium Hero Design - Non Card layout */}
      <div className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a2352]/5 rounded-bl-[100px]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Content */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2352]/10 border border-[#1a2352]/20 mb-6">
              <Globe className="w-4 h-4 text-[#1a2352]" />
              <span className="text-[12px] font-bold text-[#1a2352] uppercase tracking-widest">Digital Resources</span>
            </div>
            <h1 className="font-serif text-[48px] lg:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6">
              Open Access
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              Open access (OA) refers to online research outputs that are free of all restrictions on access (e.g., access tolls) and free of many restrictions on use (e.g. certain copyright and license restrictions). Open access can be applied to all forms of published research output, including peer-reviewed and non peer-reviewed academic journal articles, conference papers, theses, book chapters, and monographs.
            </p>
          </motion.div>
          
          {/* Right: Featured Image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-200">
              <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop" alt="Open Access" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-8">
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em] mb-12 border-b border-gray-100 pb-8">
          <Link to="/" className="hover:text-[#1a2352] transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#1a2352] font-bold">Open Access</span>
        </nav>

        {/* Editorial Layout for Sections */}
        <div className="max-w-4xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          >
            {OPEN_ACCESS_LINKS.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a 
                  href={`#${link.id}`}
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className="group flex items-center gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-[#1a2352] transition-colors duration-500"
                >
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:bg-[#E5AA3E] transition-colors duration-500">
                    <Icon className="w-6 h-6 text-[#1a2352]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-[22px] font-bold text-[#1a2352] group-hover:text-white transition-colors duration-500">
                      {link.title}
                    </h3>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* E-Books Section */}
          <motion.div 
            id="e-books"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-24 pt-16 border-t border-gray-100 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <BookOpen className="w-8 h-8 text-[#1a2352]" />
              <h2 className="font-serif text-[36px] font-bold text-[#1a2352]">E-Books Resources</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EBOOKS_SOURCES.map((source, i) => (
                <motion.a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-20 flex items-center justify-center mb-6 w-full bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                    <span className={`font-serif text-[28px] font-black tracking-tight ${source.color}`}>
                      {source.short}
                    </span>
                  </div>
                  <h3 className="font-sans text-[15px] font-bold text-[#1a2352] leading-snug">
                    {source.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* E-Dissertations Section */}
          <motion.div 
            id="e-theses"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-24 pt-16 border-t border-gray-100 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <FileText className="w-8 h-8 text-[#1a2352]" />
              <h2 className="font-serif text-[36px] font-bold text-[#1a2352]">E-Dissertations and Theses</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {THESES_SOURCES.map((source, i) => (
                <motion.a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-20 flex items-center justify-center mb-6 w-full bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                    <span className={`font-serif text-[24px] font-black tracking-tight ${source.color}`}>
                      {source.short}
                    </span>
                  </div>
                  <h3 className="font-sans text-[14px] font-bold text-[#1a2352] leading-snug">
                    {source.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* E-Journals Section */}
          <motion.div 
            id="e-journals"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-24 pt-16 border-t border-gray-100 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <Library className="w-8 h-8 text-[#1a2352]" />
              <h2 className="font-serif text-[36px] font-bold text-[#1a2352]">E-Journals</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {JOURNALS_SOURCES.map((source, i) => (
                <motion.div 
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-16 flex items-center justify-center w-full mb-4 group-hover:scale-105 transition-transform duration-500">
                    <span className={`font-serif text-[20px] font-black tracking-tight ${source.color}`}>
                      {source.short}
                    </span>
                  </div>
                  <h3 className="font-sans text-[12px] font-medium text-gray-500 leading-snug">
                    {source.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* E-Databases Section */}
          <motion.div 
            id="e-databases"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-24 pt-16 border-t border-gray-100 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <Database className="w-8 h-8 text-[#1a2352]" />
              <h2 className="font-serif text-[36px] font-bold text-[#1a2352]">E-Databases</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {DATABASES_SOURCES.map((source, i) => (
                <motion.a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-20 flex items-center justify-center mb-6 w-full bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                    <span className={`font-serif text-[24px] font-black tracking-tight ${source.color}`}>
                      {source.short}
                    </span>
                  </div>
                  <h3 className="font-sans text-[14px] font-bold text-[#1a2352] leading-snug">
                    {source.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Open Coursewares Section */}
          <motion.div 
            id="open-coursewares"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-24 pt-16 border-t border-gray-100 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <MonitorPlay className="w-8 h-8 text-[#1a2352]" />
              <h2 className="font-serif text-[36px] font-bold text-[#1a2352]">Open Coursewares</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COURSEWARES_SOURCES.map((source, i) => (
                <motion.a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 relative"
                >
                  {source.category && (
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-white px-2 py-1 rounded-md shadow-sm">
                      {source.category}
                    </span>
                  )}
                  <div className="h-20 flex items-center justify-center mb-6 mt-4 w-full bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                    <span className={`font-serif text-[24px] font-black tracking-tight ${source.color}`}>
                      {source.short}
                    </span>
                  </div>
                  <h3 className="font-sans text-[14px] font-bold text-[#1a2352] leading-snug">
                    {source.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Patent Database Section */}
          <motion.div 
            id="patent-database"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="mt-24 pt-16 border-t border-gray-100 scroll-mt-24"
          >
            <div className="flex items-center gap-4 mb-12">
              <Lightbulb className="w-8 h-8 text-[#1a2352]" />
              <h2 className="font-serif text-[36px] font-bold text-[#1a2352]">Patent Database</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PATENT_SOURCES.map((source, i) => (
                <motion.a 
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-20 flex items-center justify-center mb-6 w-full bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-500">
                    <span className={`font-serif text-[24px] font-black tracking-tight ${source.color}`}>
                      {source.short}
                    </span>
                  </div>
                  <h3 className="font-sans text-[14px] font-bold text-[#1a2352] leading-snug">
                    {source.name}
                  </h3>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
