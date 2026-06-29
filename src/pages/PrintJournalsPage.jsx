import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, FileText, Globe, Newspaper, ArrowRight, ChevronDown } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const DEPARTMENTS = [
  {
    name: "Electronics & Telecomm. Engineering",
    journals: [
      { sl: 1, name: "International Journal of Aerospace & Electronics Systems", code: "4421-1399" },
      { sl: 2, name: "Ind Jnl of Nano System Technology Electrical Engg & & Electronics System HY II", code: "11084" },
      { sl: 3, name: "International Journal of Advances in Circuits and Systems", code: "4421-1398" },
      { sl: 4, name: "International Journal of Advances VLSI Design", code: "2229-7405" },
      { sl: 5, name: "International Journal of Electronics, Computing and Engineering Education", code: "2229-7340" },
      { sl: 6, name: "Indian Journal of Nanomaterials & Technology", code: "11084" },
      { sl: 7, name: "Int. Jnl of Research in Signal Processing, Computing & Communication", code: "PIG" },
      { sl: 8, name: "Science & Culture M II", code: "10158" },
      { sl: 9, name: "IETE Journal of Research BM II", code: "12624" },
      { sl: 10, name: "IETE Journal of Technical Review   BM II", code: "12624" },
      { sl: 11, name: "International Journal of Material Science and Electronics Research", code: "0976-6111" }
    ]
  },
  { 
    name: "Electrical & Electronics Engineering",
    journals: [
      { sl: 1, name: "IEEMA Journal II", code: "10047" },
      { sl: 2, name: "Resonance M II", code: "10134" },
      { sl: 3, name: "International Journal of Control Theory and Applications (IJCTA)", code: "0975-5572" },
      { sl: 4, name: "International Journal of Electrical Energy Systems (IJEESS)", code: "0975-7147" },
      { sl: 5, name: "International Journal of Innovations in Electrical Power Systems", code: "0975-5306" },
      { sl: 6, name: "Int. Journal of Electronic Power Systems & Engineering Conversion", code: "4421-1335" }
    ]
  },
  { 
    name: "Electrical Engineering",
    journals: [
      { sl: 1, name: "Ind Jnl of Power Engineering & Green Technology", code: "11084" },
      { sl: 2, name: "Electrical India M II Current", code: "10043" },
      { sl: 3, name: "Indian Journal of Mechatronics and Applications", code: "13035" },
      { sl: 4, name: "Current development in Electrical Engineering", code: "12894" },
      { sl: 5, name: "International Journal of Electrical Engineering System Research", code: "4421-1397" },
      { sl: 6, name: "International Journal of Power Engg (IJPE)", code: "0975-380X" }
    ]
  },
  { 
    name: "Computer Sc. & Engineering",
    journals: [
      { sl: 1, name: "Indian Journal of Software Engg Research & Development", code: "13102" },
      { sl: 2, name: "Int. Journal of Data Mining", code: "PIG" },
      { sl: 3, name: "Indian Journal of Information Science and Education Technology", code: "13035" },
      { sl: 4, name: "International Journal of Computational Intelligence Research and Applications", code: "0973-6794" },
      { sl: 5, name: "International Journal of Computer Sciences, Systems Engineering and Information Technology", code: "0974-5807" },
      { sl: 6, name: "Indian Journal of Information Security & Computer", code: "12894" },
      { sl: 7, name: "Ind. Journal of Wireless & mobile Communications", code: "12894" },
      { sl: 8, name: "Indian Journal of Image Processing and Technique", code: "12894" },
      { sl: 9, name: "Journal of Cybernetics and Systems (JCS)", code: "0974-5459" },
      { sl: 10, name: "International Journal of Applied Computing (IJAC)", code: "0974-6277" },
      { sl: 11, name: "Journal of Scientific & Technical Research", code: "PIG" }
    ]
  },
  { 
    name: "Information Technology",
    journals: [
      { sl: 1, name: "Ind. Jnl. of Information & Communication Systems", code: "13035" },
      { sl: 2, name: "Intl. Journal of Scientific Computing HY II", code: "11084" },
      { sl: 3, name: "Indian Journal of Computing & Applications HY II", code: "13035" },
      { sl: 4, name: "Journal of High Performance Communication HY Systems and Networking", code: "11084" },
      { sl: 5, name: "Jnl. of Neural Systems Theory & Applications HY", code: "11084" },
      { sl: 6, name: "Int. Journal of Distributed & Cloud Computing HY", code: "PIG" }
    ]
  },
  { 
    name: "Mechanical Engineering",
    journals: [
      { sl: 1, name: "International Journal of Fluid Mechanics", code: "0975-4199" },
      { sl: 2, name: "Journal of Mechanics and MEMS (JMM)", code: "11084" },
      { sl: 3, name: "Ind. Journal of Mechanics and Solids HY", code: "-" },
      { sl: 4, name: "Industrial Automation M II", code: "11735" },
      { sl: 5, name: "Ind. Jnl of Manufacturing Systems Research", code: "13035" },
      { sl: 6, name: "Cooling India BM II", code: "10043" }
    ]
  },
  { 
    name: "Civil Engineering",
    journals: [
      { sl: 1, name: "International Journal of Civil Engineering and construction Technology HY", code: "11084" },
      { sl: 2, name: "International Journal of Geotechnics and Environment HY", code: "11084" },
      { sl: 3, name: "Indian journal of Structural Design and Construction HY", code: "RIP" },
      { sl: 4, name: "International journal of modern Production Engg HY", code: "RIP" },
      { sl: 5, name: "International Journal of Civil Engg. Architecture", code: "-" },
      { sl: 6, name: "Indian Journal of Materials and Structural Systems HY", code: "GRP" },
      { sl: 7, name: "Intl. Journal of Engineering under Uncertainty, Hazards, Assessment & Mitigation II HY", code: "11084" }
    ]
  },
  { 
    name: "Humanities",
    journals: [
      { sl: 1, name: "University News", code: "10343" },
      { sl: 2, name: "Journal of Genetics", code: "-" },
      { sl: 3, name: "Annals of Library & Information Studies Q II", code: "10003" }
    ]
  },
  { 
    name: "MBA",
    journals: [
      { sl: 1, name: "Indian Journal Management And Technology HY II", code: "-" },
      { sl: 2, name: "Journal of Business Management HY II", code: "-" },
      { sl: 3, name: "Howard Business Review M II", code: "-" },
      { sl: 4, name: "International Journal of Business Analysis & Intelligence HY II", code: "-" },
      { sl: 5, name: "Indian Journal of Logistics and Supply Chain Management HY II", code: "-" },
      { sl: 6, name: "Indian Journal of Finance M II", code: "-" },
      { sl: 7, name: "Indian Journal of Human Resources Development and Management", code: "-" },
      { sl: 8, name: "Prabandhan – Indian Journal of Management M II", code: "-" },
      { sl: 9, name: "Indian Journal of Economics & Research. (Arthshstra)", code: "-" },
      { sl: 10, name: "Indian Journal of Marketing M II.", code: "-" },
      { sl: 11, name: "Jnl of Entrepreneurship 2Nos.", code: "-" },
      { sl: 12, name: "Indian Jnl of International Business & Finance HY II", code: "-" }
    ]
  },
  { 
    name: "MCA",
    journals: [
      { sl: 1, name: "Journal of Analysis and Computation HY II", code: "-" },
      { sl: 2, name: "International Journal of Data Analysis and Information Systems (IJDAIS)", code: "-" },
      { sl: 3, name: "Ind. Jnl of Embedded Software & Open Source Systems HY II", code: "-" },
      { sl: 4, name: "Indian Journal of Advanced In Multimedia", code: "-" },
      { sl: 5, name: "Ind. Jnl of Grid Computing and Multi Agent Systems HY II", code: "-" },
      { sl: 6, name: "Journal of Software Engineering and Technology HY II", code: "-" },
      { sl: 7, name: "Journal of Software Project Management and Quality Assurance HY II", code: "-" },
      { sl: 8, name: "Journal of Advance Research in Computer Engineering HY II", code: "-" },
      { sl: 9, name: "Indian Journal of Industrial Informatics", code: "-" },
      { sl: 10, name: "Current Science-", code: "-" },
      { sl: 11, name: "IMS Journal of Information Technology BM II", code: "-" },
      { sl: 12, name: "Ind. Jnl of Nanotechnology & Applications", code: "-" }
    ]
  }
];

