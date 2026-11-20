import React from 'react';
import { Bed, Users, Maximize2, Check, ArrowRight } from 'lucide-react';
import { roomCategories, hotelInfo } from '../data/hotelData';

export default function RoomsSection({ onSelectRoom }) {
  return (
    <section id="rooms" className="py-16 lg:py-24 bg-[#FAF7F2] border-b border-[#EAE4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-wider text-moss-700 font-bold block">
              Accommodations & Tariff
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900 leading-tight">
              Clean & Well-Maintained Rooms
            </h2>
            <p className="text-sm text-neutral-600 font-normal leading-relaxed">
              Transparent direct desk rates for AC and Non-AC stays in Kakkanad, Kochi.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0 bg-white px-4 py-3 rounded-[15px] border border-[#E4DECf] shadow-2xs">
            <span className="text-[11px] font-semibold text-neutral-500 block uppercase tracking-wider">
              Direct Desk Tariffs
            </span>
            <span className="text-xs text-moss-800 font-bold">
              Extra Bed: ₹{hotelInfo.extraPersonRate} · {hotelInfo.taxNote}
            </span>
          </div>
        </div>

        {/* 2x2 Grid with 15px rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {roomCategories.map((room) => (
            <div
              key={room.id}
              onClick={() => onSelectRoom(room)}
              className="group flex flex-col bg-white rounded-[15px] overflow-hidden border border-[#E3DCce] shadow-xs hover:shadow-md hover:border-moss-600 transition-all duration-300 cursor-pointer"
            >
              {/* Image Frame with 15px top radius */}
              <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-100 shrink-0">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Price Tag with 10px radius */}
                <div className="absolute bottom-3 left-3 z-10">
                  <div className="bg-black/75 backdrop-blur-xs border border-white/20 px-3.5 py-1.5 rounded-[10px] text-white text-xs font-bold shadow-xs">
                    ₹{room.price.toLocaleString('en-IN')}{' '}
                    <span className="text-[10px] text-neutral-300 font-normal">/ night</span>
                  </div>
                </div>

                {/* Climate Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-[8px] shadow-2xs border ${
                    room.climateType === 'ac' 
                      ? 'bg-moss-700/90 text-white border-moss-600' 
                      : 'bg-amber-100/95 text-amber-900 border-amber-300'
                  }`}>
                    {room.climate}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="text-xl font-bold font-editorial tracking-tight text-neutral-900 group-hover:text-moss-700 transition-colors mb-2">
                    {room.name}
                  </h3>

                  {/* Specs Bar with 10px radius */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-700 font-semibold mb-3 py-2 px-3 bg-[#FAF7F2] rounded-[10px] border border-[#EBE3D5]">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-moss-700" />
                      <span>{room.bed}</span>
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-moss-700" />
                      <span>{room.capacity}</span>
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-moss-700" />
                      <span>{room.size}</span>
                    </span>
                  </div>

                  {/* Short Narrative */}
                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed line-clamp-2 mb-3">
                    {room.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-1.5 mb-2">
                    {room.features.slice(0, 2).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-normal text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-moss-700 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold block">
                      Direct Tariff
                    </span>
                    <span className="text-xl font-bold font-editorial text-moss-800">
                      ₹{room.price.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-neutral-500">/ night</span>
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectRoom(room);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-moss-700 hover:bg-moss-800 text-white text-xs font-bold uppercase tracking-wider rounded-[15px] transition-all shadow-xs cursor-pointer active:scale-98"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
