import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Home, ChevronRight, Code2, Database, BrainCircuit, Cpu, Network, Monitor } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const PROGRAMMES = [
  {
    title: "Computer Science & Engineering",
    degrees: "B.Tech / M.Tech / Int. M.Tech",
    href: "/computer-science-engineering",
    icon: Code2,
    color: "from-blue-500 to-indigo-600",
    bgBlob: "bg-blue-500/10",
  },
  {
    title: "Computer Science & Engineering (AI & ML)",
    degrees: "B.Tech / M.Tech",
    href: "/computer-science-engineering-ai-ml",
    icon: BrainCircuit,
    color: "from-purple-500 to-pink-600",
    bgBlob: "bg-purple-500/10",
  },
  {
    title: "Computer Science & Engineering (Data Science)",
    degrees: "B.Tech",
    href: "/computer-science-engineering-data-science",
    icon: Database,
    color: "from-emerald-400 to-teal-600",
    bgBlob: "bg-emerald-500/10",
  },
  {
    title: "Computer Science and Technology (CST)",
    degrees: "B.Tech",
    href: "/computer-science-technology",
    icon: Cpu,
    color: "from-orange-400 to-red-500",
    bgBlob: "bg-orange-500/10",
  },
  {
    title: "Computer Science & Information Technology (CSIT)",
    degrees: "B.Tech",
    href: "/computer-science-information-technology",
    icon: Network,
    color: "from-cyan-400 to-blue-500",
    bgBlob: "bg-cyan-500/10",
  },
  {
    title: "Data Science",
    degrees: "M.Tech",
    href: "/data-science-mtech",
    icon: Monitor,
    color: "from-rose-400 to-rose-600",
    bgBlob: "bg-rose-500/10",
  }
];