const MAGAZINES = [
  "Competition Success Review", "Voice & Data",
  "Pratiyogita Darpan", "Bio Spectrum",
  "Banking Services Chronicle", "Electronics for You",
  "Current Affairs", "Digit (with DVD)",
  "Chronicle (Civil Services)", "Economic & Political (Weekly)",
  "Overdrives", "Open Source",
  "PC Quest", "Business Manager Magazine",
  "Data Quest"
];

const NEWSPAPERS = [
  "Dharitri", "The New Indian Express",
  "The Samaj", "The Times of India",
  "Sambad", "The Hindu",
  "Prameya", "The Employment News",
  "Nava Bharat", "The Economic Times"
];

const PRINT_JOURNALS = [
  { name: "Indian Journal of Radio & Space Physics BM II", url: "www.niscair.res.in" },
  { name: "IETE Journal of Technical Review BM II", url: "http://www.ietejournal.org/" },
  { name: "IETE Journal of Technical Research BM II", url: "http://www.ietejournal.org/" },
  { name: "Science & Culture – 12 nos.", url: "www.scienceandculture-isna.org" },
  { name: "IEEMA Journal II", url: "www.ieema.org" },
  { name: "Resonance M II", url: "www.ias.ac.in/resonance" },
  { name: "Journal of the Indian Institute of Science", url: "www.iiscpress.iisc.in" },
  { name: "Journal of Earth System Science", url: "www.ias.ac.in/jess" },
  { name: "Ind. Jnl of Engineering & Material Sc. BM II", url: "www.niscair.res.in" },
  { name: "Ind Jnl of Pure and Applied Physics M II", url: "http://www.niscair.res.in/" },
  { name: "PRAMANA Journal of Physics M II", url: "http://www.ias.ac.in/pramana/" },
  { name: "Journal of Chemical Science BM II", url: "http://www.ias.ac.in/chemsci/" },
];

