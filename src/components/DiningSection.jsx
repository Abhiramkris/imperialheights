import React from 'react';
import { CheckCircle2, Utensils, Clock, Sparkles } from 'lucide-react';

export default function DiningSection({ onOpenBooking }) {
  const diningHighlights = [
    "Traditional Kerala culinary specials & fresh coastal seafood",
    "Lavish morning breakfast buffet with freshly brewed filter coffee",
    "Spacious air-conditioned indoor family dining hall & courtyard seating",
    "24-hour in-room dining delivered warm to your suite"
  ];

  return (
    <section id="dining" className="py-24 lg:py-32 bg-[#FAF7F2] border-b border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative, Inclusions & Service Hours */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold block">
              Culinary Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900 leading-[1.15]">
              The Imperial Spice <br />
              <span className="italic font-bold text-moss-700">Restaurant & Dining</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              Authentic Kerala seafood feasts, Malabar biryanis, and multi-cuisine favorites prepared with handpicked spices and fresh catch from the Cochin harbour.
            </p>

            {/* Inclusions List */}
            <div className="space-y-3 pt-1">
              {diningHighlights.map((hl, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-moss-700 shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Hours Strip */}
            <div className="pt-4 flex items-center gap-6 text-xs text-neutral-600 border-t border-[#E0D8CB]">
              <div>
                <span className="font-bold text-neutral-900 block text-sm">Breakfast</span>
                <span>7:00 AM – 10:30 AM</span>
              </div>
              <div className="h-8 w-px bg-[#D5CEC2]"></div>
              <div>
                <span className="font-bold text-neutral-900 block text-sm">Lunch & Dinner</span>
                <span>12:30 PM – 11:00 PM</span>
              </div>
              <div className="h-8 w-px bg-[#D5CEC2]"></div>
              <div>
                <span className="font-bold text-neutral-900 block text-sm">Room Service</span>
                <span>24 Hours Available</span>
              </div>
            </div>

            {/* Table Reservation Button */}
            <div className="pt-4">
              <button
                onClick={() => onOpenBooking('dining-reservation')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-moss-700 hover:bg-moss-800 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer active:scale-95"
              >
                <Utensils className="w-4 h-4 text-brass-400" />
                <span>Reserve Table / Dining</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase (2 Photos) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E0D8CB] group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
                alt="The Imperial Spice Restaurant Dining Hall"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20">
                Main Dining Hall
              </span>
            </div>

            <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg border border-[#E0D8CB] group">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80"
                alt="Fine Table Service at Ashoka Imperial"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <span className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20">
                Fine Table Service
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
