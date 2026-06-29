import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Home, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeInUp } from '../utils/animations';

const CHAPTERS_DATA = [
  {
    id: 1,
    title: "ISTE Chapter",
    subtitle: "Indian Society for Technical Education",
    description: "The leading National Professional non-profit making Society for the Technical Education System, focusing on Career Development of Teachers and Personality Development of Students.",
    tags: ["Quality Training Programmes", "Personality Development", "Industry Readiness"]
  },
  {
    id: 2,
    title: "IETE Students Forum (ISF)",
    subtitle: "Institution of Electronics and Telecommunication",
    description: "A catalyst for the overall growth in technical and professional skills, facilitating technical visits, projects, seminars, and networking for students in electronics.",
    tags: ["Technical Programs & Workshops", "Career Counseling", "Team Spirit Incubation"]
  },
  {
    id: 3,
    title: "ACM Student Chapter",
    subtitle: "Association for Computing Machinery",
    description: "Fostering computing passion among students through the Trident ACM Student Chapter, empowering them with global resources and networking opportunities.",
    tags: ["Global Computing Network", "Coding Competitions", "Knowledge Sharing"]
  },
  {
    id: 4,
    title: "IEEE Student Branch",
    subtitle: "Institute of Electrical and Electronics Engineers",
    description: "Inspiring a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities.",
    tags: ["Innovation", "Professional Networking", "Technical Excellence"]
  }
];

const ChaptersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Full-width Premium Hero Banner */}
      <div className="relative w-full h-[60vh] min-h-[450px] bg-[#1a2352] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
            alt="Student Chapters Collaboration" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#1a2352]/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7f9] via-[#1a2352]/20 to-transparent" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#E5AA3E]/10 blur-[100px]" />
          <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#E5AA3E]/10 blur-[100px]" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="font-serif text-[56px] md:text-[80px] font-black text-white leading-[1.1] mb-8 tracking-tight">
              Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5AA3E] to-[#F9D423]">Chapters</span>
            </h1>
            
            <p className="text-white/90 text-[18px] md:text-[22px] max-w-3xl leading-relaxed font-light mx-auto">
              Empowering students to innovate, lead, and collaborate through global professional networks and technical societies.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 mt-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-[#8B6E66] uppercase tracking-[0.2em] mb-12">
          <Link to="/" className="hover:text-[#212529] transition-colors flex items-center gap-1">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={10} />
          <a href="https://academics-tat.tekkzy.com/" className="hover:text-[#212529] transition-colors">
            Academics
          </a>
          <ChevronRight size={10} />
          <span className="text-[#212529] font-bold">Chapters</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column - Sticky Info Card */}
          <div className="w-full lg:w-[400px] flex-shrink-0 lg:sticky lg:top-32">
            <FadeInUp>
              <div className="py-12 border-b border-gray-100 last:border-0 border border-gray-100 h-full">
                <div className="inline-block px-4 py-1.5 bg-[#2E7D32] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-8">
                  Professional Societies
                </div>
                
                <h1 className="font-sans text-[32px] md:text-[36px] font-bold text-[#1a2352] leading-tight mb-6">
                  Beyond the Classroom
                </h1>
                
                <p className="text-[#5c5855] text-[15px] leading-relaxed mb-10">
                  Trident encourages strong technical foundation by establishing elite societies like IEEE, ISTE, and ACM chapters. These platforms provide indispensable skills and exposure through national workshops, coding competitions, and global networking.
                </p>

                <div className="border-t border-gray-100 pt-8 flex items-center justify-between border-dashed">
                  <div className="text-center">
                    <div className="text-[#2E7D32] text-[28px] font-black font-sans mb-1">5+</div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Active Chapters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[#2E7D32] text-[28px] font-black font-sans mb-1">2000+</div>
                    <div className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Student Members</div>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column - Chapters Grid */}
          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 gap-4">
              <h2 className="font-sans text-[28px] font-bold text-[#1a2352]">Professional Student Chapters</h2>
              <span className="text-gray-500 text-sm hidden sm:block">Empowering Student Growth</span>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {CHAPTERS_DATA.map((chapter) => (
                <motion.div
                  key={chapter.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg hover:border-[#2E7D32]/20 transition-all duration-300 flex flex-col h-full"
                >
                  <h3 className="font-sans text-[22px] font-bold text-[#1a2352] mb-1">
                    {chapter.title}
                  </h3>
                  <h4 className="text-[#2E7D32] text-[13px] font-bold mb-6">
                    {chapter.subtitle}
                  </h4>
                  
                  <p className="text-gray-500 text-[14px] leading-relaxed mb-8 flex-grow">
                    {chapter.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {chapter.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="inline-block px-3 py-1.5 bg-[#f8f9fa] text-gray-500 border border-gray-100 text-[10px] font-bold uppercase tracking-wider rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChaptersPage;
