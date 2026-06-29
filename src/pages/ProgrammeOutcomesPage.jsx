import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, BookOpen, Target, Award, ArrowRight, Lightbulb, Zap, Users, Globe, Briefcase, ChartBar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PROGRAM_OUTCOMES = [
  { id: 'PO1', title: 'Engineering knowledge', desc: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.', icon: Lightbulb },
  { id: 'PO2', title: 'Problem analysis', desc: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.', icon: Target },
  { id: 'PO3', title: 'Design/development of solutions', desc: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety.', icon: Zap },
  { id: 'PO4', title: 'Conduct investigations of complex problems', desc: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.', icon: ChartBar },
  { id: 'PO5', title: 'Modern tool usage', desc: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities.', icon: Briefcase },
  { id: 'PO6', title: 'The engineer and society', desc: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.', icon: Users },
  { id: 'PO7', title: 'Environment and sustainability', desc: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.', icon: Globe },
  { id: 'PO8', title: 'Ethics', desc: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.', icon: Award },
  { id: 'PO9', title: 'Individual and team work', desc: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.', icon: Users },
  { id: 'PO10', title: 'Communication', desc: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports.', icon: BookOpen },
  { id: 'PO11', title: 'Project management and finance', desc: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to one\'s own work, as a member and leader in a team.', icon: ChartBar },
  { id: 'PO12', title: 'Life-long learning', desc: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.', icon: Lightbulb }
];

const COURSE_OUTCOMES = [
  { name: "Electronics & Telecommunication Engineering", color: "from-blue-500 to-cyan-400" },
  { name: "Computer Science and Engineering", color: "from-indigo-500 to-purple-500" },
  { name: "Electrical and Electronics Engineering", color: "from-emerald-500 to-teal-400" },
  { name: "M.Tech Computer Science and Engineering", color: "from-orange-500 to-amber-400" },
  { name: "Master in Business Administration (MBA)", color: "from-rose-500 to-pink-500" },
  { name: "Master of Computer Applications", color: "from-slate-700 to-slate-500" }
];

const ProgrammeOutcomesPage = () => {
  const [activeTab, setActiveTab] = useState('po');

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
              <Target className="w-4 h-4 text-[#1a2352]" />
              <span className="text-[12px] font-bold text-[#1a2352] uppercase tracking-widest">Academic Excellence</span>
            </div>
            <h1 className="font-serif text-[48px] lg:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6">
              Programme Outcomes
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              Outcome-Based Education framework defining the competencies and skills graduates will attain upon completing their programs.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-[#1a2352]/20">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop" alt="Programme Outcomes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-4 relative z-20">
        {/* Light Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 flex-wrap text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
          <Link to="/" className="hover:text-[#1a2352] transition-colors flex items-center gap-1">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={10} />
          <a href="https://academics-tat.tekkzy.com/" className="hover:text-[#1a2352] transition-colors">
            Academics
          </a>
          <ChevronRight size={10} />
          <span className="text-[#283B91]">Programme Outcomes</span>
        </nav>

        {/* Floating Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-md border border-gray-100 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('po')}
              className={`px-8 py-3 rounded-full font-bold text-[14px] uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'po' 
                  ? 'bg-[#283B91] text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[#1a2352]'
              }`}
            >
              Program Outcomes (POs)
            </button>
            <button
              onClick={() => setActiveTab('co')}
              className={`px-8 py-3 rounded-full font-bold text-[14px] uppercase tracking-wider transition-all duration-300 ${
                activeTab === 'co' 
                  ? 'bg-[#283B91] text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[#1a2352]'
              }`}
            >
              Course Outcomes (COs)
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          {activeTab === 'po' ? (
            <motion.div 
              key="po"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="font-serif text-[32px] font-bold text-[#1a2352] mb-4">Engineering Graduates will be able to:</h2>
                <p className="text-gray-600 text-[18px]">A comprehensive set of 12 distinct program outcomes defining the core competencies of our engineering graduates.</p>
              </div>

              {/* Bento Grid for POs */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {PROGRAM_OUTCOMES.map((po, idx) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    key={po.id}
                    className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#283B91]/5 to-transparent rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-150" />
                    
                    <div className="relative z-10 flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#f4f7f9] flex items-center justify-center border border-gray-100 group-hover:bg-[#283B91] group-hover:text-white transition-colors duration-300">
                        <po.icon size={24} className="text-[#283B91] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[32px] font-black text-gray-100 group-hover:text-[#283B91]/10 transition-colors">
                        {po.id}
                      </span>
                    </div>

                    <h3 className="relative z-10 font-bold text-[18px] text-[#1a2352] mb-3 group-hover:text-[#283B91] transition-colors leading-tight">
                      {po.title}
                    </h3>
                    
                    <p className="relative z-10 text-[14px] text-gray-600 leading-relaxed font-medium">
                      {po.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="co"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="font-serif text-[32px] font-bold text-[#1a2352] mb-4">Course Outcomes by Department</h2>
                <p className="text-gray-600 text-[18px]">Select a specific program to explore the detailed course-level outcomes and objectives.</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {COURSE_OUTCOMES.map((course, idx) => (
                  <motion.div
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={idx}
                  >
                    <button className="w-full bg-white group hover:bg-gray-50 rounded-[32px] p-2 pr-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-between overflow-hidden">
                      <div className="flex items-center gap-6">
                        <div className={`w-16 h-16 rounded-[24px] bg-gradient-to-br ${course.color} flex items-center justify-center shrink-0 shadow-inner`}>
                          <CheckCircle size={24} className="text-white" />
                        </div>
                        <span className="font-bold text-[16px] md:text-[18px] text-[#1a2352] text-left group-hover:text-[#283B91] transition-colors">
                          {course.name}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#283B91] transition-colors shrink-0">
                        <ArrowRight size={18} className="text-gray-400 group-hover:text-white" />
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgrammeOutcomesPage;
