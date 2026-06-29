import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function JournalsSection({ title, items }) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative py-32 overflow-hidden bg-[#1A1817]">
      
      {/* Thick Lines in Background in Different Colours */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] rotate-[-12deg] flex flex-col justify-center gap-12 opacity-30">
           <div className="w-full h-16 md:h-24 bg-[#283B91] shadow-2xl mix-blend-overlay"></div>
           <div className="w-full h-24 md:h-32 bg-[#E5AA3E] shadow-2xl mix-blend-overlay ml-32"></div>
           <div className="w-full h-12 md:h-16 bg-[#D3494B] shadow-2xl mix-blend-overlay -ml-16"></div>
           <div className="w-full h-32 md:h-48 bg-[#8B6E66] shadow-2xl mix-blend-overlay ml-64"></div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
           <h2 className="font-serif text-[48px] md:text-[64px] font-black text-white leading-tight tracking-tight max-w-3xl">
             {title.split(' ').map((word, i) => (
               <span key={i} className={i % 2 !== 0 ? "text-[#E5AA3E] italic font-light mr-3" : "mr-3"}>{word}</span>
             ))}
           </h2>
           <div className="w-24 h-2 bg-[#283B91] mt-8 rounded-full"></div>
        </div>

        {/* Totally Different Design: Interactive Interactive Vertical Tabs / Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 min-h-[500px]">
          
          {/* Navigation/Titles */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
             {items.map((item, idx) => (
               <div 
                 key={idx} 
                 className="group cursor-pointer py-6 relative"
                 onMouseEnter={() => setActiveIdx(idx)}
               >
                 <div className={`absolute left-0 top-0 h-full w-[4px] transition-all duration-500 ${activeIdx === idx ? 'bg-[#E5AA3E]' : 'bg-transparent group-hover:bg-[#E5AA3E]/50'}`}></div>
                 
                 <div className="pl-8 transition-transform duration-500 group-hover:translate-x-4">
                   <span className={`text-[14px] font-bold uppercase tracking-[0.3em] transition-colors duration-300 ${activeIdx === idx ? 'text-[#E5AA3E]' : 'text-gray-500'}`}>
                     0{idx + 1}
                   </span>
                   <h3 className={`font-serif text-[32px] md:text-[40px] font-black mt-2 leading-none transition-all duration-500 ${activeIdx === idx ? 'text-white' : 'text-white/40'}`}>
                     {item.title}
                   </h3>
                 </div>
               </div>
             ))}
          </div>

          {/* Active Content Display */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-auto rounded-3xl overflow-hidden border-l-[16px] border-[#283B91] shadow-2xl">
             {items.map((item, idx) => (
               <div 
                 key={idx} 
                 className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIdx === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-105 pointer-events-none'}`}
               >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      if(!e.target.dataset.fallbackApplied) {
                        e.target.dataset.fallbackApplied = true;
                        e.target.src = `https://picsum.photos/seed/${encodeURIComponent(item.title)}/1000/800`;
                      }
                    }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1817] via-[#1A1817]/60 to-transparent flex flex-col justify-end p-8 md:p-12">
                     <p className="font-sans text-white/90 text-[16px] md:text-[20px] leading-relaxed mb-8 max-w-xl">
                       {item.description}
                     </p>
                     
                     {item.linkHref.startsWith('http') ? (
                       <a href={item.linkHref} className="inline-flex items-center justify-center bg-white text-[#1A1817] px-8 py-4 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-[#E5AA3E] hover:text-white transition-all duration-300 w-max shadow-xl hover:shadow-[0_10px_40px_rgba(229,170,62,0.4)] hover:-translate-y-1">
                         Explore Portal
                         <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                       </a>
                     ) : (
                       <Link to={item.linkHref} className="inline-flex items-center justify-center bg-white text-[#1A1817] px-8 py-4 rounded-full font-bold text-[14px] uppercase tracking-widest hover:bg-[#E5AA3E] hover:text-white transition-all duration-300 w-max shadow-xl hover:shadow-[0_10px_40px_rgba(229,170,62,0.4)] hover:-translate-y-1">
                         Explore Portal
                         <svg className="w-5 h-5 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                         </svg>
                       </Link>
                     )}
                  </div>
               </div>
             ))}
          </div>

        </div>

      </div>
      
      {/* Thick Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex h-3">
         <div className="w-1/3 bg-[#283B91]"></div>
         <div className="w-1/3 bg-[#E5AA3E]"></div>
         <div className="w-1/3 bg-[#8B6E66]"></div>
      </div>
    </section>
  );
}
