import React from 'react';
import { Moon, Sparkles } from 'lucide-react';

export default function TwilightSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#EAE4D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-brass-600 font-bold inline-flex items-center gap-1.5">
            <Moon className="w-3.5 h-3.5" />
            Atmospheric Sanctuary
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-neutral-900 tracking-tight">
            Where Evenings Linger in Warm Brass & Lanterns
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-medium">
            Quiet verandas, gentle breezes from the Vembanad waters, and soft ambient twilight in Kochi.
          </p>
        </div>

        {/* Framed Atmospheric Twilight Card */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[560px] w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#E0D8CB] bg-neutral-900 group">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=85"
            alt="Ashoka Imperial Hotel illuminated twilight grounds and courtyard"
            className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Warm Twilight Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>

          {/* Top Pill Tag */}
          <div className="absolute top-6 left-6 z-10">
            <div className="bg-[#152917]/85 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-white text-xs font-semibold tracking-wider uppercase shadow-lg flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-brass-400" />
              <span>Twilight Over the Palms</span>
            </div>
          </div>

          {/* Bottom Captions */}
          <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-20 text-white">
            <div className="max-w-xl space-y-2 drop-shadow-md">
              <span className="text-[11px] uppercase tracking-[0.25em] text-brass-400 font-bold block">
                The Cochin Dusk
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-editorial leading-snug">
                Quiet walkways and illuminated palm groves as evening falls.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-200 font-light max-w-md">
                Experience the calm of Cochin after hours — sipping hot Nilgiri tea or freshly brewed filter coffee on the open-air veranda.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