export default function SchoolOfComputingLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans relative overflow-hidden">
      
      {/* ── Abstract Fluid Backgrounds ── */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#1B4D8E]/5 to-[#E5AA3E]/10 blur-[100px] opacity-70 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-[#7A5230]/5 to-transparent blur-[80px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 pt-32 md:pt-48 pb-24">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[12px] font-medium text-[#1B4D8E]/60 mb-12 flex-wrap uppercase tracking-widest">
          <Link to="/" className="flex items-center hover:text-[#1B4D8E] transition-colors">
            <Home size={13} className="mb-[2px]" />
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#1A1A1A] font-bold">School of Computing</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-20 lg:mb-32">
          <FadeInUp>
            <h1 className="font-serif text-[56px] md:text-[80px] lg:text-[100px] font-black text-[#1A1A1A] leading-[1] tracking-tight mb-8 relative inline-block">
              School of <br />
              <span className="relative">
                Computing
                <svg className="absolute -bottom-4 left-0 w-full h-4 text-[#E5AA3E] opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
          </FadeInUp>
          
          <FadeInUp delay={100}>
            <p className="text-[#3E3A36] text-[20px] md:text-[24px] max-w-3xl leading-[1.6] font-medium mt-6">
              Driving the digital revolution with cutting-edge programmes in Artificial Intelligence, Data Science, and core Computer Science.
            </p>
          </FadeInUp>

          <FadeInUp delay={200}>
             <div className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-[#1B4D8E]/10">
               <div>
                 <div className="text-[36px] font-black text-[#1B4D8E] leading-none mb-2">100%</div>
                 <div className="text-[13px] font-bold text-[#7A5230] uppercase tracking-widest">Placement Rate</div>
               </div>
               <div>
                 <div className="text-[36px] font-black text-[#1B4D8E] leading-none mb-2">5+</div>
                 <div className="text-[13px] font-bold text-[#7A5230] uppercase tracking-widest">Centers of Excellence</div>
               </div>
               <div>
                 <div className="text-[36px] font-black text-[#1B4D8E] leading-none mb-2">40+</div>
                 <div className="text-[13px] font-bold text-[#7A5230] uppercase tracking-widest">PhD Faculty</div>
               </div>
             </div>
          </FadeInUp>
        </div>

        {/* Content Rich About Section */}
        <div className="mb-24 lg:mb-32 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <div className="w-full lg:w-1/2">
               <FadeInUp>
                 <h3 className="font-serif text-[32px] md:text-[42px] font-black text-[#1A1A1A] leading-tight mb-6">
                   Pioneering the Next Era of Technology & Innovation
                 </h3>
                 <div className="space-y-6 text-[17px] leading-[1.8] text-[#3E3A36] font-medium">
                   <p>
                     The School of Computing at Trident Academy of Technology is recognized as a premier destination for computer science education in Eastern India. Our curriculum is constantly updated in collaboration with industry giants like IBM, Cisco, and AWS to ensure our students are learning the technologies of tomorrow, today.
                   </p>
                   <p>
                     From fundamental algorithms to advanced machine learning models, cloud computing infrastructure, and big data analytics, we provide a holistic learning environment. Our students don't just write code; they build solutions for real-world problems through our active research labs and incubation centers.
                   </p>
                 </div>
               </FadeInUp>
            </div>
            <div className="w-full lg:w-1/2 relative">
               <FadeInUp delay={150}>
                 <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-[8px] border-white z-10">
                   <img src="/images/departments/cse/3-768x576.jpeg" alt="Students in computing lab" className="w-full h-[400px] object-cover" />
                 </div>
                 <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#E5AA3E]/20 rounded-full blur-[40px] z-0"></div>
                 <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#1B4D8E]/20 rounded-full blur-[40px] z-0"></div>
               </FadeInUp>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <FadeInUp>
           <h2 className="font-serif text-[40px] font-black text-[#1A1A1A] mb-12">Our Programmes</h2>
        </FadeInUp>

        {/* Programmes List - Organic Blob Style */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#1B4D8E]/20 via-[#1B4D8E]/10 to-transparent hidden md:block"></div>
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col gap-12 md:gap-20"
          >
            {PROGRAMMES.map((prog, idx) => {
              const Icon = prog.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12"
                >
                  
                  {/* Icon Node */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-16 h-16 shrink-0 bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                    <Icon className={`w-7 h-7 text-[#1B4D8E] group-hover:text-[#E5AA3E] transition-colors duration-500`} />
                  </div>

                  {/* Organic Content Area */}
                  <Link 
                    to={prog.href}
                    className="flex-1 relative p-8 md:p-10 w-full overflow-hidden transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Morphing Blob Background */}
                    <div className="absolute inset-0 bg-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:shadow-[0_20px_50px_-12px_rgba(27,77,142,0.15)] rounded-[40px] md:rounded-[60px] group-hover:rounded-[30px]" />
                    
                    {/* Colored organic accent blob inside */}
                    <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[60px] ${prog.bgBlob} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3 md:hidden">
                           <div className="w-10 h-10 rounded-full bg-[#1B4D8E]/5 flex items-center justify-center">
                             <Icon className="w-5 h-5 text-[#1B4D8E]" />
                           </div>
                        </div>
                        <h4 className="text-[11px] md:text-[13px] font-extrabold uppercase tracking-[0.2em] text-[#7A5230] mb-2">
                          {prog.degrees}
                        </h4>
                        <h2 className="text-[26px] md:text-[36px] lg:text-[42px] font-black text-[#1A1A1A] leading-[1.1] tracking-tight group-hover:text-[#1B4D8E] transition-colors duration-500">
                          {prog.title}
                        </h2>
                      </div>
                      
                      <div className="shrink-0">
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-[#1A1A1A]/10 flex items-center justify-center group-hover:border-[#1B4D8E] group-hover:bg-[#1B4D8E] transition-all duration-500 overflow-hidden relative">
                           <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-[#1A1A1A] group-hover:text-white group-hover:translate-x-full absolute transition-transform duration-500" />
                           <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-white -translate-x-full group-hover:translate-x-0 absolute transition-transform duration-500" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Innovation & Infrastructure */}
        <div className="mt-32 mb-16">
          <FadeInUp>
             <div className="bg-[#1B4D8E] rounded-[40px] p-12 lg:p-20 relative overflow-hidden text-white shadow-2xl">
               {/* Background Decorative Rings */}
               <div className="absolute -top-32 -right-32 w-96 h-96 border-[40px] border-white/5 rounded-full pointer-events-none"></div>
               <div className="absolute -bottom-32 -left-32 w-96 h-96 border-[40px] border-white/5 rounded-full pointer-events-none"></div>

               <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
                 <div className="lg:w-1/2">
                   <h2 className="font-serif text-[36px] md:text-[48px] font-black leading-tight mb-6">
                     State-of-the-Art <br /> <span className="text-[#E5AA3E]">Infrastructure</span>
                   </h2>
                   <p className="text-white/80 text-[18px] leading-[1.8] font-medium mb-8">
                     We house specialized laboratories for Cloud Computing, Internet of Things (IoT), Cyber Security, and High-Performance Computing (HPC). Our dedicated innovation cells support student startups and foster a culture of entrepreneurship and research excellence.
                   </p>
                 </div>
                 
                 <div className="lg:w-[45%] grid grid-cols-2 gap-4">
                   <img src="/images/departments/cse/4-768x576.jpeg" className="rounded-2xl w-full h-[200px] object-cover shadow-lg" alt="Cyber Security Lab" />
                   <img src="/images/departments/cse/5-768x576.jpeg" className="rounded-2xl w-full h-[200px] object-cover mt-8 shadow-lg" alt="Coding Session" />
                 </div>
               </div>
             </div>
          </FadeInUp>
        </div>

      </div>
    </div>
  );
}
