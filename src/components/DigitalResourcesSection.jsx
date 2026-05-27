import React from 'react';

export default function DigitalResourcesSection({ title, items }) {
  return (
    <section className="py-32 bg-[#EFE7DF] relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-[#E5AA3E]/20 blur-[100px]"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#283B91]/10 blur-[120px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-12 border-b-2 border-[#212529]/10 pb-12">
           <div className="md:w-1/2">
             <h2 className="font-serif text-[48px] md:text-[64px] font-black text-[#212529] leading-[1.05] tracking-tight">
               Digital <br/>
               <span className="italic font-light opacity-80 text-[#283B91]">Resources &</span><br/>
               Publications
             </h2>
           </div>
           <div className="md:w-1/3">
             <p className="text-[#5c5855] text-[18px] font-sans font-medium leading-relaxed">
               Dive into a vast collection of national and international journals, open access papers, and unified digital search spaces tailored for modern research.
             </p>
           </div>
        </div>

        {/* Magazine Style Asymmetrical Grid (5 Items) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Item 0: Large Hero Style (7 Cols) */}
          {items[0] && (
            <div className="md:col-span-7 group cursor-pointer flex flex-col gap-6">
              <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl relative shadow-lg">
                <img 
                  src={items[0].image} 
                  alt={items[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#283B91]/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[#8B6E66] font-bold text-[12px] uppercase tracking-[0.2em]">01 / Resource</span>
                  <div className="w-12 h-[1px] bg-[#8B6E66]/50"></div>
                </div>
                <h3 className="font-serif text-[32px] md:text-[40px] font-bold text-[#212529] mb-4 group-hover:text-[#283B91] transition-colors leading-tight">
                  {items[0].title}
                </h3>
                <p className="font-sans text-[#5c5855] text-[16px] leading-relaxed max-w-lg mb-6">
                  {items[0].description}
                </p>
                <a href={items[0].linkHref} className="inline-flex items-center gap-2 font-bold text-[13px] uppercase tracking-widest text-[#212529] border-b border-[#212529] pb-1 hover:text-[#283B91] hover:border-[#283B91] transition-all">
                  Explore <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </a>
              </div>
            </div>
          )}

          {/* Right Column for Item 1 and 2 */}
          <div className="md:col-span-5 flex flex-col gap-12">
            
            {/* Item 1: Vertical Portrait */}
            {items[1] && (
              <div className="group cursor-pointer flex flex-col gap-6">
                <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl relative shadow-md">
                  <img 
                    src={items[1].image} 
                    alt={items[1].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-[28px] font-bold text-[#212529] mb-3 group-hover:text-[#E5AA3E] transition-colors">
                    {items[1].title}
                  </h3>
                  <p className="font-sans text-[#5c5855] text-[15px] leading-relaxed mb-4">
                    {items[1].description}
                  </p>
                </div>
              </div>
            )}

            {/* Item 2: Text Heavy / Small Image */}
            {items[2] && (
              <div className="group cursor-pointer flex items-center gap-6 border-t border-[#212529]/10 pt-8">
                <div className="w-1/3 aspect-square overflow-hidden rounded-xl relative">
                  <img 
                    src={items[2].image} 
                    alt={items[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="font-serif text-[24px] font-bold text-[#212529] mb-2 group-hover:text-[#8B6E66] transition-colors">
                    {items[2].title}
                  </h3>
                  <p className="font-sans text-[#5c5855] text-[14px] leading-relaxed line-clamp-2 mb-3">
                    {items[2].description}
                  </p>
                  <a href={items[2].linkHref} className="text-[#8B6E66] font-bold text-[11px] uppercase tracking-widest hover:text-[#212529] transition-colors">
                    Read More &gt;
                  </a>
                </div>
              </div>
            )}
          </div>
          
          {/* Bottom Row: Item 3 and 4 (6 Cols / 6 Cols) */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12 pt-12 border-t border-[#212529]/10">
            {items.slice(3, 5).map((item, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col md:flex-row gap-8 items-center bg-white/40 p-6 rounded-3xl hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl">
                 <div className="w-full md:w-1/2 aspect-square overflow-hidden rounded-2xl relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                 </div>
                 <div className="w-full md:w-1/2">
                    <span className="text-[#283B91] font-bold text-[11px] uppercase tracking-[0.2em] mb-4 block">0{idx + 4} / Featured</span>
                    <h3 className="font-serif text-[28px] font-bold text-[#212529] mb-4 group-hover:text-[#283B91] transition-colors leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-sans text-[#5c5855] text-[15px] leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <a href={item.linkHref} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#212529]/20 group-hover:bg-[#283B91] group-hover:border-[#283B91] group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                 </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
