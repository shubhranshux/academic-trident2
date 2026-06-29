import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Globe, Layers, Video, Code, CheckCircle } from 'lucide-react';

const EXPERTISE_AREAS = [
  {
    icon: Layers,
    title: 'Instructional Design',
    description: 'Creating engaging and structured educational frameworks tailored to specific learning objectives.',
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    icon: Video,
    title: 'Multimedia Production',
    description: 'Developing high-quality video, audio, and interactive content to enrich the learning experience.',
    color: 'bg-orange-50 text-orange-600 border-orange-100'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building robust, accessible, and user-friendly e-learning platforms and web portals.',
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Ensuring all digital content meets the highest standards of accuracy and functionality.',
    color: 'bg-purple-50 text-purple-600 border-purple-100'
  }
];

export default function TriDigiSpacePage() {
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
              Tri-Digi-Space
            </h1>
            <p className="text-gray-500 text-[18px] leading-relaxed max-w-xl mb-8">
              Tri-Digi-Space is a specialized unit that provides high-quality digital content for various educational and training purposes, promoting excellence and innovation in e-learning to advance knowledge in the digital age.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-200">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" alt="Digital Space" className="w-full h-full object-cover" />
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
          <span className="text-[#1a2352] font-bold">Tri-Digi-Space</span>
        </nav>

        {/* Core Expertise Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-[36px] font-bold text-[#1a2352] mb-6">Our Expertise</h2>
            <p className="text-gray-500 text-[18px] max-w-3xl mx-auto leading-relaxed">
              Our center is driven by a team of experts dedicated to creating engaging and effective e-learning solutions. We also offer consultancy and support services to help clients design, develop, and implement their own e-content projects.
            </p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {EXPERTISE_AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <motion.div 
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } } }}
                  className={`flex flex-col items-center text-center p-8 rounded-3xl border ${area.color} bg-opacity-50 hover:bg-opacity-100 transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-[20px] font-bold text-[#1a2352] mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
