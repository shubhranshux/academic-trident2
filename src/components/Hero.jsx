import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const slides = [
  {
    image: "/slide/Your Future Starts Here.png",
    title1: "Your Future",
    title2: "Starts Here."
  },
  {
    image: "/slide/innovation Starts in Lab.jpeg",
    title1: "Innovation",
    title2: "Starts in Lab."
  }
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-32 md:pt-40 pb-20 group">
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231A1817' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

      {/* Absolute Full-Height Right Image */}
      <div 
        className={`absolute top-0 right-0 w-full lg:w-[50%] h-full z-0 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`} 
        style={{ clipPath: 'ellipse(100% 90% at 100% 50%)' }}
      >
         <div className="relative w-full h-full overflow-hidden group/slider">
            {slides.map((slide, idx) => (
              <img 
                key={idx}
                src={slide.image} 
                alt={slide.title1} 
                className={`absolute inset-0 w-full h-full object-cover transform transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${currentSlide === idx ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`} 
              />
            ))}
            
            {/* Slider Controls */}
            <div className="absolute bottom-12 left-[60%] -translate-x-1/2 flex gap-2 z-20">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                />
              ))}
            </div>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 w-full relative z-10 pointer-events-none">
        
        {/* Left Side: Content */}
        <div className="text-left max-w-2xl lg:w-[45%] pointer-events-auto">
          <div className={`flex items-center gap-4 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} mb-8`}>
             <span className="text-[12px] font-black text-[#8B6E66] uppercase tracking-[.4em]">Trident Academy of Technology</span>
          </div>

          <div className={`relative grid mb-8 transition-all duration-1000 delay-150 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {slides.map((slide, idx) => (
              <h1 
                key={idx} 
                className={`col-start-1 row-start-1 w-full font-serif text-5xl md:text-7xl lg:text-[88px] font-black text-[#212529] leading-[1.05] tracking-tight transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${currentSlide === idx ? 'translate-y-0 opacity-100 z-10' : 'translate-y-8 opacity-0 pointer-events-none z-0'}`}
              >
                {slide.title1} <br />
                <span className="italic text-[#8B6E66]">{slide.title2}</span>
              </h1>
            ))}
          </div>

          <p className={`text-[17px] md:text-lg text-[#5c5855] max-w-xl mb-12 leading-relaxed transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            Immerse yourself in Odisha's premier technical ecosystem. We combine rigorous Silicon-tier academics with world-class innovation labs to forge the leaders of tomorrow.
          </p>

          <div className={`flex flex-wrap items-center gap-6 transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a href="https://admissions-tat.tekkzy.com/" className="bg-[#212529] text-white px-10 py-5 rounded-2xl font-bold text-[13px] uppercase tracking-widest flex items-center gap-3 transition-all duration-300 hover:bg-[#8B6E66] hover:shadow-2xl hover:-translate-y-1">
              Begin Journey <ArrowRight size={18} />
            </a>
            <a href="https://placement-tat.tekkzy.com" className="text-[#212529] font-bold text-[13px] uppercase tracking-widest border-b-2 border-[#EFE7DF] hover:border-[#8B6E66] transition-colors pb-1">
              View Placements
            </a>
            <a href="#about" className="text-[#212529] font-bold text-[13px] uppercase tracking-widest border-b-2 border-[#EFE7DF] hover:border-[#8B6E66] transition-colors pb-1">
              Know Our Impact
            </a>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] font-black text-[#8B6E66] uppercase tracking-[.3em]">Scroll</span>
        <ChevronDown size={20} className="text-[#8B6E66] animate-bounce" />
      </div>
    </section>
  );
}
