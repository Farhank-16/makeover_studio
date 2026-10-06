import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/gallery';

export default function GalleryGrid({ initialLimit, showFilters = true }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const displayedItems = initialLimit ? filteredItems.slice(0, initialLimit) : filteredItems;

  return (
    <div>
      {/* Category Filter Chips */}
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`label-caps px-4 sm:px-5 py-2.5 rounded-[2px] transition-all duration-300 text-xs ${
                  isSelected
                    ? 'bg-[#1F1E1D] text-[#FAF8F5] border border-[#C5A880]'
                    : 'bg-[#EFE9E0] text-[#1F1E1D]/70 hover:text-[#1F1E1D] hover:bg-[#E4E2DF] border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {displayedItems.map((item) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              key={item.id}
              className="group relative cursor-pointer bg-[#EFE9E0] rounded-[3px] overflow-hidden border border-[#1F1E1D]/10 hover:border-[#C5A880]/80 transition-all duration-300 shadow-sm"
              onClick={() => setActiveImage(item)}
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1F1E1D]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <span className="self-end text-[#FAF8F5] bg-[#1F1E1D]/70 p-2 rounded-full backdrop-blur-sm">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="label-caps text-[10px] text-[#C5A880] tracking-[0.2em] block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif text-lg text-[#FAF8F5]">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Bottom label for clear viewing */}
              <div className="p-4 bg-[#FAF8F5] border-t border-[#1F1E1D]/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-medium text-[#1F1E1D]">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-[#7A5555]">
                    {item.categoryLabel}
                  </span>
                </div>
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1F1E1D]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-[#FAF8F5] rounded-[4px] overflow-hidden border border-[#C5A880]/40 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 border-b border-[#1F1E1D]/10 flex items-center justify-between bg-[#FAF8F5]">
                <div>
                  <span className="label-caps text-[10px] text-[#9C825C]">
                    {activeImage.categoryLabel}
                  </span>
                  <h3 className="font-serif text-lg text-[#1F1E1D]">
                    {activeImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveImage(null)}
                  className="p-2 text-[#1F1E1D] hover:text-[#9C825C] transition-colors rounded-full hover:bg-[#EFE9E0]"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Large Image */}
              <div className="overflow-auto max-h-[75vh] flex items-center justify-center bg-[#1F1E1D]">
                <img
                  src={activeImage.image}
                  alt={activeImage.alt || activeImage.title}
                  className="max-h-[75vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Modal Bottom Caption */}
              <div className="p-4 bg-[#FAF8F5] text-xs text-[#4A4640] border-t border-[#1F1E1D]/10 flex items-center justify-between">
                <p>{activeImage.alt}</p>
                <span className="label-caps text-[10px] text-[#C5A880]">Makeover Atelier</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
