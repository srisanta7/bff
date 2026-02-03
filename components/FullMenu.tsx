import React, { useState, useEffect, useRef } from 'react';
import { FULL_MENU_DATA } from '../constants';
import { FullMenuItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, Filter, Flame, Star, 
  X, ShoppingBag, Leaf 
} from 'lucide-react';

// Category Image Mapping for Visual Richness (Fallback only)
const CATEGORY_IMAGES: Record<string, string> = {
  appetizers: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
  munchie: "https://images.unsplash.com/photo-1512485800893-cad379850858?q=80&w=800&auto=format&fit=crop",
  wings: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop",
  burgers_veg: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
  burgers_nonveg: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
  pasta: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop",
  bowls: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
  shakes: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
  coffee: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop",
  coolers: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop",
};

export const FullMenu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(FULL_MENU_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    veg: false,
    bestseller: false,
    spicy: false
  });
  
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Logic
  const getFilteredItems = () => {
    let items: { item: FullMenuItem; category: string; categoryId: string }[] = [];

    // If searching, look through ALL categories
    if (searchQuery.trim().length > 0) {
      FULL_MENU_DATA.forEach(cat => {
        cat.items.forEach(item => {
          if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
            items.push({ item, category: cat.title, categoryId: cat.id });
          }
        });
      });
    } else {
      // Otherwise just the active category
      const currentCat = FULL_MENU_DATA.find(c => c.id === activeCategory);
      if (currentCat) {
        items = currentCat.items.map(item => ({ item, category: currentCat.title, categoryId: currentCat.id }));
      }
    }

    // Apply specific filters
    return items.filter(({ item }) => {
      if (filters.veg && item.veg === false) return false; // Strict Veg Check: Exclude explicit non-veg
      if (filters.bestseller && !item.bestseller) return false;
      if (filters.spicy && !item.spicy) return false;
      return true;
    });
  };

  const filteredItems = getFilteredItems();
  const currentCategoryData = FULL_MENU_DATA.find(c => c.id === activeCategory);

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCategoryClick = (id: string) => {
    setActiveCategory(id);
    setSearchQuery(''); // Clear search when switching category
    // Optional: Scroll category into view nicely
    const element = document.getElementById(`cat-btn-${id}`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pb-20">
      
      {/* 1. STICKY HEADER AREA */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 transition-all duration-300">
        
        {/* Top Bar: Back + Search */}
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="p-2 -ml-2 rounded-full hover:bg-stone-100 transition-colors">
            <ArrowLeft size={24} className="text-stone-700" />
          </Link>
          
          <div className="flex-1 relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-orange-500 transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search pizza, burgers, coffee..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-100 border border-transparent focus:bg-white focus:border-orange-500 rounded-xl outline-none transition-all text-sm font-medium"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                <X size={16} />
              </button>
            )}
          </div>

          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`p-2.5 rounded-xl border transition-colors relative ${isFilterOpen || Object.values(filters).some(Boolean) ? 'bg-orange-50 border-orange-200 text-orange-600' : 'bg-white border-stone-200 text-stone-600'}`}
          >
            <Filter size={20} />
            {Object.values(filters).some(Boolean) && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-600 rounded-full"></span>
            )}
          </button>
        </div>

        {/* Filter Drawer (Expandable) */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-stone-50 border-b border-stone-200"
            >
              <div className="container mx-auto px-4 py-3 flex gap-3 overflow-x-auto no-scrollbar">
                <button 
                  onClick={() => toggleFilter('veg')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${filters.veg ? 'bg-green-100 border-green-300 text-green-800' : 'bg-white border-stone-200 text-stone-600'}`}
                >
                  <Leaf size={14} className={filters.veg ? "fill-green-800" : ""} /> Veg Only
                </button>
                <button 
                  onClick={() => toggleFilter('bestseller')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${filters.bestseller ? 'bg-yellow-100 border-yellow-300 text-yellow-800' : 'bg-white border-stone-200 text-stone-600'}`}
                >
                  <Star size={14} className={filters.bestseller ? "fill-yellow-800" : ""} /> Bestsellers
                </button>
                <button 
                  onClick={() => toggleFilter('spicy')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border transition-all whitespace-nowrap ${filters.spicy ? 'bg-red-100 border-red-300 text-red-800' : 'bg-white border-stone-200 text-stone-600'}`}
                >
                  <Flame size={14} className={filters.spicy ? "fill-red-800" : ""} /> Spicy
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2. CATEGORY SLIDER */}
        {!searchQuery && (
          <div className="bg-white border-b border-stone-100">
            <div 
              ref={categoryScrollRef}
              className="container mx-auto flex overflow-x-auto no-scrollbar py-3 px-4 gap-4 snap-x"
            >
              {FULL_MENU_DATA.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`cat-btn-${cat.id}`}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all snap-center select-none ${
                      isActive 
                        ? 'bg-stone-900 text-white shadow-lg scale-105' 
                        : 'bg-stone-100 text-stone-500 hover:bg-stone-200'
                    }`}
                  >
                    {cat.title.split('(')[0].trim()}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 3. MENU CONTENT AREA */}
      <div className="container mx-auto px-4 pt-6 max-w-5xl min-h-[60vh]">
        
        {/* Dynamic Title / Search Status */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-serif font-black text-stone-900 leading-none">
              {searchQuery ? `Searching "${searchQuery}"` : currentCategoryData?.title || 'Menu'}
            </h1>
            {!searchQuery && currentCategoryData?.note && (
              <p className="text-stone-500 text-sm mt-2 font-medium bg-stone-100 inline-block px-2 py-1 rounded-md">
                💡 {currentCategoryData.note}
              </p>
            )}
          </div>
          <span className="text-sm font-bold text-stone-400">{filteredItems.length} items</span>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-stone-200 rounded-full flex items-center justify-center mb-4">
              <Search size={32} className="text-stone-400" />
            </div>
            <h3 className="text-lg font-bold text-stone-700">No items found</h3>
            <p className="text-stone-500 text-sm">Try adjusting your filters or search term.</p>
          </div>
        )}

        {/* Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map(({ item, category, categoryId }, index) => (
              <MenuCard 
                key={`${item.name}-${index}`} 
                item={item} 
                categoryTitle={category}
                categoryId={categoryId}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating CTA (Optional) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Link 
          to="/#location" 
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-2xl hover:bg-orange-700 transition-transform hover:scale-105 active:scale-95"
        >
          <ShoppingBag size={18} />
          <span>Visit Us to Order</span>
        </Link>
      </div>

    </div>
  );
};

// 4. MENU ITEM CARD COMPONENT
const MenuCard: React.FC<{ item: FullMenuItem; categoryId: string; categoryTitle?: string }> = ({ item, categoryId, categoryTitle }) => {
  // Use specific image or fallback
  const [imgSrc, setImgSrc] = useState(item.image || CATEGORY_IMAGES[categoryId] || CATEGORY_IMAGES['burgers_nonveg']);

  // Handle image load error by falling back to category image
  const handleError = () => {
    if (imgSrc !== CATEGORY_IMAGES[categoryId]) {
      setImgSrc(CATEGORY_IMAGES[categoryId] || CATEGORY_IMAGES['burgers_nonveg']);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 group transition-all duration-300"
    >
      {/* Image Area */}
      <div className="h-40 overflow-hidden relative bg-stone-200">
        <img 
          src={imgSrc} 
          alt={item.name} 
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
           {item.bestseller && (
             <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1 shadow-sm">
               <Star size={10} fill="currentColor" /> Bestseller
             </span>
           )}
           {item.spicy && (
             <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide flex items-center gap-1 shadow-sm">
               <Flame size={10} fill="currentColor" /> Spicy
             </span>
           )}
        </div>
        
        {/* Veg/Non-Veg Indicator (Absolute) */}
        {item.veg !== undefined && (
           <div className={`absolute bottom-3 right-3 w-5 h-5 rounded-sm border flex items-center justify-center bg-white shadow-sm ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
              <div className={`w-2.5 h-2.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`}></div>
           </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2 mb-2">
           <h3 className="font-bold text-lg text-stone-900 leading-tight group-hover:text-orange-600 transition-colors">
             {item.name}
           </h3>
        </div>

        {item.description && (
          <p className="text-stone-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {item.description}
          </p>
        )}
        
        <div className="flex items-end justify-between mt-auto pt-2 border-t border-stone-50">
          {categoryTitle && <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{categoryTitle}</span>}

          <div className="text-right ml-auto">
             {typeof item.price === 'string' ? (
                <span className="font-serif font-bold text-xl text-stone-900">{item.price}</span>
             ) : (
                <div className="flex flex-col items-end">
                  {item.price.map((p, i) => (
                    <div key={i} className="text-xs font-bold text-stone-700">
                      <span className="text-stone-400 font-normal mr-1">{p.label}</span> {p.value}
                    </div>
                  ))}
                </div>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
