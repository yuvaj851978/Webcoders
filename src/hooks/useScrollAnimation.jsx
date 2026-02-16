import { useEffect, useRef, useState } from "react";

/**
 * Enhanced scroll animation hook with multiple animation types
 * @param {Object} options - Configuration options
 * @param {string} options.animation - Animation type: 'shoot-left' | 'shoot-right' | 'shoot-top' | 'shoot-bottom' | 'zoom-shoot' | 'spin' | 'elastic' | 'flip-x' | 'flip-y' | 'blur' | 'wave' | 'fade-up'
 * @param {number} options.threshold - Intersection observer threshold (0-1)
 * @param {number} options.delay - Delay in ms before animation starts
 * @param {number} options.duration - Animation duration in ms
 * @param {boolean} options.once - Whether to animate only once
 */
export default function useScrollAnimation({
  animation = 'shoot-left',
  threshold = 0.1,
  delay = 0,
  duration = 800,
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [threshold, once]);

  // Get custom style for delayed animations
  const getAnimationStyle = () => {
    if (!isVisible) return { opacity: 0 };
    return {
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`,
    };
  };

  return [ref, isVisible, getAnimationStyle];
}
