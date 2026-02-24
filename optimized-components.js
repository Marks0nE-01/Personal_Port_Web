// PRACTICAL PERFORMANCE OPTIMIZATION FOR YOUR PROJECT

// 1. OPTIMIZED HERO COMPONENT WITH MEMOIZATION
import { memo, useMemo, useCallback, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';

// Lazy load the modal
const FloatingProjectsModal = lazy(() => import('./FloatingProjectsModal'));

const OptimizedHero = memo(() => {
  // Memoize the text animation to prevent recalculation
  const animatedText = useMemo(() => {
    const text = "HI, I'm Mark";
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.1,
          delay: index * 0.1,
          ease: "easeIn"
        }}
        className={char === "M" || char === "a" || char === "r" || char === "k" ? "playful-underline italic" : ""}
      >
        {char}
      </motion.span>
    ));
  }, []); // Empty dependency array - this never changes

  // Memoize the modal open handler
  const handleViewWork = useCallback(() => {
    setIsProjectsModalOpen(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Your existing hero content */}
      
      {/* Lazy loaded modal */}
      <Suspense fallback={<div />}>
        <FloatingProjectsModal 
          isOpen={isProjectsModalOpen} 
          onClose={() => setIsProjectsModalOpen(false)} 
        />
      </Suspense>
    </section>
  );
});

// 2. OPTIMIZED PROJECTS GRID WITH VIRTUALIZATION
import { FixedSizeList as List } from 'react-window';
import { memo } from 'react';

const ProjectCard = memo(({ index, style, data }) => {
  const project = data.projects[index];
  return (
    <div style={style}>
      {/* Your project card content */}
    </div>
  );
});

const VirtualizedProjectsGrid = memo(({ projects }) => {
  const itemCount = projects.length;
  const itemSize = 400; // Approximate height of each project card
  
  return (
    <List
      height={600}
      itemCount={itemCount}
      itemSize={itemSize}
      itemData={{ projects }}
    >
      {ProjectCard}
    </List>
  );
});

// 3. OPTIMIZED IMAGE COMPONENT
import Image from 'next/image';
import { useState } from 'react';

const OptimizedImage = memo(({ src, alt, ...props }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="relative overflow-hidden">
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        loading="lazy"
        className={`transition-all duration-300 ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}`}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
});

// 4. PERFORMANCE MONITORING HOOK
import { useEffect, useState } from 'react';

const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0
  });

  useEffect(() => {
    // Monitor First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });
    
    observer.observe({ entryTypes: ['paint'] });
    
    return () => observer.disconnect();
  }, []);

  return metrics;
};

// 5. DEBOUNCED SEARCH HOOK
import { useCallback, useRef } from 'react';

const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null);
  
  const debouncedCallback = useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
  
  return debouncedCallback;
};

// 6. PRELOAD CRITICAL RESOURCES
const PreloadResources = () => {
  useEffect(() => {
    // Preload critical fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = '/fonts/inter-var.woff2';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);
    
    // Preload critical images
    const criticalImages = [
      '/hero-image.jpg',
      '/project-1.jpg'
    ];
    
    criticalImages.forEach(src => {
      const img = document.createElement('link');
      img.rel = 'preload';
      img.href = src;
      img.as = 'image';
      document.head.appendChild(img);
    });
    
    return () => {
      // Cleanup if needed
    };
  }, []);
  
  return null;
};

// 7. OPTIMIZED APP STRUCTURE
import { lazy, Suspense } from 'react';

// Lazy load non-critical components
const Contact = lazy(() => import('./components/Contact'));
const About = lazy(() => import('./components/About'));

const App = () => {
  return (
    <div>
      {/* Critical above-the-fold content loads immediately */}
      <Hero />
      
      {/* Other sections load as needed */}
      <Suspense fallback={<div>Loading projects...</div>}>
        <Projects />
      </Suspense>
      
      <Suspense fallback={<div>Loading about...</div>}>
        <About />
      </Suspense>
      
      <Suspense fallback={<div>Loading contact...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
};
