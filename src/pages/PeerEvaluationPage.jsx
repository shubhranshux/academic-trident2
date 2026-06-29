import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, CheckCircle, FileText, ArrowDown, Users, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const PeerEvaluationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24 text-[#1a2352] font-sans selection:bg-[#E5AA3E]/30">
      
      {/* Light Hero Banner */}
      <div className="relative w-full min-h-[40vh] py-24 flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Peer Evaluation" 
            className="w-full h-full object-cover opacity-10 mix-blend-multiply grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#f4f7f9]" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-12 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >

            
            <h1 className="font-serif text-[48px] md:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6 tracking-tight">
              Peer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B6E66] to-[#E5AA3E]">Evaluation</span>
            </h1>
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
          <span className="text-[#8B6E66]">Peer Evaluation</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-sm"
            >
              <h2 className="font-serif text-[32px] font-bold text-[#1a2352] mb-6 border-b border-gray-100 pb-4">
                Peer Evaluation of Teaching
              </h2>
              <p className="text-[17px] leading-relaxed text-gray-600 mb-6">
                Trident Academy of Technology's policy on Evaluation, Monitoring and Review of Academic Programs and Teaching includes a requirement for teaching staff to undergo regular peer evaluation of their teaching, which also includes:
              </p>
              <ul className="space-y-4 mb-8">
                {["Course Reviews", "Topic Evaluation", "Student Evaluation of Teaching (SET)"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[16px] text-gray-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-[#E5AA3E] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200" 
                  alt="Peer Evaluation Form and Process" 
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-sm"
            >
              <h2 className="font-serif text-[32px] font-bold text-[#1a2352] mb-6 border-b border-gray-100 pb-4">
                What is peer evaluation?
              </h2>
              <div className="space-y-6 text-[17px] leading-relaxed text-gray-600">
                <p>
                  Peer evaluation is a process of collegial feedback on quality of teaching. It is a purposeful process of gathering information and evidence about the effectiveness of teaching processes and the educational environment with a view to subjecting it to constructive critical scrutiny.
                </p>
                <p>
                  It usually begins with people identifying what areas they would like feedback on, and works best where the process is reciprocal between peers. A key component of peer evaluation is peer review of current practice often based on peer observation of teaching interactions. It should always be viewed as an opportunity not a threat for both parties.
                </p>
                <div className="p-5 bg-blue-50 border-l-4 border-[#283B91] rounded-r-xl">
                  <p className="font-semibold text-[#1a2352] underline decoration-[#E5AA3E] underline-offset-4">
                    Besides, all the labs are regularly assessed by external professors and industry experts from reputed organizations to augment the implementation of quality process.
                  </p>
                </div>
              </div>
            </motion.section>

          </div>

          {/* Sidebar: Process Flowchart */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <h3 className="font-serif text-[24px] font-bold text-[#1a2352] mb-8 text-center">
                Peer Evaluation Process
              </h3>
              
              {/* Custom UI Flowchart instead of image */}
              <div className="flex flex-col items-center max-w-sm mx-auto space-y-3">
                
                {/* Step 1: Split */}
                <div className="flex w-full justify-between items-center gap-4 mb-2">
                  <div className="flex-1 bg-[#86c06a] text-white p-4 rounded-xl text-center font-bold text-sm shadow-sm relative">
                    Peer Evaluator/s Allocation
                  </div>
                  <RefreshCw size={20} className="text-gray-400 shrink-0" />
                  <div className="flex-1 bg-[#86c06a] text-white p-4 rounded-xl text-center font-bold text-sm shadow-sm">
                    Reviewee Self-Reflection
                  </div>
                </div>
                
                <ArrowDown size={24} className="text-gray-300" />
                
                <div className="w-full bg-[#a3d977] text-[#1a2352] p-4 rounded-xl text-center font-bold shadow-sm">
                  Preliminary Discussion
                </div>
                
                <ArrowDown size={24} className="text-gray-300" />
                
                <div className="w-full bg-[#5d9ce8] text-white p-4 rounded-xl text-center font-bold shadow-sm">
                  Peer Evaluation x 1 - 2
                </div>
                
                <ArrowDown size={24} className="text-gray-300" />
                
                <div className="w-full bg-[#a79bc8] text-white p-4 rounded-xl text-center font-bold shadow-sm">
                  Criteria-framed Discussion
                </div>
                
                <ArrowDown size={24} className="text-gray-300" />
                
                <div className="w-full bg-[#e89d5d] text-white p-4 rounded-xl text-center font-bold shadow-sm">
                  Summarise Outcomes
                </div>
                
              </div>
              
              <div className="mt-12 bg-[#f9fafb] p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E5AA3E]/20 flex items-center justify-center shrink-0">
                  <FileText size={20} className="text-[#D3494B]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2352] mb-1">Download Forms</h4>
                  <p className="text-[13px] text-gray-500 mb-3">Access the official peer evaluation rubrics and feedback forms.</p>
                  <button className="text-[12px] font-bold text-[#283B91] hover:text-[#E5AA3E] transition-colors uppercase tracking-wider">
                    Download PDF &rarr;
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PeerEvaluationPage;
