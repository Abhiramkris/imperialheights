import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function CtaBanner({ onOpenBooking }) {
  return (
    <section className="relative py-28 lg:py-36 bg-[#162D19] text-white overflow-hidden flex items-center justify-center">
      {/* Background Ambience */}
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
        alt="Ashoka Imperial evening facade"
        className="absolute inset-0 w-full h-full object-cover brightness-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#162D19] via-black/50 to-[#162D19]/80"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <span className="inline-block text-xs uppercase tracking-[0.3em] text-brass-400 font-bold">
          Reserve Your Escape
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-editorial tracking-tight text-white leading-tight">
          Your Ashoka Imperial Stay <br />
          <span className="italic font-bold text-brass-400">Starts Here.</span>
        </h2>

        <p className="text-base sm:text-xl text-neutral-200 font-medium max-w-xl mx-auto leading-relaxed">
          Tranquil heritage suites, authentic Malabar dining, and unhurried Kerala hospitality await in the heart of Kochi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto px-8 py-4 bg-moss-700 hover:bg-moss-600 text-white text-xs uppercase tracking-widest font-bold rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <Calendar className="w-4 h-4 text-brass-400" />
            <span>Book Your Stay</span>
          </button>

          <a
            href="#rooms"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs uppercase tracking-widest font-semibold rounded-full backdrop-blur-md transition flex items-center justify-center gap-2"
          >
            <span>Explore Rooms & Rates</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
