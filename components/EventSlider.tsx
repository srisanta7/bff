import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { EVENTS } from '../constants';

export const EventSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isPaused]);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % EVENTS.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + EVENTS.length) % EVENTS.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.5,
      zIndex: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0.5
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section 
      className="relative w-full h-[50vh] md:h-[70vh] bg-stone-950 overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          >
             <img 
               src={EVENTS[current].image} 
               alt={EVENTS[current].title}
               className="w-full h-full object-cover brightness-75"
             />
          </motion.div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-16 md:pb-24">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-1.5 bg-orange-600 text-white text-xs md:text-sm font-bold uppercase tracking-widest rounded-full shadow-lg">
                  {EVENTS[current].badge}
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-4 leading-none uppercase drop-shadow-xl">
                {EVENTS[current].title}
              </h2>
              <p className="text-lg md:text-2xl text-stone-200 mb-8 font-medium max-w-xl drop-shadow-md border-l-4 border-orange-500 pl-4">
                {EVENTS[current].subtitle}
              </p>
              
              {EVENTS[current].ctaText && (
                <button className="px-8 py-3 bg-white text-stone-900 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:scale-105 shadow-xl">
                   {EVENTS[current].ctaText}
                </button>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows (Desktop) */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/20 hover:bg-orange-600 transition-colors hidden md:block opacity-0 group-hover:opacity-100 duration-300"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/20 hover:bg-orange-600 transition-colors hidden md:block opacity-0 group-hover:opacity-100 duration-300"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {EVENTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`transition-all duration-300 rounded-full h-1.5 shadow-lg ${
              idx === current ? 'w-10 bg-orange-500' : 'w-4 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
