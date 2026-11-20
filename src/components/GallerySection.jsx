import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { galleryItems } from '../data/hotelData';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = [
    'All',
    'Rooms',
    'Lobby',
    'Dining',
    'Events',
    'Ambience'
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 lg:py-20 bg-white border-b border-[#EAE4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-wider text-moss-700 font-bold block">
            Real Property Photography
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900">
            Property Gallery
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Browse authentic photos of our reception, guest rooms, attached washrooms, and dining spaces.
          </p>

          {/* Filter Buttons with 12px radius */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-[12px] transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-moss-700 text-white shadow-xs'
                    : 'bg-[#FAF7F2] text-neutral-700 hover:bg-neutral-100 border border-[#E3DCce]'
                }`}
              >
                {cat === 'All' ? 'All Photos' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Image Grid with 15px radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group relative h-60 sm:h-68 rounded-[15px] overflow-hidden shadow-2xs hover:shadow-md transition-all bg-neutral-900 cursor-pointer border border-[#E0D8CB]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition"></div>

              {/* Zoom overlay hint */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition duration-200">
                <span className="w-8 h-8 rounded-[8px] bg-black/60 backdrop-blur-xs text-white flex items-center justify-center">
                  <ZoomIn className="w-4 h-4" />
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-brass-400 font-semibold block mb-0.5">
                  {item.category}
                </span>
                <h4 className="font-editorial text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 font-normal truncate mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal with 15px radius */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative bg-white rounded-[15px] overflow-hidden max-w-3xl w-full shadow-2xl border border-neutral-700 text-neutral-900"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-[8px] bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition cursor-pointer backdrop-blur-xs"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-16/10 w-full bg-black">
              <img 
                src={activeModalItem.image} 
                alt={activeModalItem.title} 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-5 bg-white">
              <span className="text-[10px] uppercase tracking-wider font-bold text-moss-700">
                {activeModalItem.category}
              </span>
              <h3 className="text-lg font-bold font-editorial text-neutral-900">
                {activeModalItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                {activeModalItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
