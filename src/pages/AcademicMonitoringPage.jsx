import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Shield, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors focus:outline-none"
      >
        <h3 className="font-serif text-[22px] font-bold text-[#1a2352]">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0"
        >
          <ChevronDown size={18} className="text-[#E5AA3E]" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 mt-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AcademicMonitoringPage = () => {
  const [openSection, setOpenSection] = useState('vision');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24 text-[#1a2352] font-sans selection:bg-[#E5AA3E]/30">
      
      {/* Premium Hero Design — Non Card */}
      <div className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a2352]/5 rounded-bl-[100px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1a2352]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2352]/10 border border-[#1a2352]/20 mb-6">
              <Shield className="w-4 h-4 text-[#1a2352]" />
              <span className="text-[12px] font-bold text-[#1a2352] uppercase tracking-widest">Academic Governance</span>
            </div>
            <h1 className="font-serif text-[48px] lg:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6">
              Academic Monitoring
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              A diagnostic approach cross-referencing curriculum & instructional elements to provide guidance and support in improving curriculum implementation.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-[#1a2352]/20">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" alt="Academic Monitoring" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto px-6 xl:px-12 mt-4 relative z-20">
        {/* Light Breadcrumbs */}
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
          <Link to="/" className="hover:text-[#1a2352] transition-colors flex items-center gap-1">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={10} />
          <a href="https://academics-tat.tekkzy.com/" className="hover:text-[#1a2352] transition-colors">
            Academics
          </a>
          <ChevronRight size={10} />
          <span className="text-[#E5AA3E]">Monitoring Council</span>
        </nav>

        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-white p-8 rounded-[32px] border border-gray-200 shadow-sm"
        >
          <p className="text-[18px] leading-relaxed text-gray-600 font-medium">
            Academic Monitoring System is a diagnostic approach, cross referencing between curriculum & instructional elements. It is expected to provide guidance & support in improving the curriculum implementation at institute level. High quality monitoring programs can help institute & faculty maintain enthusiasm. If teaching is not systematically planned, learning may not occur.
          </p>
        </motion.div>

        {/* Accordions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <AccordionItem 
            title="Vision and Mission of the Council" 
            isOpen={openSection === 'vision'}
            onClick={() => setOpenSection(openSection === 'vision' ? '' : 'vision')}
          >
            <div className="space-y-8">
              <div>
                <h4 className="text-[#1a2352] font-bold text-[18px] mb-3 uppercase tracking-wider border-b border-gray-100 pb-2">Vision</h4>
                <p className="text-[16px] leading-relaxed text-gray-600">
                  To relentlessly foster an enabling environment of teaching and learning at international standards through an efficient academic monitoring system.
                </p>
              </div>
              
              <div>
                <h4 className="text-[#1a2352] font-bold text-[18px] mb-4 uppercase tracking-wider border-b border-gray-100 pb-2">Mission</h4>
                <ul className="space-y-4">
                  {[
                    "To maintain an effective diagnostic approach towards all learners irrespective of their standards.",
                    "To address the subject wise weakness for all the students through sufficient tutorial classes.",
                    "To lay priority on regular assignments and surprise tests during the course of semester classes.",
                    "Provision of smart class room to all sections for better understanding and dissemination of subject matters."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <CheckCircle2 size={20} className="text-[#283B91] shrink-0 mt-0.5" />
                      <span className="text-[16px] leading-relaxed text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Key Parameters" 
            isOpen={openSection === 'parameters'}
            onClick={() => setOpenSection(openSection === 'parameters' ? '' : 'parameters')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Implementation of suggestions of Academic Advisory Board",
                "Planning of external linkage",
                "Time table preparation",
                "Mode of lesson delivery",
                "Mandatory attendance",
                "Home assignments",
                "Examination",
                "Event calendar preparation",
                "Classes for weaker students",
                "Laboratory and sessionals",
                "Feedback systems",
                "Library"
              ].map((param, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-[#E5AA3E]/50 hover:bg-white hover:shadow-sm transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-[#E5AA3E] shrink-0" />
                  <span className="text-[#1a2352] font-semibold">{param}</span>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Members of the Council" 
            isOpen={openSection === 'members'}
            onClick={() => setOpenSection(openSection === 'members' ? '' : 'members')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Dr. A. Baral", dept: "Academic Monitoring Committee", phone: "9337779181", email: "deanssh@tat.ac.in" },
                { name: "Manoj Kumar Rath", dept: "Engineering", phone: "9937171553", email: "manoj.rath@tat.ac.in" },
                { name: "Sudhansu Ranjan Lenka", dept: "CSE", phone: "9937245866", email: "sudhansu.lenka@tat.ac.in" },
                { name: "Minu Samantaray", dept: "ETC", phone: "9692304848", email: "minu.samantaray@tat.ac.in" }
              ].map((member, idx) => (
                <div key={idx} className="flex flex-col gap-2 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-[#1a2352] font-bold text-[18px]">{member.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-[#283B91]/10 text-[#283B91] rounded-md">
                      {member.dept}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-col gap-2 text-[14px] text-gray-600 font-medium">
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">📧</span> {member.email}
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">📱</span> {member.phone}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionItem>
        </motion.div>

      </div>
    </div>
  );
};

export default AcademicMonitoringPage;
