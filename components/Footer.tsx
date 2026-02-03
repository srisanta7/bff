import React from 'react';
import { LOGO_URL, BRAND_NAME } from '../constants';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          <div className="text-center md:text-left">
             <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <img src={LOGO_URL} alt="Logo" className="w-12 h-12 rounded-full border border-stone-700" />
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                {BRAND_NAME}
              </span>
            </div>
            <p className="max-w-xs mx-auto md:mx-0 text-sm leading-relaxed">
              Crafting memories, one plate at a time. Join us for the authentic Brooklyn food factory experience.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-bold tracking-widest text-stone-500">
             <Link to="/menu" className="hover:text-orange-500 transition-colors">MENU</Link>
             <a href="/#story" className="hover:text-orange-500 transition-colors">STORY</a>
             <a href="/#location" className="hover:text-orange-500 transition-colors">LOCATIONS</a>
             <a href="/#reviews" className="hover:text-orange-500 transition-colors">REVIEWS</a>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all transform hover:-translate-y-1">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all transform hover:-translate-y-1">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all transform hover:-translate-y-1">
              <Twitter size={20} />
            </a>
          </div>

        </div>

        <div className="border-t border-stone-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
             <span className="hover:text-stone-400 cursor-pointer">Privacy Policy</span>
             <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};