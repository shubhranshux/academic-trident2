import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Home, Calendar, Clock, MapPin, User, Download, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

// Dummy Data for the Timetable
const DEPARTMENTS = ["Computer Science", "Civil Engineering", "Biotechnology", "Electronics"];
const SEMESTERS = ["1st Semester", "3rd Semester", "5th Semester", "7th Semester"];
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const TIMETABLE_DATA = {
  "Monday": [
    { id: 1, time: "09:00 AM - 10:00 AM", subject: "Data Structures & Algorithms", faculty: "Dr. A. Sharma", room: "Room 302, Block A", type: "Lecture" },
    { id: 2, time: "10:00 AM - 11:00 AM", subject: "Database Management Systems", faculty: "Prof. K. Verma", room: "Room 304, Block A", type: "Lecture" },
    { id: 3, time: "11:15 AM - 01:15 PM", subject: "Programming Lab (Java)", faculty: "Mr. S. Das", room: "Computer Lab 4", type: "Lab" },
    { id: 4, time: "02:00 PM - 03:00 PM", subject: "Discrete Mathematics", faculty: "Dr. R. Mishra", room: "Room 201, Block B", type: "Lecture" },
  ],
  "Tuesday": [
    { id: 5, time: "09:00 AM - 11:00 AM", subject: "DBMS Lab", faculty: "Prof. K. Verma", room: "Computer Lab 2", type: "Lab" },
    { id: 6, time: "11:15 AM - 12:15 PM", subject: "Computer Organization", faculty: "Dr. M. Singh", room: "Room 305, Block A", type: "Lecture" },
    { id: 7, time: "01:00 PM - 02:00 PM", subject: "Operating Systems", faculty: "Prof. N. Patel", room: "Room 305, Block A", type: "Lecture" },
    { id: 8, time: "02:00 PM - 04:00 PM", subject: "Soft Skills Training", faculty: "Ms. P. Roy", room: "Seminar Hall", type: "Workshop" },
  ],
  "Wednesday": [
    { id: 9, time: "09:00 AM - 10:00 AM", subject: "Operating Systems", faculty: "Prof. N. Patel", room: "Room 305, Block A", type: "Lecture" },
    { id: 10, time: "10:00 AM - 11:00 AM", subject: "Data Structures & Algorithms", faculty: "Dr. A. Sharma", room: "Room 302, Block A", type: "Lecture" },
    { id: 11, time: "11:15 AM - 12:15 PM", subject: "Library / Self Study", faculty: "N/A", room: "Central Library", type: "Self Study" },
  ],
  "Thursday": [
    { id: 12, time: "09:00 AM - 10:00 AM", subject: "Computer Organization", faculty: "Dr. M. Singh", room: "Room 305, Block A", type: "Lecture" },
    { id: 13, time: "10:00 AM - 12:00 PM", subject: "OS Lab", faculty: "Prof. N. Patel", room: "Computer Lab 1", type: "Lab" },
    { id: 14, time: "01:00 PM - 02:00 PM", subject: "Discrete Mathematics", faculty: "Dr. R. Mishra", room: "Room 201, Block B", type: "Lecture" },
  ],
  "Friday": [
    { id: 15, time: "09:00 AM - 10:00 AM", subject: "Database Management Systems", faculty: "Prof. K. Verma", room: "Room 304, Block A", type: "Lecture" },
    { id: 16, time: "10:00 AM - 11:00 AM", subject: "Data Structures & Algorithms", faculty: "Dr. A. Sharma", room: "Room 302, Block A", type: "Lecture" },
    { id: 17, time: "11:15 AM - 01:15 PM", subject: "Mini Project Discussion", faculty: "Dr. M. Singh", room: "Project Lab", type: "Lab" },
  ],
  "Saturday": [
    { id: 18, time: "09:00 AM - 11:00 AM", subject: "Guest Lecture / Seminar", faculty: "Invited Speaker", room: "Main Auditorium", type: "Seminar" },
    { id: 19, time: "11:15 AM - 01:00 PM", subject: "Sports / Club Activities", faculty: "Sports Dept", room: "Playground", type: "Activity" },
  ],
};