export default function PrintJournalsPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [expandedDept, setExpandedDept] = useState("Electronics & Telecomm. Engineering");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Premium Hero Design - Non Card layout */}
      <div className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a2352]/5 rounded-bl-[100px]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2352]/10 border border-[#1a2352]/20 mb-6">
              <BookOpen className="w-4 h-4 text-[#1a2352]" />
              <span className="text-[12px] font-bold text-[#1a2352] uppercase tracking-widest">Digital Resources</span>
            </div>
            <h1 className="font-serif text-[48px] lg:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6">
              Print Journals
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              A comprehensive collection of national and international print journals, magazines, and newspapers supporting academic excellence.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-200">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop" alt="Print Journals" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-8">
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em] mb-12 border-b border-gray-100 pb-8">
          <Link to="/" className="hover:text-[#1a2352] transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#1a2352] font-bold">Print Journals</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Depts, Magazines, Newspapers */}
          <div className="lg:col-span-5 flex flex-col gap-16">
            
            {/* Departments */}
            <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <h2 className="font-serif text-[24px] font-bold text-[#1a2352]">Department Subscriptions</h2>
              </div>
              <ul className="flex flex-col gap-3">
                {DEPARTMENTS.map((dept, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex flex-col bg-gray-50 rounded-lg overflow-hidden border border-gray-100/50">
                    <button 
                      onClick={() => setExpandedDept(expandedDept === dept.name ? null : dept.name)}
                      className="flex items-center justify-between p-4 hover:bg-gray-100 transition-colors w-full text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1a2352]/40" />
                        <span className="text-[#1a2352] text-[15px] font-bold">{dept.name}</span>
                      </div>
                      {dept.journals && (
                        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedDept === dept.name ? 'rotate-180' : ''}`} />
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {expandedDept === dept.name && dept.journals && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: "auto", opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 bg-gray-50">
                            <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto shadow-sm">
                              <table className="w-full text-left border-collapse min-w-[500px]">
                                <thead>
                                  <tr className="bg-gray-100/50 border-b border-gray-200">
                                    <th className="py-3 px-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-12 text-center">Sl</th>
                                    <th className="py-3 px-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Journals Name</th>
                                    <th className="py-3 px-4 text-[11px] font-bold text-gray-500 uppercase tracking-wider w-36">Publication Code</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {dept.journals.map((j, idx) => (
                                    <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/30 transition-colors last:border-0">
                                      <td className="py-3 px-4 text-center text-[13px] font-medium text-gray-400">{j.sl}</td>
                                      <td className="py-3 px-4 text-[14px] text-[#1a2352] font-medium leading-snug">{j.name}</td>
                                      <td className="py-3 px-4 text-[13px] text-gray-500 font-mono bg-gray-50/50">{j.code}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </motion.section>

            {/* Magazines */}
            <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6 pt-10 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-rose-600" />
                </div>
                <h2 className="font-serif text-[24px] font-bold text-[#1a2352]">Magazines</h2>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {MAGAZINES.map((mag, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-rose-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px] leading-snug">{mag}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Newspapers */}
            <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6 pt-10 border-t border-gray-100">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                  <Newspaper className="w-4 h-4 text-amber-600" />
                </div>
                <h2 className="font-serif text-[24px] font-bold text-[#1a2352]">News Papers</h2>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {NEWSPAPERS.map((paper, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-amber-300 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 text-[14px] leading-snug">{paper}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Right Column: Print Journal Websites */}
          <div className="lg:col-span-7">
            <motion.section variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h2 className="font-serif text-[32px] font-bold text-[#1a2352]">Print Journal Websites</h2>
                </div>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="py-4 px-6 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Journal Title</th>
                      <th className="py-4 px-6 text-[12px] font-bold text-gray-500 uppercase tracking-wider">Website URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRINT_JOURNALS.map((journal, i) => (
                      <motion.tr key={i} variants={itemVariants} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors last:border-0">
                        <td className="py-4 px-6">
                          <span className="font-medium text-[#1a2352] text-[15px]">{journal.name}</span>
                        </td>
                        <td className="py-4 px-6">
                          <a 
                            href={journal.url.startsWith('http') ? journal.url : `http://${journal.url}`}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#283B91] hover:text-[#E5AA3E] text-[14px] transition-colors underline underline-offset-4 decoration-[#283B91]/20 hover:decoration-[#E5AA3E]"
                          >
                            {journal.url.replace(/^https?:\/\//, '')}
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.section>
          </div>

        </div>
      </div>
    </div>
  );
}
