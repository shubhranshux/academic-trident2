import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Users, Award, Briefcase, FileText, Download, Shield, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONVENOR = { id: 1, name: "Dr. Deba Narayan Pattanayak", designation: "Principal, TAT", status: "Convenor" };

const EXTERNAL_MEMBERS = [
  { id: 2, name: "Dr. Debi Prasad Dogra", designation: "Head, Dept of CSE, IIT, Bhubaneswar", status: "Academic Rep", type: "academic" },
  { id: 3, name: "Dr. Subhendu Rath", designation: "Dy. Registrar, BPUT, Rourkela", status: "Academic Rep", type: "academic" },
  { id: 4, name: "Dr. S. Jayanthu", designation: "Prof & Head, Mining Engg. NIT, Rourkela", status: "Academic Rep", type: "academic" },
  { id: 5, name: "Dr. D. P. Swain", designation: "Consultant, TCS, Bhubaneswar", status: "Industry Rep", type: "industry" },
  { id: 6, name: "Mr. Alok Kumar Pal", designation: "Director, Odisha Mining Corporation", status: "Industry Rep", type: "industry" },
];

const INTERNAL_MEMBERS = [
  { id: 7, name: "Prof. Pravat Kumar Mohanty", designation: "Professor & Dean, SoB, TAT", status: "Member" },
  { id: 8, name: "Dr. Abhaya Kumar Samal", designation: "Professor & Dean, SoC, TAT", status: "Member" },
  { id: 9, name: "Prof. P. K. Sahoo", designation: "Professor & HoD, Dept. of EEE, TAT", status: "Member" },
  { id: 10, name: "Dr. Sakuntala Mahapatra", designation: "Professor & Dean, SoE, TAT", status: "Member" },
  { id: 11, name: "Dr. A. K. Sahoo", designation: "Professor & HoD, Mech. Engg., TAT", status: "Member" }
];

const MOM_DOCS = [
  { id: 1, title: "Minutes of Meeting", date: "July 30, 2025" },
  { id: 2, title: "Minutes of Meeting", date: "Jan 03, 2025" }
];

const AcademicAdvisoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24 text-[#1a2352] font-sans selection:bg-[#10b981]/30">
      
      {/* Premium Hero Design — Non Card */}
      <div className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a2352]/5 rounded-bl-[100px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#1a2352]/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2352]/10 border border-[#1a2352]/20 mb-6">
              <Users className="w-4 h-4 text-[#1a2352]" />
              <span className="text-[12px] font-bold text-[#1a2352] uppercase tracking-widest">Academic Governance</span>
            </div>
            <h1 className="font-serif text-[48px] lg:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6">
              Academic Advisory
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              Expert advisory board guiding academic strategy, curriculum development, and institutional growth through industry collaboration.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-[#1a2352]/20">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop" alt="Academic Advisory" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 xl:px-12 mt-4 relative z-20">
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
          <span className="text-[#10b981]">Advisory Body</span>
        </nav>

        {/* Section 1: The Convenor (Hero Card) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative bg-white rounded-[32px] p-1 border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-500 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/5 to-[#0ea5e9]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="bg-white rounded-[28px] p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-24 h-24 shrink-0 rounded-full bg-gradient-to-tr from-[#10b981] to-[#0ea5e9] p-[2px]">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <Award size={40} className="text-[#10b981]" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-[#0ea5e9] text-[13px] font-bold uppercase tracking-widest mb-2">Council Convenor</div>
                <h2 className="font-serif text-[32px] md:text-[40px] font-bold text-[#1a2352] mb-2">{CONVENOR.name}</h2>
                <p className="text-gray-600 font-medium text-[18px] md:text-[20px]">{CONVENOR.designation}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 2 & 3 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-20">
          
          {/* External Representatives */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-200">
                <Briefcase size={20} className="text-[#0ea5e9]" />
              </div>
              <h3 className="font-serif text-[28px] font-bold text-[#1a2352]">External Representatives</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXTERNAL_MEMBERS.map((member, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={member.id}
                  className="py-12 border-b border-gray-100 last:border-0 hover:shadow-md hover:border-[#10b981]/30 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${member.type === 'academic' ? 'bg-[#0ea5e9]/10 text-[#0ea5e9] border-[#0ea5e9]/20' : 'bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20'}`}>
                      {member.status}
                    </div>
                  </div>
                  <h4 className="font-serif text-[20px] font-bold text-[#1a2352] mb-2 group-hover:text-[#0ea5e9] transition-colors">{member.name}</h4>
                  <p className="text-gray-500 font-medium text-[14px] leading-relaxed">{member.designation}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Internal Members List */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-gray-200">
                <GraduationCap size={20} className="text-[#10b981]" />
              </div>
              <h3 className="font-serif text-[28px] font-bold text-[#1a2352]">Internal Members</h3>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-2">
              {INTERNAL_MEMBERS.map((member, idx) => (
                <div key={member.id} className="p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
                  <h4 className="text-[16px] font-bold text-[#1a2352] mb-1">{member.name}</h4>
                  <p className="text-gray-500 font-medium text-[13px]">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Downloads */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-200 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/5 to-[#0ea5e9]/5 opacity-50" />
          
          <div className="absolute -right-20 -top-20 opacity-5 blur-[1px] group-hover:scale-110 transition-transform duration-700">
            <FileText size={250} className="text-[#10b981]" />
          </div>
          
          <div className="relative z-10 text-center md:text-left">
            <h3 className="font-serif text-[32px] font-bold text-[#1a2352] mb-2">Minutes of Meeting</h3>
            <p className="text-gray-600 font-medium text-[16px] max-w-xl">Access the official records and strategic decisions from our half-yearly advisory board sessions.</p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {MOM_DOCS.map(doc => (
              <button key={doc.id} className="bg-white hover:bg-gray-50 border border-gray-200 shadow-sm px-6 py-4 rounded-2xl flex items-center gap-4 transition-all duration-300 group/btn hover:shadow-md hover:border-[#10b981]/30">
                <div className="text-left">
                  <div className="font-bold text-[13px] text-[#1a2352] uppercase tracking-wider mb-1">{doc.date}</div>
                  <div className="text-[11px] text-gray-500 font-medium group-hover/btn:text-[#10b981] transition-colors">Download PDF</div>
                </div>
                <Download size={18} className="text-[#10b981]" />
              </button>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AcademicAdvisoryPage;
