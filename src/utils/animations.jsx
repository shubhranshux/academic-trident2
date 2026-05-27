import { useEffect, useRef, useState } from "react";

export function useVisible(threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: observer.unobserve(entry.target); to only animate once
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return [ref, isVisible];
}

// Staggered Fade In Up
export function FadeInUp({ children, delay = 0, duration = 800, className = "" }) {
  const [ref, isVisible] = useVisible(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Fade In Left or Right
export function SlideIn({ children, delay = 0, direction = "left", duration = 800, className = "" }) {
  const [ref, isVisible] = useVisible(0.1);
  const translateVal = direction === "left" ? "-50px" : "50px";
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : `translateX(${translateVal})`,
        transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// Scale Reveal (Good for images)
export function ScaleReveal({ children, delay = 0, duration = 1000, className = "" }) {
    const [ref, isVisible] = useVisible(0.1);
    return (
      <div
        ref={ref}
        className={className}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.95)",
          transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          overflow: "hidden" // Contains scaled children if necessary
        }}
      >
        {children}
      </div>
    );
}

// Keeping original Fade for simple opacities
export function Fade({ children, delay = 0, className = "" }) {
  const [ref, isVisible] = useVisible(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 800ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Custom hook for scroll-driven reveal animations.
 * Adds 'revealed' class when element enters viewport.
 */
export function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isRevealed];
}

/**
 * Custom hook for animated number counting.
 * Counts from 0 to target when element is in view.
 */
export function useCountUp(target, duration = 2000) {
    const [count, setCount] = useState(0);
    const [ref, isRevealed] = useScrollReveal(0.3);

    useEffect(() => {
        if (!isRevealed) return;

        const startTime = performance.now();
        const isInteger = Number.isInteger(target);

        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;
            
            setCount(isInteger ? Math.floor(current) : Math.round(current * 10) / 10);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(target);
            }
        }

        requestAnimationFrame(animate);
    }, [isRevealed, target, duration]);

    return [ref, count];
}

/**
 * Mouse-tracking tilt effect for cards.
 * Returns handlers to apply to the card element.
 */
export function useTilt(intensity = 10) {
    const ref = useRef(null);

    const handleMouseMove = (e) => {
        const el = ref.current;
        if (!el) return;
        
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        const rotateX = (0.5 - y) * intensity;
        const rotateY = (x - 0.5) * intensity;
        
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    return { ref, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
}