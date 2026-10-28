import React from 'react';
import { Bed, Users, Maximize2, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { roomCategories, hotelInfo } from '../data/hotelData';

export default function RoomsSection({ onSelectRoom }) {
  return (
    <section id="rooms" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold">
              Accommodations & Suites
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-editorial text-neutral-900 leading-tight">
              Find Your Perfect Stay.
            </h2>
            <p className="text-base text-neutral-700 font-medium leading-relaxed">
              Five transparent room categories designed for restorative, unhurried rest in Cochin.
            </p>
          </div>

          {/* Official Rate Note */}
          <div className="text-right shrink-0 bg-white p-4 rounded-2xl border border-[#E4DECf] shadow-xs">
            <span className="text-xs font-mono text-neutral-500 block font-semibold">
              Official Desk Rates
            </span>
            <span className="text-xs text-moss-700 font-bold">
              Extra Person: ₹{hotelInfo.extraPersonRate} · {hotelInfo.taxNote}
            </span>
          </div>
        </div>

        {/* 3-Column Accommodations Grid matching Row 3 of reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomCategories.map((room) => (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room)}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E3DCce] shadow-sm hover:shadow-2xl hover:border-moss-600 transition-all duration-500 cursor-pointer"
            >
              {/* Image Frame with Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100 shrink-0">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                
                {/* Price Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-moss-900/90 backdrop-blur-md border border-white/25 px-4 py-1.5 rounded-full text-white text-xs font-mono font-bold shadow-md">
                    ₹{room.price.toLocaleString('en-IN')}{' '}
                    <span className="text-[10px] text-neutral-300 font-sans font-normal">/ night</span>
                  </div>
                </div>

                {/* Category Chip */}
                {room.id === 'presidential-suite' && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-brass-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Premier
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-2xl font-bold font-editorial tracking-tight text-neutral-900 group-hover:text-moss-700 transition-colors leading-tight mb-3">
                    {room.name}
                  </h3>

                  {/* Specs Strip */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xs text-neutral-800 font-bold mb-4 py-2.5 px-3 bg-[#FAF7F2] rounded-xl border border-[#EBE3D5]">
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-moss-700" />
                      <span>{room.bed}</span>
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className={room.climateType === 'ac' ? 'text-moss-700' : 'text-amber-800'}>
                      {room.climate}
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-moss-700" />
                      <span>{room.capacity}</span>
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-moss-700" />
                      <span>{room.size}</span>
                    </span>
                  </div>

                  {/* Short Narrative */}
                  <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed line-clamp-2 mb-4">
                    {room.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 mb-2">
                    {room.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-medium text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-moss-700 shrink-0 stroke-[2.5]" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip with Green Pill Button matching reference image button */}
                <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold block">
                      Room Rate
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black font-editorial tracking-tight text-moss-800">
                        ₹{room.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">/ night</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRoom(room);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-moss-700 group-hover:bg-moss-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-md group-hover:shadow-lg active:scale-95"
                  >
                    <span>View Room</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
