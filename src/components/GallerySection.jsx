import React, { useState } from 'react';
import { galleryItems } from '../data/hotelData';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Rooms & Suites',
    'Dining',
    'Banquets',
    'Grounds & Facade'
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white border-b border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold">
            Visual Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900">
            Moments at Ashoka Imperial
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            A visual tour of our heritage suites, traditional dining, and tranquil Kochi grounds.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-moss-700 text-white shadow-md'
                    : 'bg-[#FAF7F2] text-neutral-700 hover:bg-neutral-100 border border-[#E3DCce]'
                }`}
              >
                {cat === 'All' ? 'All Views' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 bg-neutral-900"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition"></div>

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] uppercase tracking-wider text-brass-400 font-semibold block mb-1">
                  {item.category}
                </span>
                <h4 className="font-editorial text-lg font-bold text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-300 font-light truncate mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
