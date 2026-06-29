import React from 'react';
import { Home, ChevronRight, Monitor, Globe, Database, Library, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function EResourcesPage() {
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

  const resources = [
    {
      title: "DELNET Access",
      icon: <Monitor className="w-8 h-8 text-white" />,
      stats: "1000Mbps Leased Line",
      description: "The institution is a member of DELNET as per the norm of AICTE. Students have the facilities of accessing the permitted journals of DELNET with required access codes. Available in the main reading room through ten dedicated computers.",
      color: "from-[#283B91] to-[#1A2660]",
      shadow: "shadow-blue-900/20"
    },
    {
      title: "IEEE Xplore",
      icon: <Globe className="w-8 h-8 text-white" />,
      stats: "105 downloads/month",
      description: "On-line subscriber to IEEE publication of journals and transactions. Students enjoy unlimited reading of international publications with scoped limits for downloading and printing critical articles.",
      color: "from-[#D3494B] to-[#993133]",
      shadow: "shadow-red-900/20"
    },
    {
      title: "ProQuest Engineering",
      icon: <Database className="w-8 h-8 text-white" />,
      stats: "3,224+ Collections",
      description: "A premier membership to ProQuest Engineering e-Journals, granting expansive online access to world-renowned publishers including Springer, Elsevier, and Oxford.",
      color: "from-[#00629B] to-[#003B5C]",
      shadow: "shadow-cyan-900/20"
    },
    {
      title: "ebrary Science & Tech",
      icon: <Library className="w-8 h-8 text-white" />,
      stats: "48,000+ eBooks",
      description: "The library has subscribed to ebrary (ProQuest) covering deep science and technology topics. Enjoy a massive digital collection with unlimited printing options for academic excellence.",
      color: "from-[#E5AA3E] to-[#B3822B]",
      shadow: "shadow-yellow-900/20"
    }
  ];

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
            <span className="text-[#E5AA3E] font-bold">E-Resources</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[48px] md:text-[72px] font-serif font-black text-white leading-tight tracking-tight mb-6"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5AA3E] to-[#F0D59D] italic font-light">E-Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-[18px] md:text-[22px] max-w-2xl font-medium leading-relaxed"
          >
            Empowering your academic journey with instant access to thousands of premium international journals, ebooks, and research databases.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 -mt-16 relative z-20 pb-32">
        
        {/* Bento Grid for Resources */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {resources.map((resource, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`bg-white rounded-3xl p-8 md:p-10 border border-[#EFE7DF] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl ${resource.shadow} relative overflow-hidden group`}
            >
              {/* Decorative Gradient Blob */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${resource.color} opacity-5 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-150`}></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${resource.color} shadow-lg shadow-black/10`}>
                  {resource.icon}
                </div>
                <div className="bg-[#FAF9F7] px-4 py-2 rounded-full border border-[#EFE7DF] text-sm font-bold text-[#283B91]">
                  {resource.stats}
                </div>
              </div>
              
              <h3 className="text-2xl font-serif font-black text-[#1A1817] mb-4 relative z-10 group-hover:text-[#283B91] transition-colors">
                {resource.title}
              </h3>
              <p className="text-[#495057] text-[16px] leading-relaxed relative z-10 font-medium">
                {resource.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Partners Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <div className="text-center mb-12">
             <h3 className="text-[14px] font-bold uppercase tracking-[0.2em] text-[#8B6E66]">Integrated Portals & Partners</h3>
             <div className="w-16 h-1 bg-[#E5AA3E] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="bg-white border border-[#EFE7DF] rounded-3xl p-10 md:p-16 shadow-xl shadow-black/5">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-700">
              
              {/* IEEE */}
              <a href="https://ieeexplore.ieee.org/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transition-transform cursor-pointer">
                <div className="text-xl font-bold text-[#00629B] tracking-tight">IEEE Xplore<sup className="text-xs">®</sup></div>
                <div className="text-[#F26422] text-[10px] font-bold uppercase italic">Digital Library</div>
              </a>
              
              {/* ScienceDirect */}
              <a href="https://www.sciencedirect.com/" target="_blank" rel="noopener noreferrer" className="border-[2px] border-[#333] flex items-center justify-center p-2 h-16 w-32 relative hover:scale-110 transition-transform cursor-pointer bg-[#F5F5F5]">
                 <div className="absolute right-1 top-1 bg-[#81B135] text-white text-[8px] px-1.5 py-0.5 rounded-sm z-10">ScienceDirect</div>
                 <div className="absolute bottom-1 left-2 text-[#E77817] font-serif text-sm z-10">ELSEVIER</div>
              </a>

              {/* ebrary */}
              <a href="https://ebookcentral.proquest.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:scale-110 transition-transform cursor-pointer">
                <div className="text-[#004A99] font-black text-3xl mb-0 italic leading-none">e</div>
                <div className="font-bold text-lg tracking-tight -mt-1">ebrary</div>
              </a>

              {/* Institutional Repository */}
              <a href="#" className="flex flex-col items-center justify-center leading-none text-[#CC0000] font-serif hover:scale-110 transition-transform cursor-pointer">
                <div className="flex items-end">
                   <span className="text-3xl font-normal">I</span>
                   <span className="text-black text-sm font-bold mb-1">nstitutional</span>
                </div>
                <div className="flex items-end -mt-1">
                   <span className="text-3xl font-normal">R</span>
                   <span className="text-black text-sm font-bold mb-1">epository</span>
                </div>
              </a>

              {/* National Digital Library */}
              <a href="https://ndl.iitkgp.ac.in/" target="_blank" rel="noopener noreferrer" className="bg-[#1A311A] text-white p-2 flex items-center gap-2 w-full justify-center rounded-sm hover:scale-110 transition-transform cursor-pointer">
                 <div className="w-6 h-6 rounded-full border-2 border-white opacity-50 flex-shrink-0"></div>
                 <div className="text-left leading-tight">
                   <div className="font-serif text-sm">National</div>
                   <div className="font-sans text-[10px]">Digital Library</div>
                 </div>
              </a>

              {/* ProQuest */}
              <a href="https://www.proquest.com/" target="_blank" rel="noopener noreferrer" className="bg-[#007080] text-white px-4 py-2 font-serif text-lg rounded-sm hover:scale-110 transition-transform cursor-pointer">
                 ProQuest
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
