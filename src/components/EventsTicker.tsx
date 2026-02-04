import React from 'react';
import { motion } from 'framer-motion';

export const EventsTicker: React.FC = () => {
  const items = [
    "🎉 Happy Hour: 4PM - 7PM Daily",
    "☕ Free Coffee with every Breakfast Combo",
    "🎵 Live Jazz every Friday Night",
    "🍔 New Vegan Burger Launching Soon",
    "🥐 Weekend Brunch Special: Bottomless Mimosas"
  ];

  return (
    <div className="bg-orange-600 py-4 overflow-hidden whitespace-nowrap relative z-10">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20
        }}
      >
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="text-white font-bold text-lg tracking-wide uppercase inline-flex items-center">
            <span className="w-2 h-2 bg-stone-900 rounded-full mr-4"></span>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};