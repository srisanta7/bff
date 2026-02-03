import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-black/60 to-stone-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block py-1 px-3 border border-orange-500/50 rounded-full text-orange-400 text-sm font-semibold tracking-widest mb-6 bg-black/40 backdrop-blur-sm"
          >
            EST. 2016 • BROOKLYN ROOTS
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 font-serif leading-tight drop-shadow-lg">
            Bold <span className="text-orange-500 italic">Flavors</span>,<br /> Brooklyn Soul.
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-2xl text-stone-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
          >
            Welcome to BFF – Brooklyn Food Factory.<br/>
            Real ingredients, signature recipes, and an urban vibe you can taste.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#location" 
              className="w-full sm:w-auto px-10 py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transition-all hover:scale-105 shadow-lg shadow-orange-900/30"
            >
              VISIT US
            </a>
            <a 
              href="tel:+1234567890" 
              className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-stone-900 transition-all hover:scale-105"
            >
              CALL NOW
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <span className="text-sm tracking-widest uppercase font-semibold">Scroll</span>
      </motion.div>
    </section>
  );
};