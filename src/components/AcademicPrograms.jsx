import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const fluidStyles = `
  /* ── Base light beige layer ── */
  .fluid-bg-base {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 70% at 60% 40%, #FDFBF7 0%, #F5F0E6 70%);
  }
  
  /* ── Shared blob styles ── */
  .blob {
    position: absolute;
    will-change: transform, border-radius;
    pointer-events: none;
    transform: translateZ(0);
    backface-visibility: hidden;
    filter: blur(40px); /* Melts the shapes together into a continuous wave */
  }

  /* ── BLOB 1 – cream top-left ── */
  .blob-1 {
    width: 60%;
    height: 70%;
    top: -20%;
    left: -10%;
    background: radial-gradient(ellipse at center, #FDFBF7 0%, #F5F0E6 40%, #EAE0D5 80%, transparent 100%);
    opacity: 0.8;
    animation: wave1 12s ease-in-out infinite alternate;
  }

  /* ── BLOB 2 – warm sand wave center ── */
  .blob-2 {
    width: 80%;
    height: 90%;
    top: 10%;
    left: 10%;
    background: linear-gradient(160deg, #EAE0D5 0%, #FDFBF7 50%, #D5C6B3 100%);
    opacity: 0.9;
    animation: wave2 15s ease-in-out infinite alternate;
  }

  /* ── BLOB 3 – soft peach beige left wave ── */
  .blob-3 {
    width: 50%;
    height: 80%;
    top: 15%;
    left: -5%;
    background: radial-gradient(ellipse at center, #FDFBF7 0%, #E8D5C4 50%, #D5C6B3 80%, transparent 100%);
    opacity: 0.7;
    animation: wave3 14s ease-in-out infinite alternate;
  }

  /* ── BLOB 4 – taupe tall wave right ── */
  .blob-4 {
    width: 70%;
    height: 120%;
    top: -10%;
    right: -15%;
    background: linear-gradient(200deg, #D5C6B3 0%, #EAE0D5 40%, #F5F0E6 100%);
    opacity: 0.8;
    animation: wave4 16s ease-in-out infinite alternate;
  }

  /* ── BLOB 5 – light cream bottom-right ── */
  .blob-5 {
    width: 45%;
    height: 50%;
    bottom: -10%;
    right: -5%;
    background: radial-gradient(ellipse at center, #FFFFFF 0%, #FDFBF7 40%, #EAE0D5 80%, transparent 100%);
    opacity: 0.8;
    animation: wave1 10s ease-in-out infinite alternate-reverse;
  }

  /* ── BLOB 6 – layered mocha serpentine center ── */
  .blob-6 {
    width: 60%;
    height: 100%;
    top: 5%;
    left: 20%;
    background: linear-gradient(170deg, #EAE0D5 0%, #D5C6B3 50%, #C8B6A6 100%);
    opacity: 0.6;
    animation: wave3 18s ease-in-out infinite alternate-reverse;
  }

  /* ── BLOB 7 – subtle warm accent top-right area ── */
  .blob-7 {
    width: 35%;
    height: 40%;
    top: 0%;
    right: 10%;
    background: radial-gradient(ellipse at center, #FDFBF7 0%, #EAE0D5 50%, transparent 100%);
    opacity: 0.7;
    animation: wave2 11s ease-in-out infinite alternate;
  }

  /* ── BLOB 8 – subtle taupe bottom-left ── */
  .blob-8 {
    width: 50%;
    height: 55%;
    bottom: -15%;
    left: -10%;
    background: radial-gradient(ellipse at center, #D5C6B3 0%, #EAE0D5 60%, transparent 100%);
    opacity: 0.6;
    animation: wave4 13s ease-in-out infinite alternate-reverse;
  }

  /* ── Gloss overlay ── */
  .gloss {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 50% 45% at 18% 22%, rgba(255,255,255,0.40) 0%, transparent 70%),
      radial-gradient(ellipse 40% 35% at 82% 78%, rgba(255,255,255,0.30) 0%, transparent 70%);
    pointer-events: none;
    z-index: 1;
  }

  /* ── Subtle noise grain ── */
  .grain {
    position: absolute;
    inset: 0;
    opacity: 0.05;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 2;
  }

  /* ── Wavy Morphing Keyframes ── */
  @keyframes wave1 {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    }
    100% {
      transform: translate3d(20px, 30px, 0) rotate(5deg) scale(1.05);
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }

  @keyframes wave2 {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
      border-radius: 50% 50% 40% 60% / 60% 40% 50% 50%;
    }
    100% {
      transform: translate3d(-20px, 15px, 0) rotate(-3deg) scale(1.1);
      border-radius: 40% 60% 50% 50% / 40% 60% 40% 60%;
    }
  }

  @keyframes wave3 {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
      border-radius: 60% 40% 50% 50% / 50% 60% 40% 50%;
    }
    100% {
      transform: translate3d(15px, -25px, 0) rotate(4deg) scale(1.08);
      border-radius: 40% 60% 60% 40% / 60% 40% 50% 50%;
    }
  }

  @keyframes wave4 {
    0% {
      transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
      border-radius: 40% 60% 70% 30% / 50% 40% 60% 50%;
    }
    100% {
      transform: translate3d(-15px, -20px, 0) rotate(-5deg) scale(1.06);
      border-radius: 60% 40% 30% 70% / 40% 60% 50% 40%;
    }
  }
`;

