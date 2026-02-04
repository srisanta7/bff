import React, { useState } from 'react';
import { SIGNATURE_DISHES } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export const SignatureDishes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
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
    <section className="py-16 bg-stone-950 text-stone-100 overflow-hidden" id="menu">
      <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 border-b border-stone-800 pb-6">
          <div>
            <span className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-2 block">Curated Perfection</span>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-white leading-none">
              House<br /><span className="text-stone-700">Specials</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-6 mt-6 md:mt-0">
             <div className="text-lg md:text-xl font-bold font-serif tracking-widest">
                <span className="text-orange-500">0{currentIndex + 1}</span>
                <span className="text-stone-700 mx-2">/</span>
                <span className="text-stone-500">0{SIGNATURE_DISHES.length}</span>
             </div>
             <div className="flex gap-2">
                <button 
                  onClick={() => paginate(-1)}
                  className="w-12 h-12 md:w-14 md:h-14 border border-stone-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  aria-label="Previous Dish"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  className="w-12 h-12 md:w-14 md:h-14 border border-stone-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
                  aria-label="Next Dish"
                >
                  <ChevronRight size={20} />
                </button>
             </div>
          </div>
        </div>

        {/* Main Content Area - Full Width Split */}
        <div className="relative w-full min-h-[550px] md:h-[500px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 cursor-grab active:cursor-grabbing"
            >
              {/* Image Side (Larger) */}
              <div className="lg:col-span-8 relative h-[250px] lg:h-full rounded-3xl overflow-hidden shadow-2xl group pointer-events-none">
                <img 
                  src={currentDish.image} 
                  alt={currentDish.name} 
                  draggable="false"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
                
                {/* Price Badge Floating */}
                <div className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full font-bold text-lg lg:text-xl shadow-xl">
                  {currentDish.price}
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-4 flex flex-col justify-center py-6 lg:py-0 lg:pl-4 relative z-10 pointer-events-none">
                 <motion.div
                   initial={{ opacity: 0, y: 30 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2, duration: 0.5 }}
                   className="space-y-4 lg:space-y-6 pointer-events-auto"
                 >
                    {/* Background Number Watermark */}
                    <div className="hidden lg:block absolute -top-10 -left-6 text-[180px] font-black text-stone-900 leading-none select-none -z-10 opacity-50 font-serif">
                       {currentIndex + 1}
                    </div>

                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-white leading-tight">
                      {currentDish.name}
                    </h3>
                    
                    <div className="w-16 h-1 bg-orange-600"></div>

                    <p className="text-stone-400 text-base md:text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
                      {currentDish.description}
                    </p>

                    <div className="pt-2 lg:pt-4">
                      <button className="group flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-orange-500 transition-colors text-sm md:text-base">
                        View Details <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                      </button>
                    </div>
                 </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
