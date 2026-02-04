import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_URL, BRAND_SHORT } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (!isHome) {
      // If not home, we rely on Link to go home, but we can't easily scroll to hash after navigation without a helper.
      // For simplicity in this static setup, we just let standard navigation happen.
      // If using Link with hash, React Router handles it usually.
      return; 
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Menu', href: '/#menu', type: 'hash' },
    { name: 'About', href: '/#story', type: 'hash' },
    { name: 'Reviews', href: '/#reviews', type: 'hash' },
    { name: 'Visit Us', href: '/#location', type: 'hash' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-stone-950/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="BFF Logo" className="w-10 h-10 rounded-full border-2 border-orange-500 group-hover:scale-110 transition-transform" />
          <span className={`font-serif text-xl font-bold ${scrolled || !isHome ? 'text-stone-100' : 'text-stone-100'} tracking-wide`}>
            {BRAND_SHORT}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
             /* Using simple anchor tags for hash links on home page, or Links if across pages */
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium tracking-wider hover:text-orange-400 transition-colors ${scrolled || !isHome ? 'text-stone-200' : 'text-stone-100'}`}
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <a href="/#location" className="px-5 py-2 bg-orange-600 text-white text-sm font-bold rounded-full hover:bg-orange-700 transition-colors hover:shadow-lg hover:shadow-orange-600/20">
            BOOK A TABLE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-stone-950 absolute top-full left-0 w-full shadow-2xl overflow-hidden border-t border-stone-800"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-stone-200 text-lg font-medium hover:text-orange-400"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="/#location" 
                className="px-8 py-3 bg-orange-600 text-white font-bold rounded-full"
                onClick={() => setIsOpen(false)}
              >
                BOOK A TABLE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};