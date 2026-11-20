import React from 'react';
import { Utensils, Clock, Check, Coffee } from 'lucide-react';

export default function DiningSection({ onOpenBooking }) {
  const diningHighlights = [
    "Traditional South Indian breakfast, hot Kerala meals & Malabar specialties",
    "Beverage and refreshment counter available on-site",
    "Spacious air-conditioned dining seating and clean table service",
    "Prompt in-room dining and room delivery service"
  ];

  return (
    <section id="dining" className="py-16 lg:py-20 bg-white border-b border-[#EAE4D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative, Inclusions & Service Hours */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-wider text-moss-700 font-bold block">
              In-House Dining & Bar
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-editorial text-neutral-900 leading-[1.2]">
              Restaurant & Refreshment Facilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
              Enjoy freshly prepared authentic Kerala meals, breakfast dishes, quick bites, and drinks right on the property without having to travel elsewhere.
            </p>

            {/* Inclusions List */}
            <div className="space-y-2 pt-1">
              {diningHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800">
                  <Check className="w-4 h-4 text-moss-700 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Hours Strip with 12px radius */}
            <div className="p-3.5 rounded-[12px] bg-[#FAF8F5] border border-[#EBE3D5] grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="font-bold text-neutral-900 block text-xs">Breakfast</span>
                <span className="text-[11px] text-neutral-500">7:00 AM – 10:30 AM</span>
              </div>
              <div className="border-x border-neutral-200">
                <span className="font-bold text-neutral-900 block text-xs">Lunch & Dinner</span>
                <span className="text-[11px] text-neutral-500">12:30 PM – 11:00 PM</span>
              </div>
              <div>
                <span className="font-bold text-neutral-900 block text-xs">Room Service</span>
                <span className="text-[11px] text-neutral-500">24/7 Available</span>
              </div>
            </div>

            {/* Table Reservation Button with 15px radius */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('dining-reservation')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-moss-700 hover:bg-moss-800 text-white text-xs font-bold uppercase tracking-wider rounded-[15px] transition-all shadow-xs cursor-pointer active:scale-98"
              >
                <Utensils className="w-4 h-4" />
                <span>Reserve Table / Inquiry</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase using Real Photos */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3.5">
            <div className="relative h-64 sm:h-80 rounded-[15px] overflow-hidden shadow-sm border border-[#E0D8CB] group">
              <img
                src="/images/gino/gino_04_1eCHsywG.jpg"
                alt="Gino Tourist Home Restaurant & Cafe Interior"
                className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-[8px] border border-white/20">
                Restaurant Seating
              </span>
            </div>

            <div className="relative h-64 sm:h-80 rounded-[15px] overflow-hidden shadow-sm border border-[#E0D8CB] group">
              <img
                src="/images/gino/gino_06_1MMa731c.jpg"
                alt="Gino Tourist Home Dining and Lounge Hall"
                className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <span className="absolute bottom-3 left-3 bg-black/65 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-[8px] border border-white/20">
                Dining Hall & Bar
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
