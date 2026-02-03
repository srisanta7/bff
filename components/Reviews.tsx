import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../constants';
import { Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Reviews: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 8000); // Slowed down to 8 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-stone-900 text-white" id="reviews">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="mb-12">
          <div className="w-16 h-16 bg-stone-800 rounded-full flex items-center justify-center mx-auto mb-6">
             <Quote className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Guests Say</h2>
        </div>

        <div className="relative min-h-[300px] md:min-h-[250px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="w-full flex flex-col items-center"
            >
              <p className="text-xl md:text-2xl font-medium italic text-stone-200 mb-8 leading-relaxed max-w-2xl">
                "{REVIEWS[current].text}"
              </p>
              
              <div className="flex flex-col items-center gap-3">
                <div className="flex gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      fill={i < REVIEWS[current].rating ? "currentColor" : "none"} 
                      className={i < REVIEWS[current].rating ? "" : "text-stone-700"}
                    />
                  ))}
                </div>
                <h4 className="font-bold text-lg text-white">{REVIEWS[current].name}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'bg-orange-600 w-8' : 'bg-stone-700 w-2 hover:bg-stone-600'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};