import React from 'react';
import { Home, ChevronRight, Search, Database, LockOpen, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CatalogueSearchPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Premium Hero Section */}
      <div className="relative pt-36 pb-32 overflow-hidden bg-[#1A1817]">
        {/* Subtle abstract background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] rotate-12 bg-gradient-to-br from-[#283B91]/20 to-transparent blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[100%] -rotate-12 bg-gradient-to-tl from-[#E5AA3E]/20 to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10 text-center flex flex-col items-center">
          {/* Breadcrumb - Light Version */}
          <div className="flex items-center text-xs font-medium text-white/60 tracking-wider uppercase mb-12 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10">
            <Link to="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-white/40" />
            <span>Academics</span>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-white/40" />
            <span>Learning Resources</span>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-white/40" />
            <span className="text-[#E5AA3E] font-bold">Catalogue Search</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[72px] font-serif font-black text-white leading-tight tracking-tight mb-6 uppercase"
          >
            Catalogue <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5AA3E] to-[#F0D59D] italic font-light">Search</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-[18px] md:text-[22px] max-w-2xl font-medium leading-relaxed"
          >
            Seamlessly search, discover, and manage extensive collections of books, journals, and digital media across all campus libraries.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1200px] mx-auto px-6 xl:px-12 -mt-16 relative z-20 pb-32">
        
        {/* Systems Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* System 1: LIST */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-3xl p-10 border border-[#EFE7DF] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl shadow-blue-900/10 relative overflow-hidden group flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#283B91] to-[#1A2660] opacity-5 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#283B91] to-[#1A2660] shadow-lg shadow-[#283B91]/30">
                <Database className="w-10 h-10 text-white" />
              </div>
              <div className="bg-[#FAF9F7] px-4 py-2 rounded-full border border-[#EFE7DF] text-[10px] font-bold text-[#283B91] uppercase tracking-widest">
                Developed In-House
              </div>
            </div>
            
            <div className="flex-grow relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-black text-[#1A1817] mb-2 group-hover:text-[#283B91] transition-colors leading-tight">
                Library Information System of Trident <span className="text-[#8B6E66] block mt-1">(LIST)</span>
              </h3>
              <p className="text-[#8B6E66] text-sm font-bold uppercase tracking-wider mb-6">
                (Library Management System developed in-house)
              </p>
              <p className="text-[#495057] text-[15px] leading-relaxed font-medium mb-8">
                A custom-built, comprehensive Library Management System developed entirely in-house to cater to the specific academic and administrative needs of Trident institutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-auto pt-8 border-t border-[#EFE7DF]">
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-[#FAF9F7] hover:bg-[#283B91] text-[#283B91] hover:text-white border border-[#283B91]/20 transition-all duration-300 py-3.5 px-6 rounded-xl font-bold text-[13px] tracking-wide uppercase group/btn">
                <LockOpen className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                OPEN ACCESS
              </a>
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-[#FAF9F7] hover:bg-[#E5AA3E] text-[#8B6E66] hover:text-white border border-[#EFE7DF] transition-all duration-300 py-3.5 px-6 rounded-xl font-bold text-[13px] tracking-wide uppercase group/btn">
                <Settings className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                MANAGEMENT
              </a>
            </div>
          </motion.div>

          {/* System 2: Koha */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-3xl p-10 border border-[#EFE7DF] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl shadow-green-900/10 relative overflow-hidden group flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#006A4E] to-[#004A36] opacity-5 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#006A4E] to-[#004A36] shadow-lg shadow-[#006A4E]/30">
                <Search className="w-10 h-10 text-white" />
              </div>
              <div className="bg-[#FAF9F7] px-4 py-2 rounded-full border border-[#EFE7DF] text-[10px] font-bold text-[#006A4E] uppercase tracking-widest">
                Global Open Source
              </div>
            </div>
            
            <div className="flex-grow relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-black text-[#1A1817] mb-2 group-hover:text-[#006A4E] transition-colors leading-tight">
                Koha Library Software
              </h3>
              <p className="text-[#8B6E66] text-sm font-bold uppercase tracking-wider mb-6">
                (World's first free open source library system)
              </p>
              <p className="text-[#495057] text-[15px] leading-relaxed font-medium mb-8">
                A highly advanced, scalable, and fully featured enterprise-class integrated library system used by academic libraries worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-auto pt-8 border-t border-[#EFE7DF]">
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-[#FAF9F7] hover:bg-[#006A4E] text-[#006A4E] hover:text-white border border-[#006A4E]/20 transition-all duration-300 py-3.5 px-6 rounded-xl font-bold text-[13px] tracking-wide uppercase group/btn">
                <LockOpen className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                OPEN ACCESS
              </a>
              <a href="#" className="flex-1 flex items-center justify-center gap-2 bg-[#FAF9F7] hover:bg-[#E5AA3E] text-[#8B6E66] hover:text-white border border-[#EFE7DF] transition-all duration-300 py-3.5 px-6 rounded-xl font-bold text-[13px] tracking-wide uppercase group/btn">
                <Settings className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                MANAGEMENT
              </a>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