const TimeTablePage = () => {
  const [activeDay, setActiveDay] = useState("Monday");
  const [department, setDepartment] = useState("Computer Science");
  const [semester, setSemester] = useState("3rd Semester");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Premium Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[400px] bg-[#1a2352] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=2000" 
            alt="University Schedule" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-[#1a2352]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7f9] via-[#1a2352]/30 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6 mt-16 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            
            <h1 className="font-serif text-[48px] md:text-[64px] font-black text-white leading-tight mb-6">
              Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5AA3E] to-[#F9D423]">Table</span>
            </h1>
            
            <p className="text-gray-200 text-[16px] md:text-[18px] max-w-2xl leading-relaxed mx-auto font-light">
              Stay organized and on top of your classes with our interactive daily academic schedule.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 xl:px-12 mt-8">
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
          <span className="text-[#212529] font-bold">Time Table</span>
        </nav>

        {/* Dashboard Container */}
        <div className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden mb-12">
          
          {/* Top Filters Bar */}
          <div className="bg-[#1a2352] p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="p-3 bg-white/10 rounded-xl hidden sm:block">
                <Filter size={20} className="text-[#E5AA3E]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-[18px]">Filter Schedule</h3>
                <p className="text-white/60 text-[13px]">Select your department and semester</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <select 
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="bg-white/10 border border-white/20 text-white text-[14px] font-medium rounded-xl px-4 py-3 outline-none focus:border-[#E5AA3E] transition-colors w-full sm:w-[220px]"
              >
                {DEPARTMENTS.map(dep => <option key={dep} value={dep} className="text-gray-900">{dep}</option>)}
              </select>
              <select 
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="bg-white/10 border border-white/20 text-white text-[14px] font-medium rounded-xl px-4 py-3 outline-none focus:border-[#E5AA3E] transition-colors w-full sm:w-[180px]"
              >
                {SEMESTERS.map(sem => <option key={sem} value={sem} className="text-gray-900">{sem}</option>)}
              </select>
            </div>
          </div>

          {/* Days Navigation */}
          <div className="px-6 py-6 md:px-8 border-b border-gray-100 overflow-x-auto no-scrollbar">
            <div className="flex gap-3 min-w-max">
              {DAYS.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-6 py-3 rounded-2xl text-[14px] font-bold transition-all duration-300 ${
                    activeDay === day 
                      ? 'bg-[#E5AA3E] text-[#1a2352] shadow-md shadow-[#E5AA3E]/20' 
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-[#1a2352]'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule Timeline */}
          <div className="p-6 md:p-10 bg-gray-50/50 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDay + department + semester}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {TIMETABLE_DATA[activeDay]?.length > 0 ? (
                  TIMETABLE_DATA[activeDay].map((cls, index) => (
                    <div 
                      key={cls.id} 
                      className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center relative overflow-hidden"
                    >
                      {/* Left Accent Bar */}
                      <div className={`absolute left-0 top-0 bottom-0 w-2 ${cls.type === 'Lab' ? 'bg-blue-400' : cls.type === 'Lecture' ? 'bg-[#E5AA3E]' : 'bg-green-400'}`}></div>
                      
                      {/* Time Area */}
                      <div className="flex flex-col gap-1 min-w-[180px] shrink-0 pl-4">
                        <div className="flex items-center gap-2 text-[#1a2352]">
                          <Clock size={16} className="text-gray-400" />
                          <span className="font-bold text-[16px]">{cls.time.split(' - ')[0]}</span>
                        </div>
                        <div className="text-gray-400 text-[13px] font-medium ml-6">
                          to {cls.time.split(' - ')[1]}
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            cls.type === 'Lab' ? 'bg-blue-50 text-blue-600' : cls.type === 'Lecture' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'
                          }`}>
                            {cls.type}
                          </span>
                        </div>
                        <h4 className="text-[20px] md:text-[22px] font-bold text-[#1a2352] mb-4">
                          {cls.subject}
                        </h4>
                        
                        <div className="flex flex-wrap gap-6 text-[14px] text-gray-500 font-medium">
                          <div className="flex items-center gap-2">
                            <User size={16} className="text-[#E5AA3E]" />
                            {cls.faculty}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#E5AA3E]" />
                            {cls.room}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                    <p className="text-gray-400 text-[18px] font-medium">No classes scheduled for this day.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-[#1a2352] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#E5AA3E" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.9,-18.1,98.1,-2.4C99.3,13.3,95.6,29.3,87.4,43.2C79.2,57.1,66.5,68.9,51.8,77.5C37.1,86.1,20.4,91.5,4.3,84.9C-11.8,78.3,-27.3,59.7,-40.4,47.9C-53.5,36.1,-64.2,31.1,-73.4,22.1C-82.6,13.1,-90.3,0.1,-89.6,-12.3C-88.9,-24.7,-79.8,-36.5,-70.2,-46.8C-60.6,-57.1,-50.5,-65.9,-39.2,-74.1C-27.9,-82.3,-15.4,-89.9,-1.2,-87.8C13,-85.7,26,-73.9,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="font-serif text-[28px] md:text-[32px] font-bold text-white mb-2">Download Official Time Table</h3>
            <p className="text-white/70 text-[15px] max-w-lg">Get the complete schedule in PDF format for offline access. The file includes all sections and lab groupings.</p>
          </div>
          <button className="relative z-10 shrink-0 bg-[#E5AA3E] text-[#1a2352] px-8 py-4 rounded-full font-bold text-[14px] uppercase tracking-wider flex items-center gap-3 hover:bg-white transition-colors duration-300 shadow-xl">
            <Download size={18} />
            Download PDF
          </button>
        </div>

      </div>
    </div>
  );
};

export default TimeTablePage;
