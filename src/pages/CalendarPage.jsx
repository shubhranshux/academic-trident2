import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Calendar as CalendarIcon, Download, FileText } from 'lucide-react';
import { FadeInUp } from '../utils/animations';

const CALENDAR_DATA = [
  { id: 1, title: "Academic Calendar for Even Semester 2023-24", year: "2023-24", type: "Even Semester", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
  { id: 2, title: "Academic Calendar for Odd Semester 2023-24", year: "2023-24", type: "Odd Semester", link: "https://drive.google.com/file/d/1zRBIi9jTcaDIwalxTlu5udqubLTZfWnj/view?usp=sharing" },
  { id: 3, title: "Academic Calendar for Even Semester 2021-22", year: "2021-22", type: "Even Semester", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
  { id: 4, title: "Modified Academic Calendar for 1st Sem. 2021 and Proposed Academic Calendar for 3rd, 5th Odd 2021 & Even - 2022 (8th and 10th Sem.)", year: "2021-22", type: "Modified", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
  { id: 5, title: "Academic Calendar for the Even-2020 (2nd & 4th Sem) and Odd Semester-2021 (1st Sem, 7th Sem) Activities", year: "2020-21", type: "Combined", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
  { id: 6, title: "Tentative Academic Calendar for the Even Semester - 2021 Activities", year: "2020-21", type: "Even Semester", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
  { id: 7, title: "Revised Academic Calendar for the Odd Semester - 2020 Activities", year: "2020-21", type: "Odd Semester", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
  { id: 8, title: "Tentative Academic Calendar for the Odd Semester - 2020 Activities", year: "2020-21", type: "Odd Semester", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
  { id: 9, title: "Academic Calendar for the Odd Semester - 2019 Activities", year: "2019-20", type: "Odd Semester", link: "https://drive.google.com/file/d/1CvLgJIXDVPnvXkXFVaTi1ZP-4aQ0f_pV/view" },
];

export default function CalendarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Full-width Small Hero Banner */}
      <div className="relative w-full h-[45vh] min-h-[350px] max-h-[450px] bg-[#1a2352] flex items-center justify-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/biotech_overview.jpg" 
            alt="Academic Calendar" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2352] via-[#1a2352]/80 to-[#1a2352]/50" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            
            <h1 className="font-serif text-[48px] md:text-[64px] font-black text-white leading-tight mb-6">
              Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">Calendars</span>
            </h1>
            
            <p className="text-gray-300 text-[16px] md:text-[18px] max-w-2xl leading-relaxed font-medium">
              Stay aligned with important dates, examinations, and campus activities. Access past and current schedules for all academic sessions.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 xl:px-12 mt-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 flex-wrap text-[11px] font-medium text-[#8B6E66] uppercase tracking-[0.2em] mb-4">
          <Link to="/" className="hover:text-[#212529] transition-colors flex items-center gap-1">
            <Home size={12} /> Home
          </Link>
          <ChevronRight size={10} />
          <a href="https://academics-tat.tekkzy.com/" className="hover:text-[#212529] transition-colors">
            Academics
          </a>
          <ChevronRight size={10} />
          <span className="text-[#212529] font-bold">Calendar</span>
        </nav>

        {/* Calendar Grid */}
        {/* List Container */}
        <div className="relative mt-12 mb-24 max-w-5xl mx-auto">
          <div className="flex flex-col gap-6">
            {CALENDAR_DATA.map((calendar, index) => (
              <motion.div
                key={calendar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#283B91]/30 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative"
              >
                {/* Highlight side bar on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#283B91] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex-1 pl-2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-[#283B91]/10 text-[#283B91] text-[10px] font-black uppercase tracking-widest rounded-full">
                      {calendar.year}
                    </span>
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-[#8B6E66]/10 text-[#8B6E66] text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {calendar.type}
                    </span>
                  </div>
                  
                  <h3 className="font-sans text-[18px] md:text-[20px] font-bold text-[#212529] leading-snug group-hover:text-[#283B91] transition-colors pr-4 md:pr-12">
                    <span className="text-gray-300 mr-4 font-mono font-medium">{index + 1}.</span>
                    {calendar.title}
                  </h3>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                  <a 
                    href={calendar.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#EDF2F7] group-hover:bg-[#283B91] group-hover:text-white transition-colors text-[#212529] text-[13px] font-bold uppercase tracking-widest group-hover:shadow-lg group-hover:shadow-[#283B91]/20 group/btn"
                  >
                    <FileText size={16} className="text-[#8B6E66] group-hover:text-white/80 transition-colors" />
                    <span>View PDF</span>
                    <Download size={14} className="ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
