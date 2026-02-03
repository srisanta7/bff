import React from 'react';
import { motion } from 'framer-motion';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="story">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <div className="relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-orange-600"></div>
               <img 
                 src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop" 
                 alt="Cafe Owner brewing coffee" 
                 className="w-full rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-orange-600"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6">Our Story</h2>
              <p className="text-stone-600 leading-loose text-lg">
                Founded in 2016, Urban Brew & Bite started with a simple mission: to create a space where time slows down. What began as a small corner cart has grown into a community hub. We believe that food is not just fuel, but a conversation starter, a comfort, and a daily ritual.
              </p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-xl border-l-4 border-orange-600">
              <h3 className="text-2xl font-serif font-bold text-stone-900 mb-4">Our Philosophy</h3>
              <p className="text-stone-600">
                Quality without compromise. Consistency in every cup. An experience that feels like home. We source locally, roast passionately, and serve with a smile that says "you belong here."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};