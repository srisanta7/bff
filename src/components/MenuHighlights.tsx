import React from 'react';
import { MENU_HIGHLIGHTS } from '@/constants';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const MenuHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100 text-stone-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest text-sm uppercase">Taste the Difference</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Menu Highlights</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MENU_HIGHLIGHTS.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-stone-200 hover:border-orange-200 transition-colors"
            >
              <h3 className="text-3xl font-serif font-bold text-stone-900 mb-8 border-b-2 border-orange-100 pb-4">
                {category.title}
              </h3>
              <ul className="space-y-8">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex justify-between items-start group cursor-default">
                    <div className="pr-4">
                      <h4 className="font-bold text-lg text-stone-800 group-hover:text-orange-600 transition-colors">{item.name}</h4>
                      <p className="text-stone-500 text-sm mt-1 leading-snug">{item.description}</p>
                    </div>
                    <span className="font-serif font-bold text-lg text-orange-600 shrink-0">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/menu"
            className="inline-block px-10 py-4 border-2 border-stone-900 text-stone-900 font-bold rounded-full hover:bg-stone-900 hover:text-white transition-all duration-300 hover:scale-105"
          >
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  );
};