import React from 'react';
import { ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="hero" className="relative pt-24 sm:pt-28 pb-8 px-3 sm:px-6">
      {/* Framed Large Scenic Hero Card matching the reference image layout */}
      <div className="max-w-7xl mx-auto relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center shadow-2xl border border-[#E0D8CB] bg-neutral-900">
        {/* Background Image: Sunny heritage Kerala architecture with lush tropical palms and warm daylight */}
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Ashoka Imperial Hotel Kerala heritage architecture and sunlit grounds"
          className="absolute inset-0 w-full h-full object-cover object-center brightness-90 filter"
        />

        {/* Ambient Gradient Overlays for readable typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 py-16 text-white w-full">
          <div className="space-y-6 max-w-2xl">
            {/* Heritage Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold tracking-wider uppercase shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-brass-400" />
              <span>Heritage Hospitality in Kochi · Est. {hotelInfo.established}</span>
            </div>

            {/* Headline in Vintage Editorial Serif */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-editorial tracking-tight leading-[1.08] drop-shadow-xl text-white">
              Stay Where Old-World Charm <br className="hidden sm:inline" />
              <span className="italic font-bold text-brass-400">Meets Imperial Serenity.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-neutral-100 font-medium leading-relaxed max-w-xl drop-shadow-md">
              A tranquil sanctuary in the vibrant heart of Kochi. Direct desk rates, authentic Malabar dining, shaded verandas, and heartfelt Kerala care.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#rooms"
                className="px-8 py-3.5 bg-moss-700 hover:bg-moss-800 text-white text-xs uppercase tracking-widest font-bold rounded-full shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Explore Suites & Rates</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#welcome"
                className="px-7 py-3.5 bg-white/20 hover:bg-white/30 border border-white/40 text-white text-xs uppercase tracking-widest font-bold rounded-full backdrop-blur-md transition-all duration-300 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-brass-400" />
                <span>Our Heritage Story</span>
              </a>
            </div>

            {/* Micro Feature Chips */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-200 font-medium">
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Direct Desk Rates
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                24/7 Concierge & Check-in
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                The Imperial Spice Dining
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
