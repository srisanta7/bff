import React from 'react';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-white" id="location">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-white">Find Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-orange-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Address</h4>
                    <p className="text-stone-400">Shop No. 1, Ground Floor,<br/>Everest Shopping Centre, Dombivli East,<br/>Maharashtra 421201</p>
                    <a 
                      href="https://maps.app.goo.gl/Wng3Wf2iT45r8jdJ7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-orange-500 hover:text-orange-400 text-sm font-bold transition-colors"
                    >
                      <span>Get Directions</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-orange-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-stone-400">Mon - Sun: 11:00 AM - 11:30 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-orange-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Contact</h4>
                    <a href="tel:+919876543210" className="block text-stone-400 hover:text-orange-400 transition-colors cursor-pointer mb-1">+91 98765 43210</a>
                    <a href="mailto:hello@bff.com" className="block text-stone-400 hover:text-orange-400 transition-colors cursor-pointer">hello@bff.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 h-[400px] bg-stone-800 rounded-xl overflow-hidden shadow-2xl border border-stone-700 relative group">
            <iframe 
              src="https://maps.google.com/maps?q=BFF+Brooklyn+Food+Factory+Dombivli&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="BFF Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            <a 
              href="https://maps.app.goo.gl/Wng3Wf2iT45r8jdJ7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 bg-white text-stone-900 px-5 py-2.5 rounded-full font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex items-center gap-2 hover:bg-orange-50"
            >
              Open in Maps <ExternalLink size={14} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};