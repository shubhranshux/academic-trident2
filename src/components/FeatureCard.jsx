import React from 'react';

export default function FeatureCard({ image, title, description, linkText = "Learn More", linkHref = "#", reverse = false }) {
  const displayImage = image || `https://picsum.photos/seed/${encodeURIComponent(title)}/800/800`;

  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} w-full items-center gap-12 group py-12 border-b border-[#EFE7DF]/50 last:border-0`}>
      
      {/* Image Block */}
      <div className="w-full md:w-1/2 relative">
        <div className="aspect-[4/3] overflow-hidden relative">
           <img 
             src={displayImage} alt={title} 
             className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000" 
             onError={(e) => { 
               if(!e.target.dataset.fallbackApplied) {
                 e.target.dataset.fallbackApplied = true;
                 e.target.src = `https://picsum.photos/seed/${encodeURIComponent(title)}/800/600`;
               } 
             }}
           />
           {/* Decorative corner cut */}
           <div className={`absolute top-0 ${reverse ? 'right-0' : 'left-0'} w-12 h-12 bg-white z-10`}></div>
           <div className={`absolute bottom-0 ${reverse ? 'left-0' : 'right-0'} w-12 h-12 bg-white z-10`}></div>
        </div>
      </div>
      
      {/* Text Block */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
         <div className="w-12 h-[2px] bg-[#283B91] mb-8 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
         <h3 className="font-serif text-[28px] md:text-[36px] font-black text-[#212529] mb-4 leading-tight group-hover:text-[#283B91] transition-colors">
            {title}
         </h3>
         <p className="font-sans text-[#5c5855] text-[16px] md:text-[18px] leading-relaxed mb-8 max-w-lg">
            {description}
         </p>
         <div>
           <a href={linkHref} className="inline-flex items-center gap-3 font-sans font-bold text-[#212529] text-[12px] uppercase tracking-[0.2em] hover:text-[#E5AA3E] transition-colors relative pb-2 group/link">
              {linkText} 
              <span className="transform group-hover/link:translate-x-2 transition-transform duration-300">&rarr;</span>
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EFE7DF] group-hover/link:bg-[#E5AA3E] transition-colors" />
           </a>
         </div>
      </div>

    </div>
  );
}
