import React from 'react';
import { Users, FileCheck, CheckCircle, BookOpen } from 'lucide-react';

const governanceData = [
  {
    title: "Academic Advisory Body",
    description: "Our advisory body consists of esteemed academicians and industry experts who guide curriculum development and institutional strategy to ensure industry relevance and academic excellence.",
    icon: Users,
    color: "#283B91",
    linkHref: "https://academics-tat.tekkzy.com/academics/academic-advisory-board/"
  },
  {
    title: "Academic Monitoring Council",
    description: "The council regularly reviews academic progress, faculty performance, and student feedback to maintain high educational standards and continuous improvement in teaching methodologies.",
    icon: FileCheck,
    color: "#E5AA3E",
    linkHref: "https://academics-tat.tekkzy.com/academic-council-monitoring/"
  },
  {
    title: "Peer Evaluation",
    description: "A robust peer evaluation system fosters a collaborative academic environment, allowing faculty and students to assess and learn from each other to enhance learning outcomes.",
    icon: CheckCircle,
    color: "#8B6E66",
    linkHref: "https://academics-tat.tekkzy.com/peer-evaluation/"
  },
  {
    title: "Programme & Course Outcomes",
    description: "Clearly defined outcomes for every program and course help align teaching strategies with industry requirements, ensuring graduates acquire the necessary skills and knowledge.",
    icon: BookOpen,
    color: "#D3494B",
    linkHref: "https://academics-tat.tekkzy.com/programme-&-course-outcomes/"
  }
];

export default function AcademicGovernance() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      
      {/* Dynamic Ribbon/Swoosh SVG Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
           <path d="M-100 400C200 100 500 700 800 400C1100 100 1400 600 1600 300" stroke="#283B91" strokeWidth="80" strokeLinecap="round" style={{ mixBlendMode: 'multiply' }}/>
           <path d="M-50 600C250 800 550 200 850 450C1150 700 1450 300 1650 500" stroke="#E5AA3E" strokeWidth="60" strokeLinecap="round" style={{ mixBlendMode: 'multiply' }}/>
           <path d="M-150 200C150 400 450 100 750 500C1050 900 1350 400 1550 600" stroke="#8B6E66" strokeWidth="40" strokeLinecap="round" style={{ mixBlendMode: 'multiply' }}/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
           <div>
             <h2 className="font-serif text-[48px] md:text-[64px] font-black text-[#212529] leading-[1.1] tracking-tight">
               Academic <br/>
               <span className="text-[#283B91] italic font-light">Governance</span>
             </h2>
           </div>
           <div className="md:w-1/2">
             <p className="text-[#5c5855] text-[18px] md:text-[20px] font-sans font-medium leading-relaxed">
               Dedicated bodies and systems ensuring the highest standards of education, continuous evaluation, and strategic curriculum alignment.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {governanceData.map((item, idx) => (
            <div key={idx} className="group flex flex-col relative">
              
              <div className="relative z-10 flex flex-col h-full">
                
                {/* Minimal Icon */}
                <div 
                  className="w-16 h-16 mb-8 flex items-center justify-start transition-transform duration-500 group-hover:-translate-y-2"
                  style={{ color: item.color }}
                >
                  <item.icon size={48} strokeWidth={1.5} />
                </div>
                
                {/* Separator Line */}
                <div className="w-12 h-[2px] mb-6 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: item.color }}></div>
                
                <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-[#212529] mb-4 group-hover:text-[#283B91] transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="font-sans text-[#5c5855] text-[15px] leading-relaxed flex-grow mb-8">
                  {item.description}
                </p>
                
                <a href={item.linkHref} className="mt-auto inline-flex items-center text-[12px] font-bold uppercase tracking-widest text-[#212529] group-hover:text-[#283B91] transition-colors relative pb-2 self-start">
                  Explore 
                  <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EFE7DF] group-hover:bg-[#283B91] transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Thick Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full flex h-4">
         <div className="w-1/4 bg-[#E5AA3E]"></div>
         <div className="w-1/4 bg-[#283B91]"></div>
         <div className="w-1/4 bg-[#8B6E66]"></div>
         <div className="w-1/4 bg-[#D3494B]"></div>
      </div>

    </section>
  );
}
