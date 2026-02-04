import React from 'react';
import { SOCIAL_IMAGES } from '@/constants';
import { Instagram } from 'lucide-react';

export const SocialGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-orange-600 font-bold">
          <Instagram size={24} />
          <span>@URBANBREWBITE</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Follow the Aroma</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4">
        {SOCIAL_IMAGES.map((img) => (
          <div key={img.id} className="relative group overflow-hidden aspect-square cursor-pointer">
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white w-8 h-8" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};