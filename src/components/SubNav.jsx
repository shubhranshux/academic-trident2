import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const SubNav = () => {
  const [activeToken, setActiveToken] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  const links = [
    { name: 'Overview', id: 'about' },
    { name: 'Rankings', id: 'ranking' },
    { name: 'Programs', id: 'programs' },
    { name: 'Institutional', id: 'institutional' },
    { name: 'Governance', id: 'governance' },
    { name: 'Journals', id: 'journals' },
    { name: 'Resources', id: 'resources' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 700;
      setIsVisible(window.scrollY > heroHeight - 100);

      // ScrollSpy logic
      let current = '';
      for (const link of links) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            current = link.id;
          }
        }
      }
      if (current) setActiveToken(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.165, 0.84, 0.44, 1] }}
          className="fixed top-[72px] left-0 w-full bg-white/95 backdrop-blur-md border-b border-[#1B4D8E]/10 z-[900] py-4 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-6 overflow-x-auto custom-scrollbar-mini">
            <ul className="flex justify-start md:justify-center gap-6 md:gap-10 min-w-max">
              {links.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleClick(link.id)}
                    className={cn(
                      "relative text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 pb-1.5 whitespace-nowrap",
                      activeToken === link.id ? "text-[#1B4D8E]" : "text-slate-500 hover:text-[#1B4D8E]/70"
                    )}
                    style={{ fontFamily: "'Inter', 'DM Sans', sans-serif" }}
                  >
                    {link.name}
                    {activeToken === link.id && (
                      <motion.div 
                        layoutId="active-nav"
                        className="absolute bottom-0 left-0 w-full h-[3px] bg-[#1B4D8E] rounded-full"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubNav;
