import React from 'react';
import FeatureCard from './FeatureCard';

export default function FeatureSection({ title, cards }) {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      
      {/* Dot-Grid Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#283B91 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      
      {/* Subtle Linear Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F8F9FA] to-transparent z-0"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Editorial Header Section */}
        <div className="mb-20 text-center flex flex-col items-center">
           <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[64px] font-black capitalize leading-[1.1] tracking-tight text-[#212529] bg-white inline-block px-8 relative z-10">
             {title}
           </h2>
           <div className="w-full h-[1px] bg-[#EFE7DF] -mt-6 z-0 hidden md:block"></div>
        </div>
        
        {/* Alternating List layout */}
        <div className="flex flex-col">
          {cards.map((card, idx) => (
            <FeatureCard key={card.title || idx} {...card} reverse={idx % 2 !== 0} />
          ))}
          
          {/* Explore More - Typography Driven Link */}
          <div className="mt-16 text-center">
            <a href="#" className="inline-flex items-center justify-center gap-4 group">
               <span className="w-16 h-[1px] bg-[#212529] group-hover:w-8 transition-all duration-300"></span>
               <span className="font-serif text-[24px] font-bold text-[#212529] group-hover:text-[#283B91] transition-colors">Explore All Resources</span>
               <span className="w-16 h-[1px] bg-[#212529] group-hover:w-8 transition-all duration-300"></span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
