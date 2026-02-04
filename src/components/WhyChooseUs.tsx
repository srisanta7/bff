import React from 'react';
import { ChefHat, Leaf, Star, Heart } from 'lucide-react';
import { USP_ITEMS } from '@/constants';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const icons = [ChefHat, Leaf, Star, Heart];

  return (
    <section className="py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-800/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Why Brooklyn Food Factory?</h2>
          <p className="text-stone-400">More than just food, it's a commitment to quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {USP_ITEMS.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-stone-900/50 backdrop-blur-sm rounded-2xl border border-stone-800 hover:border-orange-500/50 transition-all duration-300 text-center group hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-900/10"
              >
                <div className="w-20 h-20 mx-auto mb-8 bg-stone-800 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-300 shadow-inner">
                  <Icon className="w-10 h-10 text-stone-300 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif text-white">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};