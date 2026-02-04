import React, { useState } from 'react';
import { SIGNATURE_DISHES } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = SIGNATURE_DISHES.length - 1;
      if (nextIndex >= SIGNATURE_DISHES.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentDish = SIGNATURE_DISHES[currentIndex];

  return (
    <section className="py-12 bg-stone-950 text-stone-100 overflow-hidden" id="menu">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Compact Header */}
        <div className="flex items-baseline gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-white leading-none">
            House <span className="text-orange-600">Specials</span>
          </h2>
          <div className="h-px bg-stone-800 flex-grow self-center"></div>
          <div className="text-sm font-bold text-stone-500 tracking-widest hidden md:block">
            CURATED SELECTION
          </div>
        </div>

        {/* Main Compact Card */}
        <div 
          className="relative bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800 w-full mx-auto h-auto md:h-[450px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex flex-col md:flex-row h-full">
            
            {/* Text Side (Left) */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10">
               {/* Background Number Watermark (Subtle) */}
               <div className="absolute top-0 right-6 text-[120px] font-black text-stone-800/50 leading-none select-none -z-10 font-serif opacity-30">
                  0{currentIndex + 1}
               </div>

               <AnimatePresence initial={false} custom={direction} mode="wait">
                 <motion.div
                   key={currentIndex}
                   custom={direction}
                   variants={slideVariants}
                   initial="enter"
                   animate="center"
                   exit="exit"
                   transition={{ duration: 0.3 }}
                   className="space-y-6"
                 >
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                      {currentDish.name}
                    </h3>
                    
                    <p className="text-stone-400 text-base md:text-lg leading-relaxed line-clamp-3">
                      {currentDish.description}
                    </p>

                    <div className="text-3xl font-serif font-bold text-orange-500">
                      {currentDish.price}
                    </div>
                 </motion.div>
               </AnimatePresence>

               {/* Controls aligned bottom */}
               <div className="mt-8 flex items-center gap-6 pt-6 border-t border-stone-800/50">
                  {/* Progress Bar for Auto-slide visualization */}
                  <div className="absolute bottom-0 left-0 h-1 bg-stone-800 w-full z-0">
                    {!isPaused && (
                      <motion.div 
                        key={currentIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 4, ease: "linear" }}
                        className="h-full bg-orange-600/50"
                      />
                    )}
                  </div>

                  <div className="flex gap-3 relative z-10">
                    <button 
                      onClick={() => paginate(-1)}
                      className="w-12 h-12 border border-stone-600 hover:border-orange-500 hover:text-orange-500 rounded-full flex items-center justify-center transition-colors bg-stone-900/50 backdrop-blur-sm"
                      aria-label="Previous Dish"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => paginate(1)}
                      className="w-12 h-12 border border-stone-600 hover:border-orange-500 hover:text-orange-500 rounded-full flex items-center justify-center transition-colors bg-stone-900/50 backdrop-blur-sm"
                      aria-label="Next Dish"
                    >
                      <ChevronRight size={20} />
                    </button>
                 </div>
                 <button className="ml-auto text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-white transition-colors flex items-center gap-2 relative z-10 group">
                    View Details 
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                 </button>
               </div>
            </div>

            {/* Image Side (Right) */}
            <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden group">
               <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                   key={currentIndex}
                   initial={{ opacity: 0, scale: 1.1 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.5 }}
                   className="absolute inset-0 w-full h-full"
                >
                  <img 
                    src={currentDish.image} 
                    alt={currentDish.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-stone-900/20"></div>
                </motion.div>
               </AnimatePresence>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};
