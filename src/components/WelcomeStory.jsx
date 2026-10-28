import React from 'react';
import { ArrowRight, Compass, ShieldCheck, TreePine, Sparkles } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export default function WelcomeStory({ onOpenBooking }) {
  return (
    <section id="welcome" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Framed photo with offset badges matching the reference image */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Top-Left Offset Badge (Green Circle with Icon) */}
              <div className="absolute -top-6 -left-4 sm:-top-8 sm:-left-6 z-20">
                <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-moss-700 text-white flex flex-col items-center justify-center shadow-xl border-4 border-[#FAF7F2] transition-transform hover:scale-105">
                  <TreePine className="w-5 h-5 sm:w-6 sm:h-6 text-sage" />
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-0.5 text-center px-1">
                    Heritage
                  </span>
                </div>
              </div>

              {/* Main Framed Heritage Photograph */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 aspect-4/3 group">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                  alt="Ashoka Imperial Hotel central courtyard and Kerala heritage architecture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Bottom-Right Offset Seal Emblem (Terracotta & Gold) */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 z-20">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D07641] text-white flex flex-col items-center justify-center shadow-xl border-4 border-[#FAF7F2] transition-transform hover:scale-105">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-center px-1">
                    Est. 1984
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content matching reference image layout */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold block">
                A Storied Address in Cochin
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900 tracking-tight leading-tight">
                Welcome to <br />
                <span className="italic font-bold text-moss-700">{hotelInfo.name}</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              Where the timeless maritime charm of Kochi meets the unhurried warmth of Kerala hospitality. For over four decades, Ashoka Imperial has stood as a peaceful haven for travelers, families, and professionals seeking authentic comfort.
            </p>

            <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Step away from the city bustle into our shaded teak verandas, fragrant courtyard gardens, and tranquil suites. Located just minutes from Ernakulam South Railway Station, Marine Drive, and the historic ferry routes to Fort Kochi, we offer honest direct desk rates, 24/7 personalized care, and legendary Kerala culinary traditions.
            </p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-[#E4DECf] shadow-xs">
                <span className="block font-editorial text-2xl font-bold text-moss-700">40+ Yrs</span>
                <span className="text-xs text-neutral-600 font-medium mt-0.5 block">Of Heartfelt Kerala Care</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#E4DECf] shadow-xs">
                <span className="block font-editorial text-2xl font-bold text-moss-700">100%</span>
                <span className="text-xs text-neutral-600 font-medium mt-0.5 block">Direct Transparent Pricing</span>
              </div>
            </div>

            {/* Action Buttons matching the reference button style */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#rooms"
                className="px-8 py-4 bg-moss-700 hover:bg-moss-800 text-white text-xs uppercase tracking-widest font-bold rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Compass className="w-4 h-4 text-sage" />
                <span>Explore Our Suites</span>
              </a>

              <a
                href="#gallery"
                className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-neutral-700 hover:text-moss-700 transition flex items-center gap-1.5"
              >
                <span>View Photo Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
