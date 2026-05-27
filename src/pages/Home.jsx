import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import JournalsSection from '../components/JournalsSection';
import DigitalResourcesSection from '../components/DigitalResourcesSection';
import InstitutionalInfo from '../components/InstitutionalInfo';
import RankingRecognition from '../components/RankingRecognition';
import AcademicPrograms from '../components/AcademicPrograms';
import AcademicGovernance from '../components/AcademicGovernance';
import SectionDivider, { SkewedMarquee } from '../components/SectionDivider';
import { ArrowRight, Award, Users, BookOpen, ShieldCheck, Landmark } from 'lucide-react';


const journals = [
  {
    title: "TAT Library",
    description: "Enables users to search and locate books, journals, and other library materials quickly and efficiently.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/department-libraries/"
  },
  {
    title: "Catalogue search",
    description: "Enables users to search and locate books, journals, and other library materials quickly and efficiently.",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/catalogue/"
  },
  {
    title: "E resources",
    description: "Provides access to online journals, e-books, databases, and learning materials.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/e-resources/"
  }
];

const digitalResources = [
  {
    title: "Digital Resources",
    description: "Offers a range of digital content including e-books, online databases, and multimedia learning tools.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/digital-resources/"
  },
  {
    title: "Print Journals",
    description: "A collection of national and international print journals supporting academic and research.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/print-journal/"
  },
  {
    title: "Open Access",
    description: "Free access to scholarly articles, research papers, and academic publications.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/open-access/"
  },
  {
    title: "E Newspaper",
    description: "Access to leading national and international newspapers in digital format.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/e-newspaper"
  },
  {
    title: "Tri-Digi-Space",
    description: "A unified search platform to access library books, e-resources, journals, and digital content.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    linkHref: "https://academics-tat.tekkzy.com/tri-digi-space"
  }
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans">
      <Hero />
      
      {/* Introduction block with Stats - Modern Non-Card Layout */}
      <section id="about" className="pt-40 pb-32 relative overflow-hidden group bg-white">
        
        {/* Floating Circles Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[60%] rounded-full border-[1px] border-[#EFE7DF]/50 mix-blend-multiply opacity-50"></div>
          <div className="absolute top-[20%] right-[5%] w-[30%] h-[40%] rounded-full border-[2px] border-[#283B91]/5 mix-blend-multiply opacity-70"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full border-[1px] border-[#E5AA3E]/10 mix-blend-multiply"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 xl:px-12 relative z-10">
           
           {/* Editorial Typography Header */}
           <div className={`transition-all duration-1000 ease-out transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-7">
                  <h2 className="font-serif text-[48px] md:text-[64px] lg:text-[72px] font-black text-[#212529] leading-[1.05] tracking-tight mb-8">
                    Empowering Education. <br/>
                    <span className="italic text-[#283B91] font-light">Inspiring Innovation.</span>
                  </h2>
                </div>
                <div className="lg:col-span-5 flex flex-col justify-end">
                  <p className="text-[#495057] text-[18px] md:text-[22px] leading-relaxed mb-12 font-medium font-sans">
                    At Trident Academy of Technology, we believe education is the foundation of every great innovation. Since 1998, we have been shaping the future of over 20,000 students through world-class technical, management, biotechnology, and professional education — right in the heart of Bhubaneswar, Odisha.
                  </p>
                  <div className="w-24 h-1 bg-[#283B91]"></div>
                </div>
              </div>
           </div>
           
           {/* Infinite Scrolling Ticker (Non-Card based) */}
           <div className={`mt-24 pt-16 border-t border-[#EFE7DF] transition-all duration-1000 delay-200 transform ${scrolled ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
             <SkewedMarquee 
               items={[
                 "Est. 1998 — Over 25 years of excellence",
                 "20,000+ Students transformed",
                 "6 NBA-Accredited Programmes",
                 "NAAC Accredited Institution",
                 "AICTE Approved | Affiliated to BPUT, SCTEVT & Utkal University"
               ]}
               bgColor="transparent"
               textColor="#283B91"
               hoverColor="#E5AA3E"
               speed={40}
             />
           </div>
        </div>
        
        {/* Dynamic Section Divider (Thick Colored Lines) */}
        <div className="absolute bottom-0 left-0 w-full flex h-4">
           <div className="w-1/4 bg-[#283B91]"></div>
           <div className="w-1/4 bg-[#E5AA3E]"></div>
           <div className="w-1/4 bg-[#D3494B]"></div>
           <div className="w-1/4 bg-[#8B6E66]"></div>
        </div>
      </section>
      
      <RankingRecognition />
      <SectionDivider type="curve" topColor="#F0BB51" bottomColor="#FAF9F7" height={80} />
      
      <AcademicPrograms />
      <SectionDivider type="wave" topColor="#FAF9F7" bottomColor="#EDF2F7" height={70} />
      
      <InstitutionalInfo />
      <SectionDivider type="tilt" topColor="#EDF2F7" bottomColor="#ffffff" height={80} />
      
      <AcademicGovernance />
      <SectionDivider type="curve" topColor="#ffffff" bottomColor="#1A1817" height={70} />

      <JournalsSection title="Online Journals and Databases" items={journals} />
      <DigitalResourcesSection title="Digital Resources & Publications" items={digitalResources} />

      {/* Final CTA Section */}
      <section className="relative w-full py-32 md:py-40 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/campus-students.jpg" 
            onError={(e) => { 
              if (!e.target.dataset.fallbackApplied) {
                e.target.dataset.fallbackApplied = true;
                e.target.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2000"; 
              }
            }}
            alt="Students on campus" 
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2660]/90 to-[#283B91]/70 mix-blend-multiply"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="font-serif text-[48px] md:text-[80px] font-black text-white leading-tight mb-6 drop-shadow-lg">
            Your future <br className="md:hidden"/> <span className="italic text-[#E5AA3E]">starts here.</span>
          </h2>
          <p className="text-white/90 text-[18px] md:text-[22px] font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of successful alumni who began their journey at Trident. Take the first step towards a brilliant career today.
          </p>
          <a href="https://apply-now.tekkzy.com" className="bg-[#D3494B] text-white font-bold text-[15px] tracking-widest uppercase px-12 py-5 rounded-full hover:bg-white hover:text-[#D3494B] transition-all duration-500 shadow-xl shadow-[#D3494B]/30 hover:scale-105">
            Begin Your Application
          </a>
        </div>
      </section>

    </div>
  );
}
