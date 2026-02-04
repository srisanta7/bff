import React, { useRef } from 'react';
import { STATS } from '@/constants';
import { motion, useInView } from 'framer-motion';

const CounterItem: React.FC<{ value: number; label: string; suffix: string }> = ({ value, label, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <div ref={ref} className="text-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-serif font-bold text-orange-600 mb-3 drop-shadow-sm"
      >
        {isInView ? (
           <CountUp end={value} duration={2.5} />
        ) : (
            <span>0</span>
        )}
        {suffix}
      </motion.div>
      <p className="text-stone-700 font-bold uppercase tracking-widest text-sm">{label}</p>
    </div>
  );
};

const CountUp = ({ end, duration }: { end: number, duration: number }) => {
    const [count, setCount] = React.useState(0);
    
    React.useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);
            
            // Easing function for smooth stop
            const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);
            
            setCount(Math.floor(end * easeOutQuart(percentage)));

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <span>{count.toLocaleString()}</span>;
};

export const StatsCounter: React.FC = () => {
  return (
    <section className="py-24 bg-orange-50/50 border-y border-orange-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-stone-200">
          {STATS.map((stat) => (
            <CounterItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};