import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Database, ArrowRight, CheckCircle } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

export default function DigitalResourcesPage() {
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
              <Database className="w-4 h-4 text-[#1a2352]" />
              <span className="text-[12px] font-bold text-[#1a2352] uppercase tracking-widest">Digital Resources</span>
            </div>
            <h1 className="font-serif text-[48px] lg:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6">
              Digital Resources
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              Offers a range of digital content including e-books, online databases, and multimedia learning tools.
            </p>
          </motion.div>
          
          {/* Right: Featured Image */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-200">
              <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000&auto=format&fit=crop" alt="Digital Resources" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-8">
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em] mb-12 border-b border-gray-100 pb-8">
          <Link to="/" className="hover:text-[#1a2352] transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
          <ChevronRight size={10} />
          <span className="text-[#1a2352] font-bold">Digital Resources</span>
        </nav>

        {/* Editorial Layout for Sections */}
        <div className="max-w-4xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-12"
          >
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              className="py-8 border-b border-gray-100 last:border-0"
            >
              <h3 className="font-serif text-[28px] font-bold text-[#1a2352] mb-4">E-Books & E-Journals</h3>
              <p className="text-gray-600 text-[16px] leading-[1.9]">
                Access over 50,000+ e-books and 10,000+ e-journals across various engineering, management, and biotechnology disciplines.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#1a2352] font-bold text-[13px] uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors">
                <span>Access Portal</span>
                <ArrowRight size={16} />
              </div>
            </motion.div>
    
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              className="py-8 border-b border-gray-100 last:border-0"
            >
              <h3 className="font-serif text-[28px] font-bold text-[#1a2352] mb-4">Online Databases</h3>
              <p className="text-gray-600 text-[16px] leading-[1.9]">
                Direct access to premium databases like IEEE Xplore, ScienceDirect, SpringerLink, and ACM Digital Library.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#1a2352] font-bold text-[13px] uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors">
                <span>Access Portal</span>
                <ArrowRight size={16} />
              </div>
            </motion.div>
    
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
              className="py-8 border-b border-gray-100 last:border-0"
            >
              <h3 className="font-serif text-[28px] font-bold text-[#1a2352] mb-4">Multimedia Learning</h3>
              <p className="text-gray-600 text-[16px] leading-[1.9]">
                NPTEL video lectures, interactive simulations, and technical webinars available on-demand for all students.
              </p>
              <div className="mt-6 flex items-center gap-2 text-[#1a2352] font-bold text-[13px] uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors">
                <span>Access Portal</span>
                <ArrowRight size={16} />
              </div>
            </motion.div>
    
          </motion.div>
        </div>
      </div>
    </div>
  );
}