const programs = [
  {
    title: "School of Computing",
    slug: "school-of-computing",
    subtitle: "Driving the Digital Revolution",
    description: "The School of Computing offers cutting-edge programmes in Computer Science, Artificial Intelligence, and Data Science. Our curriculum blends strong theoretical foundations with practical, industry-relevant exposure, preparing graduates for high-demand careers in emerging technologies.",
    nba: "B.Tech in Computer Science & Engineering",
    programmes: [
      { name: "Computer Science & Engineering (B.Tech / M.Tech / Int. M.Tech)", href: "/computer-science-engineering" },
      { name: "Computer Science & Engineering (AI & ML) (B.Tech / M.Tech)", href: "/computer-science-engineering-ai-ml" },
      { name: "Computer Science & Engineering (Data Science) (B.Tech)", href: "/computer-science-engineering-data-science" },
      { name: "Computer Science and Technology (CST) (B.Tech)", href: "/computer-science-technology" },
      { name: "Computer Science & Information Technology (CSIT) (B.Tech)", href: "/computer-science-information-technology" },
      { name: "Data Science (M.Tech)", href: "/data-science-mtech" }
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "School of Computer Applications",
    subtitle: "Empowering the Next Generation of IT Professionals",
    description: "The School of Computer Applications focuses on building practical IT skills through real-world projects, internships, and strong industry collaborations. Students graduate ready for dynamic careers across the technology sector.",
    nba: "MCA",
    programmes: [
      "Bachelor of Computer Applications (BCA)",
      "Master of Computer Applications (MCA)",
      "Integrated M.Tech with B.Tech in Data Science"
    ],
    image: "/images/programming-lab-img-1.jpeg",
  },
  {
    title: "School of Engineering",
    slug: "school-of-engineering",
    subtitle: "Building the Future, One Innovation at a Time",
    description: "From Mechanical to Civil, Electrical, and Electronics Engineering, this school combines core engineering principles with modern advancements. Students gain hands-on experience through well-equipped labs, live projects, and industry partnerships.",
    nba: "B.Tech in Electronics & Telecommunication Engineering | B.Tech in Electrical & Electronics Engineering",
    programmes: [
      { name: "Electronics and Telecommunication Engineering (B.Tech / M.Tech)", href: "/electronics-and-telecommunication-engineering" },
      { name: "Electronics Engineering (VLSI Design) (B.Tech / M.Tech)", slug: "electronics-vlsi-design", href: "/electronics-vlsi-design" },
      { name: "Electrical and Electronics Engineering (B.Tech)", href: "/electrical-and-electronics-engineering" },
      { name: "Civil Engineering (B.Tech / Diploma)", href: "/civil-engineering" },
      { name: "Mechanical Engineering (B.Tech / Diploma)", href: "/mechanical-engineering" },
      { name: "Electrical Engineering (Diploma)", href: "/diploma-electrical-engineering" },
      { name: "Environmental Engineering (M.Tech)", href: "/environmental-engineering-mtech" },
      { name: "Energy and Environmental Engineering (M.Tech)", href: "/energy-and-environmental-engineering-mtech" },
      { name: "Electrical Vehicle Technology (M.Tech)", href: "/electrical-vehicle-technology-mtech" },
      { name: "Structural Engineering (M.Tech)", href: "/structural-engineering-mtech" },
      { name: "Industrial Safety Engineering (M.Tech)", href: "/industrial-safety-engineering-mtech" }
    ],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "School of Biotechnology",
    slug: "biotechnology-engineering",
    subtitle: "Innovating for a Healthier Tomorrow",
    description: "The School of Biotechnology offers advanced programmes fostering research and innovation in healthcare, agriculture, and environmental sustainability. Students work on cutting-edge projects in state-of-the-art labs, bridging the gap between science and real-world impact.",
    programmes: [
      { name: "B.Tech in Biotechnology Engineering", href: "/biotechnology-engineering" }
    ],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "School of Business",
    subtitle: "Shaping Leaders for a Dynamic World",
    description: "The School of Business develops strategic thinkers and future corporate leaders through MBA, BBA, and specialized management programmes. Strong industry partnerships enable students to gain real-world exposure through internships, live projects, and case studies.",
    nba: "MBA",
    programmes: [
      "Bachelor of Business Administration (BBA)",
      "Master of Business Administration (MBA)"
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  }
];

export default function AcademicPrograms() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.5;
      let currentIdx = -1;

      sectionRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= triggerY && rect.bottom >= triggerY) {
            currentIdx = idx;
          }
        }
      });

      if (currentIdx !== -1) {
         setActiveIndex((prev) => (prev !== currentIdx ? currentIdx : prev));
      } else {
         const firstRect = sectionRefs.current[0]?.getBoundingClientRect();
         if (firstRect && firstRect.top > triggerY) {
           setActiveIndex(0);
         }
         const lastRect = sectionRefs.current[sectionRefs.current.length - 1]?.getBoundingClientRect();
         if (lastRect && lastRect.bottom < triggerY) {
           setActiveIndex(sectionRefs.current.length - 1);
         }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 bg-[#FAF9F7] relative">
      {/* Striped Line Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0"
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #283B91 0, #283B91 1px, transparent 1px, transparent 40px)' }}>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10 pt-10">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 relative">
          <div className="w-full lg:w-1/2 relative">
            <h2 className="relative z-10 font-serif text-[48px] md:text-[64px] font-black text-[#212529] leading-[1.1] tracking-tight">
              Our Schools <br/>
              <span className="text-[#283B91]">& Programmes</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
            <p className="text-[#5c5855] text-[16px] md:text-[17px] font-sans font-medium leading-relaxed mb-8 max-w-xl">
              Trident Group of Institutions is one of Odisha's leading AICTE-approved, NAAC-accredited institutions offering Diploma, Undergraduate, Postgraduate, Integrated, and PhD programmes. Our academic ecosystem spans five specialized schools — Computing, Computer Applications, Engineering, Biotechnology, and Business.<br/><br/>Our research credentials are recognized by DSIR and SIRO, and our international collaboration with UN-HESI places us at the forefront of sustainable development and educational innovation. Located at Chandaka Industrial Estate, directly in front of Odisha's Infocity, our campus is a thriving hub of entrepreneurship, technology, and learning.
            </p>
            <a href="https://academics-tat.tekkzy.com" className="inline-flex items-center gap-4 font-bold text-[13px] uppercase tracking-widest text-[#212529] group hover:text-[#283B91] transition-colors">
              VIEW ALL PROGRAMS
              <span className="w-12 h-[1px] bg-[#212529] group-hover:w-20 group-hover:bg-[#283B91] transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Two Section Full-Bleed Split Layout: Sticky Image Left, Scrolling Text Right */}
      <div className="w-full flex flex-col lg:flex-row relative z-10">
          
          {/* LEFT SIDE: Sticky Image (Full Bleed Left) */}
          <div className="hidden lg:block w-1/2 relative">
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-gray-200 shadow-2xl">
               {programs.map((prog, idx) => (
                 <div key={idx} className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 scale-105 z-0'}`}>
                   {Array.isArray(prog.image) ? (
                     <div className="w-full h-full flex">
                       {prog.image.map((imgSrc, i) => (
                         <img 
                           key={i}
                           src={imgSrc} 
                           alt={`${prog.title} ${i + 1}`} 
                           className="w-1/2 h-full object-cover" 
                         />
                       ))}
                     </div>
                   ) : (
                     <img 
                       src={prog.image} 
                       alt={prog.title} 
                       className="w-full h-full object-cover" 
                     />
                   )}
                   {/* Gradient Overlay for Image */}
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1a2660]/90 via-black/20 to-transparent"></div>
                   {/* Text padding aligns with max-w-1400 container if viewport > 1400px */}
                   <div className="absolute bottom-16 left-[max(2rem,calc((100vw-1400px)/2+3rem))] right-12 text-white">
                      <h3 className="font-serif text-4xl font-bold mb-3">{prog.title}</h3>
                      <p className="text-white/90 text-[15px] font-medium tracking-widest uppercase">{prog.subtitle}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>

          {/* RIGHT SIDE: Scrolling List (Constrained Width) */}
          <div className="w-full lg:w-1/2 relative bg-[#FDFBF7]">
            {/* Fluid Wave Pattern Background Container (Sticky) */}
            <style>{fluidStyles}</style>
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="sticky top-0 w-full h-screen overflow-hidden pointer-events-none">
                <div className="fluid-bg-base"></div>
                <div className="blob blob-4"></div>
                <div className="blob blob-6"></div>
                <div className="blob blob-2"></div>
                <div className="blob blob-8"></div>
                <div className="blob blob-3"></div>
                <div className="blob blob-1"></div>
                <div className="blob blob-7"></div>
                <div className="blob blob-5"></div>
                <div className="gloss"></div>
                <div className="grain"></div>
              </div>
            </div>

            <div className="max-w-[700px] mr-auto w-full px-6 lg:pl-16 xl:pl-24 pr-6 xl:pr-12 pt-12 pb-32 flex flex-col gap-0 relative z-10">
             {programs.map((prog, idx) => {
               const isActive = activeIndex === idx;
               return (
                 <div 
                   key={idx}
                   ref={el => sectionRefs.current[idx] = el}
                   className={`relative border-b border-white/10 last:border-0 py-16 transition-all duration-500 ease-in-out`}
                 >
                   {/* Left Marker */}
                   <div className={`hidden lg:block absolute left-[-20px] top-16 bottom-16 w-[6px] bg-[#7A5230] transition-all duration-500 origin-top ${isActive ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}></div>

                   <div className={`flex flex-col transition-all duration-500 ${isActive ? 'opacity-100 lg:translate-x-0' : 'opacity-60 lg:translate-x-4 hover:opacity-100'}`}>
                     
                     <div className="flex items-start justify-between mb-8">
                        <div>
                          <div className="flex items-center gap-4 md:gap-6 mb-4">
                            <h3 className={`font-sans text-[36px] md:text-[44px] font-black tracking-tight leading-[1.1] transition-colors duration-500 ${isActive ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/70'}`}>
                              {prog.title}
                            </h3>
                            {prog.slug && (
                              <Link 
                                to={`/${prog.slug}`}
                                className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group shadow-md ${isActive ? 'bg-[#1A1A1A] hover:bg-[#283B91]' : 'bg-[#1A1A1A]/70 hover:bg-[#283B91]'}`}
                                aria-label={`Go to ${prog.title}`}
                              >
                                <ArrowRight className="text-white w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                              </Link>
                            )}
                          </div>
                          <h4 className={`text-[13px] font-extrabold uppercase tracking-[0.2em] transition-colors duration-500 ${isActive ? 'text-[#7A5230]' : 'text-[#7A5230]/70'}`}>
                            {prog.subtitle}
                          </h4>
                        </div>
                     </div>

                     <div className="space-y-10">
                       <p className="text-[#3E3A36] text-[17px] leading-[1.8] font-medium max-w-[95%]">
                         {prog.description}
                       </p>
                       
                       {prog.nba && (
                         <div className="p-5 bg-white/90 border-l-[4px] border-[#7A5230] rounded-r-xl shadow-md">
                           <p className="text-[15px] font-bold text-[#1A1A1A]">
                             <span className="uppercase tracking-[0.15em] text-[11px] block text-[#7A5230] font-extrabold mb-1.5 opacity-100">NBA-Accredited</span> 
                             {prog.nba}
                           </p>
                         </div>
                       )}

                       <div className="flex flex-col gap-12 mt-4">
                         {prog.programmes && (
                           <div>
                             <h5 className="font-extrabold text-[#7A5230] mb-3 text-[13px] uppercase tracking-[0.15em]">Programmes Offered</h5>
                             <div className="flex flex-col">
                               {prog.programmes.map((p, idx) => {
                                 const name = typeof p === 'string' ? p : p.name;
                                 const href = typeof p === 'string' ? '#' : (p.href || '#');
                                 return (
                                 <Link key={name} to={href} className="group flex items-center justify-between py-5 border-b border-[#1A1A1A]/10 hover:border-[#7A5230] transition-colors duration-300">
                                   <span className="text-[16px] text-[#3E3A36] font-semibold group-hover:text-[#7A5230] transition-colors pr-4 leading-snug">{name}</span>
                                   <ArrowRight size={18} strokeWidth={2.5} className="text-[#1A1A1A]/20 group-hover:text-[#7A5230] group-hover:translate-x-1.5 transition-all duration-300 shrink-0" />
                                 </Link>
                               )})}
                             </div>
                           </div>
                         )}
                       </div>
                     </div>
                   </div>
                 </div>
               );
             })}
          </div>
        </div>

      </div>
    </section>
  );
}
