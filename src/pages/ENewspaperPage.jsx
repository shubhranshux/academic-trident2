import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Globe, Newspaper } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const REGIONAL_NEWSPAPERS = [
  { name: 'The Samaja', url: 'https://samajaepaper.com/', domain: 'samajaepaper.com' },
  { name: 'The Sambad', url: 'https://sambadepaper.com/', domain: 'sambad.in' },
  { name: 'Dharitri', url: 'https://dharitriepaper.in/', domain: 'dharitri.com' },
  { name: 'Pragativadi', url: 'https://pragativadi.com/', domain: 'pragativadi.com' }
];

const NATIONAL_NEWSPAPERS = [
  { name: 'Dainik Jagran', url: 'https://epaper.jagran.com/', domain: 'jagran.com' },
  { name: 'The Times of India', url: 'https://epaper.timesgroup.com/', domain: 'timesofindia.indiatimes.com' },
  { name: 'The New Indian Express', url: 'https://epaper.newindianexpress.com/', domain: 'newindianexpress.com' },
  { name: 'The Economic Times', url: 'https://economictimes.indiatimes.com/', domain: 'economictimes.indiatimes.com' }
];

const NewspaperGrid = ({ title, papers }) => (
  <motion.div 
    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
    variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
    className="mt-16"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="h-[1px] flex-1 bg-gray-200" />
      <span className="font-serif text-[18px] font-bold text-[#1a2352] uppercase tracking-widest">{title}</span>
      <div className="h-[1px] flex-1 bg-gray-200" />
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {papers.map((paper, i) => (
        <motion.a 
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
          className="group flex flex-col items-center text-center p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#1a2352]/30 hover:shadow-xl transition-all duration-300"
        >
          <div className="h-24 flex items-center justify-center mb-6 w-full bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-105 transition-transform duration-500 overflow-hidden p-4">
            <img 
              src={`https://logo.clearbit.com/${paper.domain}`} 
              alt={paper.name}
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = `https://www.google.com/s2/favicons?domain=${paper.domain}&sz=128`;
              }}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <h3 className="font-sans text-[15px] font-bold text-[#1a2352] leading-snug">
            {paper.name}
          </h3>
          <div className="mt-4 flex items-center gap-1 text-[12px] font-bold text-[#E5AA3E] uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>Read Paper</span>
            <ChevronRight size={14} />
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

export default function ENewspaperPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Premium Hero Design */}
      <div className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1a2352]/5 rounded-bl-[100px]" />
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a2352]/10 border border-[#1a2352]/20 mb-6">
              <Globe className="w-4 h-4 text-[#1a2352]" />
              <span className="text-[12px] font-bold text-[#1a2352] uppercase tracking-widest">Digital Resources</span>
            </div>
            <h1 className="font-serif text-[48px] lg:text-[64px] font-black text-[#1a2352] leading-[1.1] mb-6">
              E-Newspaper
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              Stay updated with the latest news from around the world. Access premium digital editions of top regional and national newspapers, available anytime, anywhere.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-200">
              <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop" alt="E-Newspapers" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352]/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-8">
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-gray-500 uppercase tracking-[0.2em] mb-12 border-b border-gray-100 pb-8">
          <Link to="/" className="hover:text-[#1a2352] transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
          <ChevronRight size={10} />
          <Link to="/digital-resources" className="hover:text-[#1a2352] transition-colors">Digital Resources</Link>
          <ChevronRight size={10} />
          <span className="text-[#1a2352] font-bold">E-Newspaper</span>
        </nav>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Newspaper className="w-8 h-8 text-[#1a2352]" />
            <h2 className="font-serif text-[36px] font-bold text-[#1a2352]">E-Newspapers Collection</h2>
          </div>
          
          <NewspaperGrid title="Regional" papers={REGIONAL_NEWSPAPERS} />
          <NewspaperGrid title="National" papers={NATIONAL_NEWSPAPERS} />
        </div>
      </div>
    </div>
  );
}
